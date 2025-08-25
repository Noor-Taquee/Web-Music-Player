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
let toggleLyr = document.createElement("button");
toggleDiv.appendChild(toggleLyr);
toggleLyr.id = "toggleLyr";
toggleLyr.textContent = "LYRICS";


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


let infoDiv = document.createElement("div");
playerPanel.appendChild(infoDiv);
infoDiv.id = "infoDiv";
let trackName = document.createElement("p");
infoDiv.appendChild(trackName);
trackName.id = "trackName";
let bnArtist = document.createElement("button");
infoDiv.appendChild(bnArtist);
bnArtist.id = "bnArtist";
let artistIcon = document.createElement("i");
bnArtist.appendChild(artistIcon);
artistIcon.className = "fa-solid fa-user";
let artistName = document.createElement("p");
bnArtist.appendChild(artistName);
artistName.id = "artistName";


let controlDiv = document.createElement("div");
playerPanel.appendChild(controlDiv);
controlDiv.id = "controlDiv";

let secondaryControls = document.createElement("div");
controlDiv.appendChild(secondaryControls);
secondaryControls.id = "secondaryControls";

let bnLike = document.createElement("button");
secondaryControls.appendChild(bnLike);
bnLike.id = "bnLike";
let likeIcon = document.createElement("i");
bnLike.appendChild(likeIcon);
likeIcon.className = "fa-regular fa-heart";
bnLike.append(likeIcon, document.createTextNode("LIKE"));

let bnFavourite = document.createElement("button");
secondaryControls.appendChild(bnFavourite);
bnFavourite.id = "bnFavourite";
let favouriteIcon = document.createElement("i");
bnFavourite.appendChild(favouriteIcon);
favouriteIcon.className = "fa-regular fa-star";
bnFavourite.append(favouriteIcon, document.createTextNode("FAVOURITE"));

let bnSave = document.createElement("button");
secondaryControls.appendChild(bnSave);
bnSave.id = "bnSave";

let bnAdd = document.createElement("button");
secondaryControls.appendChild(bnAdd);
bnAdd.id = "bnAdd";
let addIcon = document.createElement("i");
bnAdd.appendChild(addIcon);
addIcon.className = "fa-solid fa-add";
bnAdd.append(addIcon, document.createTextNode("PLAY NEXT"));

let saveIcon = document.createElement("i");
bnSave.appendChild(saveIcon);
saveIcon.className = "fa-regular fa-bookmark";
bnSave.append(saveIcon, document.createTextNode("SAVE"));

let bnShare = document.createElement("button");
secondaryControls.appendChild(bnShare);
bnShare.id = "bnShare";
let shareIcon = document.createElement("i");
bnShare.appendChild(shareIcon);
shareIcon.className = "fa-solid fa-share";
bnShare.append(shareIcon, document.createTextNode("SHARE"));

let bnDownload = document.createElement("button");
secondaryControls.appendChild(bnDownload);
bnDownload.id = "bnDownload";
let downloadIcon = document.createElement("i");
bnDownload.appendChild(downloadIcon);
downloadIcon.className = "fa-solid fa-download";
bnDownload.append(downloadIcon, document.createTextNode("DOWNLOAD"));

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
let moreIcon = document.createElement("i");
bnMore.appendChild(moreIcon);
moreIcon.className = "fa-solid fa-ellipsis";
bnMore.append(moreIcon, document.createTextNode("MORE"));

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
let loadingIcon = document.createElement("i");
bnPlay.appendChild(loadingIcon);
loadingIcon.id = "loadingIcon";
loadingIcon.className = "fa-solid fa-spinner";
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



//VARIABLES
let currentFocus = "picture";




//FUNCTIONS
function removeFocus() {
  toggleLyr.style.backgroundColor = "transparent";
  togglePic.style.backgroundColor = "transparent";
  toggleLyr.style.fontWeight = "300";
  togglePic.style.fontWeight = "300";
  currentFocus = "";
}


//BUTTON FUNCTIONS
function focusOn(part) {
  if (part == "picture") {
    if (currentFocus != "picture") {
      removeFocus();
      togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
      togglePic.style.fontWeight = "500";
      lyricsDiv.style.animationName = "disappear";
      lyricsDiv.style.animationDuration = "0.5s";
      lyricsDiv.addEventListener("animationend",function lTop() {
        lyricsDiv.removeEventListener("animationend",lTop);
        pictureDiv.removeChild(lyricsDiv);
        pictureDiv.appendChild(albumArt);
        albumArt.style.animationName = "appear";
        albumArt.style.animationDuration = "0.5s";
      });
    }
  } else {
    if (currentFocus != "lyrics") {
      removeFocus();
      toggleLyr.style.backgroundColor = "rgba(255,255,255,0.3)";
      toggleLyr.style.fontWeight = "500";
      albumArt.style.animationName = "disappear";
      albumArt.style.animationDuration = "0.5s";
      albumArt.addEventListener("animationend",function pTol() {
        albumArt.removeEventListener("animationend",pTol);
        pictureDiv.removeChild(albumArt);
        pictureDiv.appendChild(lyricsDiv);
        lyricsDiv.style.animationName = "appear";
        lyricsDiv.style.animationDuration = "0.5s";
      });
    }
  }
  currentFocus = part;
}

function changeState() {
  if (musicPlaying) {
    stopMusic();
    bnPlay.replaceChild(playIcon,pauseIcon);
    albumArt.style.transform = "scale(0.9)";
  } else {
    startMusic();
    bnPlay.replaceChild(pauseIcon,playIcon);
    albumArt.style.transform = "scale(1)";
  }
}

function changeSong(order) {
  bnPlay.replaceChild(loadingIcon, playIcon);
  if (order == "next") {
    if (nextSong()) {
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutBehind";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animateNext() {
          albumArt.removeEventListener("animationend",animateNext);
          albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
          albumArt.style.animation = "fadeInAhead";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
      }
    }
  } else {
    if (prevSong()) {
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutAhead";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animatePrev() {
          albumArt.removeEventListener("animationend",animatePrev);
          albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
          albumArt.style.animation = "fadeInBehind";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${currentAlbumArt})`;
      }
    }
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
togglePic.addEventListener("click",() => focusOn("picture"));
toggleLyr.addEventListener("click",() => focusOn("lyrics"));
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

//INITIALIZATION
togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";

togglePic.style.fontWeight = "500";
