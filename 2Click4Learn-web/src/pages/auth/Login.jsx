import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { login } from '../../services/authService';
import { Helmet } from 'react-helmet-async';
import useFormError from '../../hooks/useFormError';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { generalError, handleError, hasError, getErrorMessage, clearErrors } = useFormError();
  
  // Check for session=expired URL parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('session') === 'expired') {
      // Display a message if the session has expired
      handleError({ message: 'Your session has expired. Please log in again.' });
    }
  }, [location, handleError]); // Dependencies for useEffect

  const handleChange = (e) => {
    // Clear errors when form fields change
    if (hasError(e.target.name)) {
      clearErrors();
    }
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrors();
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate('/panel');
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Giriş Yap | 2Click4Learn</title>
        <meta name="description" content="2Click4Learn hesabına giriş yap ve İngilizce kelime öğrenmeye başla!" />
      </Helmet>
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Hesabına Giriş Yap</h2>
          <p className="mt-2 text-center text-sm text-blue-200">
            Hesabın yok mu?{' '}
            <Link to="/register" className="font-medium text-blue-300 hover:text-blue-100">
              Ücretsiz kayıt ol
            </Link>
          </p>
        </div>
        {generalError && (
          <div className="bg-red-400/30 backdrop-blur-sm border border-red-500/50 text-white p-3 rounded-lg shadow">
            {generalError}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 placeholder-blue-300 text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                  hasError('email') ? 'border-red-500' : ''
                }`}
                placeholder="E-posta adresi"
              />
              {hasError('email') && (
                <p className="mt-1 text-xs text-red-400">{getErrorMessage('email')}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 placeholder-blue-300 text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                  hasError('password') ? 'border-red-500' : ''
                }`}
                placeholder="Şifre"
              />
              {hasError('password') && (
                <p className="mt-1 text-xs text-red-400">{getErrorMessage('password')}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded bg-blue-900/50"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-200">
                Beni hatırla
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login; 