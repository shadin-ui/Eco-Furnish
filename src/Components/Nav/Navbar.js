import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="EcoFurnish Logo" className="logo-image" />

        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <ul className="auth-links">
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;