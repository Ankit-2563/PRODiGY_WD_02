let hr = (min = sec = ms = "0" + 0),
  startTimer,
  lapCounter = 1;
const startBtn = document.querySelector(".start"),
  lapBtn = document.querySelector(".lap"),
  resetBtn = document.querySelector(".reset"),
  lapList = document.querySelector(".lap-list");

startBtn.addEventListener("click", function () {
  if (startBtn.innerText === "Start") {
    start();
  } else {
    stop();
  }
});

lapBtn.addEventListener("click", function () {
  if (startBtn.innerText === "Stop") {
    const lapItem = document.createElement("li");
    lapItem.classList.add("lap-item");
    lapItem.textContent = `Lap ${lapCounter++}: ${hr}:${min}:${sec}:${ms}`;
    lapList.appendChild(lapItem);
  }
});

resetBtn.addEventListener("click", reset);

function start() {
  startBtn.innerText = "Stop";
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    putValue();
  }, 10); //1000ms = 1s
}

function stop() {
  startBtn.innerText = "Start";
  clearInterval(startTimer);
}

function reset() {
  startBtn.innerText = "Start";
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
  lapList.innerHTML = "";
  lapCounter = 1;
}

function putValue() {
  document.querySelector(".millisecond").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}
