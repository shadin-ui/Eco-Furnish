import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/Logos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Loginfn } from '../../App';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const {islogin,activeUser}= useContext(Loginfn);
  console.log('islogin', activeUser);
  
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully');
    navigate('/')
  };

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
      <ul className="auth-links">
        {activeUser && (
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
