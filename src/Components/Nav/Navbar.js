import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully');
  };

  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchActive, setSearchActive] = useState(false); // New state for search bar

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > window.innerHeight) {
        if (scrollTop > lastScrollTop) {
          setHidden(true); // Hide the navbar
        } else {
          setHidden(false); // Show the navbar
        }
      } else {
        setHidden(false); // Show the navbar when above 100vh
      }

      setLastScrollTop(scrollTop); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="EcoFurnish Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <div className={`search-bar ${searchActive ? 'active' : ''}`}>
        <FontAwesomeIcon 
          icon={faSearch} 
          className="search-icon" 
          onClick={() => setSearchActive(!searchActive)} // Toggle search bar visibility
        />
        <input 
          type="text" 
          placeholder="Search products..." 
        />
      </div>
      <ul className="auth-links">
        {isLoggedIn && (
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
