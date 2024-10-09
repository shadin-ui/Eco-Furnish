import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import HomePage from './Components/Home/Homes';
import './App.css';
import Login from './Components/Pages/Login Page/Login';
import Register from './Components/Pages/Register Page/Register';
import Cart from './Components/Pages/Cart Page/Cart';
import Checkout from './Components/Pages/Cart Page/Checkout/Checkout';
import About from './Components/Pages/Aboutus/About';
import ScrollToTop from './Components/Pages/Aboutus/ScrollonTop';
import Categories from './Components/Pages/Categories/Categorie';
import Furniture from './Components/Pages/Categories/Furniture/Furniture';
import Bedroom from './Components/Pages/Categories/Bedroom/Bedroom';
import Decor from './Components/Pages/Categories/Decor/Decor';
import Testimonial from './Components/Pages/Testimonials/Testimonial';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });
  
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Categories />} />
        <Route path="/furniture" element={<Furniture addToCart={addToCart} />} />
        <Route path="/bedroom" element={<Bedroom addToCart={addToCart} />} />
        <Route path="/decor" element={<Decor addToCart={addToCart} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={isLoggedIn ? <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> : <h2>Please log in to view your cart</h2>} />
        <Route path="/checkout" element={isLoggedIn ? <Checkout cartItems={cartItems} clearCart={clearCart} /> : <h2>Please log in to proceed to checkout</h2>} />
        <Route path='/testimonial' element={<Testimonial />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;