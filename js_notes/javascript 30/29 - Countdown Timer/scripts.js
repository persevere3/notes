(function() {
  let timer;
  const buttons = document.querySelectorAll(".timer__controls > button");
  const timeLeft = document.querySelector(".display__time-left");
  const endTime = document.querySelector(".display__end-time");

  const startTimer = function(sec) {
    const now = Date.now();
    const end = now + sec * 1000;
    // 倒數計時
    setCountdown(end);
    // 顯示最後時間
    showEndTime(end);
  };

  function setCountdown(end) {
    clearInterval(timer);
    timer = setInterval(function() {
      const secLeft = Math.floor((end - Date.now()) / 1000);
      if (secLeft >= 0) {
        const displayMin = Math.floor(secLeft / 60);
        let displaySec = secLeft % 60;
        displaySec = displaySec < 10 ? "0" + displaySec : displaySec;
        timeLeft.innerText = `${displayMin}:${displaySec}`;
      } else {
        timeLeft.innerText = `Happy Coding !!!`;
        clearInterval(timer);
      }
    }, 16);
  }

  function showEndTime(time) {
    const endDate = new Date(time);
    let hour = endDate.getHours();
    let min = endDate.getMinutes();
    min = min < 10 ? "0" + min : min;
    endTime.innerText = `Back at ${hour}:${min}`;
  }

  const setTimer = function() {
    const sec = parseInt(this.dataset.time);
    startTimer(sec);
  };

  buttons.forEach(button => button.addEventListener("click", setTimer));
  document.querySelector("#custom").addEventListener("submit", function(e) {
    e.preventDefault();
    const value = parseInt(this.minutes.value);
    if (value) {
      startTimer(value * 60);
      this.reset();
    }
  });
  
})();