self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-app-cache').then((cache) => {
      return cache.addAll([
        'http://127.0.0.1:5500/Home.html',
        'http://127.0.0.1:5500/style.css',
        'http://127.0.0.1:5500/script.js',
        'http://127.0.0.1:5500/images/laptop_top.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});







