import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I choose the right furniture for my space?',
      answer: 'We offer a wide selection of furniture suitable for various spaces. Use our space planning tools to make the right choice.',
    },
    {
      question: 'What materials are your furniture items made of?',
      answer: 'Our furniture is crafted from sustainable materials including hardwood, bamboo, and eco-friendly composites.',
    },
    {
      question: 'What is your delivery process?',
      answer: 'We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship.',
    },
    {
      question: 'What is your return and exchange policy?',
      answer: 'You can return or exchange items within 30 days of delivery. Items must be in their original condition and packaging.',
    },
    {
      question: 'How can I contact customer support for assistance?',
      answer: 'Our customer support team is available via phone, email, or live chat. You can also visit our Help Center for FAQs and troubleshooting.',
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setClosingIndex(index);
      setTimeout(() => {
        setActiveIndex(null);
        setClosingIndex(null);
      }, 400);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-section">
      <h2>Got Questions? We've Got Answers!</h2>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''} ${closingIndex === index ? 'closing' : ''}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {activeIndex === index ? '✖' : '➔'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
