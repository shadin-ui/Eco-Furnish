import React from 'react';
import productsData from '../../../Api/db.json';

function Furniture({ addToCart }) {
  const furnitureProducts = productsData.products.filter(product => product.category === 'Furniture');

  return (
    <div className="category-section">
      <h2 className="category-title">Furniture</h2>
      <div className="product-grid">
        {furnitureProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-imag" />
            <h3 className="product-name">{product.type}</h3>
            <p className="product-price">₹{product.price}</p>
            <p className="product-rating">Rating: {product.stars} ★</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture;
