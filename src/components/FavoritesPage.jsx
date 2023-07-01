import React, { useContext } from "react";
import { ShoppingCartContext } from "../contexts/HomePageContext";
import '../css/FavoritesPage.css';
import Jacket from '../assets/Jacket.jpg';
import LongSleeve from '../assets/LongSleeve.jpg';
import TShirt from '../assets/LongSleeve.jpg';
import Sweater from '../assets/Sweater.jpg';

export default function FavoritesPage() {
  const { userFavorites } = useContext(ShoppingCartContext);
  const { shoppingCart, updateCart } = useContext(ShoppingCartContext);

  function addToCart(item) {
    updateCart([item, ...shoppingCart]);
    console.log(shoppingCart);
  }

  return (
    <div className="favoritePage">
        <p>FAVORITE ITEMS</p>        
      <div className="favePageContainer">
        {userFavorites.map((item, index) => {
            return (
              <div className="userFaveItem" key={index} id={item.id}>
                { item.name === "T-Shirt" ? <img src={TShirt} alt="T-Shirt Image"/> : item.name === "Long Sleeve" ? <img src={LongSleeve} alt="Long Sleeve Image"/> : item.name === "Jacket" ? <img src={Jacket} alt="Jacket Image"/> : item.name === "Sweater" && <img src={Sweater} alt="Sweater Image"/> }
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
