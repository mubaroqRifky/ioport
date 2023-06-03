const urlsToCache = [];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open("pwa-assets")
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch((err) => {
                console.log(err, "error cache");
            })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch((error) => {
            return caches.match(event.request);
        })
    );
});
