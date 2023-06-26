import React, { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/HomePageContext'

export default function ShoppingCart() {
    const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <div>
        {shoppingCart.map((item, index) => {
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.size}</p>
            </div>
        })}
    </div>
  )
}
