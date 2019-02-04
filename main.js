let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let clock = document.querySelector("#timer");
let count;
let sec = 0;
let min = 0;
let hour = 0;
let currentCommand;
let alarm;
let audio = new Audio("ring.mp3");

startBtn.addEventListener("click", ()=> {
    count = setInterval(timer, 1000);
    startBtn.disabled = true;
    currentCommand = "start";
})

stopBtn.addEventListener("click", ()=> {
    count = clearInterval(count);
    startBtn.disabled = false;
    currentCommand = "stop";
})

resetBtn.addEventListener("click", ()=> {
    min = 0; sec = 0; hour = 0;
    if (currentCommand === "stop") {
        clock.innerHTML = show(hour) + " : " + show(min) + " : " + show(sec);
    }
})

function timer() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hour++;
    }

    showTimer();

    if (getSeconds(hour, min, sec) >= alarm) {
        audio.play();
        stopBtn.click();
    }
}

function showTimer() {
    clock.innerHTML = show(hour) + " : " + show(min) + " : " + show(sec);
}

function show(time) {
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

function getSeconds(h, m, s) {
    let secs = s;
    let mins = m * 60;
    let hours = h * 60 * 60; 

    return secs + mins + hours;
}

let min1 = document.querySelector("#min1");
let hour1 = document.querySelector("#hour1");
let hour10 = document.querySelector("#hour10");

min1.addEventListener("click", ()=> {
    alarm = getSeconds(0, 1, 0);
})

hour1.addEventListener("click", () => {
    alarm = getSeconds(1, 0, 0);
})

hour10.addEventListener("click", () => {
    alarm = getSeconds(10, 0, 0);
})