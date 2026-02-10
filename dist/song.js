//ELEMENT==========================
/** @type {HTMLAudioElement} */
let song = document.getElementById("song");
//VARIABLES========================
/** flag for music state, **doesn't depend on audio element**, depends on user */
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
let PlayerSongIcon = createElement("i", { className: "ph-bold ph-headphones" });
function updateSongInfo() {
    currentSong = songData[titleNames[currentSongIndex]];
    currentAlbumArt = currentSong.image;
    currentTrackName = currentSong.name;
    currentArtistName = currentSong.artist.join(", ");
    song.src = currentSong.audio;
    app.style.backgroundImage = `url(${currentAlbumArt})`;
    updateSecondaryButtons();
    if (artistNames.length > 0) {
        loadSongInfo();
    }
}
/** Adds the song to users played song history */
function registerSong() {
    if (!signedIn || currentUser.allowHistory != 1 || (currentUser.recentlyPlayedSongList.length >= 0 && songData[currentUser.recentlyPlayedSongList[0]] == titleNames[currentSongIndex]))
        return;
    if (currentUser.recentlyPlayedSongList.includes(titleNames[currentSongIndex])) {
        currentUser.recentlyPlayedSongList.splice(currentUser.recentlyPlayedSongList.indexOf(titleNames[currentSongIndex]), 1);
    }
    currentUser.recentlyPlayedSongList.unshift(titleNames[currentSongIndex]);
    if (currentUser.recentlyPlayedSongList.length > 30) {
        currentUser.recentlyPlayedSongList.pop();
    }
    loadRecentlyPlayedSongs();
}
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}
function startMusic() {
    playbackBtnIcon.className = "ph-fill ph-pause";
    miniPlaybackBtnIcon.className = "ph-fill ph-pause";
    albumArt.style.transform = "scale(1)";
    song.play();
    musicPlaying = true;
    navigator.mediaSession.playbackState = "playing";
    updateDevicePlayerProgress(song.currentTime);
    registerSong();
}
function stopMusic() {
    playbackBtnIcon.className = "ph-fill ph-play";
    miniPlaybackBtnIcon.className = "ph-fill ph-play";
    albumArt.style.transform = "scale(0.9)";
    song.pause();
    musicPlaying = false;
    navigator.mediaSession.playbackState = "paused";
    updateDevicePlayerProgress(song.currentTime);
}
function changePicture(partTochange) {
    if (currentAlbumArt.length > 0) {
        if (albumArt.contains(PlayerSongIcon)) {
            albumArt.removeChild(PlayerSongIcon);
            miniAlbumArt.removeChild(miniPlayerSongIcon);
        }
        if (partTochange == "miniPlayer") {
            miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
        }
        else if (partTochange == "player") {
            albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
        }
    }
    else {
        if (partTochange == "miniPlayer") {
            miniAlbumArt.appendChild(miniPlayerSongIcon);
        }
        else if (partTochange == "player") {
            albumArt.appendChild(PlayerSongIcon);
        }
    }
}
function nextSong() {
    if (currentSongIndex < titleNames.length - 1) {
        currentSongIndex++;
        updateSongInfo();
        showLoading();
        changePicture("miniPlayer");
        if (main.contains(playerPanel) && pictureDiv.contains(albumArt)) {
            pictureDiv.style.animation = "flash 0.2s ease";
            pictureDiv.addEventListener("animationend", () => {
                changePicture("player");
                pictureDiv.style.animation = "flash 0.2s ease";
            }, { once: true });
        }
        else {
            changePicture("player");
        }
    }
}
function prevSong() {
    if (song.currentTime > 3) {
        setTimeTo(0);
        return;
    }
    if (currentSongIndex <= 0) {
        return;
    }
    currentSongIndex--;
    updateSongInfo();
    showLoading();
    changePicture("miniPlayer");
    if (main.contains(playerPanel) && pictureDiv.contains(albumArt)) {
        pictureDiv.style.animation = "slide-out-right 0.2s ease";
        pictureDiv.addEventListener("animationend", () => {
            changePicture("player");
            pictureDiv.style.animation = "slide-in-left 0.2s ease";
        }, { once: true });
    }
    else {
        changePicture("player");
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
function playSong(songToPlay) {
    if (musicPlaying) {
        stopMusic();
    }
    currentSongIndex = titleNames.indexOf(songToPlay);
    updateSongInfo();
    showLoading();
    songChanged = true;
}
//#region Media Session API
let devicePlayer = true;
function setDevicePlayer() {
    if ("mediaSession" in navigator) { }
    else {
        devicePlayer = false;
        return;
    }
    navigator.mediaSession.setActionHandler("play", () => {
        startMusic();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
        stopMusic();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
        nextSong();
        songChanged = true;
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
        prevSong();
    });
}
function updateDevicePlayer() {
    if ("mediaSession" in navigator) { }
    else {
        devicePlayer = false;
        return;
    }
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
function updateDevicePlayerProgress(position) {
    if ("mediaSession" in navigator && isFinite(song.duration) && song.duration >= 0) {
        navigator.mediaSession.setPositionState({
            duration: song.duration,
            playbackRate: song.playbackRate,
            position: position,
        });
    }
}
//#endregion Media Session API
//#region eventlisteners
if (devicePlayer) {
    song.addEventListener("timeupdate", () => {
        // updateDevicePlayerProgress(song.currentTime);
    });
}
song.addEventListener("loadedmetadata", () => {
    totalTime = formatTime(song.duration);
    initPlayer();
    initMiniPlayer();
    try {
        updateDevicePlayer();
    }
    catch { }
    if (songChanged) {
        startMusic();
    }
});
song.addEventListener("timeupdate", () => {
    updatePlayer();
});
song.addEventListener("ended", () => {
    if (playingMode == "autoPlayOn") {
        nextSong();
        songChanged = true;
    }
    else if (playingMode == "autoPlayOff") {
        stopMusic();
        songChanged = false;
        playbackBtnIcon.className = "ph-bold ph-arrow-counter-clockwise";
        miniPlaybackBtnIcon.className = "ph-bold ph-arrow-counter-clockwise";
    }
    else if (playingMode == "repeat") {
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
    if (!musicPlaying)
        return;
    playbackBtnIcon.className = "ph-fill ph-pause";
    bnPlay.classList.remove("do-spin");
    bnPlay.addEventListener("click", changeState);
    miniPlaybackBtnIcon.className = "ph-fill ph-pause";
    miniBnPlay.classList.remove("do-spin");
    miniBnPlay.addEventListener("click", changeState);
});
export {};
//#endregion eventlisteners
//# sourceMappingURL=song.js.map