
//CREATING ELEMEMTS
let playerPanel = document.createElement("div");
playerPanel.id = "playerPanel";

let toggleDiv = document.createElement("div");
playerPanel.appendChild(toggleDiv);
toggleDiv.id = "toggleDiv";
let togglePic = document.createElement("button");
toggleDiv.appendChild(togglePic);
togglePic.id = "togglePic";
togglePic.textContent = "PICTURE";
togglePic.addEventListener("click",() => focusOn("picture"));
let toggleLyr = document.createElement("button");
toggleDiv.appendChild(toggleLyr);
toggleLyr.id = "toggleLyr";
toggleLyr.textContent = "LYRICS";
toggleLyr.addEventListener("click",() => focusOn("lyrics"));
let toggleLayer = document.createElement("div");
toggleDiv.appendChild(toggleLayer);
toggleLayer.id = "toggleLayer";

let pictureDiv = document.createElement("div");
playerPanel.appendChild(pictureDiv);
pictureDiv.id = "pictureDiv";
let albumArt = document.createElement("p");
pictureDiv.appendChild(albumArt);
albumArt.id = "albumArt";
let lyricsDiv = document.createElement("div");
lyricsDiv.id = "lyricsDiv";
let lyrics = document.createElement("p");
lyricsDiv.appendChild(lyrics);
lyricsDiv.id = "lyrics";


let secondaryDiv = document.createElement("div");
playerPanel.appendChild(secondaryDiv);
secondaryDiv.id = "secondaryDiv";
let infoDiv = document.createElement("div");
secondaryDiv.appendChild(infoDiv);
infoDiv.id = "infoDiv";
let trackName = document.createElement("p");
infoDiv.appendChild(trackName);
trackName.id = "trackName";
let bnArtist = document.createElement("button");
infoDiv.appendChild(bnArtist);
bnArtist.id = "bnArtist";
let artistIcon = document.createElement("span");
bnArtist.appendChild(artistIcon);
artistIcon.className = "material-symbols-rounded";
artistIcon.textContent = "artist";
let artistName = document.createElement("p");
bnArtist.appendChild(artistName);
artistName.id = "artistName";



let secondaryControls = document.createElement("div");
secondaryDiv.appendChild(secondaryControls);
secondaryControls.id = "secondaryControls";


let bnFavourite = document.createElement("button");
secondaryControls.appendChild(bnFavourite);
bnFavourite.id = "bnFavourite";
let favouriteIcon = document.createElement("i");
bnFavourite.appendChild(favouriteIcon);
favouriteIcon.className = "fa-regular fa-star";
bnFavourite.addEventListener("click", f_favourite);

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
let moreIcon = document.createElement("i");
bnMore.appendChild(moreIcon);
moreIcon.className = "fa-solid fa-ellipsis-vertical";
bnMore.addEventListener("click",f_more);

let bnSave = document.createElement("button");
bnSave.id = "bnSave";
let saveIcon = document.createElement("i");
bnSave.appendChild(saveIcon);
saveIcon.className = "fa-regular fa-bookmark";
bnSave.addEventListener("click",f_save);

let bnShare = document.createElement("button");
bnShare.id = "bnShare";
let shareIcon = document.createElement("i");
bnShare.appendChild(shareIcon);
shareIcon.className = "fa-solid fa-share";
bnShare.addEventListener("click",f_share);

let bnDownload = document.createElement("button");
bnDownload.id = "bnDownload";
let downloadIcon = document.createElement("i");
bnDownload.appendChild(downloadIcon);
downloadIcon.className = "fa-solid fa-download";
bnDownload.addEventListener("click",f_download);

let controlDiv = document.createElement("div");
playerPanel.appendChild(controlDiv);
controlDiv.id = "controlDiv";

let primaryControls = document.createElement("div");
controlDiv.appendChild(primaryControls);
primaryControls.id = "primaryControls";

let runtimeInfo = document.createElement("div");
primaryControls.appendChild(runtimeInfo);
runtimeInfo.id = "runtimeInfo";
let time1 = document.createElement("p");
runtimeInfo.appendChild(time1);
time1.id = "time1";
time1.textContent = "0:00";
let timeSlider = document.createElement("input");
runtimeInfo.appendChild(timeSlider);
timeSlider.id = "timeSlider";
timeSlider.type = "range";
timeSlider.min = "0";
timeSlider.max = "0";
timeSlider.step = "0.001";
timeSlider.value = "0";
let time2 = document.createElement("p");
runtimeInfo.appendChild(time2);
time2.id = "time2";
time2.textContent = "0:00";

let playbackControls = document.createElement("div");
primaryControls.appendChild(playbackControls);
playbackControls.id = "playbackControls";
let bnPrev = document.createElement("button");
playbackControls.appendChild(bnPrev);
bnPrev.id = "bnPrev";
let prevIcon = document.createElement("i");
bnPrev.appendChild(prevIcon);
prevIcon.className = "fa-solid fa-backward-step";
let bnPlay = document.createElement("button");
playbackControls.appendChild(bnPlay);
bnPlay.id = "bnPlay";
let loadingIcon = document.createElement("span");
bnPlay.appendChild(loadingIcon);
loadingIcon.id = "loadingIcon";
loadingIcon.className = "material-symbols-rounded";
loadingIcon.textContent = "progress_activity";
let playIcon = document.createElement("i");
playIcon.className = "fa-solid fa-play";
let pauseIcon = document.createElement("i");
pauseIcon.className = "fa-solid fa-pause";
let bnNext = document.createElement("button");
playbackControls.appendChild(bnNext);
bnNext.id = "bnNext";
let nextIcon = document.createElement("i");
bnNext.appendChild(nextIcon);
nextIcon.className = "fa-solid fa-forward-step";

let volumeDiv = document.createElement("div");
primaryControls.appendChild(volumeDiv);
volumeDiv.id = "volumeDiv";
let volumeLowIcon = document.createElement("i");
volumeDiv.appendChild(volumeLowIcon);
volumeLowIcon.className = "fa-solid fa-volume-low";
let volumeMuteIcon = document.createElement("i");
volumeMuteIcon.className = "fa-solid fa-volume-mute";
let volumeSlider = document.createElement("input");
volumeDiv.appendChild(volumeSlider);
volumeSlider.id = "volumeSlider";
volumeSlider.type = "range";
volumeSlider.min = "0";
volumeSlider.max = "1";
volumeSlider.step = "0.01";
volumeSlider.value = "0.4";
let volumeHighIcon = document.createElement("i");
volumeDiv.appendChild(volumeHighIcon);
volumeHighIcon.className = "fa-solid fa-volume-high";

let playerPanelSpace = document.createElement("div");
playerPanel.appendChild(playerPanelSpace);
playerPanelSpace.id = "playerPanelSpace";


//VARIABLES
let currentFocus = "picture";


//FUNCTIONS
function updateSecondaryButtons() {
  if (favouriteSongList.includes(titleNames[currentSongIndex]))  {
    favouriteIcon.className = "fa-solid fa-star";
    bnFavourite.removeEventListener("click",f_favourite);
    bnFavourite.addEventListener("click",f_disfavourite);
  } else {
    favouriteIcon.className = "fa-regular fa-star";
    bnFavourite.removeEventListener("click",f_disfavourite);
    bnFavourite.addEventListener("click",f_favourite);
  }
}


function f_favourite() {
  if (signedIn) {
    favouriteIcon.className = "fa-solid fa-star";
    bnFavourite.removeEventListener("click",f_favourite);
    bnFavourite.addEventListener("click",f_disfavourite);
    favouriteSongList.push(titleNames[currentSongIndex]);
    updateDataFile();
    favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
  } else {
    alert("Login to your account first!")
  }
}
function f_disfavourite() {
  favouriteIcon.className = "fa-regular fa-star";
  bnFavourite.removeEventListener("click",f_disfavourite);
  bnFavourite.addEventListener("click",f_favourite);
  favouriteSongList.splice(favouriteSongList.indexOf(titleNames[currentSongIndex]),1);
  updateDataFile();
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}

function f_save() {
  saveIcon.className = "fa-solid fa-bookmark";
  bnSave.removeEventListener("click",f_save);
  bnSave.addEventListener("click",f_unsave);
}
function f_unsave() {
  saveIcon.className = "fa-regular fa-bookmark";
  bnSave.removeEventListener("click",f_unsave);
  bnSave.addEventListener("click",f_save);
}

function f_share() {}
function f_download() {}
function f_more() {}

function removeFocus() {
  toggleLayer.style.transform = "translateX(0)"
  currentFocus = "";
}


//BUTTON FUNCTIONS
function focusOn(part) {
  if (part == "picture") {
    if (currentFocus != "picture") {
      removeFocus();
      lyricsDiv.style.animationName = "disappear";
      lyricsDiv.style.animationDuration = "0.3s";
      lyricsDiv.addEventListener("animationend",function lTop() {
        lyricsDiv.removeEventListener("animationend",lTop);
        pictureDiv.removeChild(lyricsDiv);
        pictureDiv.appendChild(albumArt);
        albumArt.style.animationName = "appear";
        albumArt.style.animationDuration = "0.3s";
      });
    }
  } else {
    if (currentFocus != "lyrics") {
      removeFocus();
      toggleLayer.style.transform = "translateX(20vw)"
      albumArt.style.animationName = "disappear";
      albumArt.style.animationDuration = "0.3s";
      albumArt.addEventListener("animationend",function pTol() {
        albumArt.removeEventListener("animationend",pTol);
        pictureDiv.removeChild(albumArt);
        pictureDiv.appendChild(lyricsDiv);
        lyricsDiv.style.animationName = "appear";
        lyricsDiv.style.animationDuration = "0.3s";
      });
    }
  }
  currentFocus = part;
}


function showLoading() {
  if (bnPlay.contains(playIcon)) {
    bnPlay.replaceChild(loadingIcon,playIcon);
    miniBnPlay.replaceChild(miniLoadingIcon, miniPlayIcon)
  } else if (bnPlay.contains(pauseIcon)) {
    bnPlay.replaceChild(loadingIcon,pauseIcon)
    miniBnPlay.replaceChild(miniLoadingIcon, miniPauseIcon)
  }
}

function changeState() {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}

function changeSong(order) {
  if (order == "next") {
    nextSong();
  } else {
    prevSong();
  }
  focusOn("picture");
  trackName.textContent = currentTrackName;
  artistName.textContent = currentArtistName;
}

function initPlayer() {
  timeSlider.max = song.duration;
  time1.textContent = "0:00";
  time2.textContent = totalTime;
  albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
  trackName.textContent = currentTrackName;
  artistName.textContent = currentArtistName;
  if (bnPlay.contains(loadingIcon)) {
    bnPlay.replaceChild(playIcon,loadingIcon);
  }
  bnPlay.addEventListener("click", changeState);
}



bnNext.addEventListener("click",() => changeSong("next"));
bnPrev.addEventListener("click",() => changeSong("prev"));

timeSlider.addEventListener("input" ,() => {
  setTimeTo(timeSlider.value);
  time1.textContent = coveredTime;
});

volumeSlider.addEventListener("input" ,() => {
  setVolumeTo(volumeSlider.value);
  if (volumeSlider.value == 0) {
    volumeDiv.replaceChild(volumeMuteIcon,volumeLowIcon);
  } else if (volumeDiv.contains(volumeMuteIcon)) {
    volumeDiv.replaceChild(volumeLowIcon,volumeMuteIcon);
  }
});
volumeLowIcon.addEventListener("click",() => {
  volumeDiv.replaceChild(volumeMuteIcon,volumeLowIcon);
  volumeSlider.value = 0;
  setVolumeTo(0);
});
volumeHighIcon.addEventListener("click",() => {
  volumeSlider.value = 1;
  setVolumeTo(1);
});


//KEY BINDINGS
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    changeState();
  } else if (event.key === "ArrowRight") {
    changeSong("next");
  } else if (event.key === "ArrowLeft") {
    changeSong("prev");
  }
});

setInterval(() => {
  if (musicPlaying) {
    coveredTime = formatTime(song.currentTime);
    time1.textContent = coveredTime;
  }
  timeSlider.value = song.currentTime;
}, 10);


attend();