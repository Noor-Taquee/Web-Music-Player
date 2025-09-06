
//CREATING ELEMEMTS
let playerPanel = document.createElement("div");
playerPanel.id = "playerPanel";

let toggleDiv = document.createElement("div");
playerPanel.appendChild(toggleDiv);
toggleDiv.id = "toggleDiv";

let togglePLDiv = document.createElement("div")
toggleDiv.appendChild(togglePLDiv);
togglePLDiv.id = "togglePLDiv";
let togglePic = document.createElement("button");
togglePLDiv.appendChild(togglePic);
togglePic.id = "togglePic";
let picIcon = document.createElement("span");
togglePic.appendChild(picIcon);
picIcon.className = "material-symbols-rounded";
picIcon.textContent = "image";
picIcon.id = "picIcon";
togglePic.addEventListener("click",() => focusPLOn("picture"));
let toggleLyr = document.createElement("button");
togglePLDiv.appendChild(toggleLyr);
toggleLyr.id = "toggleLyr";
let lyrIcon = document.createElement("span");
toggleLyr.appendChild(lyrIcon);
lyrIcon.className = "material-symbols-rounded";
lyrIcon.textContent = "lyrics";
lyrIcon.id = "lyrIcon";
toggleLyr.addEventListener("click",() => focusPLOn("lyrics"));
let toggleLayerPL = document.createElement("div");
togglePLDiv.appendChild(toggleLayerPL);
toggleLayerPL.id = "toggleLayerPL";

let toggleAPDiv = document.createElement("div")
toggleDiv.appendChild(toggleAPDiv);
toggleAPDiv.id = "toggleAPDiv";
let toggleAutoPlayOn = document.createElement("button");
toggleAPDiv.appendChild(toggleAutoPlayOn);
toggleAutoPlayOn.id = "toggleAutoPlayOn";
toggleAutoPlayOn.addEventListener("click",() => focusAPOn("autoPlayOn"));
let autoPlayIcon = document.createElement("span");
toggleAutoPlayOn.appendChild(autoPlayIcon);
autoPlayIcon.className = "material-symbols-rounded";
autoPlayIcon.textContent = "trending_flat";
autoPlayIcon.id = "autoPlayIcon";
let toggleAutoPlayOff = document.createElement("button");
toggleAPDiv.appendChild(toggleAutoPlayOff);
toggleAutoPlayOff.id = "toggleAutoPlayOff";
toggleAutoPlayOff.addEventListener("click",() => focusAPOn("autoPlayOff"));
let autoPlayOffIcon = document.createElement("span");
toggleAutoPlayOff.appendChild(autoPlayOffIcon);
autoPlayOffIcon.className = "material-symbols-rounded";
autoPlayOffIcon.textContent = "play_disabled";
autoPlayOffIcon.id = "autoPlayOffIcon";
let toggleRepeat = document.createElement("button");
toggleAPDiv.appendChild(toggleRepeat);
toggleRepeat.id = "toggleRepeat";
toggleRepeat.addEventListener("click",() => focusAPOn("repeat"));
let repeatIcon = document.createElement("span");
toggleRepeat.appendChild(repeatIcon);
repeatIcon.className = "material-symbols-rounded";
repeatIcon.textContent = "repeat_one";
repeatIcon.id = "repeatIcon";
let toggleLayerAP = document.createElement("div");
toggleAPDiv.appendChild(toggleLayerAP);
toggleLayerAP.id = "toggleLayerAP";


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

let runBarInfo = document.createElement("div");
primaryControls.appendChild(runBarInfo);
runBarInfo.id = "runBarInfo";
let timeSlider = document.createElement("input");
runBarInfo.appendChild(timeSlider);
timeSlider.id = "timeSlider";
timeSlider.type = "range";
timeSlider.min = "0";
timeSlider.max = "0";
timeSlider.step = "0.001";
timeSlider.value = "0";
let runtimeInfo = document.createElement("div");
primaryControls.appendChild(runtimeInfo);
runtimeInfo.id = "runtimeInfo";
let time1 = document.createElement("p");
runtimeInfo.appendChild(time1);
time1.id = "time1";
time1.textContent = "0:00";
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
let prevIcon = document.createElement("span");
bnPrev.appendChild(prevIcon);
prevIcon.className = "material-symbols-rounded";
prevIcon.textContent = "skip_previous";

let bnPlay = document.createElement("button");
playbackControls.appendChild(bnPlay);
bnPlay.id = "bnPlay";

let playbackBtnIcon = document.createElement("span");
bnPlay.appendChild(playbackBtnIcon);
playbackBtnIcon.id = "loadingIcon";
playbackBtnIcon.className = "material-symbols-rounded";
playbackBtnIcon.textContent = "progress_activity";

let bnNext = document.createElement("button");
playbackControls.appendChild(bnNext);
bnNext.id = "bnNext";
let nextIcon = document.createElement("span");
bnNext.appendChild(nextIcon);
nextIcon.className = "material-symbols-rounded";
nextIcon.textContent = "skip_next";

let playerPanelSpace = document.createElement("div");
playerPanel.appendChild(playerPanelSpace);
playerPanelSpace.id = "playerPanelSpace";


//VARIABLES
let currentFocusPL = "picture";


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

function removeFocus(Opart) {
  if (Opart == "PL") {
    toggleLayerPL.style.transform = "translateX(0)"
    currentFocusPL = "";
  } else {
    toggleLayerAP.style.transform = "translateX(0)"
  }
}


//BUTTON FUNCTIONS
function focusPLOn(part) {
  let move = 40/2;
  if (part == "picture") {
    if (currentFocusPL != "picture") {
      removeFocus("PL");
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
    if (currentFocusPL != "lyrics") {
      removeFocus("PL");
      toggleLayerPL.style.transform = `translateX(${move}vw)`;
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
  currentFocusPL = part;
}
function focusAPOn(part) {
  let move = 40/3;
  if (part == "autoPlayOn") {
    removeFocus("AP");
    playingMode = "autoPlayOn";
  } else if (part == "autoPlayOff") {
    removeFocus("AP");
    toggleLayerAP.style.transform = `translateX(${move}vw)`;
    playingMode = "autoPlayOff";
  } else if (part == "repeat"){
    removeFocus("AP");
    toggleLayerAP.style.transform = `translateX(${2*move}vw)`;
    playingMode = "repeat";
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
  focusPLOn("picture");
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
  playbackBtnIcon.textContent = "play_arrow";
  playbackBtnIcon.id = "any";
  bnPlay.addEventListener("click", changeState);
}



bnNext.addEventListener("click",() => changeSong("next"));
bnPrev.addEventListener("click",() => changeSong("prev"));

timeSlider.addEventListener("input" ,() => {
  setTimeTo(timeSlider.value);
  time1.textContent = coveredTime;
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