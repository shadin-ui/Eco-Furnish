import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import HomePage from './Components/Home/Homes';
import './App.css';
import Login from './Components/Pages/Login Page/Login';
import Register from './Components/Pages/Register Page/Register';
import Cart from './Components/Pages/Cart Page/Cart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h2>About Us Page</h2>} />
        <Route path="/products" element={<h2>Products Page</h2>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <h2>Please log in to view your cart</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
