import React, { useState, useEffect } from 'react';
import '../styles/CartLmj.css';

function CartLmj() {
    const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const total = cartItems.reduce((acc, item) => acc + item.value, 0);


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
const clearCart = () => {
    localStorage.clear()
    window.location.reload()
}
let totalPrice = 0
const handleTotal = cartItems.forEach(e => {
    totalPrice += Number.parseFloat(e.value)
})
useEffect(() => {
    document.title = `Flowers Store: ${totalPrice} € d'achats`;
  }, [totalPrice]);
  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cartItems.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cartItems.map((item, index) => (
              <div id='des' key={`${item}-${index}`}>
                {item.name} : {item.value}€
              </div>
            ))}
          </ul>
          <p>Total des achats : {totalPrice} €</p>
          <div className='valid-cart'>
            <button onClick={clearCart}>Vider</button>
            <a href='/flowers-store/connexion'><button>Valider</button></a>
          </div>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default CartLmj;
