const CACHE_RUNTIME = 'faerbl-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_RUNTIME).then((cache) => {
      return cache.addAll([
        '/faerbl/',
        '/faerbl/index.html'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
    const currentCaches = [CACHE_RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

// Empty fetch event handler
self.addEventListener('fetch', (event) => {

    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(CACHE_RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }

});