import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css/ClothingPage.css";
import Jacket from '../assets/Jacket.jpg';
import LongSleeve from '../assets/LongSleeve.jpg';
import TShirt from '../assets/TShirt.jpg';
import Sweater from '../assets/Sweater.jpg';
import { ShoppingCartContext } from "../contexts/HomePageContext";

export default function ItemCard({ name, price, rating, id }) {
  const { shoppingCart, updateCart, userFavorites, updateFavorites } = useContext(ShoppingCartContext);
  const [sizeSelected, setSize] = useState("");
  const [allowCartUpdate, isSizeSelected] = useState(false);

  function addToCart() {
    if (allowCartUpdate === true) {
      const item = {
        name: name,
        price: price,
        size: sizeSelected,
        id: id + sizeSelected,
      };
      updateCart([item, ...shoppingCart]);
    } else {
      alert("Please select a size!");
    }
  }

  function chooseSize(value) {
    setSize(value);
    isSizeSelected(true);
  }

  function addToFavorite() {
    if (allowCartUpdate === true) {
        const item = {
          name: name,
          price: price,
          size: sizeSelected,
          rating: rating,
          id: id + sizeSelected
        };
        updateFavorites([item, ...userFavorites]);
        alert(`${item.name} in size ${item.size} added to favorites!`);
      } else {
        alert("Please select a size!");
      }
  }

  return (
    <>
      <div className="itemCard">
      { name === "T-Shirt" ? <img src={TShirt} alt="T-Shirt Image"/> : name === "Long Sleeve" ? <img src={LongSleeve} alt="Long Sleeve Image"/> : name === "Jacket" ? <img src={Jacket} alt="Jacket Image"/> : name === "Sweater" && <img src={Sweater} alt="Sweater Image"/> }
        <div className="itemCardInfo">
          <p>{name}</p>
          <p>${price}</p>
          <div className="itemCardSizes">
            <button
              className={sizeSelected === "S" ? "selected" : ""}
              onClick={() => chooseSize("S")}
            >
              S
            </button>
            <button
              className={sizeSelected === "M" ? "selected" : ""}
              onClick={() => chooseSize("M")}
            >
              M
            </button>
            <button
              className={sizeSelected === "L" ? "selected" : ""}
              onClick={() => chooseSize("L")}
            >
              L
            </button>
            <button
              className={sizeSelected === "XL" ? "selected" : ""}
              onClick={() => chooseSize("XL")}
            >
              XL
            </button>
          </div>
          <p>
            Reviews:{" "}
            <span style={{ color: "gold", textShadow: "0px 1px 1px black" }}>
              {rating}
            </span>
          </p>
        </div>
        <div>
          <button className="addToCart" onClick={addToCart}>
            Add To Cart
          </button>
          <button className="favoriteBtn" onClick={addToFavorite}>
            <FontAwesomeIcon icon={faHeart}/>
          </button>
        </div>
      </div>
    </>
  );
}
