const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const delay = 1

const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);
const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);


let remainingTime;
let hours;
let minutes;
let seconds;
let intervalId;
setTimeout(() => {
    console.log("hello");
    
},5000)

function startTimer(event){
    event.preventDefault();

    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);
    remainingTime = hours * 3600 + minutes * 60 + seconds;
    // for(i = remainingTime; i >= 0; i--){
    intervalId = setInterval(updateTimer, delay * 1000)
    // 
    document.documentElement.requestFullscreen()
    hideElement(startButton)
    showElement(stopButton)
}

function updateTimer(){
    remainingTime = remainingTime - 1
    hours = Math.floor(remainingTime / 3600)
    minutes = Math.floor(remainingTime % 3600 / 60)
    seconds = remainingTime % 60
    
    hoursInput.value = hours.toString().padStart(2,"0");
    minutesInput.value = minutes.toString().padStart(2,"0");
    secondsInput.value = seconds.toString().padStart(2,"0");

}

function stopTimer(){
    clearInterval(intervalId);
    hideElement(stopButton)
    setTimeout(() => {
        document.exitFullscreen();
        showElement(startButton)
    },1000)
}

function hideElement(element) {
    element.classList.add("hide");
}
function showElement(element) {
    element.classList.remove("hide");
}

startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);