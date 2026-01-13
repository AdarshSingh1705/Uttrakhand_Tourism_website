import React from 'react';
import { contactService } from '../../services/contactService';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      await contactService.send(data);
      alert('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="inputBox">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="inputBox">
        <input type="number" name="phone" placeholder="Phone" required />
        <input type="text" name="subject" placeholder="Subject" required />
      </div>
      <textarea name="message" placeholder="Message" rows="10" cols="30" required></textarea>
      <input type="submit" className="btn" value="Send Message" />
    </form>
  );
};

export default ContactForm;
