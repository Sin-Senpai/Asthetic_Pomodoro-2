
let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const statusDisplay = document.getElementById('status');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(timer);
        statusDisplay.textContent = "Time's up!";
        isRunning = false;
    } else {
        timeLeft--;
    }
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        statusDisplay.textContent = "session in progress...";
        timer = setInterval(updateTimer, 1000);
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500; // Reset to 25 minutes
    timerDisplay.textContent = formatTime(timeLeft);
    statusDisplay.textContent = "";
});