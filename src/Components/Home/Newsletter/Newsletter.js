import React, { useState } from "react";
import "./Newsletter.css";
import Image from '../../Images/Background (5).jpg';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    // Simple regex to check if the email is valid (contains '@' and a domain)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevents the default form submission
    if (validateEmail(email)) {
      alert(`Subscribed with email: ${email}`); // Replace this with your subscription logic
      setEmail(''); // Clear the input field after subscription
    } else {
      alert('Please enter a valid email address (e.g., example@example.com).');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="text-section">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Subscribe to our email newsletter today to receive updates on the latest news.
          </p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="image-section">
          <img
            src={Image}
            alt="Newsletter Promo"
          />
          <div className="price-tag">
            <span>29.$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
