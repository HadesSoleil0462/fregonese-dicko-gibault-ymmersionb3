import React, { useState } from 'react';
import '../styles/AdminPage.css'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import axios from 'axios';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productURL, setProductURL] = useState('')
  const [season, setSeason] = useState('')
  const [stock, setStock] = useState(0)
  const [type, setType] = useState('')

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

  const handleAddProduct = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8080/flower",{
      FlowerName: productName,
      Type: type,
      Season: season,
      Stock: stock,
      Tips: productDescription,
      Pic_URL: productURL,
      Price: productPrice
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className='admin-page'>
        <h2>Page d'administration</h2>
        <form onSubmit={handleAddProduct}>
        <div>
          <label>Nom du produit :</label>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label>Type du produit :</label>
          <input
            type="text"
            value={type}
            onChange={(e) => {setType(e.target.value)}}
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
          <label>Stock du produit :</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => {setStock(e.target.value)}}
          />
        </div>
        <div>
          <label>URL de l'image</label>
          <input
          type='text'
            value={productURL}
            onChange={handleProductURL}
          />
        </div>
        <div>
          <label>Saison</label>
          <input
          type='text'
            value={season}
            onChange={(e) => {setSeason(e.target.value)}}
          />
        </div>
        <div>
          <label>Description du produit :</label>
          <textarea
            value={productDescription}
            onChange={handleProductDescriptionChange}
          />
        </div>
        <button type='submit'>Ajouter un produit</button>
        </form>
      </div>
  );
};

export default AdminPage;
