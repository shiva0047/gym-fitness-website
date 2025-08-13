import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Set auth token
  const setAuthToken = (token) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  };

  // Check if user is authenticated
  const checkAuth = async () => {
    if (token) {
      setAuthToken(token);
      try {
        const res = await api.get('/auth/me');
        setUser(res.data.data);
      } catch (err) {
        logout();
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, [token]);

  // Register user
  const register = async (formData) => {
    try {
      const res = await api.post('/auth/register', formData);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      const res = await api.post('/auth/login', formData);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        error,
        register,
        login,
        logout,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;