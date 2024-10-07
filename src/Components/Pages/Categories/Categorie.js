import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
  return (
    <div className="categories-section">
      <h2 className="categories-title">Shop by Category</h2>
      <div className="categories-buttons">
        <Link to="/furniture" className="category-button">
          Furniture
        </Link>
        <Link to="/bedroom" className="category-button">
          Bedroom
        </Link>
        {/* <Link to="/decor" className="category-button">
          Decor
        </Link> */}
      </div>
    </div>
  );
}

export default Categories;
