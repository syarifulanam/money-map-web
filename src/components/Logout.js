import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../services/tokenService';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeToken('token');
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
