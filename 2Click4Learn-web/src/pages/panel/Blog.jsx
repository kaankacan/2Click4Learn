import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] py-8">
      <Helmet>
        <title>Blog | 2Click4Learn</title>
        <meta name="description" content="İngilizce kelime öğrenme, AI ile eğitim ve daha fazlası hakkında güncel blog yazıları!" />
      </Helmet>
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/95 rounded-3xl shadow-2xl px-8 py-10 border border-blue-100 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-blue-200 p-4 rounded-full shadow-lg mb-2 animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10 text-white"><rect x="8" y="12" width="16" height="8" rx="2" fill="currentColor" className="text-blue-200"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 drop-shadow mb-1">Blog</h1>
          <p className="text-base text-blue-700 font-medium text-center max-w-md">İngilizce kelime öğrenme, AI ile eğitim ve daha fazlası hakkında güncel yazılar. <Link to="/panel/sss" className="text-blue-500 underline ml-1">SSS sayfasına da göz at!</Link></p>
        </div>
        {/* Blog post card */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-50/80 rounded-2xl shadow p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <h2 className="text-xl font-bold text-blue-700 mb-1">İngilizce Kelime Öğrenmenin En Etkili Yolları</h2>
            <p className="text-blue-800">2Click4Learn ile kelime öğrenmek artık çok kolay! AI destekli kategorilendirme, quizler ve daha fazlası ile İngilizce kelime dağarcığını hızla geliştirebilirsin.</p>
            <ul className="list-disc ml-6 text-blue-800">
              <li>Her gün yeni kelime ekle</li>
              <li>Quiz çözerek kendini test et</li>
              <li>Kelimelerini AI ile kategorilendir</li>
            </ul>
            <p className="mt-2 text-sm text-blue-500">Daha fazla bilgi için <Link to="/panel/kelimeler" className="text-blue-600 underline">kelimeler panelini</Link> veya <Link to="/panel/quiz" className="text-blue-500 underline">quiz bölümünü</Link> ziyaret edebilirsin.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 