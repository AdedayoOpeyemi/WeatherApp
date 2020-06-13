!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const r=document.getElementById("search"),o=document.getElementById("submit"),i=document.getElementById("location"),a=document.getElementById("temp"),c=document.getElementById("flike"),s=document.getElementById("weather"),d=document.getElementById("alert"),u=async e=>{const t=await fetch(`http://api.giphy.com/v1/gifs/search?q=${e}&limit=1&api_key=hZA0UJe9PBW5av8TZ6DSWJPnGAQ5XIdO`,{mode:"cors"}),n=await t.json();"400"===n.cod&&"404"===n.cod||(e=>{const t=document.getElementById("gif");t.src=e,t.classList.remove("hidden")})(n.data[0].images.original.url)},l=()=>{if(localStorage.weather){d.classList.add("hidden");const e=JSON.parse(localStorage.weather);u(e.weather),i.innerHTML=`<strong>Location:</strong> ${e.country}, ${e.name}`,s.innerHTML="<strong>Condition:</strong> "+e.description,a.innerHTML=`<strong>Temperature:</strong> ${e.temp}°`,c.innerHTML=`<strong>Feeling like:</strong> ${e.flike}°`,c.parentNode.classList.remove("hidden")}else c.parentNode.classList.add("hidden"),d.innerHTML="<strong>Please provide a valid city.</strong>",d.classList.remove("hidden")};((e,t,n)=>{o.addEventListener("click",()=>{e(t,n,l)},!1),r.addEventListener("keypress",e=>(13===e.keyCode||13===e.which)&&(e.preventDefault(),!1),!1)})(async(e,t,n)=>{const r=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e()}&APPID=17bfcd723e4a10d65e366ef5bc79951f&units=${t()}`,{mode:"cors"});(e=>{if("400"===e.cod||"404"===e.cod)return localStorage.clear(),"Weather not found for city provided";const{main:t,name:n,sys:r,weather:o,wind:i}=e,a={weather:o[0].description,description:o[0].main,name:n,temp:t.temp,flike:t.feels_like,humidity:t.humidity,country:r.country,windSpeed:i.speed,windDirection:i.deg};localStorage.setItem("weather",JSON.stringify(a))})(await r.json()),n()},()=>document.getElementById("search").value,()=>document.querySelector("input[name=units]:checked").value)},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],d=n[s]||0,u="".concat(s," ").concat(d);n[s]=d+1;var l=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=d(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),d=0;d<n.length;d++){var u=c(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"*{margin:0;padding:0;box-sizing:border-box}body{position:relative;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fffceb}body header{background-color:white;padding:1em;border:1px solid lightgray;box-shadow:0 0 10px rgba(128,128,128,0.5);border-radius:8px}body #result{background-color:white;padding:1em;border:1px solid lightgray;box-shadow:0 0 10px rgba(128,128,128,0.5);border-radius:8px}body #result img{margin-top:10px;max-height:250px;border-radius:5px}body h1,body input{margin-bottom:1em}body #result,body #alert{margin-top:1em}body .hidden{display:none}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}}]);