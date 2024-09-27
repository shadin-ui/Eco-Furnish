import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully');
  };
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if the page is scrolled down by at least 100vh
      if (scrollTop > window.innerHeight) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          setHidden(true); // Hide the navbar
        } else {
          // Scrolling up
          setHidden(false); // Show the navbar
        }
      } else {
        setHidden(false); // Show the navbar when above 100vh
      }

      setLastScrollTop(scrollTop); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Dependencies include lastScrollTop


  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
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
