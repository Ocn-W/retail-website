import React from "react";
import "../css/ClothingPage.css";
import ItemCard from "./ItemCard";

export default function ClothingPage() {
  const items = Array.from({ length: 9 });

  return (
    <>
      <div className="clothingPage">
        <div className="sideBar">
          <ul>
            <li>ALL ITEMS</li>
            <li>TOPS</li>
            <li>PANTS</li>
            <li>ACCESSORIES</li>
          </ul>
          <p>FILTER</p>
        </div>
        <div className="itemList">
          <div className="items">
            {items.map((item, index) => (
              <p>
                <ItemCard key={index} />
              </p>
            ))}
          </div>
          <div className="itemListBtns">
            <button>⬅ Previous</button>
            <button>Next ➡</button>
          </div>
        </div>
      </div>
    </>
  );
}
