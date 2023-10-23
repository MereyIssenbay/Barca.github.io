const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const progressBar = document.getElementById("progress");
const title = document.getElementById("title");

const songs = [
  {
    title: "anthem",
    audioSrc: "music/anthem.mp3",
    coverSrc: "img/barca.png",
  },
  {
    title: "Барселона",
    audioSrc: "music/another-song.mp3",
    coverSrc: "img/another-cover.png",
  },
];

let isPlaying = false;
let currentSongIndex = 0;

function loadSong(index) {
  title.innerText = songs[index].title;
  audio.src = songs[index].audioSrc;
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

playButton.addEventListener("click", togglePlay);
audio.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const { currentTime, duration } = audio;
  const progressPercentage = (currentTime / duration) * 100;
  progressBar.style.width = progressPercentage + "%";
}

loadSong(currentSongIndex);

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

document.getElementById("next").addEventListener("click", nextSong);
document.getElementById("prev").addEventListener("click", prevSong);
