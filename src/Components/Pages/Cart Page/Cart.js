import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
// Font Awesome icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart yet!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.type}</h3>
                <p>₹{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                <FontAwesomeIcon icon={faTrashAlt} /> Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Amount: ₹{totalAmount}</h3>
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
