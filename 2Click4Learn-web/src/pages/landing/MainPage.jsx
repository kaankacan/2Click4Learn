import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MainPage() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen">
      <Helmet>
        <title>2Click4Learn: İngilizce Kelime Öğrenmenin En Kolay Yolu</title>
        <meta name="description" content="2Click4Learn ile İngilizce kelime öğrenmek artık çok kolay! Chrome uzantısı, AI destekli kategorilendirme, quizler ve daha fazlası ile İngilizceni geliştir." />
        <link rel="canonical" href="https://2click4learn.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="tr" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="2Click4Learn: İngilizce Kelime Öğrenmenin En Kolay Yolu" />
        <meta property="og:description" content="2Click4Learn ile İngilizce kelime öğrenmek artık çok kolay! Chrome uzantısı, AI destekli kategorilendirme, quizler ve daha fazlası ile İngilizceni geliştir." />
        <meta property="og:url" content="https://2click4learn.com/" />
        <meta property="og:site_name" content="2Click4Learn" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2Click4Learn: İngilizce Kelime Öğrenmenin En Kolay Yolu" />
        <meta name="twitter:description" content="2Click4Learn ile İngilizce kelime öğrenmek artık çok kolay! Chrome uzantısı, AI destekli kategorilendirme, quizler ve daha fazlası ile İngilizceni geliştir." />
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "2Click4Learn",
            "url": "https://2click4learn.com/",
            "description": "2Click4Learn ile İngilizce kelime öğrenmek artık çok kolay! Chrome uzantısı, AI destekli kategorilendirme, quizler ve daha fazlası ile İngilizceni geliştir.",
            "inLanguage": "tr",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://2click4learn.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                  <span className="text-blue-300 text-sm font-medium">✨ Yeni Nesil Kelime Öğrenme</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/20">
                  <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="text-blue-300 text-sm font-medium">Chrome Uzantısı</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  İngilizce Kelime Öğrenmek
                </span>
                <br />
                <span className="text-white">
                  Çok Daha Kolay
                </span>
              </h1>

              <p className="text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Chrome uzantımız ile herhangi bir web sayfasında karşılaştığın İngilizce kelimeye çift tıkla, 
                anında anlamını ve telaffuzunu öğren. Kelimeler otomatik olarak paneline eklenir, 
                AI ile kategorilere ayrılır ve quiz çözerek öğrenme sürecini hızlandır!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl shadow-xl text-lg transition-all duration-200 hover:from-blue-600 hover:to-cyan-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  style={{boxShadow: '0 4px 24px 0 rgba(0, 200, 255, 0.15)'}}
                >
                  Ücretsiz Hesap Oluştur
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-gray-600 to-blue-700 rounded-xl shadow-xl text-lg transition-all duration-200 hover:from-blue-700 hover:to-gray-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  style={{boxShadow: '0 4px 24px 0 rgba(0, 100, 255, 0.10)'}}
                >
                  <svg className="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.93 7h-2.95c-.2-1.16-.51-2.27-.93-3.29C15.36 5.34 16.74 6.48 17.93 9zM12 4.07c.73 1.19 1.3 2.53 1.61 3.93h-3.22c.31-1.4.88-2.74 1.61-3.93zM4.26 17c-.6-.89-1.04-1.91-1.19-3h3.11c.13 1.05.36 2.05.68 2.97C5.6 16.7 4.89 16.91 4.26 17zm.81-5c.12-1.04.34-2.04.66-2.97.72.19 1.49.32 2.27.36V12H5.07zm2.27-4.93C7.64 5.34 9.02 4.2 12 4.07V8c-1.16-.02-2.27-.13-3.29-.36zm10.4 1.36c.32.93.54 1.93.66 2.97h-3.11c-.13-1.05-.36-2.05-.68-2.97 1.01-.23 1.72-.44 2.13-.6zm-2.13 7.6c.32-.92.55-1.92.68-2.97h3.11c-.15 1.09-.59 2.11-1.19 3-.63-.09-1.34-.3-2.13-.03zm-2.27 4.93c-2.98-.13-4.36-1.27-5.33-2.93.42-.12 1.13-.33 2.13-.6.2 1.16.51 2.27.93 3.29zm1.61-3.93c-.31 1.4-.88 2.74-1.61 3.93 2.98-.13 4.36-1.27 5.33-2.93-.42-.12-1.13-.33-2.13-.6zm-1.61-1.07V12h3.22c-.31 1.4-.88 2.74-1.61 3.93-.73-1.19-1.3-2.53-1.61-3.93z" fill="#4285F4"/>
                  </svg>
                  Chrome Uzantısını İndir
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">Sürekli</div>
                  <div className="text-sm text-blue-200">Geliştiriliyor</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50K+</div>
                  <div className="text-sm text-blue-200">Eklenen Kelime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-blue-200">Başarı Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-200">AI Destek</div>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform -rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-blue-300 text-sm font-medium">2Click4Learn Panel</div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-blue-800/50 rounded-xl p-4">
                      <div className="h-4 bg-blue-700/50 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-blue-700/50 rounded w-1/2"></div>
                    </div>
                    <div className="bg-blue-800/50 rounded-xl p-4">
                      <div className="h-4 bg-blue-700/50 rounded w-2/3 mb-2"></div>
                      <div className="h-4 bg-blue-700/50 rounded w-1/3"></div>
                    </div>
                    <div className="bg-blue-800/50 rounded-xl p-4">
                      <div className="h-4 bg-blue-700/50 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-blue-700/50 rounded w-3/4"></div>
                    </div>
                    <div className="bg-blue-800/50 rounded-xl p-4">
                      <div className="h-4 bg-blue-700/50 rounded w-2/3 mb-2"></div>
                      <div className="h-4 bg-blue-700/50 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Neden 2Click4Learn?</h2>
            <p className="text-xl text-blue-200/80">Bilimsel yöntemlerle İngilizce kelime öğrenmenin en etkili yolu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Chrome Uzantısı</h3>
                <p className="text-blue-200/80">Herhangi bir web sayfasında kelimeye çift tıkla, anında anlamını ve telaffuzunu öğren. Kelimeler otomatik olarak paneline eklenir.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Destekli</h3>
                <p className="text-blue-200/80">Yapay zeka ile kelimeleri otomatik kategorilere ayır, quiz çöz ve öğrenme sürecini optimize et.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">İlerleme Takibi</h3>
                <p className="text-blue-200/80">Öğrendiğin kelimeleri takip et, quiz sonuçlarını gör ve kendini geliştir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Hemen Başla!</h2>
          <p className="text-xl text-blue-200/80 mb-12 max-w-3xl mx-auto">
            Chrome uzantımızı indir, ücretsiz hesap oluştur ve hemen öğrenmeye başla!
            AI destekli, bilimsel ve eğlenceli kelime öğrenme deneyimi seni bekliyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl shadow-xl transition-all duration-200 hover:from-blue-600 hover:to-cyan-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              style={{boxShadow: '0 4px 24px 0 rgba(0, 200, 255, 0.15)'}}
            >
              Ücretsiz Hesap Oluştur
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage; 