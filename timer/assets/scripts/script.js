const body = document.querySelector('body');
const secCounterGraf = document.querySelectorAll('.mili div');
const minCounterGraf = document.querySelectorAll('.sek div');
const btn = document.querySelector('button');
let secCounter = 0;
let minCounter = 0;
const clock = document.createElement('h1');
let sek;
let min;
body.append(clock);

function count() {
  if (secCounter >= 60) {
    secCounter = 0;
    minCounter++;
  }

  secCounter++;
  sek = secCounter.toString(2).padStart(10, 0).split('');
  min = minCounter.toString(2).padStart(10, 0).split('');
  secCounterGraf.forEach((div, id) => {
    if (sek[id] === '1') {
      div.classList.add('bg-color');
    } else {
      div.classList.remove('bg-color');
    }
  });
  minCounterGraf.forEach((div, id) => {
    if (min[id] === '1') {
      div.classList.add('bg-color');
    } else {
      div.classList.remove('bg-color');
    }
  });
  clock.textContent = `${min.join('')}:${sek.join('')}`;
}
let running = false;
let intId;
function app() {
  if (!running) {
    running = true;
    intId = setInterval(count, 1000);
    console.log(intId);
  } else {
    running = false;
    clearInterval(intId);
  }
  console.log(running);
}

btn.addEventListener('click', () => {
  app();
});
