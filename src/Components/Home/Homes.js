import React from "react";
import './Homes.css';
import Background from '../Images/Background.png'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        const Products = response.data;
        const bestSellers = Products.filter((Product) => Product.price >= 10);
        setBestSellingProducts(bestSellers);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);
  return (
    <>
      <div>
        <img src={Background} alt="Background" className="homepage-section" />
      </div>
      <div className="best-selling-section">
        <h2 className="section-title">Best Selling Products</h2>
        <div className="product-grid">
          {bestSellingProducts.map((Product) => (
            <div key={Product.id} className="product-card">

              <img
                src={Product.image}
                alt={Product.name}
                className="product-imag"
              />
              <h3 className="product-name">{Product.name}</h3>
              <p className="product-price">₹{Product.price}</p>
              <p className="product-rating">Rating: {Product.stars} ★</p>
              <div>
                <button className="add-to-cart-button">Add to Cart</button>
                {/* <button onClick={handleNavCart} className="navCart-button">
                  View Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
export default HomePage;
