
const newYears = '4 aug 2024';

const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

function conutdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
   
    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);
    
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
conutdown();

setInterval(conutdown, 1000);


