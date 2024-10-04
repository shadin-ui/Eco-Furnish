import React from 'react';
import './Offer.css';
import Discount from '../../Images/Discount tag.png'
const Offer = () => {
  return (
    <div  className="offer-container">
      <img src={Discount} alt='dicount'></img>
    </div>
  );
};

export default Offer;
