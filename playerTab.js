
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
bnLike.addEventListener("click",f_like);

let bnFavourite = document.createElement("button");
secondaryControls.appendChild(bnFavourite);
bnFavourite.id = "bnFavourite";
let favouriteIcon = document.createElement("i");
bnFavourite.appendChild(favouriteIcon);
favouriteIcon.className = "fa-regular fa-star";
bnFavourite.append(favouriteIcon, document.createTextNode("FAVOURITE"));
bnFavourite.addEventListener("click", f_favourite);

let bnSave = document.createElement("button");
secondaryControls.appendChild(bnSave);
bnSave.id = "bnSave";
let saveIcon = document.createElement("i");
bnSave.appendChild(saveIcon);
saveIcon.className = "fa-regular fa-bookmark";
bnSave.append(saveIcon, document.createTextNode("SAVE"));
bnSave.addEventListener("click",f_save);

let bnAdd = document.createElement("button");
secondaryControls.appendChild(bnAdd);
bnAdd.id = "bnAdd";
let addIcon = document.createElement("i");
bnAdd.appendChild(addIcon);
addIcon.className = "fa-solid fa-add";
bnAdd.append(addIcon, document.createTextNode("PLAY NEXT"));
bnAdd.addEventListener("click",f_add);


let bnShare = document.createElement("button");
secondaryControls.appendChild(bnShare);
bnShare.id = "bnShare";
let shareIcon = document.createElement("i");
bnShare.appendChild(shareIcon);
shareIcon.className = "fa-solid fa-share";
bnShare.append(shareIcon, document.createTextNode("SHARE"));
bnShare.addEventListener("click",f_share);

let bnDownload = document.createElement("button");
secondaryControls.appendChild(bnDownload);
bnDownload.id = "bnDownload";
let downloadIcon = document.createElement("i");
bnDownload.appendChild(downloadIcon);
downloadIcon.className = "fa-solid fa-download";
bnDownload.append(downloadIcon, document.createTextNode("DOWNLOAD"));
bnDownload.addEventListener("click",f_download);

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
let moreIcon = document.createElement("i");
bnMore.appendChild(moreIcon);
moreIcon.className = "fa-solid fa-ellipsis";
bnMore.append(moreIcon, document.createTextNode("MORE"));
bnMore.addEventListener("click",f_more);

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
function f_like() {
  likeIcon.className = "fa-solid fa-heart";
  likeIcon.style.color = "rgba(255,0,0,0.7)";
  bnLike.removeEventListener("click",f_like);
  bnLike.addEventListener("click",f_dislike);
}
function f_dislike() {
  likeIcon.className = "fa-regular fa-heart";
  likeIcon.style.color = "rgba(255,255,255,0.7)";
  bnLike.removeEventListener("click",f_dislike);
  bnLike.addEventListener("click",f_like);
}

function f_favourite() {
  favouriteIcon.className = "fa-solid fa-star";
  bnFavourite.removeEventListener("click",f_favourite);
  bnFavourite.addEventListener("click",f_disfavourite);
  FavouriteSongList.push(currentSong);
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}
function f_disfavourite() {
  favouriteIcon.className = "fa-regular fa-star";
  bnFavourite.removeEventListener("click",f_disfavourite);
  bnFavourite.addEventListener("click",f_favourite);
  favouriteSongsCountP.textContent = `favouriteSongList.length`;
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

function f_add() {}
function f_share() {}
function f_download() {}
function f_more() {}

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
}, 1000);

//INITIALIZATION
togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
togglePic.style.fontWeight = "500";



attend();
