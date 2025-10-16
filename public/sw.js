self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('faerbl-v1').then((cache) => {
      return cache.addAll([
        '/faerbl/',
        '/faerbl/index.html'
      ]);
    })
  );
});

self.addEventListener('activate', () => {
  // Clean up old caches if needed in the future
  console.log('Service worker activated');
});

// Empty fetch event handler
self.addEventListener('fetch', () => {
  // This is an empty fetch event handler
  // It will be triggered for all fetch requests but won't do anything
});