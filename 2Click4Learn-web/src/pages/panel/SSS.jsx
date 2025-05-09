import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SSS() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] py-8">
      <Helmet>
        <title>SSS | 2Click4Learn</title>
        <meta name="description" content="2Click4Learn hakkında sıkça sorulan sorular ve cevapları. Kullanım, üyelik, AI ile kelime kategorilendirme ve daha fazlası!" />
      </Helmet>
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/95 rounded-3xl shadow-2xl px-8 py-10 border border-blue-100 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-blue-200 p-4 rounded-full shadow-lg mb-2 animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10 text-white"><circle cx="16" cy="16" r="14" fill="currentColor" className="text-blue-200"/><path d="M12 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 drop-shadow mb-1">Sıkça Sorulan Sorular</h1>
          <p className="text-base text-blue-700 font-medium text-center max-w-md">2Click4Learn hakkında en çok merak edilenler. <Link to="/panel/blog" className="text-blue-500 underline ml-1">Blog sayfasına da göz at!</Link></p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-50/80 rounded-2xl shadow p-6 flex flex-col gap-2">
            <h2 className="text-lg font-bold text-blue-700">2Click4Learn nedir?</h2>
            <p className="text-blue-800">2Click4Learn, İngilizce kelime öğrenimini kolaylaştıran, AI destekli bir platformdur. Chrome uzantısı ile kelime ekleyebilir, quiz çözebilir ve kelimelerini otomatik kategorilere ayırabilirsin.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-50/80 rounded-2xl shadow p-6 flex flex-col gap-2">
            <h2 className="text-lg font-bold text-blue-700">Kelimelerimi nasıl eklerim?</h2>
            <p className="text-blue-800">Chrome uzantısını kullanarak herhangi bir web sayfasında çift tıklayarak kelime ekleyebilirsin. <Link to="/panel/kelimeler" className="text-blue-500 underline">Kelimeler panelinde</Link> tüm eklediğin kelimeleri görebilirsin.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-50/80 rounded-2xl shadow p-6 flex flex-col gap-2">
            <h2 className="text-lg font-bold text-blue-700">Quiz nasıl çalışıyor?</h2>
            <p className="text-blue-800">Eklediğin kelimelerle <Link to="/panel/quiz" className="text-blue-500 underline">quiz çözebilir</Link>, doğru bildikçe puan kazanabilirsin.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-50/80 rounded-2xl shadow p-6 flex flex-col gap-2">
            <h2 className="text-lg font-bold text-blue-700">AI ile kategorilendirme nedir?</h2>
            <p className="text-blue-800">Kelimelerini <Link to="/panel/kategorilendir" className="text-blue-500 underline">AI ile otomatik kategorilere ayırabilirsin</Link>. Böylece hangi kelime grubunda eksik olduğunu görebilirsin.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 