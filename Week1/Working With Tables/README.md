# 📋 Sınıf Tablosu – HTML Tablo Uygulaması

Bu proje, temel HTML bilgisi kullanılarak oluşturulmuş bir öğrenci tablosunu içermektedir. Tablo içerisinde öğrencilerin numarası, adı, soyadı, notu ve doğum tarihi gibi bilgileri yer almaktadır. Aynı zamanda tabloya bazı stil özellikleri de eklenmiştir.

## 📁 Dosya Adı

`sinif_tablosu.html`

## 🎯 Projenin Amacı

Bu uygulamanın amacı, temel HTML etiketlerini (özellikle `<table>`, `<tr>`, `<th>`, `<td>`, `<style>`, `<head>`, `<body>` vs.) kullanarak görsel olarak düzenli bir tablo oluşturmak ve tabloyla ilgili stil işlemlerini uygulamaktır.

## 🏗️ Uygulama İçeriği

### ✅ Temel HTML Yapısı

- `<!DOCTYPE html>` bildirimi ile HTML5 standardı kullanılmıştır.
- `<html>`, `<head>`, `<body>`, `<title>` gibi temel yapılar düzgün şekilde tanımlanmıştır.

### ✅ Sayfa Başlığı

- Sayfa başlığı `<title>` etiketi ile "Sınıf Tablosu" olarak belirlenmiştir.
- Sayfa içinde `<h1>` etiketiyle aynı başlık ortalanarak gösterilmiştir.

### ✅ Tablonun Oluşturulması

- `<table>` etiketi ile tablo yapısı kurulmuştur.
- Tablo genişliği `%100` olarak ayarlanmıştır.
- Başlık satırı (`<th>`) ile 5 sütun oluşturulmuştur:
  - Öğrenci Numarası
  - Adı
  - Soyadı
  - Notu
  - Doğum Tarihi

### ✅ Öğrenci Bilgileri

- Toplam **9 öğrenci** bilgisi tabloya girilmiştir.
- Her öğrenci için 5 adet bilgi hücresi (`<td>`) yer almaktadır.

### ✅ Tablo Stili

- Tüm hücrelere kenarlık (`border`) ve iç boşluk (`padding`) uygulanmıştır.
- Başlık hücrelerinin arka plan rengi `antiquewhite` olarak belirlenmiştir.
- Tüm hücreler ortalanarak hizalanmıştır (`text-align: center`).

## 👥 Öğrenci Örnekleri

| Öğrenci No | Adı    | Soyadı  | Notu | Doğum Tarihi |
|------------|--------|---------|------|----------------|
| 123        | Ahmet  | ŞAHİN   | 87   | 04.08.1996     |
| 456        | Veli   | KARTAL  | 53   | 11.03.1996     |
| 789        | Fatma  | SERÇE   | 60   | 25.11.1996     |
| 741        | Rukiye | BAYKUŞ  | 91   | 09.01.1996     |
| 852        | Harun  | ATMACA  | 90   | 26.06.1996     |
| 963        | Şeyma  | GÜVERCİN| 97   | 01.03.1996     |
| 357        | Bekir  | AKBABA  | 36   | 17.07.1996     |
| 159        | Necmi  | KUMRU   | 96   | 24.12.1996     |
| 684        | Zeliha | LEYLEK  | 97   | 12.10.1996     |

## 🛠️ Nasıl Kullanılır?

1. Bu projeyi bilgisayarına indir.
2. `sinif_tablosu.html` dosyasını herhangi bir tarayıcıda aç.
3. Öğrenci bilgilerini görüntüle ya da düzenlemek istersen, HTML dosyasını bir kod editörü (VS Code, Sublime Text, Notepad++ vs.) ile açabilirsin.

## 📝 Notlar

- Proje, yalnızca HTML kullanılarak oluşturulmuştur.
- Harici bir CSS dosyası kullanılmamıştır; tüm stiller satır içi (`inline-style`) olarak uygulanmıştır.
