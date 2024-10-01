import React from 'react';
import Payment from '../Payment/Payment';
import './Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
  return (
    <div className="checkout-container">
      {cartItems.length === 0 ? (
        <p>No items in your cart to checkout!</p>
      ) : (
        <Payment cartItems={cartItems} clearCart={clearCart} />
      )}
    </div>
  );
};

export default Checkout;
