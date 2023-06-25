import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../css/HomePage.css";
import { NavigationContext } from "../contexts/HomePageContext";

export default function Navigation() {
  const { showClothingPage } = useContext(NavigationContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const displayClothing = () => {
    showClothingPage(true);
  };

  const returnHome = () => {
    showClothingPage(false);
  };

  return (
    <>
      <nav>
        <div className="navTools">
          <p onClick={returnHome}>Fashion Xpress</p>
          <div className="navIcons">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
        <div className="navCategories">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Womens
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Mens
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Accessories
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sale
          </button>
        </div>
        {showDropdown && (
          <div className="navCatMenu">
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li onClick={displayClothing}>All Womens Items</li>
              <li onClick={displayClothing}>Womens Tops</li>
              <li onClick={displayClothing}>Womens Pants</li>
              <li onClick={displayClothing}>Womens Accessories</li>
            </ul>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li onClick={displayClothing}>All Mens Items</li>
              <li onClick={displayClothing}>Mens Tops</li>
              <li onClick={displayClothing}>Mens Pants</li>
              <li onClick={displayClothing}>Mens Accessories</li>
            </ul>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li onClick={displayClothing}>All Accessories</li>
              <li onClick={displayClothing}>Bracelets</li>
              <li onClick={displayClothing}>Necklaces</li>
              <li onClick={displayClothing}>Rings</li>
            </ul>
            <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <li onClick={displayClothing}>All Sale Items</li>
              <li onClick={displayClothing}>Sale Tops</li>
              <li onClick={displayClothing}>Sale Pants</li>
              <li onClick={displayClothing}>Sale Accessories</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
