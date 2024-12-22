const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");

let startCount = 0;
let intervalId;

// function to start the timer

const startTimer = () => {
  intervalId = setInterval(() => {
    countDownElement.innerText = startCount++;
  }, 1000);
};

// function to stop the timer
const stopTimer = () => {

  clearInterval(intervalId);
  showStopValue();
};

// function to reset the timer
const resetTimer = () => {
  startCount = 0;
  countDownElement.innerText = startCount;
  clearInterval(intervalId);
};


// function to show the value
 const showStopValue = () => {
     const newPara = document.createElement("p");
     newPara.innerText = `The stop time is ${startCount -1}`;
     resetValueElement.append(newPara);     

 };

// function to clear the timer
const clearTimeValue = () => {
     resetValueElement.innerHTML = "";
};

// event listeners
document.querySelector(".start_btn").addEventListener("click", startTimer);

document.querySelector(".reset_btn").addEventListener("click", resetTimer);

document.querySelector(".stop_btn").addEventListener("click", stopTimer);

document.querySelector('.time_btn').addEventListener("click", showStopValue);

document.querySelector('.clear_btn').addEventListener("click", clearTimeValue);
