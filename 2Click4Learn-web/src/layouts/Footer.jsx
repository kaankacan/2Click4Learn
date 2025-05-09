import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4 text-center">
      <p className="text-lg font-bold">© 2025 2Click4Learn.com | Tüm Hakları Saklıdır.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/kaankacan" className="text-white hover:text-blue-300">GitHub</a>
        <a href="mailto:contact@2click4learn.com" className="text-white hover:text-blue-300">İletişim</a>
        <Link to="/gizlilik-politikasi" className="text-white hover:text-blue-300">Gizlilik Politikası</Link>
      </div>
    </footer>
  );
}

export default Footer; 