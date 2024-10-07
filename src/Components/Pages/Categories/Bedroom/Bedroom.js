import React from 'react';
import productsData from '../../../Api/db.json';
import './Bedroom.css';

function Bedroom({ addToCart }) {
  const bedroomProducts = productsData.products.filter(product => product.category === 'Bedroom');

  return (
    <div className="bedroom-section">
      <h2 className="bedroom-title">Bedroom Collection</h2>
      {bedroomProducts.length === 0 ? (
        <p className="no-products">No products available in this category.</p>
      ) : (
        <div className="bedroom-grid">
          {bedroomProducts.map(product => (
            <div key={product.id} className="bedroom-card">
              <img src={product.image} alt={product.name} className="bedroom-image" />
              <h3 className="bedroom-name">{product.type}</h3>
              <p className="bedroom-price">₹{product.price}</p>
              <p className="bedroom-rating">Rating: {product.stars} ★</p>
              <button onClick={() => addToCart(product)} className="bedroom-add-to-cart">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bedroom;
