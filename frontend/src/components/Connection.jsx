import React, { useEffect, useState } from 'react';
import '../styles/Connection.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { VerifyLogin, verifyLogin } from '../data/main';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // État pour gérer les erreurs

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(true)
    VerifyLogin(email, password)
    console.log("Login : ", email)
  }
  return (
    <div className='login'>
        <div className="login-page">
      <h2>Connexion</h2>
      {error && <div className="error-message">{error}</div>}
      <form>
        <div className="form-group">
          <label htmlFor="email">Username :</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <a  className='btn'><button type='submit' onSubmit={handleSubmit} >Soumettre</button></a>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
