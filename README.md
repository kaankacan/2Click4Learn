# 2Click4Learn 

İngilizce kelime öğrenmeyi kolaylaştıran bir Chrome uzantısı ve entegre web platformu.
Chrome uzantısı yakında

## 🚀 Nasıl Çalışır?

1. Herhangi bir web sayfasında bir İngilizce kelimeye çift tıkla.
2. Kelimenin telaffuzunu dinle.
3. Anında Türkçe çevirisini gör.
4. Tek tıkla bu kelimeyi 2Click4Learn.com'daki kişisel kelime listene gönder.
5. Platformda bilmediğin kelimeleri çalış, kategorilendir ve quizlerle kendini sına!

---

## 🚀 Başlarken

### ✅ Ön Gereksinimler

* Java 17+
* Node.js 18+
* PostgreSQL 13+
* OpenAI API Key
* Google Translate API Key
* JWT Secret Key

### 🔄 Depoyu Klonla

```bash
git clone https://github.com/kaankacan/2Click4Learn.git
cd 2Click4Learn
```

### 📃 Veritabanı Kurulumu

PostgreSQL sunucunuzda aşağıdaki sorguyu çalıştırın:

```sql
CREATE DATABASE 2click4learn_db;
```

---

## 🔙 Backend Kurulumu (Spring Boot)

```bash
cd 2Click4Learn-api
mvn clean package -DskipTests
```

### PowerShell Ortam Değişkenleri

```powershell
$env:SERVER_PORT="8080"
$env:DB_URL="jdbc:postgresql://localhost:5432/2click4learn_db"
$env:DB_USERNAME="postgres"
$env:DB_PASSWORD="your_password"
$env:JPA_DDL_AUTO="update"
$env:JPA_SHOW_SQL="false"
$env:JPA_FORMAT_SQL="false"
$env:JWT_SECRET_KEY="your_jwt_secret"
$env:JWT_ACCESS_TOKEN_EXPIRATION="900000"
$env:JWT_REFRESH_TOKEN_EXPIRATION="2592000000"
$env:OPENAI_API_KEY="your_openai_key"
$env:OPENAI_API_MODEL="gpt-4"
$env:OPENAI_API_TEMPERATURE="0.7"
$env:GOOGLE_TRANSLATE_API_KEY="your_google_key"
$env:CORS_ALLOWED_ORIGINS="http://localhost:5173"
$env:LOG_LEVEL_APP="INFO"
$env:LOG_LEVEL_SPRING_WEB="WARN"
$env:LOG_LEVEL_HIBERNATE="ERROR"

java -jar target/2Click4Learn-0.0.1-SNAPSHOT.jar
```

---

## 🌐 Frontend Kurulumu (React + Vite)

```bash
cd ../2Click4Learn-web
npm install
npm run dev
```

Frontend şu adreste çalışır: `http://localhost:5173`

---

## 📱 API Endpoint'leri

### 🔐 Auth
* **POST** `/api/v1/auth/register` – Yeni kullanıcı kaydı
* **POST** `/api/v1/auth/authenticate` – Giriş işlemi
* **POST** `/api/v1/auth/refresh-token` – JWT token yenileme
* **POST** `/api/v1/auth/logout` – Oturumu sonlandırma

### 📚 Kelime İşlemleri
* **POST** `/api/v1/words/translate` – İngilizce kelimeye çift tıklanınca Google Cloud Translate API ile Türkçeye çevirilir
* **POST** `/api/v1/words/batch` – Extension üzerindeki kelimeleri backend’e toplu olarak gönderir
* **GET** `/api/v1/words` – Web panelde kullanıcıya ait kayıtlı kelimeleri listeler
* **GET** `/api/v1/words/categorize` – Web panelde OpenAI ile kelimeler için kategori önerileri üretir

> ⚠️ Tüm kelime endpoint'leri JWT kimlik doğrulaması gerektirir:  
> `Authorization: Bearer <token>`


