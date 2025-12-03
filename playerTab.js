//CREATING ELEMEMTS
let playerPanel = document.getElementById("player-panel");

let playerPanelTopBar = createDiv("top-bar");
playerPanel.appendChild(playerPanelTopBar);

playerPanelTopBar.appendChild(
  createButton(
    "player-back-btn",
    "back-btn",
    createIcon("bold", "caret-down"),
    null,
    goBackPP
  )
);

let bnSongInfo = createButton(
  null,
  "info-btn",
  createIcon("bold", "info"),
  null,
  showSongInfo
);
playerPanelTopBar.appendChild(bnSongInfo);


// Area for album art and lyrics
let pictureDiv = createDiv("album-art-div");
playerPanel.appendChild(pictureDiv);
pictureDiv.addEventListener("click", focusPLOn);

let albumArt = createTextField("album-art", null);
pictureDiv.appendChild(albumArt);
albumArt.addEventListener("animationend", () => {
  albumArt.style.animation = "none";
});

let lyricsDiv = createDiv("lyrics-div");
let lyrics = createTextField("lyrics", null);
lyricsDiv.appendChild(lyrics);

// Area for song info and secondary controls
let secondaryDiv = createDiv("secondary-controls-outer-div");
playerPanel.appendChild(secondaryDiv);

// Song name and artist name
let infoDiv = createDiv("info-div");
secondaryDiv.appendChild(infoDiv);
let trackName = createTextField("track-name", null);
infoDiv.appendChild(trackName);
let artistName = createTextField("artist-name", null);
infoDiv.appendChild(artistName);

let secondaryControls = createDiv("secondary-controls-div");
secondaryDiv.appendChild(secondaryControls);

let favouriteIcon = createIcon("bold", "star");
let bnFavourite = createButton(
  null,
  "secondary-controls-btn ripple",
  favouriteIcon,
  null,
  f_favourite
);
secondaryControls.appendChild(bnFavourite);

let bnMore = createButton(
  null,
  "secondary-controls-btn ripple",
  createIcon("bold", "dots-three-vertical"),
  null,
  showMore
);
secondaryControls.appendChild(bnMore);

let moreDiv = createDiv(null, "player-song-options");

let toggleAPDiv = createDiv(null, "toggleAPDiv");
moreDiv.appendChild(toggleAPDiv);

let toggleLayerAP = createDiv(null, "toggleLayerAP");
toggleAPDiv.appendChild(toggleLayerAP);

let toggleAutoPlayOn = createButton(
  null,
  "toggle",
  createIcon("bold", "arrow-right")
);
toggleAPDiv.appendChild(toggleAutoPlayOn);
toggleAutoPlayOn.addEventListener("click", () => focusAPOn("autoPlayOn"));

let toggleAutoPlayOff = createButton(
  null,
  "toggle",
  createIcon("bold", "arrow-line-right")
);
toggleAPDiv.appendChild(toggleAutoPlayOff);
toggleAutoPlayOff.addEventListener("click", () => focusAPOn("autoPlayOff"));

let toggleRepeat = createButton(
  null,
  "toggle",
  createIcon("bold", "repeat")
);
toggleAPDiv.appendChild(toggleRepeat);
toggleRepeat.addEventListener("click", () => focusAPOn("repeat"));

let saveIcon = createIcon("bold", "bookmark-simple");
let bnSave = createButton(null, "ripple", saveIcon, "Save", f_save);
moreDiv.appendChild(bnSave);

let bnShare = createButton(
  null,
  "ripple",
  createIcon("bold", "share-fat"),
  "Share",
  f_share
);
moreDiv.appendChild(bnShare);

let bnDownload = createButton(
  null,
  "ripple",
  createIcon("bold", "download-simple"),
  "Download",
  f_download
);
moreDiv.appendChild(bnDownload);

// Area for primary controls
let controlDiv = document.createElement("div");
controlDiv.className = "primary-controls-outer-div";
playerPanel.appendChild(controlDiv);

let primaryControls = createDiv("primary-controls-div");
controlDiv.appendChild(primaryControls);

// Time info
let runBarInfo = createDiv("runtime-info-outer-div");
primaryControls.appendChild(runBarInfo);

let timeSlider = document.createElement("input");
runBarInfo.appendChild(timeSlider);
timeSlider.className = "time-bar-slider";
timeSlider.type = "range";
timeSlider.min = "0";
timeSlider.max = "10.000";
timeSlider.step = "0.001";
timeSlider.value = "0";

let runtimeInfo = createDiv("runtime-info-div");
primaryControls.appendChild(runtimeInfo);
let time1 = createTextField("time", "0:00");
runtimeInfo.appendChild(time1);
let time2 = createTextField("time", "0:00");
runtimeInfo.appendChild(time2);

let playbackControls = createDiv("playback-controls-div");
primaryControls.appendChild(playbackControls);

let bnPrev = createButton(
  null,
  "playback-control-btn",
  createIcon("fill", "skip-back")
);
playbackControls.appendChild(bnPrev);
bnPrev.addEventListener("click", () => changeSong("prev"));

let playbackBtnIcon = createIcon("bold", "spinner");
let bnPlay = createButton(
  null,
  "playback-control-btn do-spin",
  playbackBtnIcon,
  null
);
playbackControls.appendChild(bnPlay);

let bnNext = createButton(
  null,
  "playback-control-btn",
  createIcon("fill", "skip-forward")
);
playbackControls.appendChild(bnNext);
bnNext.addEventListener("click", () => changeSong("next"));

//VARIABLES
let currentFocusPL = "picture";

//FUNCTIONS
function updateSecondaryButtons() {
  if (favouriteSongList.includes(titleNames[currentSongIndex])) {
    favouriteIcon.className = "ph-fill ph-star";
    bnFavourite.removeEventListener("click", f_favourite);
    bnFavourite.addEventListener("click", f_disfavourite);
  } else {
    favouriteIcon.className = "ph-bold ph-star";
    bnFavourite.removeEventListener("click", f_disfavourite);
    bnFavourite.addEventListener("click", f_favourite);
  }
}

function f_favourite() {
  if (signedIn) {
    favouriteIcon.className = "ph-fill ph-star";
    bnFavourite.removeEventListener("click", f_favourite);
    bnFavourite.addEventListener("click", f_disfavourite);
    favouriteSongList.push(titleNames[currentSongIndex]);
    updateDataFile();
  } else {
    alert("Login to your account first!");
  }
}
function f_disfavourite() {
  favouriteIcon.className = "ph-bold ph-star";
  bnFavourite.removeEventListener("click", f_disfavourite);
  bnFavourite.addEventListener("click", f_favourite);
  favouriteSongList.splice(
    favouriteSongList.indexOf(titleNames[currentSongIndex]),
    1
  );
  updateDataFile();
}
function showMore() {
  playerPanel.appendChild(moreDiv);
  moreDiv.style.animation = "appear 0.3s ease-in-out";
  moreDiv.addEventListener(
    "animationend",
    () => {
      moreDiv.style.animation = "none";
      bnMore.removeEventListener("click", showMore);
      bnMore.addEventListener("click", hideMore);
    },
    { once: true }
  );
}

function hideMore() {
  moreDiv.style.animation = "disappear 0.3s ease-in-out";
  moreDiv.addEventListener(
    "animationend",
    () => {
      moreDiv.style.animation = "none";
      bnMore.removeEventListener("click", hideMore);
      bnMore.addEventListener("click", showMore);
      playerPanel.removeChild(moreDiv);
    },
    { once: true }
  );
}

function f_save() {
  saveIcon.className = "ph-fill ph-bookmark-simple";
  bnSave.removeEventListener("click", f_save);
  bnSave.addEventListener("click", f_unsave);
}
function f_unsave() {
  saveIcon.className = "ph ph-bookmark-simple";
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
    lyricsDiv.style.animation = "disappear 0.3s ease";
    lyricsDiv.addEventListener(
      "animationend",
      () => {
        pictureDiv.replaceChild(albumArt, lyricsDiv);
        albumArt.style.animation = "appear 0.3s ease";
      },
      { once: true }
    );
    currentFocusPL = "picture";
  } else {
    albumArt.style.animation = "disappear 0.3s ease";
    albumArt.addEventListener(
      "animationend",
      () => {
        pictureDiv.replaceChild(lyricsDiv, albumArt);
        lyricsDiv.style.animationName = "appear 0.3s ease";
      },
      { once: true }
    );
    currentFocusPL = "lyrics";
  }
}

function focusAPOn(part) {
  let move = 54 / 3;
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
  playbackBtnIcon.className = "ph-fill ph-play";
  bnPlay.classList.remove("do-spin");
  bnPlay.addEventListener("click", changeState);
}

function updatePlayer() {
  coveredTime = formatTime(song.currentTime);
  time1.textContent = coveredTime;
  timeSlider.value = song.currentTime;
}

timeSlider.addEventListener("input", () => {
  setTimeTo(timeSlider.value);
  time1.textContent = coveredTime;
});

//KEY BINDINGS
document.addEventListener("keydown", (event) => {
  if (event.key === "k") {
    changeState();
  } else if (event.key === "ArrowRight") {
    changeSong("next");
  } else if (event.key === "ArrowLeft") {
    changeSong("prev");
  }
});



// SONG INFO PANEL==============================================
// #region Song info panel
let songInfoDiv = createDiv("song-info-div");
playerPanel.appendChild(songInfoDiv);

let songInfoDivTopBar = createDiv("top-bar");
songInfoDiv.appendChild(songInfoDivTopBar);
songInfoDivTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    hideSongInfo
  )
);

let songInfoConDiv = createDiv("content");

let songInfoLoader = createDiv("song-info-loader");
songInfoLoader.appendChild(createIcon("bold", "spinner"));
songInfoDiv.appendChild(songInfoLoader);

function showSongInfo() {
  songInfoDiv.style.display = "flex";
  songInfoDiv.style.animation = "slideUp 0.3s ease-in-out";
  songInfoDiv.addEventListener(
    "animationend",
    () => {
      songInfoDiv.style.animation = "none";
      bnSongInfo.removeEventListener("click", showSongInfo);
      bnSongInfo.addEventListener("click", hideSongInfo);
      loadSongInfo();
    },
    { once: true }
  );
  // history.pushState(hideSongInfo, "", "./songInfo");
}

function updateSongInfoUI() {
  songInfoDiv.replaceChild(songInfoConDiv, songInfoLoader);
  loadSongInfo();
}

function hideSongInfo() {
  songInfoDiv.style.animation = "slideDown 0.3s ease-in-out";
  songInfoDiv.addEventListener(
    "animationend",
    () => {
      songInfoDiv.style.animation = "none";
      songInfoDiv.style.display = "none";
      bnSongInfo.removeEventListener("click", hideSongInfo);
      bnSongInfo.addEventListener("click", showSongInfo);
    },
    { once: true }
  );
}

  function loadSongInfo() {
    if (songLoaded && artistLoaded) {
    clearContainer(songInfoConDiv);

    let songInfo = createDiv("song-info-section song");
    songInfoConDiv.appendChild(songInfo);

    songInfo.appendChild(createTextField("song-info-section-header", "About song"));

    songInfo.appendChild(
      createTextField(null, `Release Date: ${currentSong.release}`)
    );

    let songInfoArtists = createDiv("song-info-section artist");
    songInfoConDiv.appendChild(songInfoArtists);

    songInfoArtists.appendChild(createTextField("song-info-section-header", "About artist"));

    for (let artist of currentSong.artist) {
      try {
        let cArtistName = artist.trim();
        let cArtistData = artistData[cArtistName];

        let artistDiv = createDiv("artist-div");
        songInfoArtists.appendChild(artistDiv);

        let artistPicture;
        if (cArtistData.picture.length > 0) {
          artistPicture = document.createElement("img");
          artistPicture.className = "artist-picture";
          artistPicture.src = cArtistData.picture;
        } else {
          artistPicture = createIcon("", "user-sound");
        }
        artistDiv.appendChild(artistPicture);

        let artistInfoDiv = createDiv("artist-div-info");
        artistDiv.appendChild(artistInfoDiv);
        artistInfoDiv.appendChild(createTextField("artist-name", cArtistName));
        let aboutArtistP = createDiv("about-artist");
        aboutArtistP.textContent = cArtistData.about;
        artistInfoDiv.appendChild(aboutArtistP);
      } catch {}
    }

    let songContributionInfoDiv = createDiv("song-info-section contribution");
    songInfoConDiv.appendChild(songContributionInfoDiv);

    songContributionInfoDiv.appendChild(
      createTextField(
        null,
        `Contributed by ${currentSong.contributer} on ${currentSong.contributionDate}`
      )
    );

    let bnReportSongInfo = createButton(
      null,
      "report-song-btn ripple",
      createIcon("bold", "bug"),
      "Report Error",
      reportSong
    );
    songInfoConDiv.appendChild(bnReportSongInfo);
  }
}


// REPORTING ERROR IN A SONG =================================
let reportSongInfoPanel = createDiv("added-panel report-panel");
songInfoDiv.appendChild(reportSongInfoPanel);

let reportSongInfoTitleP = createTextField("added-panel-header", "Report song");
reportSongInfoPanel.appendChild(reportSongInfoTitleP);

let reportSongInfoInput = document.createElement("textarea");
reportSongInfoPanel.appendChild(reportSongInfoInput);
reportSongInfoInput.className = "report-song-input";
reportSongInfoInput.type = "text";
reportSongInfoInput.placeholder = "Please enter the issue or error...";

let reportSongPanelBtnDiv = createDiv("added-panel-btn-div");
reportSongInfoPanel.appendChild(reportSongPanelBtnDiv);

reportSongPanelBtnDiv.appendChild(
  createButton(
    null,
    "added-panel-btn",
    null,
    "cancel",
    closeReportSongInfoPanel
  )
);

reportSongPanelBtnDiv.appendChild(
  createButton(
    null,
    "added-panel-btn",
    null,
    "submit",
    sendReportSongInfo
  )
);


let selectedSongToReport = null;
function reportSong() {
  if (signedIn) {
    selectedSongToReport = currentTrackName;
    reportSongInfoPanel.style.display = "flex";
    reportSongInfoPanel.style.animation = "appear 0.3s ease-in-out";
    reportSongInfoPanel.addEventListener(
      "animationend",
      () => {
        reportSongInfoPanel.style.animation = "none";
      },
      { once: true }
    );
    // history.pushState(closeReportSongInfoPanel, "", "./reportSong");
  }
}

function closeReportSongInfoPanel() {
  reportSongInfoPanel.style.animation = "disappear 0.3s ease-in-out";
  reportSongInfoPanel.addEventListener(
    "animationend",
    () => {
      reportSongInfoPanel.style.animation = "none";
      reportSongInfoPanel.style.display = "none";
    },
    { once: true }
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
    ).then(() => {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
      closeReportSongInfoPanel();
      alert("Your report has been sent successfully.");
    });
  } else {
    alert("Please enter the issue or error.");
  }
}

function goBackPP() {
  playerPanel.style.animation = "slideDown 0.3s ease";
  playerPanel.addEventListener(
    "animationend",
    () => {
      playerPanel.style.display = "none";
      playerPanel.style.animation = "none";
    },
    { once: true }
  );
}
// #endregion

attend();