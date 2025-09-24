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
bnSongInfoIcon.className = "material-symbols-rounded";
bnSongInfoIcon.textContent = "info";
// let bnSongInfoIcon = document.createElement("i");
// bnSongInfoIcon.className = "ph ph-info";
bnSongInfo.appendChild(bnSongInfoIcon);

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
backSongInfoIcon.className = "material-symbols-rounded";
backSongInfoIcon.textContent = "arrow_back_ios_new";
// let backSongInfoIcon = document.createElement("i");
// backSongInfoIcon.className = "ph ph-caret-left";
bnBackSongInfoDiv.appendChild(backSongInfoIcon);
let bnBackSongInfoDivP = document.createElement("p");
bnBackSongInfoDiv.appendChild(bnBackSongInfoDivP);
bnBackSongInfoDivP.textContent = "BACK";

let songInfoLoader = document.createElement("div");
songInfoLoader.id = "songInfoLoader";
let songInfoLoadingIcon = document.createElement("span");
songInfoLoader.className = "material-symbols-rounded";
songInfoLoadingIcon.textContent = "progress_activity";
songInfoLoadingIcon.id = "songInfoLoadingIcon";
// let songInfoLoadingIcon = document.createElement("i");
// songInfoLoader.className = "ph ph-spinner";
songInfoLoader.appendChild(songInfoLoadingIcon);

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
favouriteIcon.className = "material-symbols-rounded";
favouriteIcon.textContent = "favorite";
// let favouriteIcon = document.createElement("i");
// favouriteIcon.className = "ph ph-heart";
bnFavourite.appendChild(favouriteIcon);

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
bnMore.addEventListener("click", showMore);
let moreIcon = document.createElement("span");
moreIcon.className = "material-symbols-rounded";
moreIcon.textContent = "more_vert";
// let moreIcon = document.createElement("i");
// moreIcon.className = "ph ph-dots-three-outline-vertical";
bnMore.appendChild(moreIcon);

let moreDiv = document.createElement("div");
moreDiv.id = "moreDiv";

let toggleAPDiv = document.createElement("div");
moreDiv.appendChild(toggleAPDiv);
toggleAPDiv.id = "toggleAPDiv";
let toggleAutoPlayOn = document.createElement("button");
toggleAPDiv.appendChild(toggleAutoPlayOn);
toggleAutoPlayOn.id = "toggleAutoPlayOn";
toggleAutoPlayOn.addEventListener("click", () => focusAPOn("autoPlayOn"));
let autoPlayIcon = document.createElement("span");
autoPlayIcon.className = "material-symbols-rounded";
// let autoPlayIcon = document.createElement("i");
// autoPlayIcon.className = "ph ph-arrows-left-right";
autoPlayIcon.textContent = "sync_alt";
autoPlayIcon.id = "autoPlayIcon";
toggleAutoPlayOn.appendChild(autoPlayIcon);
let toggleAutoPlayOff = document.createElement("button");
toggleAPDiv.appendChild(toggleAutoPlayOff);
toggleAutoPlayOff.id = "toggleAutoPlayOff";
toggleAutoPlayOff.addEventListener("click", () => focusAPOn("autoPlayOff"));

let autoPlayOffIcon = document.createElement("span");
toggleAutoPlayOff.appendChild(autoPlayOffIcon);
autoPlayOffIcon.className = "material-symbols-rounded";
autoPlayOffIcon.textContent = "play_disabled";
autoPlayOffIcon.id = "autoPlayOffIcon";
let toggleRepeat = document.createElement("button");
toggleAPDiv.appendChild(toggleRepeat);
toggleRepeat.id = "toggleRepeat";
toggleRepeat.addEventListener("click", () => focusAPOn("repeat"));
let repeatIcon = document.createElement("span");
repeatIcon.className = "material-symbols-rounded";
// let repeatIcon = document.createElement("i");
// repeatIcon.className = "ph ph-repeat";
repeatIcon.textContent = "repeat_one";
repeatIcon.id = "repeatIcon";
toggleRepeat.appendChild(repeatIcon);
let toggleLayerAP = document.createElement("div");
toggleAPDiv.appendChild(toggleLayerAP);
toggleLayerAP.id = "toggleLayerAP";

let bnSave = document.createElement("button");
moreDiv.appendChild(bnSave);
bnSave.id = "bnSave";
bnSave.addEventListener("click", f_save);
let saveIcon = document.createElement("span");
saveIcon.className = "material-symbols-rounded";
saveIcon.textContent = "bookmark";
// let saveIcon = document.createElement("i");
// saveIcon.className = "ph ph-bookmark-simple";
bnSave.appendChild(saveIcon);
let bnSaveText = document.createElement("p");
bnSave.appendChild(bnSaveText);
bnSaveText.textContent = "SAVE";

let bnShare = document.createElement("button");
moreDiv.appendChild(bnShare);
bnShare.id = "bnShare";
bnShare.addEventListener("click", f_share);
let shareIcon = document.createElement("span");
shareIcon.className = "material-symbols-rounded";
shareIcon.textContent = "ios_share";
// let shareIcon = document.createElement("i");
// shareIcon.className = "ph ph-share-fat";
bnShare.appendChild(shareIcon);
let bnShareText = document.createElement("p");
bnShare.appendChild(bnShareText);
bnShareText.textContent = "SHARE";

let bnDownload = document.createElement("button");
moreDiv.appendChild(bnDownload);
bnDownload.id = "bnDownload";
bnDownload.addEventListener("click", f_download);
let downloadIcon = document.createElement("span");
downloadIcon.className = "material-symbols-rounded";
downloadIcon.textContent = "place_item";
// let downloadIcon = document.createElement("i");
// downloadIcon.className = "ph ph-download";
bnDownload.appendChild(downloadIcon);
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
bnPrev.addEventListener("click", () => changeSong("prev"));
let prevIcon = document.createElement("span");
prevIcon.className = "material-symbols-rounded";
prevIcon.textContent = "skip_previous";
// let prevIcon = document.createElement("i");
// prevIcon.className = "ph ph-skip-back";
bnPrev.appendChild(prevIcon);

let bnPlay = document.createElement("button");
playbackControls.appendChild(bnPlay);
bnPlay.id = "bnPlay";

let playbackBtnIcon = document.createElement("span");
playbackBtnIcon.className = "material-symbols-rounded";
// let playbackBtnIcon = document.createElement("i");
// playbackBtnIcon.className = "ph ph-play";
bnPlay.appendChild(playbackBtnIcon);
playbackBtnIcon.id = "loadingIcon";
playbackBtnIcon.textContent = "progress_activity";

let bnNext = document.createElement("button");
playbackControls.appendChild(bnNext);
bnNext.id = "bnNext";
bnNext.addEventListener("click", () => changeSong("next"));
let nextIcon = document.createElement("span");
nextIcon.className = "material-symbols-rounded";
// let nextIcon = document.createElement("i");
// nextIcon.className = "ph ph-skip-forward";
nextIcon.textContent = "skip_next";
bnNext.appendChild(nextIcon);

//VARIABLES
let currentFocusPL = "picture";

//FUNCTIONS
function updateSecondaryButtons() {
  if (favouriteSongList.includes(titleNames[currentSongIndex])) {
    favouriteIcon.style.fontVariationSettings = '"FILL" 1';
    bnFavourite.removeEventListener("click", f_favourite);
    bnFavourite.addEventListener("click", f_disfavourite);
  } else {
    favouriteIcon.style.fontVariationSettings = '"FILL" 0';
    bnFavourite.removeEventListener("click", f_disfavourite);
    bnFavourite.addEventListener("click", f_favourite);
  }
}

function f_favourite() {
  if (signedIn) {
    favouriteIcon.style.fontVariationSettings = '"FILL" 1';
    // favouriteIcon.className = "ph-fill ph-heart"
    bnFavourite.removeEventListener("click", f_favourite);
    bnFavourite.addEventListener("click", f_disfavourite);
    favouriteSongList.push(titleNames[currentSongIndex]);
    updateDataFile();
    favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
  } else {
    alert("Login to your account first!");
  }
}
function f_disfavourite() {
  favouriteIcon.style.fontVariationSettings = '"FILL" 0';
  // favouriteIcon.className = "ph ph-heart"
  bnFavourite.removeEventListener("click", f_disfavourite);
  bnFavourite.addEventListener("click", f_favourite);
  favouriteSongList.splice(
    favouriteSongList.indexOf(titleNames[currentSongIndex]),
    1
  );
  updateDataFile();
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}
function showMore() {
  playerPanel.appendChild(moreDiv);
  moreDiv.style.animation = "appear 0.3s ease-in-out";
  moreDiv.addEventListener("animationend", function moreDivApp() {
    moreDiv.removeEventListener("animationend", moreDivApp);
    bnMore.removeEventListener("click", showMore);
    bnMore.addEventListener("click", hideMore);
  });
}

function hideMore() {
  moreDiv.style.animation = "disappear 0.3s ease-in-out";
  moreDiv.addEventListener("animationend", function moreDivDis() {
    moreDiv.removeEventListener("animationend", moreDivDis);
    bnMore.removeEventListener("click", hideMore);
    bnMore.addEventListener("click", showMore);
    playerPanel.removeChild(moreDiv);
  });
}

function f_save() {
  saveIcon.fontVariationSettings = '"FILL" 1';
  // saveIcon.className = "ph-fill ph-bookmark-simple"
  bnSave.removeEventListener("click", f_save);
  bnSave.addEventListener("click", f_unsave);
}
function f_unsave() {
  saveIcon.fontVariationSettings = '"FILL" 0';
  // saveIcon.className = "ph ph-bookmark-simple"
  bnSave.removeEventListener("click", f_unsave);
  bnSave.addEventListener("click", f_save);
}

function f_share() {}
function f_download() {}

function removeFocus(Opart) {
  toggleLayerAP.style.transform = "translateX(0)";
}

//BUTTON FUNCTIONS
function focusPLOn() {
  if (currentFocusPL == "lyrics") {
    lyricsDiv.style.animationName = "disappear";
    lyricsDiv.style.animationDuration = "0.3s";
    lyricsDiv.addEventListener("animationend", function lTop() {
      lyricsDiv.removeEventListener("animationend", lTop);
      pictureDiv.removeChild(lyricsDiv);
      pictureDiv.appendChild(albumArt);
      albumArt.style.animationName = "appear";
      albumArt.style.animationDuration = "0.3s";
    });
    currentFocusPL = "picture";
  } else {
    albumArt.style.animationName = "disappear";
    albumArt.style.animationDuration = "0.3s";
    albumArt.addEventListener("animationend", function pTol() {
      albumArt.removeEventListener("animationend", pTol);
      pictureDiv.removeChild(albumArt);
      pictureDiv.appendChild(lyricsDiv);
      lyricsDiv.style.animationName = "appear";
      lyricsDiv.style.animationDuration = "0.3s";
    });
    currentFocusPL = "lyrics";
  }
}
function focusAPOn(part) {
  let move = 35 / 3;
  if (part == "autoPlayOn") {
    removeFocus();
    playingMode = "autoPlayOn";
  } else if (part == "autoPlayOff") {
    removeFocus();
    toggleLayerAP.style.transform = `translateX(${move}vw)`;
    playingMode = "autoPlayOff";
  } else if (part == "repeat") {
    removeFocus();
    toggleLayerAP.style.transform = `translateX(${2 * move}vw)`;
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
  // playbackBtnIcon.className = "ph-fill ph-play"
  playbackBtnIcon.id = "any";
  bnPlay.addEventListener("click", changeState);
}

timeSlider.addEventListener("input", () => {
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
  try {
    updateDevicePlayerProgress();
  } catch {}
  if (musicPlaying) {
    coveredTime = formatTime(song.currentTime);
    time1.textContent = coveredTime;
  }
  timeSlider.value = song.currentTime;
}, 1000);

function showSongInfo() {
  playerPanel.appendChild(songInfoDiv);
  songInfoDiv.style.animation = "slideUp 0.3s ease-in-out";
  songInfoDiv.addEventListener("animationend", function songInfoDivSlideUp() {
    songInfoDiv.removeEventListener("animationend", songInfoDivSlideUp);
    bnSongInfo.removeEventListener("click", showSongInfo);
    bnSongInfo.addEventListener("click", hideSongInfo);
  });
  // history.pushState(hideSongInfo, "", "./songInfo");
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
  songInfoDiv.style.animation = "slideDown 0.3s ease-in-out";
  songInfoDiv.addEventListener("animationend", function songInfoDivSlideDown() {
    songInfoDiv.removeEventListener("animationend", songInfoDivSlideDown);
    bnSongInfo.removeEventListener("click", hideSongInfo);
    bnSongInfo.addEventListener("click", showSongInfo);
    playerPanel.removeChild(songInfoDiv);
  });
}

function loadSondInfo() {
  clearContainer(songInfoConDiv);

  let songInfo = document.createElement("div");
  songInfoConDiv.appendChild(songInfo);
  songInfo.id = "songInfo";
  let songInfoHeader = document.createElement("p");
  songInfo.appendChild(songInfoHeader);
  songInfoHeader.id = "songInfoHeader";
  songInfoHeader.textContent = "ABOUT SONG";
  let songReleaseP = document.createElement("p");
  songInfo.appendChild(songReleaseP);
  songReleaseP.textContent = `Release Date: ${currentSong.release}`;

  let songInfoArtists = document.createElement("div");
  songInfoConDiv.appendChild(songInfoArtists);
  songInfoArtists.id = "songInfoArtists";

  let songInfoArtistsHeader = document.createElement("p");
  songInfoArtists.appendChild(songInfoArtistsHeader);
  songInfoArtistsHeader.id = "songInfoArtistsHeader";
  songInfoArtistsHeader.textContent = "ABOUT ARTIST ";

  for (let artist of currentSong.artist) {
    try {
      let cArtistName = artist.trim();
      let cArtistData = artistData[cArtistName];

      let artistDiv = document.createElement("div");
      songInfoArtists.appendChild(artistDiv);
      artistDiv.id = "artistDiv";

      let artistPicture = document.createElement("img");
      artistDiv.appendChild(artistPicture);
      artistPicture.id = "artistPicture";
      artistPicture.src = cArtistData.picture;

      let artistInfoDiv = document.createElement("div");
      artistDiv.appendChild(artistInfoDiv);
      artistInfoDiv.id = "artistInfoDiv";
      let artistNameP = document.createElement("p");
      artistInfoDiv.appendChild(artistNameP);
      artistNameP.id = "artistNameP";
      artistNameP.textContent = cArtistName;
      let aboutArtistP = document.createElement("div");
      artistInfoDiv.appendChild(aboutArtistP);
      aboutArtistP.id = "aboutArtistP";
      aboutArtistP.textContent = cArtistData.about;
    } catch {}
  }

  let songContributionInfoDiv = document.createElement("div");
  songInfoConDiv.appendChild(songContributionInfoDiv);
  songContributionInfoDiv.id = "songContributionInfoDiv";
  let songContributerP = document.createElement("p");
  songContributionInfoDiv.appendChild(songContributerP);
  songContributerP.textContent = `Contributed by ${currentSong.contributer} on ${currentSong.contributionDate}`;

  let bnReportSongInfo = document.createElement("button");
  songInfoConDiv.appendChild(bnReportSongInfo);
  bnReportSongInfo.id = "bnReportSongInfo";
  let reportIcon = document.createElement("span");
  reportIcon.className = "material-symbols-rounded";
  reportIcon.textContent = "feedback";
  // let reportIcon = document.createElement("i");
  // reportIcon.className = "ph ph-report";
  bnReportSongInfo.appendChild(reportIcon);
  reportIcon.style.color = "red";
  let bnReportSongInfoP = document.createElement("p");
  bnReportSongInfo.appendChild(bnReportSongInfoP);
  bnReportSongInfoP.textContent = "REPORT ERROR";
  bnReportSongInfo.style.color = "red";
  bnReportSongInfo.addEventListener("click", reportSong);

  let songInfoDivSpace = document.createElement("div");
  songInfoConDiv.appendChild(songInfoDivSpace);
  songInfoDivSpace.id = "songInfoDivSpace";
}

let reportSongInfoPanel = document.createElement("div");
reportSongInfoPanel.id = "reportSongInfoPanel";
let reportSongInfoTitleP = document.createElement("p");
reportSongInfoPanel.appendChild(reportSongInfoTitleP);
reportSongInfoTitleP.id = "reportSongInfoTitleP";
reportSongInfoTitleP.textContent = "REPORT SONG";

let reportSongInfoInput = document.createElement("input");
reportSongInfoPanel.appendChild(reportSongInfoInput);
reportSongInfoInput.id = "reportSongInfoInput";
reportSongInfoInput.type = "text";
reportSongInfoInput.placeholder = "Please enter the issue or error...";

let bnReportSongInfoSubmit = document.createElement("button");
reportSongInfoPanel.appendChild(bnReportSongInfoSubmit);
bnReportSongInfoSubmit.id = "bnReportSongInfoSubmit";
bnReportSongInfoSubmit.addEventListener("click", sendReportSongInfo);
let bnReportSongInfoSubmitP = document.createElement("p");
bnReportSongInfoSubmit.appendChild(bnReportSongInfoSubmitP);
bnReportSongInfoSubmitP.textContent = "SUBMIT";
let reportIcon = document.createElement("span");
reportIcon.className = "material-symbols-rounded";
reportIcon.textContent = "send";
// let reportIcon = document.createElement("i");
// reportIcon.className = "ph ph-paper-plane-right";
bnReportSongInfoSubmit.appendChild(reportIcon);

let bnReportSongInfoCancel = document.createElement("button");
reportSongInfoPanel.appendChild(bnReportSongInfoCancel);
bnReportSongInfoCancel.id = "bnReportSongInfoCancel";
bnReportSongInfoCancel.addEventListener("click", closeReportSongInfoPanel);
let bnReportSongInfoCancelP = document.createElement("p");
bnReportSongInfoCancel.appendChild(bnReportSongInfoCancelP);
bnReportSongInfoCancelP.textContent = "CANCEL";

let selectedSongToReport = null;
function reportSong() {
  if (signedIn) {
    selectedSongToReport = currentTrackName;
    main.appendChild(reportSongInfoPanel);
    reportSongInfoPanel.style.animation = "appear 0.3s ease-in-out";
    reportSongInfoPanel.addEventListener(
      "animationend",
      function reportSongInfoPanelApp() {
        reportSongInfoPanel.removeEventListener(
          "animationend",
          reportSongInfoPanelApp
        );
      }
    );
    // history.pushState(closeReportSongInfoPanel, "", "./reportSong");
  }
}

function closeReportSongInfoPanel() {
  reportSongInfoPanel.style.animation = "disappear 0.3s ease-in-out";
  reportSongInfoPanel.addEventListener(
    "animationend",
    function reportSongInfoPanelDis() {
      reportSongInfoPanel.removeEventListener(
        "animationend",
        reportSongInfoPanelDis
      );
      main.removeChild(reportSongInfoPanel);
    }
  );
}

function sendReportSongInfo() {
  if (reportSongInfoInput.value.trim().length > 0) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    sendNotification(
      "noortaquee",
      "ERROR REPORT",
      `${userName} reported an issue with the song "${selectedSongToReport}": "${reportSongInfoInput.value}"`
    );
    updateDataFile().then(() => {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
      main.removeChild(reportSongInfoPanel);
      alert("Your report has been sent successfully.");
    });
  } else {
    alert("Please enter the issue or error.");
  }
}

attend();
