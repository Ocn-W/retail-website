import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import ClothingPage from "./components/ClothingPage";
import { NavigationContext } from "./contexts/HomePageContext";

function App() {
  const [clothingPage, showClothingPage] = useState(false);

  return (
    <>
      <NavigationContext.Provider value={{ clothingPage, showClothingPage }}>
        <Navigation />
        {clothingPage ? <ClothingPage /> : <HomePage />}
      </NavigationContext.Provider>
    </>
  );
}

export default App;
