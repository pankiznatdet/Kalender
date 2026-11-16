# Kalender

**Hayat yoğun. Sevdiklerini ihmal etme.**
Kalender ile hiçbir özel günü kaçırma.

Doğum günleri, yıl dönümleri, randevular... Kalender özel günlerini önceden hatırlatır. Plan yapmaya zamanın kalır.

🔗 **Uygulama:** https://pankiznatdet.github.io/Kalender/

---

## Sen unutursun, Kalender unutmaz!

Kalender App ile hiçbir özel günü kaçırma.

- **Sıradaki günler bir bakışta:** en yakın gün en üstte, kaç gün kaldığı büyük yazılı.
- **Kişiler:** sevdiklerini ekle, doğum günlerini gir, Kalender listeye kendisi eklesin. Her kişiye hediye notları tut.
- **Takvim:** ay görünümünde günlerini ve resmi tatilleri gör.
- **Hatırlatma planı:** her gün için 1 hafta önce, 1 gün önce ya da o gün.
- **Tamamlananlar:** geçen günleri işaretle, en altta kapalı bir listede dursun.
- **İki görünüm:** renkli Pastel kartlar (varsayılan) ya da sade Liste. Profil → Görünüm'den seçilir.

## Neden Kalender?

- **Veri toplamaz.** Hesap yok, sunucu yok. Her şey senin telefonunda kalır.
- **Çevrimdışı çalışır.** İnternet olmadan da açılır.
- **Küçüktür.** Tüm uygulama 100 KB'ın altında.
- **Senin.** Ücretsiz kullan. Pro tek seferlik ödemeyle gelecek, abonelik yok.

## Telefona kurma

- **iPhone (Safari):** Paylaş → **Ana Ekrana Ekle**
- **Android (Chrome):** Menü (⋮) → **Uygulamayı yükle** / **Ana ekrana ekle**

Ana ekrandan açınca tam ekran, uygulama gibi çalışır.

> iPhone'da Safari sekmesi ile ana ekrandaki uygulama ayrı veri tutar. Günlerini hangisine girdiysen onu kullan.

## Yol haritası

- [ ] Bildirimler (App Store / Google Play sürümünde yerel bildirim)
- [ ] Yedekle ve geri yükle
- [ ] Profil adını düzenleme
- [ ] Kalender Pro (tek seferlik)
- [ ] App Store ve Google Play

---

## Geliştirici notları

Tek dosyalık vanilla HTML/CSS/JS PWA. Derleme adımı yok.

### Dosyalar

```
index.html              ← Uygulamanın tamamı
manifest.json           ← PWA manifest (ad, renk, ikonlar)
service-worker.js       ← Çevrimdışı önbellek
icon-192.png            ← Android ikonu
icon-512.png            ← Büyük ikon
icon-512-maskable.png   ← Android yuvarlak ikon (K güvenli alan içinde)
apple-touch-icon.png    ← iPhone ana ekran ikonu
favicon-32.png          ← Tarayıcı sekmesi ikonu
```

### Yayına alma

1. Dosyaları repo'nun kök dizinine yükle.
2. **Settings → Pages → Deploy from branch → main / (root)**
3. 1–2 dakika sonra yayında.

### Güncelleme

Her yeni sürümde `service-worker.js` içindeki `CACHE` değerini artır (örn. `kalender-v35-2` → `kalender-v36`). Yoksa telefonlar eski sürümü önbellekten açmaya devam eder. Güncellemeden sonra uygulamayı tamamen kapatıp yeniden aç.

### Veri

Tüm veri cihazda `localStorage` içinde durur:

| Anahtar | İçerik |
|---|---|
| `kalender.p.events` | Günler |
| `kalender.p.people` | Kişiler ve hediye notları |
| `kalender.p.set` | Ayarlar (hatırlatma planı, görünüm, tatiller) |
| `kalender.view` | Kartlar / Liste seçimi |

Anahtarların adını değiştirirsen eski veriyi yeni anahtara taşıyan kod da ekle. Yoksa kullanıcının girdiği her şey görünmez olur.

Tasarım: Pastel arayüz · Logo: mor K (`#5B3FD6`)
