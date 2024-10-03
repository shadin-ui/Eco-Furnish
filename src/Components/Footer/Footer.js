import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Updated icons
import './Footer.css';
import Logo from '../Images/Logos.png';
import { Link } from 'react-router-dom';
import Matercard from '../Images/Mastercard.png'
import Visa from '../Images/Visa.png';
import Alma from '../Images/Alma.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-logo">
        <Link to="/">
          <img src={Logo} alt="EcoFurnish Logo" className="logo-image" />
        </Link>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="/about">Our Company</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/about">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="/about">Delivery Information</a></li>
            <li><a href="/abouy">Privacy Policy</a></li>
            <li><a href="/about">Terms & Conditions</a></li>
            <li><a href="/about">Return</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/about">Contact Us</a></li>
            <li><a href="/about">Help</a></li>
            <li><a href="/about">FAQ</a></li>
            <li><a href="/products">Checkout</a></li>
          </ul>
        </div>
      </div>
        <div className="footer-bottom">
          <p> ©️ 2024 Eco Furnish. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/m_shadin.k?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="payment-methods">
            <img src={Visa} alt="Visa" />
            <img src={Matercard} alt="Mastercard" />
            <img src={Alma} alt='Alma' />
          </div>
        </div>
    </footer>
  );
}

export default Footer;
