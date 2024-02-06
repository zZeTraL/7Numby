// service-worker.js
const CACHE_NAME = '7Numby-b1.0.0';

const urlsToCache = [
    '/',
    '/characters',
    // Add more URLs to cache as needed
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
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