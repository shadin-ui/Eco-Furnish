import React, { useState } from 'react'; 
import productsData from '../../../Api/db.json';
import './Furniture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Furniture({ addToCart }) {
  const [wishlist, setWishlist] = useState([]);

  const furnitureProducts = productsData.products.filter(product => product.category === 'Furniture');

  const toggleWishlist = (product) => { // Use 'product' instead of 'Product'
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <div className="furniture-section">
      <h2 className="furniture-title">Furniture Collection</h2>
      <div className="product-grid">
        {furnitureProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.type}</h3>
            <p className="product-price">₹{product.price} <span className="offer-price"></span></p>
            <p className="product-rating">{product.rating}</p>
            <div className="product-actions">
              <button onClick={() => addToCart(product)} className="add-to-cart-button">
                <FontAwesomeIcon icon={faCartArrowDown} />
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)} // Use 'product' instead of 'Product'
                className={`wishlist-button ${wishlist.some((item) => item.id === product.id) ? 'active' : ''}`}
              >
                <FontAwesomeIcon className='heart-icon-wish' icon={faHeart} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture;
