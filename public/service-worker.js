const cachePages = [
  'favicon.ico',
  'index.html'
]

//self = window.nagivator.serviceWorker
self.addEventListener('install', (event) => {
  caches.open("CachedItems")
  .then(cache => {
    console.warn("Files cached")
    cache.addAll(cachePages)
  })
});