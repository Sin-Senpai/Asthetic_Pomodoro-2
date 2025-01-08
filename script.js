
let timer;
let isRunning = false;
let timeLeft = 1500;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const statusDisplay = document.getElementById('status');
const shortBreakButton = document.getElementById('shortBreak');
const longBreakButton = document.getElementById('longBreak');
const progressBar = document.querySelector('.progress');
let totalTime = 1500;
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList'); 

function updateProgressBar() {
    const progress = (timeLeft / totalTime) * 100; 
    progressBar.style.width = `${progress}%`;
}

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
        updateProgressBar(); 
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
    timeLeft = 1500;
    timerDisplay.textContent = formatTime(timeLeft);
    statusDisplay.textContent = "";
    document.body.style.backgroundImage = "url('images/background-img.jpg')";
    progressBar.style.width = "100%";

});
shortBreakButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 300;
    timerDisplay.textContent = formatTime(timeLeft);
    statusDisplay.textContent = "";
    document.body.style.animation = "none";
    progressBar.style.width = "100%";
    document.body.style.backgroundImage = "url('images/background-img2.jpg')";

});

longBreakButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 600;
    timerDisplay.textContent = formatTime(timeLeft);
    statusDisplay.textContent = "";
    progressBar.style.width = "100%";
    document.body.style.backgroundImage = "url('images/background-img3.jpg')";

});
function updateProgressBar() {
    const progress = (timeLeft / totalTime) * 100; 
    progressBar.style.width = `${progress}%`; 
}


addTodoButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = ""; // Clear input field
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodoButton.click();
    }
});
