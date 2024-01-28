let cachName = "cacheV1";
let Assets = [
    // "http://127.0.0.1:5500/index.html",
    // "http://127.0.0.1:5500/style.css"
    // ,
    // "http://127.0.0.1:5500/indexeddb.js"
];

//~ installition lifecycle we put cache files
self.addEventListener("install",(installEvent)=>{
    console.log("installEvent",installEvent);
    //^ we use this method to prevent sw from going to activate immediately without caches
    installEvent.waitUntil(
        caches.open(cachName).then(cache=>{
            cache.addAll(Assets).then().catch()
        }).catch(err=>console.log(err))
    )
});

self.addEventListener("activate",(activatedEvent)=>{
    activatedEvent.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(
                keys.filter((key)=>key!= cachName).map(key=>caches.delete(key))
            )
        }).catch(err=>console.log(err))
    )
});

self.addEventListener("fetch",(fetchedEvent)=>{
    console.log(fetchedEvent.request)
    fetchedEvent.respondWith(
        caches.match(fetchedEvent.request).then(res=>{
            return res;
        })
    )
})