// const version = 'v2';
// const assetsCache = `assets-${version}`;


// const coreCacheurls = [
//     'uikit.min.css',
//     'app.js',
//     '/index.html',
//     'uikit.min.js'
// ];

// const addToCache = (cacheName, req, res) =>
//     caches.open(cacheName).then(cache => {
//         cache.put(req, res);
//     });


// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(assetsCache)
//         .then(cache => {
//             cache.addAll(coreCacheurls)
//                 .then(() => {
//                     console.log('Cached')
//                 })
//         })
//     )
// });


// self.addEventListener('fetch', event => {
//     const request = event.request;
//     const headers = request.headers.get('Accept');
//     /**
//      * HTML Requests
//      */
//     if (headers.indexOf('text/html') !== -1) {
//     }
// })