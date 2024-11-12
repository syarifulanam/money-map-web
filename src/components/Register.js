import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { register } from '../services/authService';
import { getToken } from '../services/tokenService';
import { register_title, register_info } from '../constants';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // useAuth();
  useEffect(() => {
    const token = getToken();
    console.log('token register: ' + token);
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(name, email, password);
      if (response.data.id > 0) {
        setMessage('Registration successful. Redirecting to login ...');
        setTimeout(() => {
          navigate('/login');
        }, 1500); // Delay for better user experience
      } else {
        setMessage(
          response.data.message || 'Registration failed. Please try again.'
        );
      }
    } catch (error) {
      // Handle error and display the message from backend
      setMessage(
        error.response.data.message ||
          'Registration failed. Please try again later.'
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="mb-5">
          <h2>{register_title}</h2>
          <span>{register_info}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
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
          <button type="submit">Register</button>
          <a href="/login">I already have an account</a>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
