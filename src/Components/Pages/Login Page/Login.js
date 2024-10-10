import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBg from './LoginAssets/LoginBg.png';
import './Login.css';
import {Loginfn} from '../../../App'

const Login = ({ setIsLoggedIn }) => {
  const {setIsLogin,setActiveUser} = useContext(Loginfn)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [users, setusers] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/userslist');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password && user.isAdmin == false);
     
      const admin = users.find(user => user.email === email && user.password === password && user.isAdmin == true);
      setusers(user)
      setIsLogin(admin)
      if (user) {
        alert('Login successful!');
        // setIsLoggedIn(true);
        // localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); 
        // navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully');
    navigate('/')
  };
  const activeuser = localStorage.getItem('loggedInUser')
  setActiveUser(activeuser)
  if(!activeuser){
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
    
    )
  }else{
    return(<div>
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <button onClick={handleLogout} className='Logout-btn'>Logout</button>
      <h1>wfegerf</h1>
    </div>)
  }
  
};

export default Login;
