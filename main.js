let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let clock = document.querySelector("#timer");
let count;
let sec = 0;
let min = 0;
let hour = 0;

startBtn.addEventListener("click", ()=> {
    count = setInterval(timer, 1000);
})

stopBtn.addEventListener("click", ()=> {
    count = clearInterval(count);
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