// #region helper functions
function addScript(path, id) {
  if (document.getElementById(id)) return;
  let newScipt = document.createElement("script");
  newScipt.src = path;
  newScipt.id = id;
  document.body.appendChild(newScipt);
  return newScipt;
}

function addStyle(path, id) {
  if (document.getElementById(id)) return;
  let newStyle = document.createElement("link");
  newStyle.rel = "stylesheet";
  newStyle.href = path;
  newStyle.id = id;
  document.head.appendChild(newStyle);
  return newStyle;
}

function createDiv(className, id = null) {
  let div = document.createElement("div");
  if (className) { div.className = className }
  if (id) { div.id = id }
  return div;
}

function createTextField(className = null, content = null) {
  let p = document.createElement("p");
  if (className) { p.className = className }
  if (content) { p.textContent = content }
  return p;
}

function createButton(id = null, className = null, icon = null, text = null, clickFunction = null) {
  let button = document.createElement("button");
  if (id) { button.id = id }
  if (className) { button.className = className }
  if (icon) { button.appendChild(icon) }
  if (text) {
    let p = document.createElement("p");
    p.textContent = text;
    button.appendChild(p);
  }
  if (clickFunction) { button.addEventListener("click", clickFunction) }
  return button;
}

function createIcon(type = null, name, clickFunction = null, id = null) {
  if (!type) { type = "regular" }
  let icon = document.createElement("i");
  icon.className = `ph-${type} ph-${name}`;
  if (clickFunction) { icon.addEventListener("click", clickFunction) }
  return icon;
}

function createInput(type, placeholder, id = null, className = null) {
  let input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  if (className) { input.className = className }
  if (id) { input.id = id }
  return input;
}

function createInputDiv(className, iconElement, inputElement, iconElement2 = null) {
  let div = document.createElement("div");
  if (className) { div.className = className }
  div.appendChild(iconElement);
  div.appendChild(inputElement);
  if (iconElement2) { div.appendChild(iconElement2) }
  return div;
}

function createConfirmationPanel(header, content, btnText, btnFunction, cancelFunction) {
  let div = createDiv("confirmation-panel");
  let divHeader = createTextField("confirmation-panel-header", header);
  div.appendChild(divHeader);
  let divContent = createTextField("confirmation-panel-content", content);
  div.appendChild(divContent);
  let opt1 = createButton(null, "confirmation-panel-btn confirm", null, btnText, btnFunction);
  div.appendChild(opt1);
  let opt2 = createButton(null, "confirmation-panel-btn cancel", null, "Cancel", cancelFunction);
  div.appendChild(opt2);
  return div;
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
// #endregion helper functions

// #region elements
const loadingDiv = document.getElementById("loading-screen");
const loadingStatusDiv = document.querySelector(".loading-status-div");
const loadingMessage = document.getElementById("loading-details");
const loadingProgress = document.getElementById("loading-progress-covered");

const app = document.getElementById("app");

const main = document.getElementById("inner-app");
const innerApp = document.getElementById("inner-app-tab-container");

const bottomDiv = document.getElementById("navigation-div");
const switchDiv = document.getElementById("navigation-button-div");

const bnHomePanel = document.getElementById("home-panel-btn");
const bnHomePanelI = document.getElementById("home-tab-icon");

const bnSearchPanel = document.getElementById("search-panel-btn");
const bnSearchPanelI = document.getElementById("search-tab-icon");

const bnLibraryPanel = document.getElementById("library-panel-btn");
const bnLibraryPanelI = document.getElementById("library-tab-icon");

const bnAccountPanel = document.getElementById("account-panel-btn");
const bnAccountPanelI = document.getElementById("account-tab-icon");

let totalFiles = 3;
let attendFiles = 0;
function attend() {
  loadingMessage.textContent = "progress: creating interface...";
  loadingProgress.style.width = `${(parseFloat(loadingProgress.style.width) || 0) + 1}%`;
  attendFiles++;
  if (attendFiles == totalFiles) {
    loadingMessage.textContent = "progress: interface ready";
    startBackend();
  }
}

addStyle("public/home/homeTab.css", "home-css").onload = attend;
addScript("public/home/homeTab.js", "home-js").onload = attend;

// #endregion elements

// #region bottom div

// #region Mini Player
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
let miniBnPrev = createButton(null, "mini-playback-control-btn", createIcon("fill", "skip-back"), null, () => changeSong("prev"));
miniPlaybackControlsDiv.appendChild(miniBnPrev);

let miniPlaybackBtnIcon = createIcon("bold", "spinner");
let miniBnPlay = createButton("mini-play-btn", "mini-playback-control-btn do-spin", miniPlaybackBtnIcon, null);
miniPlaybackControlsDiv.appendChild(miniBnPlay);

let miniBnNext = createButton(null, "mini-playback-control-btn", createIcon("fill", "skip-forward"), null, () => changeSong("next"));
miniPlaybackControlsDiv.appendChild(miniBnNext);

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
  playerPanel.addEventListener("animationend", () => {
    playerPanel.style.animation = "none";
  }, { once: true }
  );
}
// #endregion mini Player

bnHomePanel.addEventListener("click", () => {
  try { switchTo(homePanel) } catch {
  }
});
bnSearchPanel.addEventListener("click", () => {
  try { switchTo(searchPanel) } catch {
  }
});
bnLibraryPanel.addEventListener("click", () => {
  try { switchTo(libraryPanel) } catch {
  }
});
bnAccountPanel.addEventListener("click", () => {
  try { switchTo(accountPanel) } catch {
  }
});
bnHomePanel.addEventListener("click", () => {
  try { switchTo(homePanel) } catch {
  }
});
bnHomePanel.addEventListener("click", () => {
  try { switchTo(homePanel) } catch {
  }
});
bnSearchPanel.addEventListener("click", () => switchTo(searchPanel));
bnLibraryPanel.addEventListener("click", () => switchTo(libraryPanel));
bnAccountPanel.addEventListener("click", () => switchTo(accountPanel));

function switchTo(destination) {
  destination.scrollIntoView();
}

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
const tolerance = 1;
const scrollParent = innerApp;
function isElementCentered(element) {
  const containerRect = scrollParent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenter = containerRect.left + containerRect.width / 2;
  const elementCenter = elementRect.left + elementRect.width / 2;

  return Math.abs(containerCenter - elementCenter) <= tolerance;
}
// #endregion bottom div

document.querySelectorAll(".ripple").forEach((button) => { setRippleStyle(button) });
function setRippleStyle(button) {
  button.addEventListener("click", function (event) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-span");

    let rect = button.getBoundingClientRect();
    let diameter = Math.max(rect.width, rect.height);
    let radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    const existingRipple = button.querySelector(".ripple-span");
    if (existingRipple) { existingRipple.remove() }

    button.appendChild(circle);

    setTimeout(() => { circle.remove() }, 600);
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

attend();
