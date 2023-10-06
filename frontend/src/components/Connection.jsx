import React, { useEffect, useState } from 'react';
import '../styles/Connection.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const api_URL = "http:localhost:8080/admin/login"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // État pour gérer les erreurs

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    axios.post(api_URL, {
      user: email,
      password: password
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])
  return (
    <div className='login'>
        <div className="login-page">
      <h2>Connexion</h2>
      {error && <div className="error-message">{error}</div>}
      <form action='/admin/login' method='post'>
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
        <a href="/admin/add-flower" className='btn'><button type='submit'>Soumettre</button></a>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
