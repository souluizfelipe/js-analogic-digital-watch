const digitalElement = document.querySelector('.digital');
const pointerSec = document.querySelector('.p_s');
const pointerMin = document.querySelector('.p_m');
const pointerHour = document.querySelector('.p_h');

function updatedClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  digitalElement.textContent = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

  let secDeg = ((360 / 60) * second) - 90;
  let minDeg = ((360 / 60) * minute) - 90;
  let hourDeg = ((360 / 12) * hour) - 90;

  pointerSec.style.transform = `rotate(${secDeg}deg)`;
  pointerMin.style.transform = `rotate(${minDeg}deg)`;
  pointerHour.style.transform = `rotate(${hourDeg}deg)`;
}
;
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
};

setInterval(updatedClock, 1000);
updatedClock();