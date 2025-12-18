//ELEMENT==========================
let song = document.getElementById("song");

//VARIABLES========================
let musicPlaying = false;

let currentSongIndex = 0;
let currentSong = null;
let coveredTime = null;
let totalTime = null;

let playingMode = "autoPlayOn";
let songChanged = false;
let currentAlbumArt = null;
let currentTrackName = null;
let currentArtistName = null;

let songData = {};
let HindiTitles = null;
let PunjabiTitles = null;
let EnglishTitles = null;
let PhonkTitles = null;
let SpanishTitles = null;
let TunesTitles = null;
let titleNames = [];

let artistData = {};
let HindiArtists = null;
let PunjabiArtists = null;
let EnglishArtists = null;
let PhonkArtists = null;
let SpanishArtists = null;
let TunesArtists = null;
let artistNames = [];

let PlayerSongIcon = createIcon("bold", "headphones");

function updateSongInfo() {
  // currentSong is now the Object from Postgres: { songname, songfile, songimage, etc. }
  currentTrackName = currentSong.songname;
  currentAlbumArt = currentSong.songimage;
  currentArtistName = currentSong.artistname || "Unknown Artist";

  // Handle Dropbox Direct Link: Replace dl=0 with raw=1
  let streamUrl = currentSong.songfile;
  if (streamUrl.includes("www.dropbox.com")) {
    streamUrl = streamUrl.replace("dl=0", "raw=1");
  }

  song.src = streamUrl;
  main.style.backgroundImage = `url(${currentAlbumArt})`;

  updateSecondaryButtons();
  if (artistsList.length > 0) {
    loadSongInfo();
  }
}

async function registerSong() {
  if (currentUser) {
    // Optional: Send a request to your backend to update 'songStreams'
    // or add to a 'RecentlyPlayed' table.
    try {
      await apiRequest('register-play', 'POST', {
        userID: currentUser.userid,
        songID: currentSong.songid
      });
      console.log("Play history updated in Neon");
    } catch (err) {
      console.warn("Failed to save history to DB");
    }
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

function startMusic() {
  playbackBtnIcon.className = "ph-fill ph-pause";
  miniPlaybackBtnIcon.className = "ph-fill ph-pause";
  albumArt.style.transform = "scale(1)";
  song.play();
  musicPlaying = true;
  registerSong();
}

function stopMusic() {
  playbackBtnIcon.className = "ph-fill ph-play";
  miniPlaybackBtnIcon.className = "ph-fill ph-play";
  albumArt.style.transform = "scale(0.9)";
  song.pause();
  musicPlaying = false;
}

function changePicture(partTochange) {
  if (currentAlbumArt.length > 0) {
    if (albumArt.contains(PlayerSongIcon)) {
      albumArt.removeChild(PlayerSongIcon);
      miniAlbumArt.removeChild(miniPlayerSongIcon);
    }
    if (partTochange == "miniPlayer") {
      miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
    } else if (partTochange == "player") {
      albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
    }
  } else {
    if (partTochange == "miniPlayer") {
      miniAlbumArt.appendChild(miniPlayerSongIcon);
    } else if (partTochange == "player") {
      albumArt.appendChild(PlayerSongIcon);
    }
  }
}

function nextSong() {
  if (currentSongIndex < songsList.length - 1) {
    currentSongIndex++;
    currentSong = songsList[currentSongIndex];

    updateSongInfo();
    showLoading();
    // ... animation logic remains the same ...
    changePicture("miniPlayer");
    changePicture("player");
  }
}

function prevSong() {
  if (song.currentTime < 5) {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      currentSong = songsList[currentSongIndex]; // Updated: use songsList

      updateSongInfo();
      showLoading();
      main.style.backgroundImage = `url(${currentAlbumArt})`;
      changePicture("miniPlayer");

      // Animation logic
      if (main.contains(playerPanel) && pictureDiv.contains(albumArt)) {
        pictureDiv.style.animation = "fadeOutAhead 0.2s ease";
        pictureDiv.addEventListener(
          "animationend",
          () => {
            changePicture("player");
            pictureDiv.style.animation = "fadeInBehind 0.2s ease";
          },
          { once: true }
        );
      } else {
        changePicture("player");
      }
    }
  } else {
    setTimeTo(0);
  }
}

function showLoading() {
  playbackBtnIcon.className = "ph-bold ph-spinner";
  bnPlay.classList.add("do-spin");
  bnPlay.removeEventListener("click", changeState);
  miniPlaybackBtnIcon.className = "ph-bold ph-spinner";
  miniBnPlay.classList.add("do-spin");
  miniBnPlay.removeEventListener("click", changeState);
}

function setTimeTo(newTime) {
  song.currentTime = newTime;
  coveredTime = formatTime(song.currentTime);
}

function playSong(songObject) {
  if (musicPlaying) {
    stopMusic();
  }

  // Set current song and find its index in the main list for Prev/Next logic
  currentSong = songObject;
  currentSongIndex = songsList.findIndex(s => s.songid === songObject.songid);

  updateSongInfo();
  showLoading();
  songChanged = true;
}

// SETTING DEVICE PLAYER ================
let DevicePlayer = true;

function setDevicePlayer() {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", function () {
      startMusic();
    });
    navigator.mediaSession.setActionHandler("pause", function () {
      stopMusic();
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      nextSong();
      songChanged = true;
    });
    navigator.mediaSession.setActionHandler("previoustrack", function () {
      prevSong();
    });
  } else {
    DevicePlayer = false;
  }
}

function updateDevicePlayer() {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrackName,
      artist: currentArtistName,
      artwork: [
        { src: currentAlbumArt, sizes: "512x512", type: "image/png" },
        { src: currentAlbumArt, sizes: "300x300", type: "image/png" },
        { src: currentAlbumArt, sizes: "150x150", type: "image/png" },
      ],
    });
  }
}

function updateDevicePlayerProgress() {
  if (isFinite(song.duration) && song.duration < 0) {
    navigator.mediaSession.setPositionState({
      duration: song.duration,
      playbackRate: song.playbackRate,
      position: song.currentTime,
    });
  }
}

if (DevicePlayer) {
  song.addEventListener("timeupdate", () => {
    updateDevicePlayerProgress();
  });
}
song.addEventListener("timeupdate", () => {
  updatePlayer();
});

song.addEventListener("ended", () => {
  if (playingMode == "autoPlayOn") {
    nextSong();
    songChanged = true;
  } else if (playingMode == "autoPlayOff") {
    stopMusic();
    playbackBtnIcon.className = "ph-bold ph-arrow-counter-clockwise";
    miniPlaybackBtnIcon.className = "ph-bold ph-arrow-counter-clockwise";
  } else if (playingMode == "repeat") {
    stopMusic();
    startMusic();
  }
});

song.addEventListener("waiting", () => {
  if (musicPlaying) {
    showLoading();
  }
});

song.addEventListener("playing", () => {
  if (musicPlaying) {
    playbackBtnIcon.className = "ph-fill ph-pause";
    bnPlay.classList.remove("do-spin");
    bnPlay.addEventListener("click", changeState);
    miniPlaybackBtnIcon.className = "ph-fill ph-pause";
    miniBnPlay.classList.remove("do-spin");
    miniBnPlay.addEventListener("click", changeState);
  }
});

loadingProgress.style.width = `${
  (parseFloat(loadingProgress.style.width) || 0) + 100 / totalFiles
}%`;

attend();