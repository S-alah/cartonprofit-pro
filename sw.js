const cacheName = 'carton-profit-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// تثبيت السيرفس وركر وتخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق من التخزين (حتى لو مفيش نت)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
