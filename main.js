let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let clock = document.querySelector("#timer");
let count;
let sec = 0;
let min = 0;
let hour = 0;
let currentCommand;

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