self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{if(e.request.method==='GET'){e.respondWith(caches.open('baep-v1').then(async c=>{let r=await c.match(e.request);if(r)return r;try{let n=await fetch(e.request);c.put(e.request,n.clone());return n}catch(err){return caches.match('./index.html')}}))}});
