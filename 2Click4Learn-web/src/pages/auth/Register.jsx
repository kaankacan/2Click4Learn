import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/authService';
import { Helmet } from 'react-helmet-async';
import useFormError from '../../hooks/useFormError';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { generalError, handleError, hasError, getErrorMessage, clearErrors } = useFormError();

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
    
    if (formData.password !== formData.confirmPassword) {
      handleError({ details: { confirmPassword: 'Passwords do not match!' } });
      return;
    }
    
    clearErrors();
    setIsLoading(true);
    
    try {
      // Destructure userData, excluding confirmPassword for submission
      const { confirmPassword: _confirmPassword, ...userData } = formData;
      await register(userData);
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
        <title>Kayıt Ol | 2Click4Learn</title>
        <meta name="description" content="Ücretsiz hesap oluştur ve İngilizce kelime öğrenmeye başla!" />
      </Helmet>
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Ücretsiz Hesap Oluştur</h2>
          <p className="mt-2 text-center text-sm text-blue-200">
            Zaten bir hesabın var mı?{' '}
            <Link to="/login" className="font-medium text-blue-300 hover:text-blue-100">
              Giriş yap
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
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  Ad
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 placeholder-blue-300 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                    hasError('firstname') ? 'border-red-500' : ''
                  }`}
                  placeholder="Ad"
                />
                {hasError('firstname') && (
                  <p className="mt-1 text-xs text-red-400">{getErrorMessage('firstname')}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  Soyad
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 placeholder-blue-300 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                    hasError('lastname') ? 'border-red-500' : ''
                  }`}
                  placeholder="Soyad"
                />
                {hasError('lastname') && (
                  <p className="mt-1 text-xs text-red-400">{getErrorMessage('lastname')}</p>
                )}
              </div>
            </div>
            
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
                className={`appearance-none rounded-t-md relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 placeholder-blue-300 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 border-t-0 placeholder-blue-300 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                  hasError('password') ? 'border-red-500' : ''
                }`}
                placeholder="Şifre"
              />
              {hasError('password') && (
                <p className="mt-1 text-xs text-red-400">{getErrorMessage('password')}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Şifre Tekrar
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`appearance-none rounded-b-md relative block w-full px-3 py-3 bg-blue-900/30 border border-blue-500/30 border-t-0 placeholder-blue-300 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${
                  hasError('confirmPassword') ? 'border-red-500' : ''
                }`}
                placeholder="Şifre Tekrar"
              />
              {hasError('confirmPassword') && (
                <p className="mt-1 text-xs text-red-400">{getErrorMessage('confirmPassword')}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded bg-blue-900/50"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-blue-200">
                <Link to="/gizlilik-politikasi" className="underline">Gizlilik Politikası</Link>'nı okudum ve kabul ediyorum
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
              {isLoading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register; 