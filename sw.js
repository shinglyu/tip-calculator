// Service Worker
// version: 0.3
//
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        '/tip-calculator/',
        '/tip-calculator/index.html',
        '/tip-calculator/manifest.json',
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
})
