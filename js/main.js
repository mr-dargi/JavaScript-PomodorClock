// recive semicircle for changing css value
let semicircles = document.querySelectorAll(".semicircle");


// create variable for user Inputs
let [getHours, getMinutes, getSeconds] = [0,0,0]; 


// Recive buttons
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");


// Recive timer document
const timer = document.getElementById("timer");


// Make variable for put setInterval
let int = null;


// create future Time variable 
let getTime = Date.now();
let makeTime;
let futureTime;


// make function for give data from user input and put it in our variable
const giveInput = () => {
    getHours = document.getElementById("getHours").value;
    getMinutes = document.getElementById("getMinutes").value;
    getSeconds = document.getElementById("getSeconds").value;
}


// make function to change a time to milisecond
let [hours, minutes, seconds] = [0,0,0];
const changTime = () => {
    hours = getHours * 3600000;
    minutes = getMinutes * 60000;
    seconds = getSeconds * 1000;
}


// make function for recive buttons events
startTimer.addEventListener("click", () => {
    // call function to recive inputs 
    giveInput();


    // changing time to miliseconds
    changTime();


    // redclear future time
    makeTime = hours + minutes + seconds;
    futureTime = makeTime + getTime;


    // make interval
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(countDownTimer, 10)
})

let angle = 0;

stopTimer.addEventListener("click", () => {
    clearInterval(int);
    timer.innerHTML = "00:00:00";
    semicircles[2].style.display = "none";
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
})



// make Function to count time 
const countDownTimer = () => {
    getTime+= 10;

    const remainingTime = futureTime - getTime;
    const hr = Math.floor((remainingTime / 36000000) % 24);
    const min = Math.floor((remainingTime / 60000) % 60);
    const sec = Math.floor((remainingTime / 1000) % 60);

    const hrs = hr < 10 ? "0" + hr : hr;
    const mins = min < 10 ? "0" + min : min;
    const secs = sec < 10 ? "0" + sec : sec;

    timer.innerHTML = `${hrs}:${mins}:${secs}`;

    // make progress indicator
    angle = (remainingTime / makeTime) * 360;

    
    if(angle > 180) {
        semicircles[2].style.display = "none";
        semicircles[0].style.display = "block";
        semicircles[1].style.display = "block";
        semicircles[0].style.transform = "rotate(180deg)";
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicircles[2].style.display = "block";
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    }

    if(remainingTime < 0) {
        clearInterval(int);
        timer.innerHTML = "00:00:00";
        semicircles[2].style.display = "none";
        semicircles[0].style.display = "none";
        semicircles[1].style.display = "none";
    }
}

