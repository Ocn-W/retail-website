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
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [clothingPage, showClothingPage] = useState(false);
  const [showCart, isCartShowing] = useState(false);
  const [favoriteList, displayFavorite] = useState(false);
  const [shoppingCart, updateCart] = useState([]);
  const [userFavorites, updateFavorites] = useState([]);
  

  return (
    <>
      <NavigationContext.Provider
        value={{ clothingPage, showClothingPage, showCart, isCartShowing, favoriteList, displayFavorite}}
      >
        <ShoppingCartContext.Provider 
          value={{ shoppingCart, updateCart, userFavorites, updateFavorites }}
        >
          <Navigation />
          {clothingPage ? <ClothingPage /> : favoriteList ? <FavoritesPage/> : <HomePage />}
          {showCart && <ShoppingCart />}
        </ShoppingCartContext.Provider>
      </NavigationContext.Provider>
    </>
  );
}

export default App;
