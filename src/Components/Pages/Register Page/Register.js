import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import RegisterBg from './RegisterAsssets/RegisterBg.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple regex to check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long, contain a capital letter, a number, and a special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address (e.g., example@example.com).');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long, include a capital letter, a number, and a special character.');
      return;
    }

    const userData = { name, email, password };
    try {
      const response = await fetch('http://localhost:5000/userslist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="registerpage-section" style={{ backgroundImage: `url(${RegisterBg})` }}>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
