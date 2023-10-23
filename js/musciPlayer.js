document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const volumeSlider = document.getElementById('volumeSlider');

    playButton.addEventListener('click', function () {
        audio.play();
    });

    pauseButton.addEventListener('click', function () {
        audio.pause();
    });

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });
});
