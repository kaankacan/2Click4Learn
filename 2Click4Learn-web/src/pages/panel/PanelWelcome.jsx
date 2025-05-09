import React from 'react';
import { Link } from 'react-router-dom';

function PanelWelcome() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Hoş Geldin!</h1>
        <p className="text-gray-700 mb-6">
          2Click4Learn paneline hoş geldin! Chrome uzantımız ile herhangi bir web sayfasında 
          karşılaştığın İngilizce kelimeye çift tıklayarak anlamını ve telaffuzunu öğrenebilirsin.
          Kelimeler otomatik olarak paneline eklenir ve istediğin zaman erişebilirsin.
        </p>
        
        {/* Quick access menu */}
        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <Link to="/panel/kelimeler" className="flex-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-2xl py-5 shadow-lg hover:scale-105 transition-transform font-bold text-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Kelimeler
          </Link>
          <Link to="/panel/quiz" className="flex-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-cyan-400 text-white rounded-2xl py-5 shadow-lg hover:scale-105 transition-transform font-bold text-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            Quiz
          </Link>
          <Link to="/panel/kategorilendir" className="flex-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-300 text-white rounded-2xl py-5 shadow-lg hover:scale-105 transition-transform font-bold text-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            Kategorilendir
          </Link>
        </div>
        <div className="mt-2 text-blue-400/80 text-sm text-center">Her gün yeni kelimeler ekle, AI ile kategorilendir ve quiz çözerek İngilizceni geliştir! 🚀</div>
      </div>
    </div>
  );
}

export default PanelWelcome; 