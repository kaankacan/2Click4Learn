import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/landing/MainPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PanelLayout from '../layouts/PanelLayout';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import MainLayout from '../layouts/MainLayout';
import { GuestRoute, ProtectedRoute } from './RouteGuards';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="gizlilik-politikasi" element={<PrivacyPolicy />} />
      </Route>
      
      <Route 
        path="/login" 
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        } 
      />
      
      <Route 
        path="/register" 
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        } 
      />
      
      <Route 
        path="/panel/*" 
        element={
          <ProtectedRoute>
            <PanelLayout />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default AppRoutes; 