!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=0;t.startBtn.addEventListener("click",(function(r){t.stopBtn.removeAttribute("disabled"),r.target.setAttribute("disabled",!0),e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(r){clearInterval(e),r.target.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.c8de2f6e.js.map