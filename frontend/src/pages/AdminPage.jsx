import React, { useState } from 'react';
import '../styles/AdminPage.css'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productURL, setProductURL] = useState('')

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };
  const handleProductURL = (e) => {
    setProductURL(e.target.value)
  }

  const handleAddProduct = () => {
    // Vous pouvez implémenter la logique pour ajouter un produit ici.
    // Cela peut inclure l'envoi d'une requête au serveur ou la mise à jour d'un état local.
    // Assurez-vous de gérer les erreurs et de mettre à jour votre liste de produits.
    // Réinitialisez également les champs de saisie après avoir ajouté le produit avec succès.
  };

  return (
    <div>
      <Header />
        <div className='admin-page'>
        <h2>Page d'administration</h2>
        <div>
          <label>Nom du produit :</label>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label>Prix du produit :</label>
          <input
            type="number"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </div>
        <div>
          <label>URL de l'image</label>
          <textarea
            value={productURL}
            onChange={handleProductURL}
          />
        </div>
        <div>
          <label>Description du produit :</label>
          <textarea
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <button onClick={handleAddProduct}>Ajouter un produit</button>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
