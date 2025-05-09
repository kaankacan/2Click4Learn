import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import WordList from '../pages/panel/WordList';
import Quiz from '../pages/panel/Quiz';
import Categorize from '../pages/panel/Categorize';
import PanelWelcome from '../pages/panel/PanelWelcome';
import Blog from '../pages/panel/Blog';
import SSS from '../pages/panel/SSS';
import Footer from './Footer';

function PanelLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf1fb] via-[#f3f6fa] to-[#e0e7ef] flex flex-col">
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-xl border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/panel" className="flex items-center group">
                <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent tracking-tight drop-shadow group-hover:scale-105 transition-transform">2Click4Learn</span>
              </Link>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <Link
                to="/panel/kelimeler"
                className={`p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                  location.pathname === '/panel/kelimeler'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white scale-105 shadow-lg'
                    : 'text-blue-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
                title="Kelimeler"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="hidden md:inline">Kelimeler</span>
              </Link>
              <Link
                to="/panel/quiz"
                className={`p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-200 ${
                  location.pathname === '/panel/quiz'
                    ? 'bg-gradient-to-r from-green-500 to-cyan-400 text-white scale-105 shadow-lg'
                    : 'text-green-700 hover:bg-green-50 hover:text-green-900'
                }`}
                title="Quiz"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="hidden md:inline">Quiz</span>
              </Link>
              <Link
                to="/panel/kategorilendir"
                className={`p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-200 ${
                  location.pathname === '/panel/kategorilendir'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-300 text-white scale-105 shadow-lg'
                    : 'text-yellow-700 hover:bg-yellow-50 hover:text-yellow-900'
                }`}
                title="Kategorilendir"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="hidden md:inline">Kategorilendir</span>
              </Link>
              <Link
                to="/panel/blog"
                className={`p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-200 ${
                  location.pathname === '/panel/blog'
                    ? 'bg-gradient-to-r from-purple-400 to-purple-200 text-white scale-105 shadow-lg'
                    : 'text-purple-700 hover:bg-purple-50 hover:text-purple-900'
                }`}
                title="Blog"
                aria-label="Blog"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
                <span className="hidden md:inline">Blog</span>
              </Link>
              <Link
                to="/panel/sss"
                className={`p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pink-200 ${
                  location.pathname === '/panel/sss'
                    ? 'bg-gradient-to-r from-pink-400 to-pink-200 text-white scale-105 shadow-lg'
                    : 'text-pink-700 hover:bg-pink-50 hover:text-pink-900'
                }`}
                title="SSS"
                aria-label="Sıkça Sorulan Sorular"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8a9 9 0 1118 0z" /></svg>
                <span className="hidden md:inline">SSS</span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 md:px-4 md:py-2 rounded-xl text-base font-semibold transition-all duration-200 flex items-center space-x-2 text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
                title="Çıkış Yap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline">Çıkış Yap</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow">
        <Routes>
          <Route index element={<PanelWelcome />} />
          <Route path="kelimeler" element={<WordList />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="kategorilendir" element={<Categorize />} />
          <Route path="blog" element={<Blog />} />
          <Route path="sss" element={<SSS />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default PanelLayout; 