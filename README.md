# 🧠 Neural AI Text Analyzer

Bu eklenti; salt bir "AI mi değil mi?" yüzdesinin ötesine geçerek metni **Stilometri**, **Burstiness** (Cümle dalgalanmaları) ve **Perplexity** (Tahmini şaşkınlık) metriklerine göre heuristik olarak inceler.

## ✨ Özellikler

* **🚀 Yüksek Hız & Düşük Maliyet:** Google'ın en yeni ve verimli modeli olan Gemini 3.1 Flash-Lite altyapısını kullanır.
* **🎨 Neural Expressive UI:** Havada asılı duran cam görünümlü paneller, akıcı "glowing" (parlama) animasyonları ve hap (pill) tasarımlı form elemanları.
* **🌓 Dinamik Tema Desteği:** İşletim sisteminizin veya tarayıcınızın ayarlarına göre anında Dark Mode / Light Mode geçişi yapar.
* **🖱️ Sağ Tık Entegrasyonu:** Herhangi bir web sayfasında metni seçip sağ tıklayarak analizi anında başlatabilirsiniz. (Sayfa değiştirmeden, kayan pencere (overlay) içinde çalışır).

---

## 🛠️ Kurulum (Geliştirici Modu)

Eklentiyi mağazaya yüklemeden önce tarayıcınızda test etmek veya kullanmak için şu adımları izleyin:

1. Bu depoyu (repository) bilgisayarınıza indirin veya clone'layın.
2. Chrome veya Chromium tabanlı tarayıcınızda adres çubuğuna `chrome://extensions/` yazın.
3. Sağ üst köşedeki **"Geliştirici modu" (Developer mode)** anahtarını açın.
4. Sol üstte beliren **"Paketlenmemiş öğe yükle" (Load unpacked)** butonuna tıklayın.
5. İndirdiğiniz proje klasörünü seçin. 
6. Eklenti tarayıcınıza yüklenecektir! 🎉

---

## 🔑 Google AI Studio'dan Ücretsiz API Anahtarı Nasıl Alınır?

Eklentinin çalışabilmesi için Google'ın yapay zeka modeline bağlanması gerekiyor. Bunun için ücretsiz bir API anahtarı almalısınız:

1. [Google AI Studio](https://aistudio.google.com/app/apikey) adresine gidin ve Google hesabınızla giriş yapın.
2. Sol menüden (veya doğrudan açılan ekrandan) **"Get API key"** butonuna tıklayın.
3. **"Create API key"** butonuna basın. (Eğer mevcut bir Google Cloud projeniz yoksa "Create API key in new project" seçeneğiyle ilerleyin).
4. Oluşturulan `AIzaSy...` ile başlayan uzun şifreyi (API Key) kopyalayın. *Bu anahtarı kimseyle paylaşmayın.*

### API Anahtarını Eklentiye Girme
1. Chrome'un sağ üst köşesindeki yapboz (eklentiler) simgesine tıklayıp **Neural AI Text Analyzer** ikonunu sabitleyin.
2. Eklentinin yıldız ikonuna tıklayın.
3. Açılan şık Neural arayüze kopyaladığınız API anahtarını yapıştırın ve **"Sisteme Kaydet"** butonuna tıklayın.
4. Anahtarınız tarayıcınızın güvenli yerel depolamasına (local storage) kaydedilir.

---

## 🚀 Nasıl Kullanılır?

1. Herhangi bir web sayfasında (örneğin bir makale, haber veya blog yazısı okurken) şüphelendiğiniz bir metni farenizle seçin.
2. Seçili metnin üzerinde **Sağ Tıklayın**.
3. Açılan içerik menüsünden **"AI Analizi (Stilometri & Burstiness)"** seçeneğine tıklayın.
4. Ekranın sağ alt köşesinde Neural Expressive arayüzü belirecek ve Gemini analiz yaparken renkli bir aura ile düşünecektir.
5. Birkaç saniye içinde AI olasılık skoru ve metnin teknik inceleme özeti karşınıza çıkacaktır. İçerik çok uzunsa panel içindeki kaydırma çubuğunu kullanabilirsiniz.

---

## 📁 Proje Yapısı

* `manifest.json`: Eklentinin Manifest V3 yapılandırması ve izinleri.
* `background.js`: Service Worker. Sağ tık menüsünü yönetir ve API isteklerini asenkron olarak atar.
* `content.js`: Web sayfalarının içine DOM manipülasyonu ile Neural UI'ı enjekte eder.
* `neural-expressive.css`: Eklentinin tüm animasyon, renk ve tema (Dark/Light) stil dosyaları.
* `popup.html` & `popup.js`: API anahtarı girmek için kullanılan akıcı açılır pencere arayüzü.
* `icon.svg`: Eklentinin telifsiz, frekans dalgalarını temsil eden orijinal vektörel ikonu.

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına göz atabilirsiniz. İstediğiniz gibi çatallayabilir (fork), geliştirebilir ve kendi projelerinizde kullanabilirsiniz.

*Not: Bu proje eğitim ve araştırma amaçlı geliştirilmiştir.*
