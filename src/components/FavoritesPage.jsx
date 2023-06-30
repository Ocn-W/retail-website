import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../contexts/HomePageContext";
import '../css/FavoritesPage.css';

export default function FavoritesPage() {
  const [showPricesOption, setShowPricesOption] = useState(false);
  const [showRatingOption, setShowRatingOption] = useState(false);
  const { userFavorites } = useContext(ShoppingCartContext);
  const { shoppingCart, updateCart } = useContext(ShoppingCartContext);

  function addToCart(item) {
    updateCart([item, ...shoppingCart]);
    console.log(shoppingCart);
  }

  function togglePriceOption() {
    setShowPricesOption(!showPricesOption);
  }

  function toggleRatingOption() {
    setShowRatingOption(!showRatingOption);
  }

  return (
    <div className="favoritePage">
        <p>FAVORITE ITEMS</p>        
      <div className="favePageContainer">
        {userFavorites.map((item, index) => {
            return (
              <div className="userFaveItem" key={index} id={item.id}>
                { item.name === "T-Shirt" ? <img src="src/assets/T-Shirt.jpg" alt="T-Shirt Image"/> : item.name === "Long Sleeve" ? <img src="src/assets/LongSleeve.jpg" alt="Long Sleeve Image"/> : item.name === "Jacket" ? <img src="src/assets/Jacket.jpg" alt="Jacket Image"/> : item.name === "Sweater" && <img src="src/assets/Sweater.jpg" alt="Sweater Image"/> }
                <p>{item.name}</p>
                <p>Size: {item.size}</p>
                <p>${item.price}</p>
                <p>Rating: 
                  <span style={{ color: "gold", textShadow: "0px 1px 1px black" }}>
                    {item.rating}
                  </span>
                </p>
                <button className="addToCart" onClick={() => addToCart(item)}>
                  Add To Cart
                </button>
              </div>
            )
        })}
      </div>
    </div>
  );
}
