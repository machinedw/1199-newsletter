// Service Worker for 1199SEIU Newsletter
// Enables offline functionality and faster loading

const CACHE_NAME = '1199-newsletter-v1';
const ASSETS_TO_CACHE = [
    '/1199-newsletter-jan-2026/',
    '/1199-newsletter-jan-2026/index.html',
    '/1199-newsletter-jan-2026/css/style.css',
    '/1199-newsletter-jan-2026/js/app.js',
    '/1199-newsletter-jan-2026/js/content.js',
    '/1199-newsletter-jan-2026/manifest.json'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching newsletter assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests (like Unsplash images)
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request)
                    .then((fetchResponse) => {
                        // Cache the new response for future use
                        return caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, fetchResponse.clone());
                                return fetchResponse;
                            });
                    });
            })
            .catch(() => {
                // If both cache and network fail
                console.log('Offline mode active');
            })
    );
});