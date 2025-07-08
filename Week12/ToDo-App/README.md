# 📝 React Todo App

Bu proje, klasik bir **Todo** uygulamasının React kullanılarak yeniden inşa edilmiş halidir. Kullanıcılar yeni görevler ekleyebilir, görevleri tamamlanmış olarak işaretleyebilir, tamamlanan görevleri temizleyebilir ve görevlerini filtreleyerek listeleyebilir. Ayrıca görevler tarayıcı kapatılsa bile **localStorage** sayesinde kaybolmaz.

---

## 📌 Özellikler

- ✅ Görev ekleme
- ✅ Görev tamamlama ve geri alma
- ✅ Tekli görev silme
- ✅ Tüm görevleri tamamlama (toggle-all)
- ✅ Aktif / Tamamlanmış / Tümü filtreleme
- ✅ Tamamlanan görevleri temizleme
- ✅ localStorage ile veri kalıcılığı
- 💻 Responsive ve sade arayüz

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|----------|
| React    | Arayüzü oluşturmak için |
| Vite     | Hızlı geliştirme ortamı sağlamak için |
| HTML/CSS | Görsel yapı ve stillendirme |
| JavaScript | Uygulama mantığı |
| localStorage | Verilerin kalıcı tutulması için |

---

## 🗃️ Proje Yapısı

ToDo-App/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md


## 🧑‍💻 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için şu adımları izleyin:

```bash
# 1. Projeyi klonlayın
git clone https://github.com/kullanici-adiniz/react-todo-app.git

# 2. Klasöre girin
cd react-todo-app

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
