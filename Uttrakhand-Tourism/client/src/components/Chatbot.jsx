import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your website assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [waveAnimation, setWaveAnimation] = useState(false);

  // Trigger wave animation every few seconds
  useEffect(() => {
    const waveInterval = setInterval(() => {
      if (!isOpen) {
        setWaveAnimation(true);
        setTimeout(() => setWaveAnimation(false), 2000);
      }
    }, 10000);

    return () => clearInterval(waveInterval);
  }, [isOpen]);

  // Chatbot responses database
  const responses = {
    greeting: ["Hello!", "Hi there!", "Hey! How can I help you today?"],
    services: [
      "We offer web development, mobile app development, and digital marketing services.",
      "Our services include website design, development, and ongoing maintenance.",
      "We provide a range of services: consulting, implementation, and support for digital projects."
    ],
    contact: [
      "You can reach us at support@example.com or call us at (555) 123-4567.",
      "Contact our support team via email: help@example.com. We're available Mon-Fri, 9am-5pm.",
      "For immediate assistance, please call our customer service line at (555) 123-4567."
    ],
    pricing: [
      "Our pricing varies based on project requirements. Contact us for a custom quote.",
      "We offer different pricing tiers starting at $99/month for basic plans.",
      "Pricing depends on the scope of your project. Let's discuss your needs for an accurate quote."
    ],
    hours: [
      "We're open Monday to Friday from 9am to 5pm.",
      "Our business hours are 9am-5pm EST, Monday through Friday.",
      "You can reach us during business hours: Mon-Fri, 9am-5pm."
    ],
    default: [
      "I'm not sure I understand. Could you please rephrase your question?",
      "That's an interesting question. Let me connect you with a human agent for more details.",
      "I need more information to answer that. Could you provide more details?"
    ]
  };

  // Key phrases and their corresponding response categories
  const keywords = {
    greeting: ["hello", "hi", "hey", "good morning", "good afternoon"],
    services: ["services", "offer", "provide", "do you have", "what can you do"],
    contact: ["contact", "email", "phone", "call", "support", "help"],
    pricing: ["price", "cost", "how much", "pricing", "fee"],
    hours: ["hours", "open", "time", "when are you available"]
  };

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to generate response
  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for keywords and return appropriate response
    for (const [category, phrases] of Object.entries(keywords)) {
      for (const phrase of phrases) {
        if (message.includes(phrase)) {
          const responsesForCategory = responses[category];
          return responsesForCategory[Math.floor(Math.random() * responsesForCategory.length)];
        }
      }
    }
    
    // If no keyword matches, return a default response
    const defaultResponses = responses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Function to handle user input
  const handleUserInput = (e) => {
    if (e) e.preventDefault(); // Prevent form submission
    
    if (inputValue.trim() === '') return;
    
    // Add user message to chat
    const newUserMessage = { text: inputValue, isUser: true };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsTyping(false);
      const response = generateResponse(inputValue);
      const newBotMessage = { text: response, isUser: false };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);
  };

  // Handle suggestion clicks
  const handleSuggestionClick = (suggestionText) => {
    setInputValue(suggestionText);
    // Focus on input field
    inputRef.current.focus();
  };

  // Suggestions for quick questions
  const suggestions = [
    "What services do you offer?",
    "How can I contact support?",
    "Tell me about pricing",
    "What are your business hours?"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <div 
        className={`floating-chat-button ${isOpen ? 'hidden' : ''} ${waveAnimation ? 'waving' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="chat-avatar">
          <div className="avatar-face">
            <div className="avatar-eye left"></div>
            <div className="avatar-eye right"></div>
            <div className="avatar-mouth"></div>
          </div>
        </div>
        <div className="notification-dot"></div>
      </div>

      {/* Chat Modal */}
      <div className={`chat-modal ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-content">
            <div className="chat-avatar">
              <div className="avatar-face">
                <div className="avatar-eye left"></div>
                <div className="avatar-eye right"></div>
                <div className="avatar-mouth"></div>
              </div>
            </div>
            <div className="chat-info">
              <h3>GlobalFootPrint's Assistant</h3>
              <span className="status">Online</span>
            </div>
          </div>
          <button 
            className="fas fa-times close-button"
            onClick={() => setIsOpen(false)}
          >
            
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
          
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
        
        <form className="chat-input" onSubmit={handleUserInput}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question here..."
            className="input-field"
            ref={inputRef}
          />
          <button 
            type="submit"
            className="send-button"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="send-icon"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
      
      {/* Overlay */}
      <div 
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Chatbot;
