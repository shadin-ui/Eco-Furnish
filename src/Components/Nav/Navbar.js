import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully');
  };

  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > window.innerHeight) {
        setHidden(scrollTop > lastScrollTop);
      } else {
        setHidden(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div>
        <Link to="/">
          <img src={Logo} alt="EcoFurnish Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/products">Categories</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
      </ul>
      <div className={`search-bar ${searchActive ? 'active' : ''}`}>
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={() => setSearchActive(!searchActive)}
        />
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>
      <ul className="auth-links">
        {isLoggedIn && (
          <li>
            <Link to="/cart" className='cart-icon'>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout} className='Logout-btn'>Logout</button>
          ) : (
            <Link to="/login" className="login-link">
              <span className="login-text">Login</span>
              <FontAwesomeIcon icon={faUserCircle} className="login-icon" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
