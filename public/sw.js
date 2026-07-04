const CACHE_NAME = "taskido-v1";

// فقط چیزهایی که واقعا ثابت هستند را کش کن
const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  // اگر در حالت توسعه هستیم یا فایل مربوط به HMR است، کش نکن
  if (
    event.request.url.includes("_next/static/") || 
    event.request.url.includes("hot-update")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
