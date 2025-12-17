//ELEMENTS==========================

bnAccountPanel.addEventListener("click", () => switchTo(accountPanel));
bnHomePanel.addEventListener("click", () => switchTo(homePanel));
bnSearchPanel.addEventListener("click", () => switchTo(searchPanel));
bnLibraryPanel.addEventListener("click", () => switchTo(libraryPanel));

// Setting up mini player
let miniPlayer = createDiv("mini-player");
bottomDiv.insertBefore(miniPlayer, switchDiv);

let miniInfoDiv = createDiv("mini-info-div");
miniPlayer.appendChild(miniInfoDiv);
miniInfoDiv.addEventListener("click", expandToplayer);

// Album art
let miniAlbumArt = createTextField("mini-album-art", null);
miniInfoDiv.appendChild(miniAlbumArt);
// If no album art, show icon
let miniPlayerSongIcon = createIcon("bold", "headphones");

// Song playing info
let miniTrackInfoDiv = createDiv("mini-track-info-div");
miniInfoDiv.appendChild(miniTrackInfoDiv);

// Track title and artist name
let miniTrackName = createTextField("mini-track-name", null);
miniTrackInfoDiv.appendChild(miniTrackName);
let miniArtistName = createTextField("mini-artist-name", null);
miniTrackInfoDiv.appendChild(miniArtistName);

// Playback controls for mini player
let miniPlaybackControlsDiv = createDiv("mini-playback-controls-div");
miniPlayer.appendChild(miniPlaybackControlsDiv);

// skip back
let miniBnPrev = createButton(
  null,
  "mini-playback-control-btn",
  createIcon("fill", "skip-back")
);
miniBnPrev.addEventListener("click", () => changeSong("prev"));
miniPlaybackControlsDiv.appendChild(miniBnPrev);

let miniPlaybackBtnIcon = createIcon("bold", "spinner");
let miniBnPlay = createButton(
  null,
  "mini-playback-control-btn do-spin",
  miniPlaybackBtnIcon,
  null
);
miniPlaybackControlsDiv.appendChild(miniBnPlay);
miniBnPlay.id = "mini-play-btn";

let miniBnNext = createButton(
  null,
  "mini-playback-control-btn",
  createIcon("fill", "skip-forward")
);
miniBnNext.addEventListener("click", () => changeSong("next"));
miniPlaybackControlsDiv.appendChild(miniBnNext);

// VARIABLES ===========================
let modeChangeElements = [main, loadingDiv, bottomDiv];

// FUNCTIONS ===========================
function initMiniPlayer() {
  miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;
  miniTrackName.textContent = currentTrackName;
  miniArtistName.textContent = currentArtistName;
  miniPlaybackBtnIcon.className = "ph-fill ph-play";
  miniBnPlay.classList.remove("do-spin");
  miniBnPlay.addEventListener("click", changeState);
}

function expandToplayer() {
  playerPanel.style.display = "flex";
  playerPanel.style.animation = "slideUp 0.3s ease";
  playerPanel.addEventListener(
    "animationend",
    () => {
      playerPanel.style.animation = "none";
    },
    { once: true }
  );
}

function switchTo(destination) {
  destination.scrollIntoView();
}

attend();

let currentTabBtn = bnHomePanel;
let currentTabBtnI = bnHomePanelI;
innerApp.addEventListener("scroll", function checkTabInView() {
  currentTabBtn.classList.remove("active");
  currentTabBtnI.classList.remove("ph-fill");
  currentTabBtnI.classList.add("ph-bold");
  if (isElementCentered(homePanel)) {
    currentTabBtn = bnHomePanel;
    currentTabBtnI = bnHomePanelI;
  } else if (isElementCentered(searchPanel)) {
    currentTabBtn = bnSearchPanel;
    currentTabBtnI = bnSearchPanelI;
  } else if (isElementCentered(libraryPanel)) {
    currentTabBtn = bnLibraryPanel;
    currentTabBtnI = bnLibraryPanelI;
  } else if (isElementCentered(accountPanel)) {
    currentTabBtn = bnAccountPanel;
    currentTabBtnI = bnAccountPanelI;
  }
  currentTabBtn.classList.add("active");
  currentTabBtnI.classList.remove("ph-bold");
  currentTabBtnI.classList.add("ph-fill");
});
tolerance = 10;
scrollParent = innerApp;
function isElementCentered(element) {
  const containerRect = scrollParent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenter = containerRect.left + containerRect.width / 2;
  const elementCenter = elementRect.left + elementRect.width / 2;

  return Math.abs(containerCenter - elementCenter) <= tolerance;
}

function setRippleStyle() {
  const buttons = document.querySelectorAll(".ripple");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      let circle = document.createElement("span");
      circle.classList.add("ripple-span");

      let rect = button.getBoundingClientRect();
      let diameter = Math.max(rect.width, rect.height);
      let radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;

      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;

      let existingRipple = button.querySelector(".ripple-span");
      if (existingRipple) {
        existingRipple.remove();
      }

      button.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  });
}

function checkOrientation() {
  if (window.innerHeight >= window.innerWidth) {
    app.classList.remove("horizontal");
    app.classList.add("vertical");
  } else {
    app.classList.remove("vertical");
    app.classList.add("horizontal");
  }
}
window.addEventListener("resize", checkOrientation);