'use strict';
const CACHE='notesprint-shell-v1',BASE=new URL('./',self.location.href).href;
const FILES=['./','index.html','style.css','engine.js','app.js'].map(p=>new URL(p,BASE).href);
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('notesprint-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!FILES.includes(e.request.url))return;e.respondWith(caches.open(CACHE).then(async c=>(await c.match(e.request))||fetch(e.request)));});
self.addEventListener('message',e=>{if(e.data==='CHECK_CACHE'&&e.ports[0])e.waitUntil(caches.open(CACHE).then(async c=>{const present=await Promise.all(FILES.map(f=>c.match(f)));e.ports[0].postMessage({ready:present.every(Boolean)});}));});
