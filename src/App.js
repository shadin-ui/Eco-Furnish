import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import HomePage from './Components/Home/Homes';
import './App.css';
import Login from './Components/Pages/Login Page/Login';
import Register from './Components/Pages/Register Page/Register';
import Cart from './Components/Pages/Cart Page/Cart';
import About from './Components/Pages/Aboutus/About';
import ScrollToTop from './Components/Pages/Aboutus/ScrollonTop';
import Categories from './Components/Pages/Categories/Categorie';
import Furniture from './Components/Pages/Categories/Furniture/Furniture';
import Bedroom from './Components/Pages/Categories/Bedroom/Bedroom';
import Decor from './Components/Pages/Categories/Decor/Decor';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Categories />} /> {/* Categories page */}
        <Route path="/furniture" element={<Furniture addToCart={addToCart} />} /> {/* Furniture page */}
        <Route path="/bedroom" element={<Bedroom addToCart={addToCart} />} /> {/* Bedroom page */}
        <Route path="/decor" element={<Decor addToCart={addToCart} />} /> {/* Decor page */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/cart" element={isLoggedIn ? <Cart cartItems={cartItems} /> : <h2>Please log in to view your cart</h2>} />
        
      </Routes>
      
    </Router>
    
  );
}

export default App;
