import React, { useEffect, useState } from 'react';
import '../styles/Connection.css'
import axios from 'axios';
import { Admins } from '../data/main';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const admins = Admins()
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const navigate = useNavigate()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8080/admin/login", {
        user: email,
        password: password
      })
      console.log(response.data)
      setTimeout(() => {
        navigate("/admin/page")
      }, 3000)
    } catch (error) {
      console.error(error)
    }
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
