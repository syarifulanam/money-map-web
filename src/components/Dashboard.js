import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import useAuth2 from '../hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token dashboard : ' + token);
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <h2>Welcome to the Dashboard!</h2>;
};

export default Dashboard;
