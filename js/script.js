let clockH = document.querySelector('.clock-hours');
let clockM = document.querySelector('.clock-minutes');
let clockS = document.querySelector('.clock-seconds');


let countdownDays = document.querySelector('.countdown-days');
let countdownHours = document.querySelector('.countdown-hours');
let countdownMinutes = document.querySelector('.countdown-minutes');
let countdownSeconds = document.querySelector('.countdown-seconds');


let finalDate = new Date('Jun 8, 2021 00:00:00');

let second = 1000;
let minute = 60*second;
let hour = 60*minute;
let day = 24*hour;

let startClock = () => {
    updateTime();
    updateCountdown();
    setInterval(() => {
        updateTime();
        updateCountdown();
    }, 1000)
}
let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}
let updateCountdown = () => {
    let now = new Date();
    let diff = finalDate - now;
    console.log(convertMilliSecToDHMS(diff));

    let diffObject = convertMilliSecToDHMS(diff);
    countdownDays.textContent = diffObject.days >= 10 ? diffObject.days : '0' + diffObject.days;
    countdownHours.textContent = diffObject.hours >=10 ? diffObject.hours : '0' + diffObject.hours;
    countdownMinutes.textContent = diffObject.minutes >=10 ? diffObject.minutes : '0' + diffObject.minutes;
    countdownSeconds.textContent = diffObject.seconds >=10 ? diffObject.seconds : '0' + diffObject.seconds;
}
let convertMilliSecToDHMS = (millis) => {
    let days = Math.floor(millis / day);
    let hours = Math.floor(millis % day / hour);
    let minutes = Math.floor(millis % hour / minute);
    let seconds = Math.floor(millis % minute / second);

    return {days, hours, minutes, seconds};
}
startClock();
