import React, { useEffect, useState } from "react";
import "../css/ClothingPage.css";
import ItemCard from "./ItemCard";

export default function ClothingPage() {
  const [itemList, addToList] = useState([]);
  const [showPricesOption, setShowPricesOption] = useState(false);
  const [showRatingOption, setShowRatingOption] = useState(false);
  const [priceFilter, setPriceFilter] = useState(30);
  const [ratingFilter, setRatingFilter] = useState(null);

  useEffect(() => {
    function generateItem() {
      let topItem = {
        name: "",
        price: "",
        rating: "",
        id: "",
      };

      const topNameOptions = [
        "T-Shirt",
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
    setRatingFilter(null);
    setShowRatingOption(false);
  }

  function toggleRatingOption() {
    setShowRatingOption(!showRatingOption);
    setPriceFilter(null);
    setShowPricesOption(false);
  }

  const filterPrice = (event) => {
    setPriceFilter(parseInt(event.target.value));
  }  
  
  function filterRating(event) {
    setRatingFilter(event.target.value);
  }

  function filterItems(itemList) {
    return itemList.filter((item) => item.price <= priceFilter || item.rating === ratingFilter).map((item, index) => (
      <ItemCard
        name={item.name}
        price={item.price}
        rating={item.rating}
        id={item.id}
        key={index}
      />
    ))
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
                    <div style={{ display: "flex" }}>
                      <p>$30</p>
                      <input
                        type="range"
                        min={30}
                        max={120}
                        step={1}
                        onChange={filterPrice}
                      />
                      <p>$120</p>
                    </div>
                    <p>
                      Sort From: ${priceFilter}
                    </p>
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
                      <input type="radio" name="rating" value='★✩✩✩✩' onClick={filterRating} />
                      ★✩✩✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value='★★✩✩✩' onClick={filterRating} />
                      ★★✩✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value='★★★✩✩' onClick={filterRating} />
                      ★★★✩✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value='★★★★✩' onClick={filterRating} />
                      ★★★★✩
                    </label>
                    <label>
                      <input type="radio" name="rating" value='★★★★★' onClick={filterRating} />
                      ★★★★★
                    </label>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="clothingPageContainer">
          <div className="clothingItems">
            {showPricesOption || showRatingOption
              ? filterItems(itemList)
              : itemList.map((item, index) => (
                  <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    id={item.id}
                    key={index}
                  />
                ))}
          </div>
          <div className="clothingPageBtns">
            <button>⬅ Previous</button>
            <button>Next ➡</button>
          </div>
        </div>
      </div>
    </>
  );
}
