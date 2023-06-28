import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import ClothingPage from "./components/ClothingPage";
import ShoppingCart from "./components/ShoppingCart";
import {
  NavigationContext,
  ShoppingCartContext,
} from "./contexts/HomePageContext";

function App() {
  const [clothingPage, showClothingPage] = useState(false);
  const [showCart, isCartShowing] = useState(false);
  const [shoppingCart, updateCart] = useState([]);

  return (
    <>
      <NavigationContext.Provider
        value={{ clothingPage, showClothingPage, showCart, isCartShowing }}
      >
        <ShoppingCartContext.Provider value={{ shoppingCart, updateCart }}>
          <Navigation />
          {clothingPage ? <ClothingPage /> : <HomePage />}
          {showCart && <ShoppingCart />}
        </ShoppingCartContext.Provider>
      </NavigationContext.Provider>
    </>
  );
}

export default App;
