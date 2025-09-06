//ELEMENT==========================
let song = document.getElementById("song");


//VARIABLES========================
let musicPlaying = false;
let songData = {};
let HindiTitles = null;
let PunjabiTitles = null;
let EnglishTitles = null;
let PhonkTitles = null;
let SpanishTitles = null;
let TunesTitles = null;
let titleNames = [];
let currentSongIndex = 0;
let currentSong = null;

let songChanged= false;
let coveredTime = null;
let totalTime = null;
let currentAlbumArt = null;
let currentTrackName = null;
let currentArtistName = null;

let playingMode = "autoPlayOn";


function updateSongInfo() {
  currentSong = songData[titleNames[currentSongIndex]];
  currentAlbumArt = currentSong.image;
  currentTrackName = currentSong.name;
  currentArtistName = currentSong.artist;
  song.src = currentSong.audio;
  main.style.backgroundImage = `url(${currentAlbumArt})`;
  updateSecondaryButtons();
}

function registerSong() {
  if (recentlyPlayedSongList.includes(titleNames[currentSongIndex])) {
    recentlyPlayedSongList.splice(recentlyPlayedSongList.indexOf(titleNames[currentSongIndex]),1);
  }
  recentlyPlayedSongList.unshift(titleNames[currentSongIndex]);
  if (recentlyPlayedSongList.length > 30) {
    recentlyPlayedSongList.pop();
  }
  loadRecentlyPlayedSongs();
  if (signedIn) {
    updateDataFile();
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds/60);
  let sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function startMusic() {
  playbackBtnIcon.textContent = "pause";
  miniPlaybackBtnIcon.textContent = "pause";
  albumArt.style.transform = "scale(1)"
  song.play();
  musicPlaying = true;
  registerSong();
}

function stopMusic() {
  playbackBtnIcon.textContent = "play_arrow";
  miniPlaybackBtnIcon.textContent = "play_arrow";
  albumArt.style.transform = "scale(o.9)"
  song.pause();
  musicPlaying = false;
}

function changePicture(partTochange) {
  if (currentAlbumArt.length > 0) {
    if (partTochange == "miniPlayer") {
      miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
    } else if (partTochange == "player") {
      albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
    }
  } else {
    if (partTochange == "miniPlayer") {
      let miniPlayerSongIcon = document.createElement("i");
      miniPlayerSongIcon.className = "fa-solid fa-headphones";
      miniAlbumArt.appendChild(PlayerSongIcon);
    } else if (partTochange == "player") {
      let PlayerSongIcon = document.createElement("i");
      PlayerSongIcon.className = "fa-solid fa-headphones";
      albumArt.appendChild(PlayerSongIcon);
    }
  }
}

function nextSong() {
  if (currentSongIndex < titleNames.length - 1) {
    currentSongIndex++;
    updateSongInfo();
    showLoading();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    changePicture("miniPlayer");
    if (main.contains(playerPanel) && pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutBehind";
        albumArt.style.animationDuration = "0.2s";
        albumArt.style.animationTimingFunction = "ease-in-out";
        albumArt.addEventListener("animationend",function animateNext() {
          albumArt.removeEventListener("animationend",animateNext);
          changePicture("player");
          albumArt.style.animation = "fadeInAhead";
          albumArt.style.animationDuration = "0.2s";
          albumArt.style.animationTimingFunction = "ease-in-out";
        });
    } else {
      changePicture("player");
    }
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    recentlyPlayedSongList.push(titleNames[currentSongIndex]);
    updateSongInfo();
    showLoading();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    changePicture("miniPlayer");
    if (main.contains(playerPanel) && pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutAhead";
        albumArt.style.animationDuration = "0.2s";
        albumArt.style.animationTimingFunction = "ease-in-out";
        albumArt.addEventListener("animationend",function animatePrev() {
          albumArt.removeEventListener("animationend",animatePrev);
          changePicture("player");
          albumArt.style.animation = "fadeInBehind";
          albumArt.style.animationDuration = "0.2s";
          albumArt.style.animationTimingFunction = "ease-in-out";
        });
    } else {
      changePicture("player");
    }
  }
}


function showLoading() {
  playbackBtnIcon.textContent = "progress_activity";
  playbackBtnIcon.id = "loadingIcon";
  miniPlaybackBtnIcon.textContent = "progress_activity";
  miniPlaybackBtnIcon.id = "miniLoadingIcon";
}

function setTimeTo(newTime) {
  song.currentTime = newTime;
  coveredTime = formatTime(song.currentTime);
}

function playSong(songToPlay) {
  if (musicPlaying) {
    stopMusic();
  }
  currentSongIndex = titleNames.indexOf(songToPlay);
  updateSongInfo();
  showLoading();
  songChanged = true;
}
song.addEventListener("loadedmetadata",() => {
  totalTime = formatTime(song.duration);
  initPlayer();
  initMiniPlayer();
  if (songChanged) {
    startMusic();
  }
});

song.addEventListener("ended", function() {
  if (playingMode == "autoPlayOn") {
    nextSong();
    songChanged = true;
  } else if (playingMode == "autoPlayOff") {
    stopMusic();
    playbackBtnIcon.textContent = "replay";
    miniPlaybackBtnIcon.textContent = "replay";
  } else if (playingMode == "repeat") {
    stopMusic();
    startMusic();
  }
});


attend();