if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const t=e=>n(e,r),u={module:{uri:r},exports:l,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.b2897446.css",revision:null},{url:"/css/chunk-vendors.34316f37.css",revision:null},{url:"/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/img/logo.63028820.svg",revision:null},{url:"/index.html",revision:"8b5ce770ea0b11e6ddaace2c171588c6"},{url:"/js/about.f804f8e6.js",revision:null},{url:"/js/app.837ce6b8.js",revision:null},{url:"/js/chunk-vendors.535f9811.js",revision:null},{url:"/js/webfontloader.a7dee90b.js",revision:null},{url:"/manifest.json",revision:"833d8182528a24c31b14f9eb0af10af2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
