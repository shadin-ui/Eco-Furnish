import React from 'react';
import productsData from '../../../Api/db.json';


function Bedroom({ addToCart }) {
  const bedroomProducts = productsData.products.filter(product => product.category === 'Bedroom');

  return (
    <div className="category-section">
      <h2 className="category-title">Bedroom</h2>
      {bedroomProducts.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div className="product-grid">
          {bedroomProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.type}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-rating">Rating: {product.stars} ★</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">
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
