const clock = document.getElementById('current-time');
const dateDisplay = document.getElementById('current-date');
let colorPicker = document.querySelector('.color-picker')

function timeString(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

function formatMonth(month) {
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(month);
  return monthName;
}

function currenTime() {
  const date = new Date;
  
  const hour = timeString(date.getHours());
  const minute = timeString(date.getMinutes());
  const second = timeString(date.getSeconds());

  const time = `${hour}:${minute}:${second}`;

  clock.innerText = time;
}

function currentDate() {
  const date = new Date;

  const dateOfMonth = date.getDate();
  const month = formatMonth(date.getMonth());
  const year = date.getFullYear();

  const completeDate = `${month} ${dateOfMonth}, ${year}`

  dateDisplay.innerText = completeDate;
}

window.setInterval(currenTime, 1000);
window.setInterval(currentDate, 1000);
window.setInterval(() => {
  let color = colorPicker.value;
  document.body.style.backgroundColor = color;
}, 200);