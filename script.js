//ELEMENTS==========================
let main = document.getElementById("main");
let blurLayer = document.getElementById("blurLayer");
let bottomDiv = document.getElementById("bottomDiv");
let switchDiv = document.getElementById("switchDiv");
let bnHomePanel = document.getElementById("bnHomePanel");
let bnPlayerPanel = document.getElementById("bnPlayerPanel");
let bnSearchPanel = document.getElementById("bnSearchPanel");
let bnLibraryPanel = document.getElementById("bnLibraryPanel");
let bnAccountPanel = document.getElementById("bnAccountPanel");


//CREATING ELEMENTS===================
let miniPlayer = document.createElement("div");
miniPlayer.id = "miniPlayer";
miniPlayer.addEventListener("click",expandToplayer);

let miniInfoDiv = document.createElement("div");
miniPlayer.appendChild(miniInfoDiv);
miniInfoDiv.id = "miniInfoDiv";
let miniAlbumArt = document.createElement("p");
miniInfoDiv.appendChild(miniAlbumArt);
miniAlbumArt.id = "miniAlbumArt";
let miniTrackInfoDiv = document.createElement("div");
miniInfoDiv.appendChild(miniTrackInfoDiv);
miniTrackInfoDiv.id = "miniTrackInfoDiv";
let miniTrackName = document.createElement("p");
miniTrackInfoDiv.appendChild(miniTrackName);
miniTrackName.id = "miniTrackName";
let miniArtistName = document.createElement("p");
miniTrackInfoDiv.appendChild(miniArtistName);
miniArtistName.id = "miniArtistName";

let miniPlaybackControlsDiv = document.createElement("div");
miniPlayer.appendChild(miniPlaybackControlsDiv);
miniPlaybackControlsDiv.id = "miniPlaybackControlsDiv";

let miniBnPrev = document.createElement("button");
miniPlaybackControlsDiv.appendChild(miniBnPrev)
miniBnPrev.id = "miniBnPrev";
let miniPrevIcon = document.createElement("i");
miniBnPrev.appendChild(miniPrevIcon);
miniPrevIcon.className = "fa-solid fa-backward-step";
miniPrevIcon.id = "miniPrevIcon";

let miniBnPlay = document.createElement("button");
miniPlaybackControlsDiv.appendChild(miniBnPlay)
miniBnPlay.id = "miniBnPlay";
let miniLoadingIcon = document.createElement("i");
miniBnPlay.appendChild(miniLoadingIcon);
miniLoadingIcon.className = "fa-solid fa-spinner";
miniLoadingIcon.id = "miniLoadingIcon";
let miniPlayIcon = document.createElement("i");
miniPlayIcon.className = "fa-solid fa-play";
let miniPauseIcon = document.createElement("i");
miniPauseIcon.className = "fa-solid fa-pause";

let miniBnNext = document.createElement("button");
miniPlaybackControlsDiv.appendChild(miniBnNext)
miniBnNext.id = "miniBnNext";
let miniNextIcon = document.createElement("i");
miniBnNext.appendChild(miniNextIcon);
miniNextIcon.className = "fa-solid fa-forward-step";
miniNextIcon.id = "miniNextIcon";




let currentTab = null;
let miniPlayerRequired = false;



function initMiniPlayer() {
  miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
  miniTrackName.textContent = currentTrackName;
  miniArtistName.textContent = currentArtistName;
  if (miniBnPlay.contains(miniLoadingIcon)) {
    miniBnPlay.replaceChild(miniPlayIcon,miniLoadingIcon);
  }
  miniBnPlay.addEventListener("click", changeState);
}

function expandToplayer() {
  switchTo("playerPanel");
}

function createScreen(defaultTab,btn) {
  blurLayer.removeChild(bottomDiv);
  blurLayer.appendChild(defaultTab);
  blurLayer.appendChild(bottomDiv);
  btn.style.backgroundColor = "rgba(255,255,255,0.3)";
  btn.style.fontSize = "120%";
  btn.style.fontWeight = "700";
  if (defaultTab != playerPanel) {
    bottomDiv.style.height = "20%";
    bottomDiv.removeChild(switchDiv);
    bottomDiv.appendChild(miniPlayer);
    bottomDiv.appendChild(switchDiv);
    switchDiv.style.borderTopLeftRadius = "0";
    switchDiv.style.borderTopRightRadius = "0";
    switchDiv.style.borderBottomLeftRadius = "2rem";
    switchDiv.style.borderBottomRightRadius = "2rem";
    switchDiv.style.height = "50%";
  }
}
function switchTo(destination) {
  if (blurLayer.contains(homePanel)) {
    bnHomePanel.style.backgroundColor = "transparent";
    bnHomePanel.style.fontSize = "100%";
    bnHomePanel.style.fontWeight = "500";
    currentTab = homePanel;
  } else if (blurLayer.contains(playerPanel)) {
    bnPlayerPanel.style.backgroundColor = "transparent";
    bnPlayerPanel.style.fontSize = "100%";
    bnPlayerPanel.style.fontWeight = "500";
    currentTab = playerPanel;
  } else if (blurLayer.contains(searchPanel)) {
    bnSearchPanel.style.backgroundColor = "transparent";
    bnSearchPanel.style.fontSize = "100%";
    bnSearchPanel.style.fontWeight = "500";
    currentTab = searchPanel;
  } else if (blurLayer.contains(libraryPanel)) {
    bnLibraryPanel.style.backgroundColor = "transparent";
    bnLibraryPanel.style.fontSize = "100%";
    bnLibraryPanel.style.fontWeight = "500";
    currentTab = libraryPanel;
  } else if (blurLayer.contains(accountPanel)) {
    bnAccountPanel.style.backgroundColor = "transparent";
    bnAccountPanel.style.fontSize = "100%";
    bnAccountPanel.style.fontWeight = "500";
    currentTab = accountPanel;
  }
  if (currentTab != destination) {
    if (destination == "homePanel") {
      blurLayer.replaceChild(homePanel,currentTab);
      bnHomePanel.style.backgroundColor = "rgba(255,255,255,0.3)";
      bnHomePanel.style.fontSize = "120%";
      bnHomePanel.style.fontWeight = "700";
      miniPlayerRequired = true;
    } else if (destination == "playerPanel") {
      bnPlayerPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
      bnPlayerPanel.style.fontSize = "120%";
      bnPlayerPanel.style.fontWeight = "700";
      blurLayer.replaceChild(playerPanel,currentTab);
      miniPlayerRequired = false;
    } else if (destination == "searchPanel") {
      bnSearchPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
      bnSearchPanel.style.fontSize = "120%";
      bnSearchPanel.style.fontWeight = "700";
      blurLayer.replaceChild(searchPanel,currentTab);
      miniPlayerRequired = true;
    } else if (destination == "libraryPanel") {
      bnLibraryPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
      bnLibraryPanel.style.fontSize = "120%";
      bnLibraryPanel.style.fontWeight = "700";
      blurLayer.replaceChild(libraryPanel,currentTab);
      miniPlayerRequired = true;
    } else {
      bnAccountPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
      bnAccountPanel.style.fontSize = "120%";
      bnAccountPanel.style.fontWeight = "700";
      blurLayer.replaceChild(accountPanel,currentTab);
      miniPlayerRequired = true;
    }
    if (miniPlayerRequired) {
      if (!bottomDiv.contains(miniPlayer)) {
        bottomDiv.style.height = "20%";
        bottomDiv.removeChild(switchDiv);
        bottomDiv.appendChild(miniPlayer);
        bottomDiv.appendChild(switchDiv);
        switchDiv.style.borderTopLeftRadius = "0";
        switchDiv.style.borderTopRightRadius = "0";
        switchDiv.style.borderBottomLeftRadius = "2rem";
        switchDiv.style.borderBottomRightRadius = "2rem";
        switchDiv.style.height = "50%";
      }
    } else {
      if (bottomDiv.contains(miniPlayer)) {
        bottomDiv.removeChild(miniPlayer);
        bottomDiv.style.height = "10%";
        switchDiv.style.borderRadius = "3rem";
        switchDiv.style.height = "100%";
      }
    }
  }
}

let totalFiles = 7;
let attendFiles = 0;
function attend() {
  attendFiles++;
  if (attendFiles == totalFiles) {
    startFetching();
    loadPlaylists();
    showInfo();
  }
}
attend();


miniBnNext.addEventListener("click",() => changeSong("next"));
miniBnPrev.addEventListener("click",() => changeSong("prev"));
bnHomePanel.addEventListener("click",() => switchTo("homePanel"));
bnPlayerPanel.addEventListener("click",() => switchTo("playerPanel"));
bnSearchPanel.addEventListener("click",() => switchTo("searchPanel"));
bnLibraryPanel.addEventListener("click",() => switchTo("libraryPanel"));
bnAccountPanel.addEventListener("click",() => switchTo("accountPanel"));
