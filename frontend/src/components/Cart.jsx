// Panier.js
import React from 'react';
//import '../styles/Cart.css'
import CartView from './Cart-view';

const Cart = () => {

    const storage = JSON.parse(JSON.stringify(localStorage))
    const datas = Object.keys(storage).map(item => ({
        name: item,
        value: storage[item]
    }))
    let total = 0
    const getTotalPrice = () => {
        datas.forEach(item => {
            total += item.value
        })
    }
    
  return (
    <div className="panier">
      <h1>Votre Panier</h1>
      {console.log(datas)}
      <ul className="cart-items">
        {
            datas.map(item => {
                const val = Number.parseFloat(item.value).toFixed(2)
                return <CartView key={item.name} title={item.name} price={val} quantite='3' />
            })
        }
      </ul>
      <div className="cart-total">
        <p>Total : {total} €</p>
      </div>
      <div>
      <button className="checkout-button">Passer à la caisse</button>
      </div>
    </div>
  );
}

export default Cart;
