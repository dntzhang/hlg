"use strict";var precacheConfig=[["./index.html","eb45a58fd4a825b2c44daee4829cc40a"],["./static/js/index.758b41f2.js","959f7534caae433a49455e0ecb68ca06"],["./static/media/1.19570a82.png","19570a828e82911ce034a77d18270bb7"],["./static/media/10.40e9f000.png","40e9f0008c2bdc4610cd863adee7d711"],["./static/media/11.13b3d1b4.jpg","13b3d1b4f463e85ae0abdf1cc5675785"],["./static/media/2.f1dad3ec.png","f1dad3ecabc08a286651864141805414"],["./static/media/3.21b22a41.png","21b22a411039e24bbd5482e6c4553466"],["./static/media/4.36b15637.png","36b15637e0ba7ed6b17a89409bfed1de"],["./static/media/5.69366762.png","69366762305ed6f0da806ee793d78626"],["./static/media/6.c0027d13.png","c0027d135d291cb3e2ee0d7a4def0b2d"],["./static/media/7.7d48a60c.png","7d48a60c3b5d091c889100a77f34b059"],["./static/media/8.dcebb3a3.png","dcebb3a348a37fedd645060c270578f4"],["./static/media/9.058befd0.png","058befd0da7e9959860eac267df6a3d8"],["./static/media/bg-end.983f19a1.jpg","983f19a14d20bd1bed877c1b514d55fb"],["./static/media/bg-flash.3c661551.jpg","3c661551bf0a623231a53ec039acd1ad"],["./static/media/cat.55d89795.png","55d897954debd849383bc9f45088dda9"],["./static/media/door.6b7cee48.png","6b7cee4845909a3e2ebf80b716bc3c4e"],["./static/media/logo-word.3f6ac19e.png","3f6ac19e52beb3e6fe291d72de3215e0"],["./static/media/logo-wording.6a0ddf42.png","6a0ddf4233e74da91db5d65dee261336"],["./static/media/mask.bad897ee.png","bad897eec3a63581e6df7893e3ab5e19"],["./static/media/open-door.a662a744.png","a662a74429bb858bd21cc69c84423ab9"],["./static/media/room.02bf5773.jpg","02bf5773a9bcad83789aecbb0a431dee"],["./static/media/wording.871cbb8d.png","871cbb8d6ddac118292e360e6a759f06"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("./index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});