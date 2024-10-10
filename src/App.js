import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import HomePage from "./Components/Home/Homes";
import "./App.css";
import Login from "./Components/Pages/Login Page/Login";
import Register from "./Components/Pages/Register Page/Register";
import Cart from "./Components/Pages/Cart Page/Cart";
import Checkout from "./Components/Pages/Cart Page/Checkout/Checkout";
import About from "./Components/Pages/Aboutus/About";
// import ScrollToTop from './Components/Pages/Aboutus/ScrollonTop';
import Categories from "./Components/Pages/Categories/Categorie";
import Furniture from "./Components/Pages/Categories/Furniture/Furniture";
import Bedroom from "./Components/Pages/Categories/Bedroom/Bedroom";
import Testimonial from "./Components/Pages/Testimonials/Testimonial";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import UserManagement from "./Components/Admin/UserManagement";
import Settings from "./Components/Admin/Settings";
import ProductManagement from "./Components/Admin/ProductManagement";
import OrderManagement from "./Components/Admin/OrderManagment";

export const Loginfn = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
  const Navigate = useNavigate();
  const click = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");
    Navigate("/");
  };
  const [islogin, setIsLogin] = useState("");
  const [activeUser, setActiveUser] = useState("")
  const logins = {
    setIsLogin,
    islogin,
    activeUser,
    setActiveUser
  };
  console.log(islogin);
  
  return (
    <Loginfn.Provider value={logins}>
      <div>
        {!islogin ? (
          <div>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage addToCart={addToCart} isLoggedIn={isLoggedIn} />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Categories />} />
              <Route
                path="/furniture"
                element={<Furniture addToCart={addToCart} />}
              />
              <Route
                path="/bedroom"
                element={<Bedroom addToCart={addToCart} />}
              />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/signup" element={<Register />} />
              <Route
                path="/cart"
                element={
                  isLoggedIn ? (
                    <Cart
                      cartItems={cartItems}
                      removeFromCart={removeFromCart}
                    />
                  ) : (
                    <h2>Please log in to view your cart</h2>
                  )
                }
              />
              <Route
                path="/checkout"
                element={
                  isLoggedIn ? (
                    <Checkout cartItems={cartItems} clearCart={clearCart} />
                  ) : (
                    <h2>Please log in to proceed to checkout</h2>
                  )
                }
              />
              <Route path="/testimonial" element={<Testimonial />} />
            </Routes>
          </div>
        ) : (
          <div>
            <div>jhgfjkhjfgkhjkfghigfjhkg</div>
            <button onClick={click}>click</button>
            <Routes>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/orders" element={<OrderManagement />} />
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/products" element={<ProductManagement />} />
              <Route path="/admin/settings" element={<Settings />} />
            </Routes>
          </div>
        )}
      </div>
    </Loginfn.Provider>
  );
}

export default App;
