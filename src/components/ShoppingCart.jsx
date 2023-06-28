import React, { useContext } from "react";
import "../css/ShoppingCart.css";
import {
  NavigationContext,
  ShoppingCartContext,
} from "../contexts/HomePageContext";

export default function ShoppingCart() {
  const { shoppingCart, updateCart } = useContext(ShoppingCartContext);
  const { isCartShowing } = useContext(NavigationContext);

  function closeCart() {
    isCartShowing(false);
  }

  function removeItem(itemId) {
    updateCart(shoppingCart.filter((item) => item.id !== itemId));
  }

  function totalCartValue() {
    const totalPrice = shoppingCart.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    return totalPrice;
  }

  return (
    <>
      <div className="userCart">
        <p>Your Cart</p>
        <button className="closeBtn" onClick={() => closeCart}>
          X
        </button>
        <div style={{ overflowY: "auto", height: "65%" }}>
          {shoppingCart.map((item, index) => {
            return (
              <div className="userCartItem" key={index} id={item.id}>
                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  X
                </button>
                <p>{item.name}</p>
                <p>Size: {item.size}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="userCartTotal">
          <p>Total: ${totalCartValue()}</p>
          <button onClick={() => updateCart([])}>Clear Cart</button>
          <button>Check Out</button>
        </div>
      </div>
    </>
  );
}
