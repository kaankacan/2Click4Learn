import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>Gizlilik Politikası | 2Click4Learn</title>
        <meta name="description" content="2Click4Learn gizlilik politikası - Kullanıcı verilerinin nasıl toplandığı, saklandığı ve kullanıldığı hakkında bilgiler." />
      </Helmet>

      {/* Navitagiton Button */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-20 bg-white/80 shadow-lg rounded-xl px-8 py-4 border border-blue-100">
          <Link
            to="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Anasayfa
          </Link>
          <Link
            to="/panel"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-md font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
            </svg>
            Panel
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
        📄 Gizlilik Politikası – 2Click4Learn
      </h1>
      <p className="text-gray-600 italic mb-8">Son Güncelleme: Mayıs 2024</p>

      <p className="mb-6">
        2Click4Learn, kullanıcıların web sayfalarındaki İngilizce kelimeleri kolayca öğrenmesini sağlayan bir Chrome uzantısıdır. 
        Kullanıcı gizliliği, bizim için önceliklidir. Bu belge, ne tür veriler topladığımızı, nasıl kullandığımızı ve bu verilere 
        nasıl yaklaştığımızı açıklar.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">🔍 Toplanan Veriler</h2>
        <p className="mb-4">
          Uzantı, çift tıklanan İngilizce kelimeyi anlık olarak işler ve Google Translate API aracılığıyla Türkçeye çevirir.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Bu işlem sırasında yalnızca kelime işlenir; kullanıcıya ait hiçbir kişisel bilgi (IP adresi, cihaz bilgisi, 
            kimlik verileri vb.) toplanmaz, analiz edilmez veya paylaşılmaz.
          </li>
          <li>
            Kullanıcının daha önce oturum açmış olması durumunda, bu istek sırasında JWT (JSON Web Token) sunucuya 
            doğrulama amacıyla gönderilir. Bu token, yalnızca doğrulama için kullanılır; loglanmaz, analiz edilmez 
            veya üçüncü taraflarla paylaşılmaz.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">🗂️ Verilerin Saklanması</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Çevrilen kelimeler ve karşılıkları sadece kullanıcı tarayıcısında (local storage) saklanır. 
            Bu verilere sadece kullanıcı erişebilir.
          </li>
          <li>
            Kullanıcı açıkça "2Click4Learn'e aktar" komutunu verdiğinde, bu kelimeler JWT ile birlikte backend 
            sistemine iletilir ve yalnızca ilgili kullanıcıya özel olarak saklanır. Bu işlem tamamen kullanıcının 
            kontrolündedir.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">⚙️ Kullanılan İzinler</h2>
        <p className="mb-4">2Click4Learn uzantısı yalnızca temel izinleri kullanır:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>activeTab</strong>: Aktif sekmede çift tıklanan kelimeyi algılamak için.</li>
          <li><strong>storage</strong>: Tarayıcıda kullanıcıya özel veri tutmak için.</li>
          <li><strong>scripting</strong>: Sayfada çift tıklama olaylarını algılayabilmek için.</li>
        </ul>
        <p className="mt-4">
          Uzantı; kamera, mikrofon, konum, pano gibi hassas izinleri talep etmez.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">🤝 Veri Paylaşımı</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kullanıcı verileri üçüncü taraflarla kesinlikle paylaşılmaz.</li>
          <li>Veriler analiz, reklamcılık veya pazarlama amaçlı kullanılmaz.</li>
          <li>
            Google Translate API'ye yalnızca çevirilecek kelime gönderilir; kimlik ya da başka bir kişisel 
            bilgi iletilmez.
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">📬 İletişim</h2>
        <p className="mb-4">
          Gizliliğinizle ilgili herhangi bir sorunuz varsa bizimle iletişime geçebilirsiniz:
        </p>
        <p className="mb-2">
          📧 <a href="mailto:destek@2click4learn.com" className="text-blue-600 hover:text-blue-800">
            destek@2click4learn.com
          </a>
        </p>
        <p>
          🌐 <a href="https://2click4learn.com" className="text-blue-600 hover:text-blue-800">
            https://2click4learn.com
          </a>
        </p>
      </section>

      <p className="mt-8 text-gray-600 italic">
        Bu politika gerektiğinde güncellenebilir. Güncellemeler bu sayfa üzerinden duyurulacaktır.
      </p>
    </div>
  );
}

export default PrivacyPolicy; 