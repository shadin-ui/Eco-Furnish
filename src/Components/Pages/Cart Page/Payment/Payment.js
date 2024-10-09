import React, { useState } from 'react';
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faCreditCard, faTag } from '@fortawesome/free-solid-svg-icons';

const Payment = ({ cartItems, clearCart }) => {
  const [customerDetails, setCustomerDetails] = useState({ name: '', email: '', confirmEmail: '' });
  const [shippingDetails, setShippingDetails] = useState({ address: '', city: '', zip: '' });
  const [billingDetails, setBillingDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [promoCode, setPromoCode] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const validateEmail = (email, confirmEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email) && email === confirmEmail;
  };

  const validateCardNumber = (cardNumber) => {
    // Basic validation for card number (length and digits)
    const cardNumberRegex = /^\d{16}$/; // Adjust the regex based on the expected card format
    return cardNumberRegex.test(cardNumber);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!validateEmail(customerDetails.email, customerDetails.confirmEmail)) {
      alert('Please enter a valid email address, and ensure both email fields match!');
      return;
    }

    if (!validateCardNumber(billingDetails.cardNumber)) {
      alert('Please enter a valid card number (16 digits).');
      return;
    }

    // Assuming other validations (expiry date, CVV) are handled as needed
    setIsPaymentSuccessful(true);
    clearCart();
    alert('Payment successful!');
  };

  return (
    <div className="payment-wrapper">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart to checkout!</p>
      ) : (
        <>
          <div className="order-details">
            <h3>Your Order:</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.type} className="item-image" />
                <div className="details-container">
                  <h4>{item.type}</h4>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
          <form className="payment-input-form" onSubmit={handlePayment}>
            <h3>
              <FontAwesomeIcon icon={faUser} /> Customer Information
            </h3>
            <input
              type="text"
              placeholder="Name"
              value={customerDetails.name}
              onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={customerDetails.email}
              onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Confirm Email"
              value={customerDetails.confirmEmail}
              onChange={(e) => setCustomerDetails({ ...customerDetails, confirmEmail: e.target.value })}
              required
            />
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Shipping Information
            </h3>
            <input
              type="text"
              placeholder="Address"
              value={shippingDetails.address}
              onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="City"
              value={shippingDetails.city}
              onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={shippingDetails.zip}
              onChange={(e) => setShippingDetails({ ...shippingDetails, zip: e.target.value })}
              required
            />
            <h3>
              <FontAwesomeIcon icon={faCreditCard} /> Billing Information
            </h3>
            <input
              type="text"
              placeholder="Card Number"
              value={billingDetails.cardNumber}
              onChange={(e) => setBillingDetails({ ...billingDetails, cardNumber: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={billingDetails.expiry}
              onChange={(e) => setBillingDetails({ ...billingDetails, expiry: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={billingDetails.cvv}
              onChange={(e) => setBillingDetails({ ...billingDetails, cvv: e.target.value })}
              required
            />
            <h3>
              <FontAwesomeIcon icon={faTag} /> Promotional Codes / Discounts
            </h3>
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="submit" className="submit-button">Pay Now</button>
          </form>
          {isPaymentSuccessful && <p className="success-message">Your payment has been processed successfully!</p>}
        </>
      )}
    </div>
  );
};

export default Payment;
