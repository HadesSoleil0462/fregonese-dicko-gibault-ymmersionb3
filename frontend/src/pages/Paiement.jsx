import React, { useState } from 'react';
import '../styles/Paiement.css'
function CheckoutForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Dans une application réelle, vous enverriez ces informations à une API de paiement
    console.log('Paiement effectué avec succès !');
  };

  return (
    <div className='paiement'>
      <h2>Formulaire de Paiement</h2>
      <form>
        <div className='paiement-infos'>
          <label htmlFor="cardNumber">Numéro de carte :</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className='paiement-infos'>
          <label htmlFor="expirationDate">Date d'expiration :</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className='paiement-infos'>
          <label htmlFor="amount">Montant :</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Payer
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
