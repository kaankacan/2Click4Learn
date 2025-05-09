import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

function ErrorHandler() {
  const [globalError, setGlobalError] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleGlobalErrorEvent = (event) => {
      const errorData = event.detail;
      if (errorData.status !== 401) {
        setGlobalError(errorData);
        setVisible(true);
        
        setTimeout(() => {
          setVisible(false);
          setGlobalError(null);
        }, 7000);
      }
    };

    const handleSessionExpiredEvent = async (_event) => {
      await logout();
      navigate('/login?session=expired');
    };

    window.addEventListener('global-error', handleGlobalErrorEvent);
    window.addEventListener('session-expired-error', handleSessionExpiredEvent);
    
    return () => {
      window.removeEventListener('global-error', handleGlobalErrorEvent);
      window.removeEventListener('session-expired-error', handleSessionExpiredEvent);
    };
  }, [navigate]);

  if (!globalError || !visible) return null;

  const getErrorStyle = () => {
    const baseStyle = "fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 transition-opacity duration-300 animate-fade-in";
    if (globalError.status >= 500 || !globalError.isOperational) {
      return `${baseStyle} bg-red-100 border-l-4 border-red-500 text-red-700`;
    } else if (globalError.status === 404) {
      return `${baseStyle} bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700`;
    } else if (globalError.status === 403) {
      return `${baseStyle} bg-orange-100 border-l-4 border-orange-500 text-orange-700`;
    }
    return `${baseStyle} bg-blue-100 border-l-4 border-blue-500 text-blue-700`; 
  };

  return (
    <div className={getErrorStyle()}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {(globalError.status >= 500 || !globalError.isOperational) ? (
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          ) : (
            <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )}
        </div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className="text-sm font-medium">
            {globalError.rawError?.response?.error || 'An Error Occurred'}
          </p>
          <p className="mt-1 text-sm">
            {globalError.message}
          </p>
          {import.meta.env.DEV && globalError.rawError?.response?.path && (
            <p className="mt-1 text-xs text-gray-500">
              {globalError.rawError.response.path} [{new Date(globalError.rawError.response.timestamp || Date.now()).toLocaleTimeString()}]
            </p>
          )}
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            onClick={() => setVisible(false)}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorHandler; 