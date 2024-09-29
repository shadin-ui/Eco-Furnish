import React, { useState, useEffect } from 'react';
import productsData from '../Api/db.json';
import './Homes.css';
import Background from '../Images/Background.png';
import Features from './Feature/Features';
import Offer from './Feature/Offer';
import { Link } from 'react-router-dom';

function HomePage({ addToCart }) {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products

  useEffect(() => {
    const bestSellers = productsData.products.filter((Product) => Product.price >= 10);
    setBestSellingProducts(bestSellers);
    setFilteredProducts(bestSellers); // Initialize filtered products with all best sellers
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredProducts(bestSellingProducts); // Show all products when search term is empty
    } else {
      const filtered = bestSellingProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <div>
        <img src={Background} alt="Background" className="homepage-section" />
      </div>

      <Features />
      <Offer />

      <div className="about-us-button-section">
        <Link to="/about" className="about-us-button">
          About Us
        </Link>
      </div>

      <div className="best-selling-section">
        <h2 className="section-title">Trending Products<br />For You!!</h2>
        <div className="product-grid">
          {filteredProducts.map((Product) => (
            <div key={Product.id} className="product-card">
              <img src={Product.image} alt={Product.name} className="product-imag" />
              <h3 className="product-name">{Product.name}</h3>
              <p className="product-price">₹{Product.price}</p>
              <p className="product-rating">Rating: {Product.stars} ★</p>
              <div>
                <button onClick={() => addToCart(Product)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
