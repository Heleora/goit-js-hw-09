
import Notiflix from 'notiflix';


  const form = document.querySelector(".form");
  const createPromiseBtn = document.querySelector("button");


form.addEventListener("submit", onFormSubmit);

 

function onFormSubmit (evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const delay = formElements.delay.value;
  const step = formElements.step.value;
  const amount = formElements.amount.value;

  let position = 1;
  
  for (let i = 0; i < amount; i++) {
    createPromise(position, delay, step)
    .then(({ position, resultDelay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${resultDelay}ms`);
    })
    .catch(({ position, resultDelay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${resultDelay}ms`);});
      position += 1;
    }
    
    evt.currentTarget.reset;
  }

function createPromise(position, delay, step) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const resultDelay = Number(delay) + (Number(position) - 1) * Number(step);

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
     resolve({ position, resultDelay });
    }
    else {
      // Reject
      reject ({ position, resultDelay });
    }
  }
  , resultDelay
    )

  })
};


// for (let i = 0; i < amount; i++) {
//   createPromise(position, delay, step)
//   .then(value => console.log(value)) 
//   .catch(error => console.log(error));
//   position += 1;
// }