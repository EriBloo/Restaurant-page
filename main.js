!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={home:{About:"Inspired by best ramen restaurants in the world we would like to bring this amazing experience straight to your home.","Our mission":"Always fresh and the same tasty dishes delivered fast, straight to youe home. Order Now!"},menu:{Ramen:"Mild or spicy. With meat or vegetarian. Something for everybody.",Miso:"Simple soup for not so hungry.",Tonkatsu:"Japanease way to serve pork.",Donburi:"Japanease bowl full of taste.",Drinks:"Everyday we serve something different. Just ask."},contact:{Phone:"999-888-777",Mail:"bestramen@ramen.com"}};function o(e,t){let n=document.createElement(e);return n.textContent=t,n}!function(e){const t=document.querySelector("#content");for(let n of e)t.appendChild(n)}(function(){const e=[];for(const[t,n]of Object.entries(r.home))e.push(o("h2",t)),e.push(o("h3",n));return e}())}]);