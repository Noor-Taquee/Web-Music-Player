//ELEMENTS==========================
let main = document.getElementById("main");
let bottomDiv = document.getElementById("bottomDiv");
let switchDiv = document.getElementById("switchDiv");
let bnHomePanel = document.getElementById("bnHomePanel");
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
let miniPrevIcon = document.createElement("span");
miniBnPrev.appendChild(miniPrevIcon);
miniPrevIcon.className = "material-symbols-rounded";
miniPrevIcon.textContent = "skip_previous";


let miniBnPlay = document.createElement("button");
miniPlaybackControlsDiv.appendChild(miniBnPlay)
miniBnPlay.id = "miniBnPlay";

let miniPlaybackBtnIcon = document.createElement("span");
miniBnPlay.appendChild(miniPlaybackBtnIcon);
miniPlaybackBtnIcon.id = "miniLoadingIcon";
miniPlaybackBtnIcon.className = "material-symbols-rounded";
miniPlaybackBtnIcon.textContent = "progress_activity";


let miniBnNext = document.createElement("button");
miniPlaybackControlsDiv.appendChild(miniBnNext)
miniBnNext.id = "miniBnNext";
let miniNextIcon = document.createElement("span");
miniBnNext.appendChild(miniNextIcon);
miniNextIcon.className = "material-symbols-rounded";
miniNextIcon.textContent = "skip_next";




let currentTab = null;
let currentBtn = null;
let miniPlayerRequired = false;



function initMiniPlayer() {
  miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
  miniTrackName.textContent = currentTrackName;
  miniArtistName.textContent = currentArtistName;
  miniPlaybackBtnIcon.textContent = "play_arrow";
  miniPlaybackBtnIcon.id = "any";
  miniBnPlay.addEventListener("click", changeState);
}

function expandToplayer() {
  switchTo("playerPanel");
}

function createScreen(defaultTab,btn) {
  main.removeChild(bottomDiv);
  main.appendChild(defaultTab);
  main.appendChild(bottomDiv);
  btn.id = "activeButton";
  currentTab = defaultTab;
  currentBtn = btn;
  bottomDiv.style.height = "35vw";
  bottomDiv.removeChild(switchDiv);
  bottomDiv.appendChild(miniPlayer);
  bottomDiv.appendChild(switchDiv);
  switchDiv.style.borderTopLeftRadius = "0";
  switchDiv.style.borderTopRightRadius = "0";
  switchDiv.style.borderBottomLeftRadius = "2rem";
  switchDiv.style.borderBottomRightRadius = "2rem";
  switchDiv.style.height = "50%";
}
function switchTo(destination) {
  currentBtn.id = "nonActiveBtn";
  if (currentTab != destination) {
    if (destination == "homePanel") {
      main.replaceChild(homePanel,currentTab);
      currentTab = homePanel;
      currentBtn = bnHomePanel;
      miniPlayerRequired = true;
    } else if (destination == "playerPanel") {
      main.replaceChild(playerPanel,currentTab);
      currentTab = playerPanel;
      miniPlayerRequired = false;
    } else if (destination == "searchPanel") {
      main.replaceChild(searchPanel,currentTab);
      currentTab = searchPanel;
      currentBtn = bnSearchPanel;
      miniPlayerRequired = true;
    } else if (destination == "libraryPanel") {
      main.replaceChild(libraryPanel,currentTab);
      currentTab = libraryPanel;
      currentBtn = bnLibraryPanel;
      miniPlayerRequired = true;
    } else {
      main.replaceChild(accountPanel,currentTab);
      currentTab = accountPanel;
      currentBtn = bnAccountPanel;
      miniPlayerRequired = true;
    }
    if (currentTab != playerPanel) {
      currentBtn.id = "activeButton";
    }
    if (miniPlayerRequired) {
      if (!bottomDiv.contains(miniPlayer)) {
        bottomDiv.style.height = "35vw";
        bottomDiv.style.maxHeight = "15vh";
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
        bottomDiv.style.height = "17.5vw";
        bottomDiv.style.maxHeight = "8vh";
        switchDiv.style.borderRadius = "3rem";
        switchDiv.style.height = "100%";
      }
    }
  }
}

let totalFiles = 10;
let attendFiles = 0;
function attend() {
  attendFiles++;
  if (attendFiles == totalFiles) {
    startBackend();
  }
}
attend();


miniBnNext.addEventListener("click",() => changeSong("next"));
miniBnPrev.addEventListener("click",() => changeSong("prev"));
bnHomePanel.addEventListener("click",() => switchTo("homePanel"));
bnSearchPanel.addEventListener("click",() => switchTo("searchPanel"));
bnLibraryPanel.addEventListener("click",() => switchTo("libraryPanel"));
bnAccountPanel.addEventListener("click",() => switchTo("accountPanel"));