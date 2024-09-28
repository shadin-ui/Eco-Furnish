import React, { useState, useEffect } from 'react';
import productsData from '../Api/db.json'
import './Homes.css';
import Background from '../Images/Background.png';

function HomePage({ addToCart }) {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    const bestSellers = productsData.products.filter((Product) => Product.price >= 10);
    setBestSellingProducts(bestSellers);
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
