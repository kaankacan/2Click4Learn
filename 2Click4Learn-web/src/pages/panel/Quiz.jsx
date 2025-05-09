import React, { useState, useEffect } from 'react';
import { getWords } from '../../services/wordService';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Quiz() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const data = await getWords();
        // Shuffle the words for the quiz
        const shuffledWords = data.sort(() => Math.random() - 0.5);
        setWords(shuffledWords);
        setLoading(false);
      } catch (err) {
        setError(err.message); // This will be the English message from api.js
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  };

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
    handleNext();
  };

  const handleIncorrect = () => {
    handleNext();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  if (!words || words.length === 0) {
    return (
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
        You need to add at least one word to start a quiz.
      </div>
    );
  }

  const currentWord = words[currentWordIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Helmet>
        <title>Quiz Paneli | 2Click4Learn</title>
        <meta name="description" content="Eklediğin İngilizce kelimelerle quiz çöz, öğrenmeni test et ve gelişimini takip et!" />
      </Helmet>
      <div className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-2xl px-8 py-10 border border-blue-100 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-cyan-500 to-green-400 drop-shadow mb-1">Quiz Paneli</h1>
          <div className="bg-gradient-to-br from-green-400 to-cyan-400 p-3 rounded-full shadow-lg mb-2 animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-white"><circle cx="16" cy="16" r="14" fill="currentColor" className="text-green-400"/><path d="M12 16l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-cyan-500 to-green-400 drop-shadow">Quiz Zamanı!</h3>
          <p className="text-base text-green-900/80 font-medium text-center">
            Eklediğin kelimelerle quiz çöz, öğrenmeni test et ve gelişimini takip et!<br/>
            <Link to="/panel/kelimeler" className="text-blue-600 underline mx-1" aria-label="Kelimeler Paneli" title="Kelimeler Paneli">Kelimeler</Link> veya
            <Link to="/panel/kategorilendir" className="text-yellow-600 underline mx-1" aria-label="Kategorilendir" title="Kategorilendir">Kategorilendir</Link> sayfalarını da keşfet!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow p-6 flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-blue-900 mb-2 tracking-wide" aria-label={`İngilizce: ${currentWord.english}`}>{currentWord.english}</div>
          {showAnswer && (
              <div className="text-xl text-cyan-700 font-semibold bg-cyan-50 rounded-lg px-4 py-2 shadow animate-fade-in" aria-label={`Türkçe: ${currentWord.turkish}`}>{currentWord.turkish}</div>
          )}
        </div>
          <div className="flex flex-row gap-4 mt-4">
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                aria-label="Cevabı Göster"
                title="Cevabı Göster"
            >
              Cevabı Göster
            </button>
          ) : (
            <>
              <button
                onClick={handleCorrect}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-400 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                  aria-label="Doğru"
                  title="Doğru"
              >
                Doğru
              </button>
              <button
                onClick={handleIncorrect}
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                  aria-label="Yanlış"
                  title="Yanlış"
              >
                Yanlış
              </button>
            </>
          )}
        </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-6">
          <div className="text-base text-blue-400">Soru <span className="font-bold text-blue-700">{currentWordIndex + 1} / {words.length}</span></div>
          <div className="flex items-center gap-2">
            <span className="text-base text-green-700 font-semibold">Doğru:</span>
            <span className="inline-block bg-green-100 text-green-800 font-bold rounded-full px-4 py-1 shadow">{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz; 