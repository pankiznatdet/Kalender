// Kalender — Service Worker
// Cache version'ı değiştirmek tüm asset cache'ini yenileyip taze deploy çeker.
const CACHE = 'kalender-v11';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon-32.png'
];

// ─── Install: pre-cache core assets ───
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ─── Activate: eski cache versiyonlarını temizle ───
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ─── Fetch stratejisi ───
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Navigasyon: network-first → offline fallback
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(resp => {
          // Başarılı navigasyonu cache'e koy
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put('./index.html', clone));
          return resp;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Google Fonts: stale-while-revalidate (offline için kritik)
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(cached => {
        const fetchPromise = fetch(req).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return resp;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Aynı origin assets: cache-first
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return resp;
        });
      })
    );
  }
});
