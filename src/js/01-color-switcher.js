// const refs = {
//     startBtn: document.querySelector("button[data-start]"),
//     stopBtn: document.querySelector("button[data-stop]"),
// }

// refs.startBtn.style.backgroundColor = "green";
// refs.stopBtn.style.backgroundColor = "red";

const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    body: document.querySelector("body"),
    };
    let timerID = 0;
    
    refs.startBtn.addEventListener("click", changeBodyColor);
    refs.stopBtn.addEventListener("click", stopBodyColor);
    
    function changeBodyColor (evt) {
    refs.stopBtn.removeAttribute("disabled");
    evt.target.setAttribute("disabled", true);
    timerID = setInterval( () => {
    refs.body.style.backgroundColor = getRandomHexColor()
    }, 
    1000);
    };
    
    function stopBodyColor (evt) {
    clearInterval(timerID);
    evt.target.setAttribute("disabled", true);
    refs.startBtn.removeAttribute("disabled");
    };
    
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };