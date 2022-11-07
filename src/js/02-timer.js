
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const calendarInput = document.querySelector("#datetime-picker");
const startTimerBtn = document.querySelector("[data-start]");
const headRef = document.querySelector("head");

const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");


const timerStyles = `
<style> 
.timer {
  display:flex;
}
.field {
  padding: 0;
  margin: 0;
  width: 40px;
}
.value {
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.label {
  display: block;
  font-size: 8px;
  text-transform:uppercase;
  text-align: center;
}
</style>
`;

headRef.insertAdjacentHTML("beforeend", timerStyles);

// let deltaDate = 0;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onOpen() {
    startTimerBtn.setAttribute("disabled", true);
    },
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
      const deltaDate = selectedDates[0] - new Date();
      if (deltaDate <= 0) {
        return Notiflix.Report.warning("Attention!", "Please choose a date in the future");
      }
      startTimerBtn.removeAttribute("disabled");
    },
  };
  
  const fp = flatpickr(calendarInput, options);

  startTimerBtn.setAttribute("disabled", true);

  startTimerBtn.addEventListener("click", onStartBtnClick);

  function onStartBtnClick() {
    setInterval( () => {
    const deltaDate = fp.selectedDates[0] - new Date();
    const dateInDaysFormat = convertMs(deltaDate); 
    
    daysRef.textContent = addLeadingZero(dateInDaysFormat.days);
    hoursRef.textContent = addLeadingZero(dateInDaysFormat.hours);
    minutesRef.textContent = addLeadingZero(dateInDaysFormat.minutes);
    secondsRef.textContent = addLeadingZero(dateInDaysFormat.seconds);
    }
      , 1000
    ) ;

  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  };
 
