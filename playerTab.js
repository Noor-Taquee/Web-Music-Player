//CREATING ELEMEMTS
let playerPanel = document.createElement("div");
playerPanel.id = "playerPanel";

let playerPanelTopBar = document.createElement("div");
playerPanel.appendChild(playerPanelTopBar);
playerPanelTopBar.id = "playerPanelTopBar";
let bnSongInfo = document.createElement("button");
playerPanelTopBar.appendChild(bnSongInfo);
bnSongInfo.id = "bnSongInfo";
bnSongInfo.addEventListener("click", showSongInfo);
let bnSongInfoIcon = document.createElement("span");
bnSongInfo.appendChild(bnSongInfoIcon);
bnSongInfoIcon.className = "material-symbols-rounded";
bnSongInfoIcon.textContent = "info";




let songInfoDiv = document.createElement("div");
songInfoDiv.id = "songInfoDiv";
let songInfoDivTopBar = document.createElement("div");
songInfoDiv.appendChild(songInfoDivTopBar);
songInfoDivTopBar.id = "songInfoDivTopBar";
let bnBackSongInfoDiv = document.createElement("button");
songInfoDivTopBar.appendChild(bnBackSongInfoDiv);
bnBackSongInfoDiv.id = "bnBackSongInfoDiv";
bnBackSongInfoDiv.addEventListener("click", hideSongInfo);
let backSongInfoIcon = document.createElement("span");
bnBackSongInfoDiv.appendChild(backSongInfoIcon);
backSongInfoIcon.className = "material-symbols-rounded";
backSongInfoIcon.textContent = "arrow_back_ios_new";
let bnBackSongInfoDivP = document.createElement("p");
bnBackSongInfoDiv.appendChild(bnBackSongInfoDivP);
bnBackSongInfoDivP.textContent = "BACK";

let songInfoLoader = document.createElement("div");
songInfoLoader.id = "songInfoLoader";
let songInfoLoadingIcon = document.createElement("span");
songInfoLoader.appendChild(songInfoLoadingIcon);
songInfoLoadingIcon.id = "songInfoLoadingIcon";
songInfoLoader.className = "material-symbols-rounded";
songInfoLoadingIcon.textContent = "progress_activity";

let songInfoConDiv = document.createElement("div");
songInfoDiv.appendChild(songInfoConDiv);
songInfoConDiv.id = "songInfoConDiv";





let pictureDiv = document.createElement("div");
playerPanel.appendChild(pictureDiv);
pictureDiv.id = "pictureDiv";
pictureDiv.addEventListener("click", focusPLOn);
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
let artistName = document.createElement("p");
infoDiv.appendChild(artistName);
artistName.id = "artistName";



let secondaryControls = document.createElement("div");
secondaryDiv.appendChild(secondaryControls);
secondaryControls.id = "secondaryControls";


let bnFavourite = document.createElement("button");
secondaryControls.appendChild(bnFavourite);
bnFavourite.id = "bnFavourite";
bnFavourite.addEventListener("click", f_favourite);
let favouriteIcon = document.createElement("span");
bnFavourite.appendChild(favouriteIcon);
favouriteIcon.className = "material-symbols-rounded";
favouriteIcon.textContent = "favorite";

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
bnMore.addEventListener("click",showMore);
let moreIcon = document.createElement("span");
bnMore.appendChild(moreIcon);
moreIcon.className = "material-symbols-rounded";
moreIcon.textContent = "more_vert";

let moreDiv = document.createElement("div");
moreDiv.id = "moreDiv";

let toggleAPDiv = document.createElement("div")
moreDiv.appendChild(toggleAPDiv);
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

let bnSave = document.createElement("button");
moreDiv.appendChild(bnSave);
bnSave.id = "bnSave";
bnSave.addEventListener("click",f_save);
let saveIcon = document.createElement("span");
bnSave.appendChild(saveIcon);
saveIcon.className = "material-symbols-rounded";
saveIcon.textContent = "bookmark";
let bnSaveText = document.createElement("p");
bnSave.appendChild(bnSaveText);
bnSaveText.textContent = "SAVE";

let bnShare = document.createElement("button");
moreDiv.appendChild(bnShare);
bnShare.id = "bnShare";
bnShare.addEventListener("click",f_share);
let shareIcon = document.createElement("span");
bnShare.appendChild(shareIcon);
shareIcon.className = "material-symbols-rounded";
shareIcon.textContent = "share";
let bnShareText = document.createElement("p");
bnShare.appendChild(bnShareText);
bnShareText.textContent = "SHARE";

let bnDownload = document.createElement("button");
moreDiv.appendChild(bnDownload);
bnDownload.id = "bnDownload";
bnDownload.addEventListener("click",f_download);
let downloadIcon = document.createElement("span");
bnDownload.appendChild(downloadIcon);
downloadIcon.className = "material-symbols-rounded";
downloadIcon.textContent = "download";
let bnDownloadText = document.createElement("p");
bnDownload.appendChild(bnDownloadText);
bnDownloadText.textContent = "DOWNLOAD";

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

//VARIABLES
let currentFocusPL = "picture";


//FUNCTIONS
function updateSecondaryButtons() {
  if (favouriteSongList.includes(titleNames[currentSongIndex])) {
    favouriteIcon.style.fontVariationSettings = '"FILL" 1';
    bnFavourite.removeEventListener("click",f_favourite);
    bnFavourite.addEventListener("click",f_disfavourite);
  } else {
    favouriteIcon.style.fontVariationSettings = '"FILL" 0';
    bnFavourite.removeEventListener("click",f_disfavourite);
    bnFavourite.addEventListener("click",f_favourite);
  }
}


function f_favourite() {
  if (signedIn) {
    favouriteIcon.style.fontVariationSettings = '"FILL" 1';
    bnFavourite.removeEventListener("click",f_favourite);
    bnFavourite.addEventListener("click",f_disfavourite);
    favouriteSongList.push(titleNames[currentSongIndex]);
    updateDataFile();
    favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
  } else {
    alert("Login to your account first!");
  }
}
function f_disfavourite() {
  favouriteIcon.style.fontVariationSettings = '"FILL" 0';
  bnFavourite.removeEventListener("click",f_disfavourite);
  bnFavourite.addEventListener("click",f_favourite);
  favouriteSongList.splice(favouriteSongList.indexOf(titleNames[currentSongIndex]),1);
  updateDataFile();
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}
function showMore() {
  playerPanel.appendChild(moreDiv);
  bnMore.removeEventListener("click", showMore);
  bnMore.addEventListener("click", hideMore);
}

function hideMore() {
  playerPanel.removeChild(moreDiv);
  bnMore.removeEventListener("click", hideMore);
  bnMore.addEventListener("click", showMore);
}

function f_save() {
  saveIcon.fontVariationSettings = '"FILL" 1';
  bnSave.removeEventListener("click",f_save);
  bnSave.addEventListener("click",f_unsave);
}
function f_unsave() {
  saveIcon.fontVariationSettings = '"FILL" 0';
  bnSave.removeEventListener("click",f_unsave);
  bnSave.addEventListener("click",f_save);
}

function f_share() {}
function f_download() {}

function removeFocus(Opart) {
  toggleLayerAP.style.transform = "translateX(0)"
}


//BUTTON FUNCTIONS
function focusPLOn() {
  if (currentFocusPL == "lyrics") {
    lyricsDiv.style.animationName = "disappear";
    lyricsDiv.style.animationDuration = "0.3s";
    lyricsDiv.addEventListener("animationend",function lTop() {
      lyricsDiv.removeEventListener("animationend",lTop);
      pictureDiv.removeChild(lyricsDiv);
      pictureDiv.appendChild(albumArt);
      albumArt.style.animationName = "appear";
      albumArt.style.animationDuration = "0.3s";
    });
    currentFocusPL = "picture";
  } else {
    albumArt.style.animationName = "disappear";
    albumArt.style.animationDuration = "0.3s";
    albumArt.addEventListener("animationend",function pTol() {
      albumArt.removeEventListener("animationend",pTol);
      pictureDiv.removeChild(albumArt);
      pictureDiv.appendChild(lyricsDiv);
      lyricsDiv.style.animationName = "appear";
      lyricsDiv.style.animationDuration = "0.3s";
    });
    currentFocusPL = "lyrics";
  }
}
function focusAPOn(part) {
  let move = 35/3;
  if (part == "autoPlayOn") {
    removeFocus();
    playingMode = "autoPlayOn";
  } else if (part == "autoPlayOff") {
    removeFocus();
    toggleLayerAP.style.transform = `translateX(${move}vw)`;
    playingMode = "autoPlayOff";
  } else if (part == "repeat"){
    removeFocus();
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
}, 1000);


function showSongInfo() {
  playerPanel.appendChild(songInfoDiv);
  if (songInfoDiv.contains(songInfoConDiv)) {
    songInfoDiv.replaceChild(songInfoLoader, songInfoConDiv);
  }
  if (artistNames.length < 1) {
    fetchArtistsData().then(() => {
      loadSondInfo();
      songInfoDiv.replaceChild(songInfoConDiv, songInfoLoader);
    });
  } else {
    loadSondInfo();
    songInfoDiv.replaceChild(songInfoConDiv, songInfoLoader);
  }
}

function hideSongInfo() {
  playerPanel.removeChild(songInfoDiv);
}

function loadSondInfo() {
  clearContainer(songInfoConDiv);

  let songInfo = document.createElement("div");
  songInfoConDiv.appendChild(songInfo);
  songInfo.id = "songInfo";
  let songReleaseP = document.createElement("p");
  songInfo.appendChild(songReleaseP);
  songReleaseP.textContent = `Release Date: ${currentSong.release}`;


  let songInfoArtists = document.createElement("div");
  songInfoConDiv.appendChild(songInfoArtists);
  songInfoArtists.id = "songInfoArtists";


  for (let artist of currentSong.artist) {
    let cArtistName = artist.trim();
    let cArtistData = artistData[cArtistName];

    let artistDiv = document.createElement("div");
    songInfoArtists.appendChild(artistDiv);

    let artistInfoDiv = document.createElement("div");
    artistDiv.appendChild(artistInfoDiv);
    artistInfoDiv.id = "artistInfoDiv";
    let artistImage = document.createElement("img");
    artistInfoDiv.appendChild(artistImage);
    artistImage.id = "artistImage";
    artistImage.src = cArtistData.picture;
    let artistNameP = document.createElement("p");
    artistInfoDiv.appendChild(artistNameP);
    artistNameP.id = "artistNameP";
    artistNameP.textContent = cArtistName;
    let aboutArtistP = document.createElement("div");
    artistDiv.appendChild(aboutArtistP);
    aboutArtistP.id = "aboutArtistP";
    aboutArtistP.textContent = cArtistData.about;
  }

  let songContributionInfoDiv = document.createElement("div");
  songInfoConDiv.appendChild(songContributionInfoDiv);
  songContributionInfoDiv.id = "songContributionInfoDiv";
  let songContributerP = document.createElement("p");
  songContributionInfoDiv.appendChild(songContributerP);
  songContributerP.textContent = `Contributed by: ${currentSong.contributer} on ${currentSong.contributionDate}`;
}

attend();