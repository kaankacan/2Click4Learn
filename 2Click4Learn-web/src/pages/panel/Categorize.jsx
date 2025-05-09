import React, { useState } from 'react';
import { categorizeWords } from '../../services/categorizeService';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function groupByCategory(words) {
  const grouped = {};
  words.forEach(({ english, category }) => {
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(english);
  });
  return grouped;
}

function Categorize() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasResult, setHasResult] = useState(false);

  const handleCategorize = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await categorizeWords();
      setCategories(groupByCategory(result));
      setHasResult(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Helmet>
        <title>Kategorilendir Paneli | 2Click4Learn</title>
        <meta name="description" content="Kelimelerini AI ile otomatik kategorilere ayır, öğrenmeni hızlandır!" />
      </Helmet>
      <div className="w-full max-w-2xl mx-auto bg-white/90 rounded-3xl shadow-2xl px-8 py-10 border border-blue-100 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-400 drop-shadow mb-1">Kategorilendir Paneli</h1>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-300 p-4 rounded-full shadow-lg mb-2 animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-white"><rect x="8" y="12" width="16" height="8" rx="2" fill="currentColor" className="text-yellow-400"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-400 to-yellow-400 drop-shadow">Kategorilendir</h3>
          <p className="text-base text-yellow-900/80 font-medium text-center">
            Kelimelerini AI ile otomatik kategorilere ayır, öğrenmeni hızlandır!<br/>
            <Link to="/panel/kelimeler" className="text-blue-600 underline mx-1" aria-label="Kelimeler Paneli" title="Kelimeler Paneli">Kelimeler</Link> veya
            <Link to="/panel/quiz" className="text-green-600 underline mx-1" aria-label="Quiz Paneli" title="Quiz Paneli">Quiz</Link> sayfalarını da keşfet!
          </p>
        </div>
        {!hasResult ? (
          <div className="text-center flex flex-col items-center gap-4">
            <button
              onClick={handleCategorize}
              disabled={loading}
              className={`px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-300 text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Categorizing...' : 'Categorize Words'}
            </button>
            <div className="text-yellow-700/80 text-base">Click the button to categorize your words with AI!</div>
            {error && <div className="mt-2 bg-red-100 text-red-800 p-2 rounded shadow">{error}</div>}
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(categories).map(([category, words]) => (
              <div key={category} className="border rounded-xl p-4 bg-gradient-to-br from-yellow-50 to-orange-50 shadow flex flex-col gap-2">
                <h4 className="font-bold mb-2 text-yellow-900 text-lg bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent" aria-label={`Kategori: ${category}`}>{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {words.map((word, idx) => (
                    <span key={idx} className="inline-block bg-white border border-yellow-200 rounded-full px-4 py-1 text-yellow-900 text-sm font-semibold shadow-sm hover:bg-yellow-100 transition-all cursor-pointer" aria-label={`Kelime: ${word}`}>{word}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center mt-6">
              <button
                onClick={handleCategorize}
                className="px-6 py-3 text-base font-bold bg-gradient-to-r from-yellow-400 to-orange-300 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Re-categorize
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorize;