import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/tokenService';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/dashboard'); // Redirect to dashboard if token exists
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);
};

const useAuth2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
};

export { useAuth, useAuth2 };
