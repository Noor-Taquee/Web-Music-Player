//#region UI
const playerPanelTopBar = createElement("div", { className: "top-bar" });
playerPanel.appendChild(playerPanelTopBar);

playerPanelTopBar.appendChild(createElement("button", {
  id: "player-back-btn",
  className: "back-btn toggle",
  onclick: hidePlayerPanel
}, [createElement("i", {
  className: "ph-bold ph-caret-down"
})] ));

const bnSongInfo = createElement("button", {
  className: "info-btn toggle",
  onclick: showSongInfo
}, [ createElement("i", {
  className: "ph-bold ph-info"
}) ]);
playerPanelTopBar.appendChild(bnSongInfo);

//#region album art
// Area for album art and lyrics
const pictureDiv = createElement("div", { className: "album-art-div" });
playerPanel.appendChild(pictureDiv);
pictureDiv.addEventListener("click", focusPLOn);

const albumArt = createElement("p", { className: "album-art" });
pictureDiv.appendChild(albumArt);
albumArt.addEventListener("animationend", () => {
  albumArt.style.animation = "none";
});

const lyricsDiv = createElement("div", { className: "lyrics-div" });
const lyrics = createElement("p", { className: "lyrics" });
lyricsDiv.appendChild(lyrics);
//#endregion album art

//#region middle strip
// Area for song info and secondary controls
const secondaryDiv = createElement("div", { className: "secondary-controls-outer-div" });
playerPanel.appendChild(secondaryDiv);

// Song name and artist name
const infoDiv = createElement("div", { className: "info-div" });
secondaryDiv.appendChild(infoDiv);

const trackName = createElement("p", { className: "track-name" });
infoDiv.appendChild(trackName);
const artistName = createElement("p", { className: "artist-name" });
infoDiv.appendChild(artistName);

const secondaryControls = createElement("div", { className: "secondary-controls-div" });
secondaryDiv.appendChild(secondaryControls);

const favouriteIcon = createElement("i", { className: "ph-bold ph-star" });
const bnFavourite = createElement("button", {
  className: "secondary-controls-btn ripple",
  onclick: f_favourite
}, [ favouriteIcon ]);
secondaryControls.appendChild(bnFavourite);

const bnMore = createElement("button", {
  className: "secondary-controls-btn ripple",
  onclick: showMore
}, [ createElement("i", { className: "ph-bold ph-dots-three-vertical" }) ]);
secondaryControls.appendChild(bnMore);

const moreDiv = createElement("div", { id: "player-song-options" });

const toggleAPDiv = createElement("div", {
  id: "toggleAPDiv"
});
moreDiv.appendChild(toggleAPDiv);

const toggleLayerAP = createElement("div", { id: "toggleLayerAP" });
toggleAPDiv.appendChild(toggleLayerAP);

const toggleAutoPlayOn = createElement("button", {
  className: "toggle",
  onclick: () => focusAPOn("autoPlayOn")
}, [ createElement("i", { className: "ph-bold ph-arrow-right" }) ]);
toggleAPDiv.appendChild(toggleAutoPlayOn);

const toggleAutoPlayOff = createElement("button", {
  className: "toggle",
  onclick: () => focusAPOn("autoPlayOff")
}, [ createElement("i", { className: "ph-bold ph-arrow-line-right" }) ]);
toggleAPDiv.appendChild(toggleAutoPlayOff);

const toggleRepeat = createElement("button", {
  className: "toggle",
  onclick: () => focusAPOn("repeat")
}, [ createElement("i", { className: "ph-bold ph-repeat" }) ]);
toggleAPDiv.appendChild(toggleRepeat);

const saveIcon = createElement("i", { className: "ph-bold ph-bookmark-simple" });
const bnSave = createElement("button", {
  className: "ripple",
  onclick: f_save
}, [ saveIcon, createElement("p", { textContent: "Save" }) ]);
moreDiv.appendChild(bnSave);

const bnShare = createElement("button", {
  className: "ripple",
  onclick: f_share
}, [ createElement("i", { className: "ph-bold ph-share-fat" }), createElement("p", { textContent: "Share" }) ]);
moreDiv.appendChild(bnShare);

const bnDownload = createElement("button", {
  className: "ripple",
  onclick: f_download
}, [ createElement("i", { className: "ph-bold ph-download-simple" }), createElement("p", { textContent: "Download" }) ]);
moreDiv.appendChild(bnDownload);
//#endregion middle strip

//#region primary controls
const controlDiv = createElement("div", { className: "primary-controls-outer-div" });
playerPanel.appendChild(controlDiv);

const primaryControls = createElement("div", { className: "primary-controls-div" });
controlDiv.appendChild(primaryControls);

// Time info
const runBarInfo = createElement("div", { className: "runtime-info-outer-div" });
primaryControls.appendChild(runBarInfo);

const timeSlider = createElement("input", {
  className: "time-bar-slider",
  type: "range",
  min: "0",
  max: "10.000",
  step: "0.001",
  value: "0"
});
runBarInfo.appendChild(timeSlider);

const runtimeInfo = createElement("div", { className: "runtime-info-div" });
primaryControls.appendChild(runtimeInfo);
const time1 = createElement("p", { className: "time", textContent: "0:00" });
runtimeInfo.appendChild(time1);
const time2 = createElement("p", { className: "time", textContent: "0:00" });
runtimeInfo.appendChild(time2);

const playbackControls = createElement("div", { className: "playback-controls-div" });
primaryControls.appendChild(playbackControls);

const bnPrev = createElement("button", { className: "playback-control-btn", onclick: null }, [ createElement("i", { className: "ph-fill ph-skip-back" }) ]);
playbackControls.appendChild(bnPrev);
bnPrev.addEventListener("click", () => changeSong("prev"));

const playbackBtnIcon = createElement("i", { className: "ph-bold ph-spinner" });
const bnPlay = createElement("button", {
  id: null,
  className: "playback-control-btn do-spin",
  onclick: null
}, [ playbackBtnIcon ]);
playbackControls.appendChild(bnPlay);

const bnNext = createElement("button", { className: "playback-control-btn", onclick: null }, [ createElement("i", { className: "ph-fill ph-skip-forward" }) ]);
playbackControls.appendChild(bnNext);
bnNext.addEventListener("click", () => changeSong("next"));
//#endregion primary controls

//#region functions
let currentFocusPL = "picture";

function hidePlayerPanel() {
  playerPanel.style.animation = "slide-out-bottom 0.3s ease";
  playerPanel.addEventListener("animationend", () => {
    playerPanel.style.display = "none";
  }, { once: true }
  );
}

/**
 * Updates the icons and functions of secondary according to the user data
 * @returns 
 */
function updateSecondaryButtons() {
  if (!signedIn) return;
  if (currentUser.favouriteSongList.includes(titleNames[currentSongIndex])) {
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
  if (!signedIn) { alert("Login to your account first!"); return; }
  favouriteIcon.className = "ph-fill ph-star";
  bnFavourite.removeEventListener("click", f_favourite);
  bnFavourite.addEventListener("click", f_disfavourite);
  currentUser.favouriteSongList.push(titleNames[currentSongIndex]);
  currentUser.sync();
}
function f_disfavourite() {
  favouriteIcon.className = "ph-bold ph-star";
  bnFavourite.removeEventListener("click", f_disfavourite);
  bnFavourite.addEventListener("click", f_favourite);
  currentUser.favouriteSongList.splice(currentUser.favouriteSongList.indexOf(titleNames[currentSongIndex]), 1);
  currentUser.sync();
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

function f_share() { }
function f_download() { }

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
  const move = 54 / 3;
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
//#endregion functions

//#region song info panel
const songInfoDiv = createElement("div", { className: "song-info-div" });
playerPanel.appendChild(songInfoDiv);

const songInfoDivTopBar = createElement("div", { className: "top-bar" });
songInfoDiv.appendChild(songInfoDivTopBar);
songInfoDivTopBar.appendChild(createElement("button", { className: "back-btn toggle", onclick: hideSongInfo }, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));

const songInfoConDiv = createElement("div", { className: "content" });

const songInfoLoader = createElement("div", { className: "song-info-loader" });
songInfoLoader.appendChild(createElement("i", { className: "ph-bold ph-spinner" }));
songInfoDiv.appendChild(songInfoLoader);

function showSongInfo() {
  songInfoDiv.style.display = "flex";
  songInfoDiv.style.animation = "slide-in-bottom 0.3s ease-in-out";
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
  songInfoDiv.style.animation = "slide-out-bottom 0.3s ease-in-out";
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

    const songInfo = createElement("div", {
      className: "song-info-section song"
    });
    songInfoConDiv.appendChild(songInfo);

    songInfo.appendChild(createElement("p", {
      className: "song-info-section-header",
      textContent: "About song"
    }));

    songInfo.appendChild(createElement("p", { 
      className: null,
      textContent: `Release Date: ${currentSong.release}`
      })
    );

    const songInfoArtists = createElement("div", { className: "song-info-section artist" });
    songInfoConDiv.appendChild(songInfoArtists);

    songInfoArtists.appendChild(createElement("p", { className: "song-info-section-header", textContent: "About artist" }));

    for (const artist of currentSong.artist) {
      try {
        const cArtistName = artist.trim();
        const cArtistData = artistData[cArtistName];

        const artistDiv = createElement("div", {
          className: "artist-div"
        });
        songInfoArtists.appendChild(artistDiv);

        let artistPicture;
        if (cArtistData.picture.length > 0) {
          artistPicture = createElement("img", {
            className: "artist-picture",
            src: cArtistData.picture
          });
        } else {
          artistPicture = createElement("i", { className: "ph- ph-user-sound" });
        }
        artistDiv.appendChild(artistPicture);

        const artistInfoDiv = createElement("div", {
          className: "artist-div-info"
        });
        artistDiv.appendChild(artistInfoDiv);
        artistInfoDiv.appendChild(createElement("p", {
          className: "artist-name",
          textContent: cArtistName
        }));
        const aboutArtistP = createElement("div", {
          className: "about-artist",
          textContent: cArtistData.about
        });
        artistInfoDiv.appendChild(aboutArtistP);
      } catch { }
    }

    const songContributionInfoDiv = createElement("div", {
      className: "song-info-section contribution"
    });
    songInfoConDiv.appendChild(songContributionInfoDiv);

    songContributionInfoDiv.appendChild(createElement("p", {
      textContent: `Contributed by ${currentSong.contributer} on ${currentSong.contributionDate}`
    }));

    const bnReportSongInfo = createElement("button", {
      className: "report-song-btn ripple",
      onclick: reportSong
    },
    [ createElement("i", {
        className: "ph-bold ph-bug"
      }), createElement("p", {
        textContent: "Report Error"
      })
    ]);
    songInfoConDiv.appendChild(bnReportSongInfo);
  }
}


// REPORTING ERROR IN A SONG =================================
const reportSongInfoPanel = createElement("div", { className: "added-panel report-panel" });
songInfoDiv.appendChild(reportSongInfoPanel);

const reportSongInfoTitleP = createElement("p", { className: "added-panel-header", textContent: "Report song" });
reportSongInfoPanel.appendChild(reportSongInfoTitleP);

const reportSongInfoInput = createElement("textarea", {
  className: "report-song-input",
  placeholder: "Please enter the issue or error..."
});
reportSongInfoPanel.appendChild(reportSongInfoInput);

const reportSongPanelBtnDiv = createElement("div", { className: "added-panel-btn-div" });
reportSongInfoPanel.appendChild(reportSongPanelBtnDiv);

reportSongPanelBtnDiv.appendChild(
  createElement("button", {
    className: "added-panel-btn",
    onclick: closeReportSongInfoPanel
  }, [ createElement("p", { textContent: "cancel" }) ])
);

reportSongPanelBtnDiv.appendChild(
  createElement("button", {
    className: "added-panel-btn",
    onclick: sendReportSongInfo
  }, [ createElement("p", { textContent: "submit" }) ])
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

//#endregion song info panel

