const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'https://raw.githubusercontent.com/apishunior2024/matematico/refs/heads/main/matematico192.jpg',
  'matematico512.png',
  // agrega otros recursos CSS, JS, fuentes, etc, según tu proyecto
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

