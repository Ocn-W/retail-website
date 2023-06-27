import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "../css/ClothingPage.css";
import { ShoppingCartContext } from "../contexts/HomePageContext";

export default function ItemCard({ name, price, rating, id }) {
  const { shoppingCart, updateCart } = useContext(ShoppingCartContext);
  const [sizeSelected, setSize] = useState("");
  const [allowCartUpdate, isSizeSelected] = useState(false);

  function addToCart() {
    if (allowCartUpdate === true) {
      const item = {
        name: name,
        price: price,
        size: sizeSelected,
        id: id + sizeSelected
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

  return (
    <>
      <div className="itemCard">
        <img src="src/assets/shirt-img.png" alt="Item" />
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
        <FontAwesomeIcon icon={faHeart} style={{color: 'red', margin: '0 30px'}}/>
        </div>
      </div>
    </>
  );
}
