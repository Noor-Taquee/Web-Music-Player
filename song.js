//ELEMENT==========================
let song = document.getElementById("song");


//VARIABLES========================
let musicPlaying = false;
let songData = null;
let titleNames = null;
let currentSongIndex = 0;
let currentSong = null;

let coveredTime = null;
let totalTime = null;
let currentAlbumArt = null;
let currentTrackName = null;
let currentArtistName = null;

fetch("songComponents.json").then(response => response.json()).then(data => {
  songData = data;
  titleNames = Object.keys(data);
  updateSongInfo();
});


function updateSongInfo() {
  currentSong = songData[titleNames[currentSongIndex]];
  currentAlbumArt = currentSong.image;
  currentTrackName = currentSong.name;
  currentArtistName = currentSong.artist;
  song.src = currentSong.audio;
  main.style.backgroundImage = `url(${currentAlbumArt})`;
}

function formatTime(seconds) {
  let min = Math.floor(seconds/60);
  let sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function startMusic() {
  song.play();
  musicPlaying = true;
}

function stopMusic() {
  song.pause();
  musicPlaying = false;
}

function nextSong() {
  if (currentSongIndex < titleNames.length - 1) {
    currentSongIndex++;
    updateSongInfo();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    return true;
  } else {
    return false;
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    updateSongInfo();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    return true;
  } else {
    return false;
  }
}

function setVolumeTo(newVolume) {
  song.volume = newVolume;
}
function setTimeTo(newTime) {
  song.currentTime = newTime;
  coveredTime = formatTime(song.currentTime);
}

song.addEventListener("loadedmetadata",() => {
  totalTime = formatTime(song.duration);
  if (blurLayer.contains(playerPanel)) {
    initPlayer();
  }
});
