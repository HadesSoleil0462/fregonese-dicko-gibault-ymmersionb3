
import React, { useState, useEffect } from 'react';
import '../styles/ClientPage.css'
import { Link, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false)
  const navigate = useNavigate()
  let url = '/admin'
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmited(true)
    try {
      const response = await axios.post('http://localhost:8080/customer/login', {
        email: email,
        password: password
      });
      navigate("/")
    } catch (error) {
      console.error("Erreur lors de la requête HTTP :", error);
    }
  }
  
  

  return (
    <div className='login'>
        <div className="login-page">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
        <a href='/flowers-store/inscription'><p>Pas encore inscrit ? Inscrivez-vous</p></a>
        </div>
        <button id='btn' type='submit'>
        Soumettre
        </button>
      </form>
    </div>
    </div>
  );
};
export default ClientPage;