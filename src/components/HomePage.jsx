import React, { useContext } from "react";
import "../css/HomePage.css";
import { NavigationContext } from "../contexts/HomePageContext";

export default function HomePage() {
    const { showClothingPage } = useContext(NavigationContext);

    const displayClothing = () => {
        showClothingPage(true);
      };
    
  return (
    <>
      <div className="banner1">
        <div className="bannerInfo">
          <h2>New Arrivals</h2>
          <button onClick={displayClothing}>Explore Styles</button>
        </div>
      </div>
      <div className="banner2">
        <div className="bannerInfo">
          <h2>Sale Items</h2>
          <button onClick={displayClothing}>Explore Styles</button>
        </div>
      </div>
      <div className="banner3">
        <div className="bannerInfo">
          <h2>Latest Collection</h2>
          <button onClick={displayClothing}>Explore Styles</button>
        </div>
      </div>
      <footer>
        <p>2023 Ocean Waring</p>
      </footer>
    </>
  );
}
