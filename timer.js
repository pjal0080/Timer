const timer = () => {

    const timerDate = new Date("September 30, 2021 12:00:00").getTime();
    const currDate = new Date().getTime();

    const diff = timerDate - currDate;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = 24 * hour;

    const timerDay = Math.floor(diff/day);
    const timerHour = Math.floor((diff%day)/hour);
    const timerMin = Math.floor((diff%hour)/min);
    const timerSec = Math.floor((diff%min)/sec);

    document.querySelector(".tday").innerText = timerDay;
    document.querySelector(".thour").innerText = timerHour;
    document.querySelector(".tmin").innerText = timerMin;
    document.querySelector(".tsec").innerText = timerSec;

};



setInterval(timer,1000);