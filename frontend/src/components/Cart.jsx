import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import CartView from "./Cart-view";
import { Link } from "react-router-dom";

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
    <ul>
    {
      cartItems.map(item => {
        return <CartView key={item.name + item.value} title={item.name} price={item.value} />
      })
    }
    </ul>
    <div className="total">
      <h3>Total du panier : {total} € </h3>
    </div>
    <div className="total">
      <Link to="/flowers-store/connexion"><button type="submit">Valider</button></Link>
    </div>
  </div>
};

export default Cart;
