import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { login } from '../services/authService';
import { saveToken, getToken } from '../services/tokenService';
import {
  app_name,
  app_info,
  login_title,
  login_submit,
  login_info,
  login_regis,
  forget_password,
} from '../constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // useAuth();
  useEffect(() => {
    const token = getToken();
    console.log('token login: ' + token);
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password); // Call login function
      const accessToken = response.accessToken;
      if (accessToken) {
        saveToken(accessToken); // Save token using saveToken
        navigate('/dashboard'); // Redirect to Dashboard
      } else {
        setError('Token is missing. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="text-white">
          <h1 className="me-3">{app_name}</h1>
          <span className="me-3">{app_info}</span>
          <br /> <br />
          <img
            src="/images/finance-money-banking.png"
            width={370}
            alt="FMB"
          ></img>
          <br />
        </div>
        <div className="login-box">
          <div className="mb-5">
            <h3 className="text-start">{login_title}</h3>
            <div className="text-start">
              {login_info} <a href="/register">{login_regis}</a>
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Alamat email akun Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary mt-3 me-3">
              {login_submit}
            </button>
            <a href="/forget-password">{forget_password}</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
