const semicircles = document.querySelectorAll(".semicircle");
let [getHours, getMinutes, getSeconds] = [0, 0, 0];
let [hours, minutes, seconds] = [0, 0, 0];
let futureTime;
let int = null;
let setTime;
let currentTime;

const getData = document.getElementById("getData").addEventListener("click", () => {
    getHours = document.getElementById("getHours").value;
    getMinutes = document.getElementById("getMinutes").value;
    getSeconds = document.getElementById("getSeconds").value;

    hours = getHours * 3600000;
    minutes = getMinutes * 60000;
    seconds = getSeconds * 1000;

    let startTime = Date.now();
    setTime = hours + minutes + seconds;
    futureTime = startTime + setTime;
    currentTime = Date.now();
    function startTimer() {
        if(int !== null) {
            clearInterval(int);
        }
    
        int = setInterval(countDownTimer, 10);
    }

    startTimer();
})


 

// const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");



// let timerLoop = setInterval(countDownTimer, 10);


const countDownTimer = () => {
    currentTime+= 10;
    let remainingTime = futureTime - currentTime;
    let angle = (remainingTime / setTime) * 360;
    console.log(1);
    if(angle > 180) {
        semicircles[2].style.display = "none";
        semicircles[0].style.transform = "rotate(180deg)";
        semicircles[1].style.transform = `rotate(${angle}deg)`;
        console.log(2)
    } else {
        semicircles[2].style.display = "block";
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
        console.log(3);
    }


    if(remainingTime < 0) {
        clearInterval(int);
    }

}





stopTimer.addEventListener("click", () => {
    clearInterval(int);

})
