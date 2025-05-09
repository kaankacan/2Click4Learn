import React, { useState, useEffect } from 'react';
import { getWords, deleteWord } from '../../services/wordService';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function WordList() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWords = async () => {
    try {
      const data = await getWords();
      setWords(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const handleDelete = async (wordId) => {
    try {
      await deleteWord(wordId);
      // Word removed from list
      setWords(words.filter(word => word.id !== wordId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-4 rounded-full shadow-lg mb-4 animate-bounce-slow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-white"><rect x="8" y="12" width="16" height="8" rx="2" fill="currentColor" className="text-blue-400"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div className="text-xl font-bold text-blue-700 mb-2">Loading Words...</div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="bg-gradient-to-br from-red-400 to-orange-400 p-4 rounded-full shadow-lg mb-4 animate-bounce-slow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-white"><circle cx="16" cy="16" r="14" fill="currentColor" className="text-red-400"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </div>
        <div className="text-xl font-bold text-red-700 mb-2">An Error Occurred</div>
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!words || words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-300 p-4 rounded-full shadow-lg mb-4 animate-bounce-slow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-white"><rect x="8" y="12" width="16" height="8" rx="2" fill="currentColor" className="text-yellow-400"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div className="text-xl font-bold text-yellow-700 mb-2">No words added yet</div>
        <div className="text-yellow-800 text-base bg-yellow-50 rounded-lg px-4 py-2">Add your first word using the Chrome extension and start learning!</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Kelimeler Paneli | 2Click4Learn</title>
        <meta name="description" content="İngilizce kelimelerini kolayca yönet, dinle ve öğren. 2Click4Learn ile kelime öğrenmek çok kolay!" />
      </Helmet>
      <div className="flex flex-col items-center mb-8 mt-2">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow mb-1">Kelimeler Paneli</h1>
        <p className="text-base text-blue-900/80 font-medium text-center max-w-md">
          Chrome uzantısı ile eklediğin kelimeler burada! Her gün yeni kelime ekle, dinle ve kolayca öğren. 🚀<br/>
          <Link to="/panel/quiz" className="text-green-600 underline mx-1" aria-label="Quiz çöz" title="Quiz çöz">Quiz çöz</Link> veya
          <Link to="/panel/kategorilendir" className="text-yellow-600 underline mx-1" aria-label="Kategorilendir" title="Kategorilendir">Kategorilendir</Link> sayfalarını da keşfet!
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {words.map((word) => (
        <div key={word.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
                <h3 className="text-lg font-semibold text-gray-900" aria-label={`İngilizce: ${word.english}`}>{word.english}</h3>
                <p className="text-gray-600" aria-label={`Türkçe: ${word.turkish}`}>{word.turkish}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  const utterance = new SpeechSynthesisUtterance(word.english);
                  utterance.lang = 'en-US';
                  speechSynthesis.speak(utterance);
                }}
                  className="p-2.5 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 hover:text-blue-900 shadow transition-all duration-200 border border-blue-200 focus:outline-none"
                title="Telaffuzu Dinle"
                  aria-label={`'${word.english}' kelimesini sesli dinle`}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                    <path d="M9.25 3.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.28.53L5.81 14H3.5A1.5 1.5 0 0 1 2 12.5v-5A1.5 1.5 0 0 1 3.5 6h2.31l2.91-2.53A.75.75 0 0 1 9.25 3.25ZM14.5 10a4.5 4.5 0 0 0-1.5-3.36.75.75 0 1 1 1-1.12A6 6 0 0 1 16 10a6 6 0 0 1-2 4.48.75.75 0 1 1-1-1.12A4.5 4.5 0 0 0 14.5 10Zm-2-2a.75.75 0 0 1 1.06 0 3 3 0 0 1 0 4.24.75.75 0 1 1-1.06-1.06 1.5 1.5 0 0 0 0-2.12.75.75 0 0 1 0-1.06Z" />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(word.id)}
                className="text-red-500 hover:text-red-700"
                title="Kelimeyi Sil"
                  aria-label={`'${word.english}' kelimesini sil`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default WordList; 