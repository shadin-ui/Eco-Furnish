import React from "react";
import "./Newsletter.css";
import Image from '../../Images/Background (5).jpg'
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="text-section">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Subscribe to our email newsletter today to receive updates on the latest news.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your Email" />
            <button type="submit">Subscribe</button>
          </div>
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
