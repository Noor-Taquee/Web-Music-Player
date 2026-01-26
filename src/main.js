//#region helper functions
/**
 * This functions adds a script element at the end of body
 * @param {string} id
 * @param {string} src path to js file (eg: "./main/public/script.js")
 * @param {('module')} type
 * @returns {HTMLScriptElement}
 */
function addScript(id, src, type = null) {
  if (document.getElementById(id)) return document.getElementById(id);

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  if (type) { script.type = type }
  document.body.appendChild(script);
  return script;
}

/**
 * Creates an element 
 * @template {keyof HTMLElementTagNameMap} K
 * @param {K} elementName 
 * @param {Partial<HTMLElementTagNameMap[K]>} properties 
 * @param {Array<Node>} children 
 */
function createElement(elementName, properties = {}, children = []) {
  const element = document.createElement(elementName);
  Object.assign(element, properties);
  children.forEach(child => { if (child) element.appendChild(child) });
  return element;
}

/**
 * This function adds a link element on the head
 * @param {string} id
 * @param {string} href
 * @param {('stylesheet'|'icon'|'manifest')} rel
 * @returns {HTMLLinkElement}
 */
function addLink(id, href, rel = "stylesheet") {
  if (document.getElementById(id)) return document.getElementById(id);

  const newStyle = document.createElement("link");
  newStyle.id = id;
  newStyle.rel = rel;
  newStyle.href = href;
  document.head.appendChild(newStyle);
  return newStyle;
}


/**
 * Creates a dialogue box for confirmation, query selector -> .confirmation-panel
 * @param {string} header title for confirmation, query selector -> .confirmation-panel-header
 * @param {string} content confirmation message, query selector -> .confirmation-panel-content
 * @param {('Confirm'|'Yes'|'Delete'|'Clear'|'Log out')} btnText 
 * @param {function} btnFunction query selector for positive button -> .confirmation-panel-btn.confirm
 * @param {function} cancelFunction query selector for negative button -> .confirmation-panel-btn.cancel
 * @returns {HTMLDivElement}
 */
function createConfirmationPanel(header, content, btnText, btnFunction, cancelFunction) {
  const overlay = createElement("div", { className: "overlay" });
  
  const div = createElement("div", {
    className: "confirmation-panel"
  }, [
    createElement("p", {
      className: "confirmation-panel-header",
      textContent: header
    }),
    createElement("p", {
      className: "confirmation-panel-content",
      textContent: content
    }),
    createElement("button", {
      className: "confirmation-panel-btn confirm",
      onclick: btnFunction
    }, [ createElement("p", { textContent: btnText }) ]),
    createElement("button", {
      className: "confirmation-panel-btn cancel",
      onclick: cancelFunction
    }, [ createElement("p", { textContent: "Cancel" }) ])
  ]);
  overlay.appendChild(div);

  return overlay;
}

/**
 * Clears all the inner contents of the container
 * @param {HTMLElement} container 
 */
function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

/**
 * Clears value of all inputs present in the container
 * @param {HTMLDivElement} container 
 */
function clearInputFields(container) {
  container.querySelectorAll("input").forEach(input => {
    input.value = "";
  });
}
/**
 * Creates radio buttons that are open means they don't appear after any interaction
 * @param {string} id 
 * @param {string} headerText 
 * @param {Array<Object.property>} radioOptions 
 * @returns {HTMLDivElement} 
 * @example createRadioOpen( "theme-selection", "Choose Theme",[ {id:"light-input", text: "Light", clickFunction: () => { app.dataset.theme = "light" }}, {id:"dark-input", text:"Dark", clickFunction: () => { app.dataset.theme = "dark" }} ])
 */
function createRadioOpen(id, headerText, radioOptions) {
  const div = createElement("div", { id: id, className: "radio-open" });

  const topDiv = createElement("div", { className: "radio-open-top" });
  div.appendChild(topDiv);

  const headerTextp = createElement("p", { textContent: headerText, className: "radio-open-header-text" });
  topDiv.appendChild(headerTextp);


  const radioDiv = createElement("div", { className: "radio-open-container" });
  div.appendChild(radioDiv);

  for (let i of radioOptions) {
    const option = createElement("div", { className: "radio-open-option", id: `option-${i.id}` });

    const icon = createElement("i");
    if (i.selected) {
      icon.classList.add("ph-fill");
      icon.classList.add("ph-radio-button");
      option.classList.add("selected");
    } else {
      icon.classList.add("ph-bold");
      icon.classList.add("ph-circle");
    }
    icon.id = `radio-open-icon-${i.id}`;
    option.appendChild(icon);

    const text = createElement("p", { textContent: i.text, className: "radio-open-option-label" });
    option.appendChild(text);

    option.addEventListener("click", () => {
      const icon = option.querySelector(`#radio-open-icon-${i.id}`);

      // check if the selected option is already applied
      if (icon.classList.contains("ph-radio-button")) return;

      // remove the selected icon from previously selected input
      let selectedOptionIcon = div.querySelector(`.ph-radio-button`);
      if (selectedOptionIcon) {
        selectedOptionIcon.classList.replace("ph-radio-button", "ph-circle");
        selectedOptionIcon.classList.replace("ph-fill", "ph-bold");
      }

      radioDiv.querySelector(".selected").classList.remove("selected");
      option.classList.add("selected");

      // add the selected icon to the selected input
      icon.classList.replace("ph-bold", "ph-fill");
      icon.classList.replace("ph-circle", "ph-radio-button");

      // call the click function
      i.clickFunction();
    });

    radioDiv.appendChild(option);
  }


  return div;
}



/**
 * Makes the input content visible/invisible according the icon
 * @param {HTMLElement} icon 
 * @param {HTMLInputElement} input 
 */
function togglePasswordVisibilty(icon, input) {
  if (icon.classList.contains("ph-eye-slash")) {
    input.type = "text";
    icon.classList.replace("ph-eye-slash", "ph-eye");
  } else {
    input.type = "password";
    icon.classList.replace("ph-eye", "ph-eye-slash");
  }
}

//#endregion helper functions

//#region elements
const loadingDiv = document.getElementById("loading-screen");
const loadingStatusDiv = document.querySelector(".loading-status-div");
const loadingMessage = document.getElementById("loading-details");
const loadingProgress = document.getElementById("loading-progress-covered");

const app = document.getElementById("app");

const appWrapper = document.getElementById("app-wrapper");

const main = document.getElementById("inner-app");
const innerApp = document.getElementById("inner-app-tab-container");

const homePanel = document.getElementById("home-panel");
const searchPanel = document.getElementById("search-panel");
const libraryPanel = document.getElementById("library-panel");
const accountPanel = document.getElementById("account-panel");
const settingsPanel = document.getElementById("settings-panel");

const playerPanel = document.getElementById("player-panel");
const loginPanel = document.getElementById("login-panel");
const contributionPanel = document.getElementById("contribution-panel");

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

const bnSettingsPanel = document.getElementById("settings-panel-btn");
const bnSettingsPanelI = document.getElementById("settings-tab-icon");

//#endregion elements

//#region bottom div

//#region Mini Player
const miniPlayer = createElement("div", {
  className: "mini-player",
  id: "mini-player"
})
bottomDiv.insertBefore(miniPlayer, switchDiv);

const miniInfoDiv = createElement("div", {
  className: "mini-info-div"
});
miniPlayer.appendChild(miniInfoDiv);
miniInfoDiv.addEventListener("click", expandToplayer);

// Album art
const miniAlbumArt = createElement("p", {
 className: "mini-album-art"
});
miniInfoDiv.appendChild(miniAlbumArt);

// If no album art, show icon
const miniPlayerSongIcon = createElement("i", { className: "ph-bold ph-headphones" });

// Song playing info
const miniTrackInfoDiv = createElement( "div", {
  className: "mini-track-info-div"
});
miniInfoDiv.appendChild(miniTrackInfoDiv);

// Track title and artist name
const miniTrackName = createElement("p", {
  className: "mini-track-name"
});
miniTrackInfoDiv.appendChild(miniTrackName);

const miniArtistName = createElement("p", {
  className: "mini-artist-name"
});
miniTrackInfoDiv.appendChild(miniArtistName);

// Playback controls for mini player
const miniPlaybackControlsDiv = createElement("div", {
  className: "mini-playback-controls-div"
});
miniPlayer.appendChild(miniPlaybackControlsDiv);

// skip back
const miniBnPrev = createElement("button", {
  className: "mini-playback-control-btn",
  onclick: () => {changeSong("prev")}
},
[createElement("i", { className: "ph-fill ph-skip-back" })]
);
miniPlaybackControlsDiv.appendChild(miniBnPrev);

// play/pause
const miniPlaybackBtnIcon = createElement("i", { className: "ph-bold ph-spinner" });
const miniBnPlay = createElement("button", {
  id: "mini-play-btn",
  className: "mini-playback-control-btn do-spin"
},
[miniPlaybackBtnIcon]
);
miniPlaybackControlsDiv.appendChild(miniBnPlay);

// skip forward
const miniBnNext = createElement("button", {
  className: "mini-playback-control-btn",
  onclick: () => {changeSong("next")}
  },
  [createElement("i", { className: "ph-fill ph-skip-forward" })]
);
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
  playerPanel.style.animation = "slide-in-bottom 0.3s ease";
  playerPanel.addEventListener("animationend", () => {
    playerPanel.style.animation = "none";
  }, { once: true }
  );
}
//#endregion mini Player

//#region navigation
bnHomePanel.addEventListener("click", () => switchTo(homePanel));
bnSearchPanel.addEventListener("click", () => switchTo(searchPanel));
bnLibraryPanel.addEventListener("click", () => switchTo(libraryPanel));
bnAccountPanel.addEventListener("click", () => switchTo(accountPanel));
bnSettingsPanel.addEventListener("click", () => switchTo(settingsPanel));

function switchTo(destination) { destination.scrollIntoView() }

let currentTabBtn = bnHomePanel;
let currentTabBtnI = bnHomePanelI;
innerApp.addEventListener("scroll", checkTabInView);

function checkTabInView() {
  currentTabBtn.classList.remove("active");
  currentTabBtnI.classList.replace("ph-fill", "ph-bold");
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
  } else if (isElementCentered(settingsPanel)) {
    currentTabBtn = bnSettingsPanel;
    currentTabBtnI = bnSettingsPanelI;
  }
  currentTabBtn.classList.add("active");
  currentTabBtnI.classList.replace("ph-bold", "ph-fill");
}

const tolerance = 1;
const scrollParent = innerApp;
function isElementCentered(element) {
  const containerRect = scrollParent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  const containerCenter = containerRect.left + containerRect.width / 2;
  const elementCenter = elementRect.left + elementRect.width / 2;

  return Math.abs(containerCenter - elementCenter) <= tolerance;
}
//#endregion navigation

//#endregion bottom div

/**
 * 
 * @param {HTMLButtonElement} button 
 */
function setRippleStyle(button) {
  button.addEventListener("click", (event) => {
    const circle = createElement("span");
    circle.classList.add("ripple-span");

    let rect = button.getBoundingClientRect();
    let diameter = Math.max(rect.width, rect.height);
    let radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    const existingRipple = button.querySelector(".ripple-span");
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);

    setTimeout(() => { circle.remove() }, 600);
  });
}

function initApp() {
  loadingStatusDiv.style.display = "none";
  loadingDiv.style.display = "none";
  main.style.display = "flex";
}

function checkOrientation() {
  app.dataset.orientation = (window.innerHeight >= window.innerWidth) ? "vertical" : "horizontal";
}

const colorSchemeQuery = window.matchMedia("(prefers-color-scheme:dark)");
colorSchemeQuery.addEventListener("change", handleAutoTheme);

/** @param {MediaQueryList} event */
function handleAutoTheme(event) {
  setTheme(event.matches ? "dark" : "light");
  if (document.getElementById("appearance-js")) syncTheme();
}

window.addEventListener("resize", checkOrientation);

window.addEventListener("DOMContentLoaded", async () => {
  checkOrientation();
  handleAutoTheme(colorSchemeQuery);
  checkTabInView();
  updateDeviceColor();
  await startBackend();
  initApp();
  document.querySelectorAll(".panel").forEach((panel) => { panel.addEventListener("animationend", () => { panel.style.animation = "none" }) });
  document.querySelectorAll(".ripple").forEach((button) => { setRippleStyle(button) });
});
