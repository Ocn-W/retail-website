import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import ClothingPage from "./components/ClothingPage";
import { NavigationContext, ShoppingCartContext } from "./contexts/HomePageContext";

function App() {
  const [clothingPage, showClothingPage] = useState(false);
  const [shoppingCart, updateCart] = useState([]);

  return (
    <>
      <NavigationContext.Provider value={{ clothingPage, showClothingPage }}>
        <ShoppingCartContext.Provider value={{shoppingCart, updateCart}}>
        <Navigation />
        {clothingPage ? <ClothingPage /> : <HomePage />}
        </ShoppingCartContext.Provider>
      </NavigationContext.Provider>
    </>
  );
}

export default App;
