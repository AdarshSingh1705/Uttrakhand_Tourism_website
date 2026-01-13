import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ paddingTop: '12rem', minHeight: '100vh', maxWidth: '100rem', margin: '0 auto', padding: '12rem 2rem 5rem' }}>
      <h1 className="heading">
        <span>F</span><span>A</span><span>Q</span>
      </h1>
      <br /><br />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ background: '#f9f9f9', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)' }}>
            <div onClick={() => toggleFAQ(index)} style={{ padding: '2rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openIndex === index ? 'var(--orange)' : '#f9f9f9', color: openIndex === index ? '#fff' : '#333', transition: 'all 0.3s' }}>
              <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{faq.question}</h3>
              <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`} style={{ fontSize: '2rem' }}></i>
            </div>
            {openIndex === index && (
              <div style={{ padding: '2rem', fontSize: '1.6rem', color: '#666', lineHeight: '1.8', borderTop: '1px solid #ddd' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const faqs = [
  { question: 'What is the best time to visit Uttarakhand?', answer: 'The best time to visit Uttarakhand is from March to June and September to November. Summer months (March-June) are ideal for hill stations, while autumn (Sept-Nov) offers clear views and pleasant weather. Winter (Dec-Feb) is perfect for snow lovers and skiing in Auli.' },
  { question: 'How do I reach Uttarakhand?', answer: 'Uttarakhand is well-connected by air, rail, and road. Jolly Grant Airport in Dehradun is the main airport. Major railway stations include Dehradun, Haridwar, and Kathgodam. Regular bus services operate from Delhi, Chandigarh, and other nearby cities.' },
  { question: 'Is it safe to travel to Uttarakhand?', answer: 'Yes, Uttarakhand is generally safe for tourists. However, always check weather conditions before traveling to hill stations, especially during monsoon. Follow local guidelines, hire registered guides for treks, and avoid traveling at night on mountain roads.' },
  { question: 'What are the must-visit destinations in Uttarakhand?', answer: 'Must-visit destinations include Nainital, Mussoorie, Rishikesh, Haridwar, Jim Corbett National Park, Kedarnath, Badrinath, Auli, and Valley of Flowers. Each offers unique experiences from spiritual retreats to adventure sports.' },
  { question: 'Do I need permits for trekking in Uttarakhand?', answer: 'Yes, permits are required for certain treks and protected areas like Valley of Flowers, Nanda Devi National Park, and some high-altitude treks. You can obtain permits from forest department offices or through registered tour operators.' },
  { question: 'What should I pack for a trip to Uttarakhand?', answer: 'Pack warm clothes (even in summer for higher altitudes), comfortable trekking shoes, sunscreen, sunglasses, first-aid kit, water bottle, and necessary medications. Carry rain gear during monsoon and heavy woolens in winter.' },
  { question: 'Are there ATMs and internet connectivity in hill stations?', answer: 'Major towns and popular tourist destinations have ATMs and internet connectivity. However, remote areas and high-altitude regions may have limited or no connectivity. Carry sufficient cash and inform family about limited communication.' },
  { question: 'What is the local cuisine of Uttarakhand?', answer: 'Uttarakhand cuisine includes dishes like Aloo ke Gutke, Kafuli, Bhatt ki Churkani, Chainsoo, Bal Mithai, and Singodi. Most restaurants also serve North Indian, Chinese, and Continental food.' },
  { question: 'Can I visit Char Dham temples throughout the year?', answer: 'No, Char Dham temples (Kedarnath, Badrinath, Gangotri, Yamunotri) are open only from April/May to October/November. They close during winter due to heavy snowfall and extreme weather conditions.' },
  { question: 'What adventure activities are available in Uttarakhand?', answer: 'Uttarakhand offers river rafting in Rishikesh, skiing in Auli, paragliding in Nainital and Mussoorie, trekking in various regions, wildlife safaris in Jim Corbett, bungee jumping, zip-lining, and camping.' }
];

export default FAQ;
