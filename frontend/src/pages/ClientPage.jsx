
import React, { useState } from 'react';
import '../styles/ClientPage.css'
import { Link } from 'react-router-dom';

const ClientPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let url = '/admin'
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    url = '/admin/add-flower'
  };

  return (
    <div className='login'>
        <div className="login-page">
      <h2>Connexion</h2>
      <form>
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
        <a href='/flowers-store/inscription'>Pas encore inscrit ? Inscrivez-vous</a>
        </div>
        <button id='btn'>
        Soumettre
        </button>
      </form>
    </div>
    </div>
  );
};
export default ClientPage;