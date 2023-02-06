// recive semicircle for changing css value
let semicircles = document.querySelectorAll(".semicircle")

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

// make function for recive buttons events
startTimer.addEventListener("click", () => {
    // recive user input 
    getHours = document.getElementById("getHours").value;
    getMinutes = document.getElementById("getMinutes").value;
    getSeconds = document.getElementById("getSeconds").value;

    console.log(getSeconds)
    // changing time to miliseconds
    const hours = getHours * 3600000;
    const minutes = getMinutes * 60000;
    const seconds = getSeconds * 1000;

    // redclear future time
    makeTime = hours + minutes + seconds;
    futureTime = makeTime + getTime;

    console.log(seconds);
    // make interval
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(countDownTimer, 10)
})

stopTimer.addEventListener("click", () => {
    clearInterval(int)
})

// make Function to count time 
const countDownTimer = () => {
    getTime+= 10;

    const remainingTime = futureTime - getTime;
    const hrs = Math.floor((remainingTime / 36000000) % 24);
    const mins = Math.floor((remainingTime / 60000) % 60);
    const secs = Math.floor((remainingTime / 1000) % 60);

    timer.innerHTML = `${hrs}:${mins}:${secs}`;

    // make progress indicator
    let angle = (remainingTime / makeTime) * 360;
    
    if(angle > 180) {
        semicircles[2].style.display = "none";
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

