import React, { useState, useEffect } from 'react';
import productsData from '../Api/db.json'
import './Homes.css';
import Background from '../Images/Background.png';
import Features from './Feature/Features';
import Offer from './Feature/Offer';
import { Link } from 'react-router-dom';
import Categories from '../Pages/Categories/Categorie';
import Footer from '../Footer/Footer';
import FAQ from './FAQ/FAQ';

function HomePage({ addToCart }) {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    const bestSellers = productsData.products.filter((Product) => Product.price >= 500);
    setBestSellingProducts(bestSellers);
  }, []);

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
        <h2 className="section-title">
          Trending Products<br />For You!
        </h2>
        <div className="product-grid">
          {bestSellingProducts.map((Product) => (
            <div key={Product.id} className="product-card">
              <img src={Product.image} alt={Product.name} className="product-imag" />
              <h3 className="product-name">{Product.type}</h3>
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
      <Categories />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;
