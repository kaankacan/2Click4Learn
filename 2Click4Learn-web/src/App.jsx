import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorHandler from './global_ui/ErrorHandler';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
    <Router>
        <ErrorHandler />
        <AppRoutes />
    </Router>
    </HelmetProvider>
  );
}

export default App;
