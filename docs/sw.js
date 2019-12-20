// sw.js

const staticAssets = [
    './docs/',
    './docs/style.css',
    './docs/main.js',
    './docs/index.html',
    './docs/templates/',
    './docs/templates/index.html',
    './docs/templates/a-paragraph/a-paragraph.css',
    './docs/templates/a-paragraph/a-paragraph.html',
    './docs/templates/a-paragraph/a-paragraph.js',
    './docs/templates/elem-details/elem-details.css',
    './docs/templates/elem-details/elem-details.html',
    './docs/templates/elem-details/elem-details.js'
    
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.url) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}