!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=(document.querySelector(".form"),document.querySelector('input[name="delay"]')),l=document.querySelector('input[name="step" ]'),c=document.querySelector('input[name="amount"]'),a=document.querySelector("button");function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}console.log(c),a.addEventListener("click",(function(n){n.preventDefault(),console.log(u.value,l.value);for(var o=0;o<c.value;o++){var t=Number(u.value)+o*Number(l.value);console.log(t),d(o+1,t).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.c92ebcf4.js.map