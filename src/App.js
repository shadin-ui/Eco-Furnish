import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import HomePage from './Components/Home/Homes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <HomePage />
      <Navbar />
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Us Page</h2>} />
          <Route path="/products" element={<h2>Products Page</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
          <Route path="/signup" element={<h2>Signup Page</h2>} />
          <Route path="/cart" element={<h2>Cart Page</h2>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
