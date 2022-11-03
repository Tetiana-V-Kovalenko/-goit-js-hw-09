const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyHTML = document.querySelector('body');
const INTERNAL_DELAY = 1000;
let intervalId;

btnStart.addEventListener('click', () => {
  btnStop.removeAttribute('disabled');
  btnStart.setAttribute('disabled', '');
  intervalId = setInterval(() => {
    bodyHTML.style.backgroundColor = `${getRandomHexColor()}`;
  }, INTERNAL_DELAY);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
  btnStop.setAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
