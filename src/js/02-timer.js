// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const calendar = document.querySelector('#datetime-picker');
const startBnt = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startBnt.setAttribute('disabled', '');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    options.finalSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    console.log(selectedDates[0].getTime());
    if (selectedDates[0].getTime() <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBnt.removeAttribute('disabled');
      startBnt.addEventListener('click', onStartBtnClick);
    }
  },
  onOpen() {
    startBnt.setAttribute('disabled', '');
    startBnt.removeEventListener('click', onStartBtnClick);
  },
};

flatpickr('input#datetime-picker', options);

function onStartBtnClick() {
  calendar.setAttribute('disabled', '');
  startBnt.setAttribute('disabled', '');

  setInterval(() => {
    const differenceOfTime = options.finalSelectedDate - Date.now();
    if (differenceOfTime <= 0) {
      calendar.removeAttribute('disabled');
      return;
    }
    updateTime(convertMs(differenceOfTime));
  }, 1000);
}

function updateTime({ days, hours, minutes, seconds }) {
  timerDays.textContent = `${addLeadingZero(days)}`;
  timerHours.textContent = `${addLeadingZero(hours)}`;
  timerMinutes.textContent = `${addLeadingZero(minutes)}`;
  timerSeconds.textContent = `${addLeadingZero(seconds)}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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
}
