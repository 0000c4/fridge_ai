if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const d=e=>n(e,f),o={module:{uri:f},exports:a,require:d};i[f]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(s(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"ae0b9de9e3935b0d0a8813415aa1e7a8"},{url:"assets/index-C5BikmF7.js",revision:null},{url:"assets/index-DMSsj-KD.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"b5e3dbd81501d30d84f6629e9b74727e"},{url:"favicon.svg",revision:"af9c6e9cefd288e1a968159bc5f8bfba"},{url:"fridge_1.png",revision:"ad2379a924e5752aeff32b3fa1cc0892"},{url:"fridge_2.png",revision:"f3ef2e937e7f8a4d68ef10f60361b5e2"},{url:"fridge_3.png",revision:"62ddc463effff4c65833bf2f975a5729"},{url:"fridge_4.png",revision:"39231eb410cbdc31f10f9ffca6dc2f3f"},{url:"index.html",revision:"03340ac3358ad5622309b550398caf68"},{url:"maskable-icon-512x512.png",revision:"dad539753eea6378e2498bfa58fdcdb9"},{url:"pwa-192x192.png",revision:"5507c1033da8aab367a0151f89b1e2ef"},{url:"pwa-512x512.png",revision:"82cad97efc6d64a04b0f57a34a29c766"},{url:"pwa-64x64.png",revision:"d0569fca0c8374a47d7890c6787c8ab8"},{url:"manifest.webmanifest",revision:"ff2d80a834fad7c54caa92de1aacfa8e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
