!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("iU1Pc"),u=document.querySelector(".form");document.querySelector("button");function l(e,t,n){return new Promise((function(r,o){var i=Math.random()>.3,u=Number(t)+(Number(e)-1)*Number(n);setTimeout((function(){i?r({position:e,resultDelay:u}):o({position:e,resultDelay:u})}),u)}))}u.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,r=n.delay.value,o=n.step.value,u=n.amount.value,a=1,c=0;c<u;c++)l(a,r,o).then((function(t){var n=t.position,r=t.resultDelay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r,"ms"))})).catch((function(t){var n=t.position,r=t.resultDelay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r,"ms"))})),a+=1;t.currentTarget.reset}))}();
//# sourceMappingURL=03-promises.f15c7ea2.js.map