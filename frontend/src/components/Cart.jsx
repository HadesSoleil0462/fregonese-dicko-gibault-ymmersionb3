import React from 'react';

const Cart = ({ items, onClose }) => {
  return (
    <div className="cart-modal">
      <h2>Votre panier</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.value} €
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default Cart;
