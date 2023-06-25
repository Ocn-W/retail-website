import React from "react";
import "../css/ClothingPage.css";

export default function ItemCard() {
  const topItem = {
    type: "Top",
    name: "",
    price: "",
    rating: "",
  };

  //Generate Random values for each Top clothing piece
  const topNameOptions = ["Regular Shirt", "Long Sleeve", "Sweater", "Jacket"];
  const ratingOptions = ["★✩✩✩✩", "★★✩✩✩", "★★★✩✩", "★★★★✩", "★★★★★"];
  const minPrice = 30;
  const maxPrice = 120;

  topItem.name =
    topNameOptions[Math.floor(Math.random() * topNameOptions.length)];
  topItem.price =
    Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
  topItem.rating =
    ratingOptions[Math.floor(Math.random() * ratingOptions.length)];

  return (
    <>
      <div className="itemCard">
        <img src="src/assets/shirt-img.png" alt="Item" />
        <div className="itemCardInfo">
          <p>{topItem.name}</p>
          <p>${topItem.price}</p>
          <div className="itemCardSizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          <p>
            Reviews:{" "}
            <span style={{ color: "gold", textShadow: "0px 1px 1px black" }}>
              {topItem.rating}
            </span>
          </p>
        </div>
        <button
          style={{
            marginBottom: "20px",
            backgroundColor: "green",
            borderRadius: "25px",
            boxShadow: "0px 1px 2px black",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
