const secCounterGraf = document.querySelectorAll(".mili div");
const minCounterGraf = document.querySelectorAll(".sek div");
const hourCounterGraf = document.querySelectorAll(".hour div");

function count() {
    let time = new Date();
    let hour = time.getHours().toString(2).padStart(6, 0).split("").reverse();
    let min = time.getMinutes().toString(2).padStart(7, 0).split("").reverse();
    let sec = time.getSeconds().toString(2).padStart(7, 0).split("").reverse();
  secCounterGraf.forEach((div, id) => {
    if (sec[id] === "1") {
      div.classList.replace('point-inactive','point-active');
    } else {
      div.classList.replace('point-active','point-inactive');
    }
  });
  minCounterGraf.forEach((div, id) => {
    if (min[id] === "1") {
      div.classList.replace('point-inactive','point-active');
    } else {
      div.classList.replace('point-active','point-inactive');
    }
  });

    hourCounterGraf.forEach((div, id) => {
    if (hour[id] === "1") {
      div.classList.replace('point-inactive','point-active');
    } else {
      div.classList.replace('point-active','point-inactive');
    }
  });
}
function app() {
  setInterval(count, 1000);
}
app();