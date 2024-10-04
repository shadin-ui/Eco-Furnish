import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="icon-container">
          <i className="fas fa-shipping-fast"></i>
        </div>
        <p className="feature-title">Fast & Free Shipping</p>
      </div>
      <div className="feature-item">
        <div className="icon-container">
          <i className="fas fa-shopping-basket"></i>
        </div>
        <p className="feature-title">Easy to Shop</p>
      </div>
      <div className="feature-item">
        <div className="icon-container">
          <i className="fas fa-headset"></i>
        </div>
        <p className="feature-title">24/7 Support</p>
      </div>
      <div className="feature-item">
        <div className="icon-container">
          <i className="fas fa-undo"></i>
        </div>
        <p className="feature-title">Hassle Free Returns</p>
      </div>
    </div>
  );
};

export default Features;
