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

let miniInfoDiv = document.createElement("div");
miniPlayer.appendChild(miniInfoDiv);
miniInfoDiv.id = "miniInfoDiv";
miniInfoDiv.addEventListener("click",expandToplayer);
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
let currentBtn = null;
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
  btn.style.color = "rgba(255,255,255,0.7)";
  currentTab = defaultTab;
  currentBtn = btn;
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
  currentBtn.style.color = "rgba(255,255,255,0.3)";
  if (currentTab != destination) {
    if (destination == "homePanel") {
      blurLayer.replaceChild(homePanel,currentTab);
      currentTab = homePanel;
      currentBtn = bnHomePanel;
      miniPlayerRequired = true;
    } else if (destination == "playerPanel") {
      blurLayer.replaceChild(playerPanel,currentTab);
      currentTab = playerPanel;
      currentBtn = bnPlayerPanel;
      miniPlayerRequired = false;
    } else if (destination == "searchPanel") {
      blurLayer.replaceChild(searchPanel,currentTab);
      currentTab = searchPanel;
      currentBtn = bnSearchPanel;
      miniPlayerRequired = true;
    } else if (destination == "libraryPanel") {
      blurLayer.replaceChild(libraryPanel,currentTab);
      currentTab = libraryPanel;
      currentBtn = bnLibraryPanel;
      miniPlayerRequired = true;
    } else {
      blurLayer.replaceChild(accountPanel,currentTab);
      currentTab = accountPanel;
      currentBtn = bnAccountPanel;
      miniPlayerRequired = true;
    }
    currentBtn.style.color = "rgba(255,255,255,0.8)";
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
    fetchSongs();
    fetchUsersInfo();
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