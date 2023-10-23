document.addEventListener('DOMContentLoaded', function () {
    const timer = document.getElementById('timer');

    const targetDate = new Date('2023-11-24 23:59:59').getTime();

    startCountdown(targetDate);

    function startCountdown(targetDate) {
        updateTimer();

        const intervalId = setInterval(updateTimer, 1000);

        function updateTimer() {
            const currentTime = Date.now();
            const remainingTime = targetDate - currentTime;

            if (remainingTime <= 0) {
                clearInterval(intervalId);
                timer.textContent = '00:00:00:00';
            } else {
                const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
                timer.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        }
    }
});
