// importamos workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) { //workbox solo existe en el scope del serviceWorker

    // añadimos configuración de workbox
    workbox.core.setCacheNameDetails({
        prefix: 'manuelmejias-blog-app',
        suffix: 'v1',
        precache: 'precache-cache',
        runtime: 'runtime-cache'
    });

    // cacheamos archivos html con estrategia CacheFirst
    workbox.routing.registerRoute(
        /(\w*[-]?[\.]?\w*)\.html$/,
        workbox.strategies.StaleWhileRevalidate()
    );

    // cacheamos los archivos de imágenes con la estrategia CacheFirst
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|webp|svg|ico)$/,
        workbox.strategies.StaleWhileRevalidate()
    );

    // cacheamos todos los archivos del directorio assets con estrategia staleWhileRevalidate
    workbox.routing.registerRoute(
        /assets\/(video\/(\w*[-]?[\.]?\w*).mp4)|assets\/(js\/(\w*[-]?[\.]?\w*).js)|assets\/(css\/(\w*[-]?[\.]?\w*).css)/,
        workbox.strategies.StaleWhileRevalidate()
    );

    // cacheamos el webmanifest con estrategia CacheFirst
    workbox.routing.registerRoute(
        /manifest.webmanifest/,
        workbox.strategies.StaleWhileRevalidate()
    );

    // cacheamos CDN de librerías y el CDN  de workbox con estrategia CacheFirst
    workbox.routing.registerRoute(
        /(https:\/\/unpkg.+)|(https:\/\/cdnjs.+)|(https:\/\/cdn.+)|(https:\/\/storage\.googleapis.+)/g,
        workbox.strategies.StaleWhileRevalidate()
    );
}