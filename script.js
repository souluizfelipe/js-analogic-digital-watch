const digitalElement = document.querySelector('.digital');


function updatedClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  digitalElement.textContent = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}
;
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
};

setInterval(updatedClock, 1000);