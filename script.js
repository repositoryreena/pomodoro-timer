// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Variables
    let timerInterval;
    let remainingTime = 25 * 60; // 25 minutes in seconds

    // DOM elements
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Function to format time in MM:SS
    function formatTime(seconds) {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${secs}`;
    }

    // Function to update the timer display
    function updateDisplay() {
        timerDisplay.textContent = formatTime(remainingTime);
    }

    // Function to start the timer
    function startTimer() {
        if (timerInterval) return; // Prevent multiple intervals
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("Time's up!");
            }
        }, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Function to reset the timer
    function resetTimer() {
        stopTimer();
        remainingTime = 25 * 60; // Reset to 25 minutes
        updateDisplay();
    }

    // Event listeners for buttons
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    // Initial display update
    updateDisplay();
});
