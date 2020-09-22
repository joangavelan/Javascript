const timerDay = document.querySelector(".timer__day");
const timerHour = document.querySelector(".timer__hour");
const timerMin = document.querySelector(".timer__min");
const timerSec = document.querySelector(".timer__sec");


function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    
    // return days + " " + hours + " " + minutes + " " + seconds;
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}


let timer = setInterval(function() {
    const startDate = new Date();
    const endDate = new Date("Wed Sep 16 2020 19:24:30");

    let timeDifferenceObj = getTimeDifference(startDate, endDate);

    timerDay.textContent = timeDifferenceObj.days;
    timerHour.textContent = timeDifferenceObj.hours;
    timerMin.textContent = timeDifferenceObj.minutes;
    timerSec.textContent = timeDifferenceObj.seconds;

    if (timeDifferenceObj.days === 0 && timeDifferenceObj.hours === 0 && timeDifferenceObj.minutes === 0 && timeDifferenceObj.seconds === 0) {
        clearInterval(timer);
    }
}, 1000)



