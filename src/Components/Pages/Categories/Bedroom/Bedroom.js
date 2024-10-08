import React, { useState } from 'react';
import productsData from '../../../Api/db.json';
import './Bedroom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Bedroom({ addToCart }) {
  const [wishlist, setWishlist] = useState([]);
  const bedroomProducts = productsData.products.filter(product => product.category === 'Bedroom');

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <div className="bedroom-section">
      <h2 className="bedroom-title">Bedroom Collection</h2>
      <div className="bedroom-grid">
        {bedroomProducts.length === 0 ? (
          <p className="no-products">No products available in this category.</p>
        ) : (
          bedroomProducts.map(product => (
            <div key={product.id} className="bedroom-card">
              <img src={product.image} alt={product.name} className="bedroom-image" />
              <h3 className="bedroom-name">{product.type}</h3>
              <p className="bedroom-price">₹{product.price} <span className="offer-price"></span></p>
              <p className="bedroom-rating">{product.rating}</p>
              <div className="product-actions">
                <button onClick={() => addToCart(product)} className="bedroom-add-to-cart">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  Add to Cart
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`wishlist-button ${wishlist.some((item) => item.id === product.id) ? 'active' : ''}`}
                >
                  <FontAwesomeIcon className='heart-icon-wish' icon={faHeart} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Bedroom;
