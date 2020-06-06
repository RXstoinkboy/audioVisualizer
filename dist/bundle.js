!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1"> <meta http-equiv=X-UA-Compatible content="ie=edge"> <title>Audio visualization</title> <style>*{box-sizing:border-box;margin:0;padding:0}#canvas{height:100vh;width:100%}.controls{position:absolute;top:10px;left:10px;display:flex;flex-direction:column}</style> </head> <body> <canvas id=canvas></canvas> <div class=controls> <button id=playPouse data-playing=false>PLAY / POUSE</button> <button id=stop>STOP</button> <label for=volume> Volume <input type=range id=volume min=0 max=1 step=0.1> </label> </div> <audio src=./src/assets/bensound-sunny.mp3 crossorigin=anonymous></audio> <script src=./dist/bundle.js><\/script> </body> </html>'},function(e,t,n){"use strict";n.r(t);n(0);var o=new(window.AudioContext||window.webkitAudioContext),r=document.querySelector("audio");o.createMediaElementSource(r).connect(o.destination);var i=document.querySelector("#playPouse"),u=document.querySelector("#volume"),l=document.querySelector("#stop");i.addEventListener("click",function(){console.log("toggle Play/Pouse"),"suspended"===o.state&&o.resume(),r.play();var e=r.play();e&&e.catch(function(e){console.error(e)})}),u.addEventListener("change",function(){console.log("changeVolume")}),l.addEventListener("click",function(){console.log("stop")})}]);