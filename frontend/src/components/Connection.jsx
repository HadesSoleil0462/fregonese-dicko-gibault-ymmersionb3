import React, { useEffect, useState } from 'react';
import '../styles/Connection.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const api_URL = "http:localhost:8080/admin/login"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    axios.post(api_URL,{
      user: email,
      password: password
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.error(err)
    })
  })
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
        <Link to="/admin/add-flower" id='btn'>
        Soumettre
        </Link>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
