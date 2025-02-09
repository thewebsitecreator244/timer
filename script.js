const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";


const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);
const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);

let remainingTime;
let hours;
let minutes;
let seconds;

function startTimer(event){
    event.preventDefault();

    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);
    remainingTime = hours * 3600 + minutes * 60 + seconds;
}

function updateTimer(){
    remainingTime = remainingTime - 1

}

function stopTimer(){

}


startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);