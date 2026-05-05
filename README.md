# Kalender

Önemli günler, anılar ve unutulmayacak tarihler için Türkçe PWA.

## Özellikler

- Düğün, doğum günü, yıldönümü gibi kategoriler
- Geri sayım ve detay görünümü
- Sola swipe ile favori / sil aksiyonları
- Favoriler sekmesi
- Düğün ve doğum günü için harcama (takı + para / hediye) takibi
- Çevrimdışı çalışma (service worker)
- iOS / Android ana ekrana eklenebilir (PWA)

## Kurulum

1. Bu klasördeki tüm dosyaları repo'nun **root**'una koyun
2. GitHub Pages'i aktif edin: **Settings → Pages → Source: Deploy from branch → main / (root)**
3. 1-2 dakika sonra `https://pankiznatdet.github.io/<repo-adi>/` adresinde yayında

## Dosya yapısı

```
index.html              ← Ana uygulama (single-file)
manifest.json           ← PWA manifest
service-worker.js       ← Çevrimdışı cache
icon-192.png            ← PWA icon (Android)
icon-512.png            ← PWA icon (büyük)
icon-512-maskable.png   ← Adaptive icon (Android)
apple-touch-icon.png    ← iOS home screen icon
favicon-32.png          ← Tarayıcı favicon
```

## Güncelleme

`service-worker.js` içindeki `CACHE` değişkenini bumplayın (örn. `kalender-v4` → `kalender-v5`)
ki kullanıcılar yeni sürümü çekebilsin.

## Veri

Tüm veri kullanıcının cihazında `localStorage` içinde tutulur. Sunucu yok.
Storage key: `onemliGunler.v1`
