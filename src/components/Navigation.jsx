import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Navigation.css";
import {
  NavigationContext,
  ShoppingCartContext,
} from "../contexts/HomePageContext";

export default function Navigation() {
  const { showClothingPage, showCart, isCartShowing, displayFavorite } = useContext(NavigationContext);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setSearchInput] = useState(false);

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
    displayFavorite(false);
    setSearchInput(false);
  };

  const displaySearchInput = () => {
    setSearchInput(!showSearch);
  };

  const showUserCart = () => {
    isCartShowing(!showCart);
  };

  const showFavorites = () => {
    showClothingPage(false);
    displayFavorite(true);
  }

  return (
    <>
      <nav>
        <div className="navTools">
          <p onClick={returnHome}>Fashion Xpress</p>
          <div className="navIcons">
            {showSearch && (
              <input
                type="text"
                placeholder="Search.."
                className="searchInput"
              />
            )}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ cursor: "pointer" }}
              onClick={displaySearchInput}
            />
            <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} onClick={showFavorites}/>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ cursor: "pointer" }}
                onClick={showUserCart}
              />
              <p
                style={{
                  margin: "0 10px",
                  fontSize: "14px",
                  fontWeight: "450",
                  cursor: "default",
                }}
              >
                {shoppingCart.length}
              </p>
            </div>
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
