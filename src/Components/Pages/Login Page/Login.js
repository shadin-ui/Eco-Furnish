import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBg from './LoginAssets/LoginBg.png';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/userslist');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        alert('Login successful!');
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); 
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="loginpage-section" style={{ backgroundImage: `url(${LoginBg})` }}>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
