import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import CartView from "./Cart-view";

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.value), 0);


  useEffect(() => {
    // Récupérez les clés du localStorage
    const storageKeys = Object.keys(localStorage);
    
    // Utilisez les clés pour récupérer les valeurs du localStorage
    const items = storageKeys.map(key => ({
        name: key,
        value: localStorage.getItem(key)
    }));

    setCartItems(items);
}, [])
  return <div className="cart">
    <h2>Panier</h2>
    <div>
    {
      cartItems.map(item => {
        return <CartView title={item.name} price={item.value} />
      })
    }
    </div>
    <div className="total">
      <h3>Total du panier : {total} € </h3>
    </div>
    <div className="total">
      <button type="submit">Valider</button>
    </div>
  </div>
};

export default Cart;
