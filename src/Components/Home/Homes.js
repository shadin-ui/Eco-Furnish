import React, { useState, useEffect } from 'react';
import productsData from '../Api/db.json';
import './Homes.css';
import Background from '../Images/Background.png';
import Features from './Feature/Features';
import Offer from './Feature/Offer';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../Pages/Categories/Categorie';
import Footer from '../Footer/Footer';
import FAQ from './FAQ/FAQ';
import Newsletter from './Newsletter/Newsletter';

function HomePage({ addToCart, isLoggedIn }) {
  const navigate = useNavigate();
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const bestSellers = productsData.products.filter((Product) => Product.price >= 10);
    setBestSellingProducts(bestSellers);
  }, []);

  const handleAddToCart = (Product) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    addToCart(Product);
    setAddedProductIds((prevIds) => [...prevIds, Product.id]);
    setNotification(`Product "${Product.type}" added to cart!`);

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <>
      <div>
        <img src={Background} alt="Background" className="homepage-section" />
      </div>

      {notification && <div className="notification">{notification}</div>}

      <Features />
      <Offer />

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
                <button
                  onClick={() => handleAddToCart(Product)}
                  className="add-to-cart-button"
                >
                  {addedProductIds.includes(Product.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-us-button-section">
        <Link to="/about" className="about-us-button">
          About Us
        </Link>
      </div>
      <Categories />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default HomePage;
