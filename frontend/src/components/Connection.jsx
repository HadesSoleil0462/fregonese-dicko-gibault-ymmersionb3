import React, { useEffect, useState } from 'react';
import '../styles/Connection.css'
import axios from 'axios';
import { Admins, VerifyLogin, verifyLogin } from '../data/main';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const admins = Admins()
  const [error, setError] = useState(null); // État pour gérer les erreurs

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const admin = admins.find(e => {
      return e.User === email
    })
    if(admin != undefined){
      return <Link to="/flowers-store"></Link>
    }
    console.log(admin)
  }
  return (
    <div className='login'>
        <div className="login-page">
      <h2>Connexion</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type='submit' >Soumettre</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
