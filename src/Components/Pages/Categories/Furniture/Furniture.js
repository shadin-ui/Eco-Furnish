import React from 'react';
import productsData from '../../../Api/db.json';
import './Furniture.css';

function Furniture({ addToCart }) {
  const furnitureProducts = productsData.products.filter(product => product.category === 'Furniture');

  return (
    <div className="furniture-section">
      <h2 className="furniture-title">Furniture Collection</h2>
      <div className="furniture-grid">
        {furnitureProducts.map(product => (
          <div key={product.id} className="furniture-card">
            <img src={product.image} alt={product.name} className="furniture-image" />
            <h3 className="furniture-name">{product.type}</h3>
            <p className="furniture-price">₹{product.price}</p>
            <p className="furniture-rating">Rating: {product.stars} ★</p>
            <button onClick={() => addToCart(product)} className="furniture-add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture;
