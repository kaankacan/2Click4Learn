import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authService';

// GuestRoute: If user is authenticated, redirect to panel, otherwise redirect to child
export const GuestRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/panel" replace />;
  }
  return children;
};

// Protected Route component
export const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}; 