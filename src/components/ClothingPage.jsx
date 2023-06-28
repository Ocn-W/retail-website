import React, { useEffect, useState } from "react";
import "../css/ClothingPage.css";
import ItemCard from "./ItemCard";

export default function ClothingPage() {
  const [itemList, addToList] = useState([]);
  const [showPricesOption, setShowPricesOption] = useState(false);
  const [showRatingOption, setShowRatingOption] = useState(false);

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
    }
    //Create an array of 9 items using the generateItem function
    addToList(Array.from({ length: 9 }, generateItem));
  }, [addToList]);

  function togglePriceOption() {
    setShowPricesOption(!showPricesOption);
  }

  function toggleRatingOption() {
    setShowRatingOption(!showRatingOption);
  }

  return (
    <>
      <div className="clothingPage">
        <div className="sideBar">
          <ul className="sideCategories">
            <li>ALL ITEMS</li>
            <li>TOPS</li>
            <li>PANTS</li>
            <li>ACCESSORIES</li>
          </ul>
          <div className="filterBar">
            <p>FILTER</p>
            <ul className="filterOptions">
              <li>
                Price
                <button onClick={() => togglePriceOption()}>
                  {showPricesOption ? "-" : "+"}
                </button>
                {showPricesOption && (
                  <div className="pricesExpand">
                    <p>$30</p>
                    <input type="range" min={30} max={120} step={1} />
                    <p>$120</p>
                  </div>
                )}
              </li>
              <li>
                Rating
                <button onClick={() => toggleRatingOption()}>
                  {showRatingOption ? "-" : "+"}
                </button>
                {showRatingOption && (
                  <div className="ratingExpand">
                    <label>
                      <input type="radio" name="rating" value="one-star" />
                      ★✩✩✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value="two-star" />
                      ★★✩✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value="three-star" />
                      ★★★✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value="four-star" />
                      ★★★★✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value="five-star" />
                      ★★★★★
                    </label>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="itemList">
          <div className="items">
            {itemList.map((item, index) => (
              <ItemCard
                name={item.name}
                price={item.price}
                rating={item.rating}
                id={item.id}
                key={index}
              />
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
