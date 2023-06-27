import React, { useEffect, useState } from "react";
import "../css/ClothingPage.css";
import ItemCard from "./ItemCard";

export default function ClothingPage() {
const [itemList, addToList] = useState([]);
    
useEffect(() => {
 function generateItem() {
    let topItem = {
      name: "",
      price: "",
      rating: "",
      id: "",
    };

    const topNameOptions = [
      "Regular Shirt",
      "Long Sleeve",
      "Sweater",
      "Jacket",
    ];
    const ratingOptions = ["★✩✩✩✩", "★★✩✩✩", "★★★✩✩", "★★★★✩", "★★★★★"];
    const minPrice = 30;
    const maxPrice = 120;

    //Generate a random 10 character "id" to identify individual items
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const idLength = 10;
    const itemId = Array.from(
      { length: idLength },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");

    //Generate Random values for each Top clothing piece
    topItem.name =
      topNameOptions[Math.floor(Math.random() * topNameOptions.length)];
    topItem.price =
      Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    topItem.rating =
      ratingOptions[Math.floor(Math.random() * ratingOptions.length)];

    return (topItem = {
      name: topItem.name,
      price: topItem.price,
      rating: topItem.rating,
      id: itemId,
    });
  };

   addToList(Array.from({ length: 9 }, generateItem));
}, [addToList]);

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
            {itemList.map((item, index) => 
            <ItemCard 
            name={item.name} 
            price={item.price} 
            rating={item.rating}
            id={item.id} 
            key={index}
            />)}
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
