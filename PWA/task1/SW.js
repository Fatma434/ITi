self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(async (cache) => {
      let ok,
      cats = [
        'a', 'folder', 'with',
        'lots', 'of', 'files',
        'for', 'the', 'same', 'extension'
      ],
      c = [
       
       'http://127.0.0.1:5500/task1.html',
       'http://127.0.0.1:5500/style.css',
       'http://127.0.0.1:5500/indexDB.js'


        ];
  
      console.log('ServiceWorker: Caching files:', c.length, c);
      try {
        ok = await cache.addAll(c);
      } catch (err) {
        console.error('sw: cache.addAll');
        for (let i of c) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.warn('sw: cache.add',i);
          }
        }
      }
  
      return ok;
    }));
  
    console.log('ServiceWorker installed');
  });