import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
    <nav>
      <div className='navTools'>     
        <p>Site Name</p>
        <div className='navIcons'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className='navCategories'>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Womens</button>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Mens</button>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Accessories</button>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Sale</button>
      </div>
      {showDropdown && (
        <div className='navCatMenu'>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>All Womens Items</li>
            <li>Womens Tops</li>
            <li>Womens Pants</li>
            <li>Womens Accessories</li>
          </ul>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>All Mens Items</li>
            <li>Mens Tops</li>
            <li>Mens Pants</li>
            <li>Mens Accessories</li>
          </ul>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>All Accessories</li>
            <li>Bracelets</li>
            <li>Necklaces</li>
            <li>Rings</li>
          </ul>
          <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li>All Sale Items</li>
            <li>Sale Tops</li>
            <li>Sale Pants</li>
            <li>Sale Accessories</li>
          </ul>
        </div>
      )} 
    </nav>
    </>
  )
}
