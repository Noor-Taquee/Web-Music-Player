import { navBar } from "./components/navigation/navigation.js";

import { panelContainer } from "./app.js";

import { homePanel as homePanel } from "./pages/home-panel/page.js";

import { searchPanel as searchPanel } from "./pages/search-panel/page.js";

import { libraryPanel as libraryPanel } from "./pages/library-panel/page.js";

import { settingsPanel as settingsPanel } from "./pages/settings-panel/page.js";
import { apperancePanel as appearancePanel } from "./pages/settings-panel/appearance-panel/page.js";

import { playerPanel as playerPanel } from "./pages/player-panel/page.js";

import { accountPanel as accountPanel } from "./pages/account-panel/page.js";

import { loginPanel as loginPanel } from "./pages/login-panel/page.js";

import { contributionPanel as contributionPanel } from "./pages/contribution-panel/page.js";

type HashHandler = (attr: string[]) => void;
type Route = Record<string, [HTMLDivElement, Route?, HashHandler?]>;

const settingsRoute: Route = {
  "": [settingsPanel],
  appearance: [appearancePanel],
};

const mainRoute: Route = {
  "": [homePanel],
  "#home": [homePanel],
  "#player": [playerPanel],
  "#search": [searchPanel],
  "#library": [libraryPanel],
  "#account": [accountPanel],
  "#settings": [settingsPanel, settingsRoute],
  "#login": [loginPanel],
  "#contribution": [contributionPanel],
};

function defaultHash() {
  window.location.hash = "#home";
}

function handle() {
  const hashParts = window.location.hash.split("&");

  const locationHash = hashParts[0] || "";
  const attributesHash = hashParts.slice(1);

  const hashHandler = handleLocaton(locationHash);

  if (!hashHandler) return;

  hashHandler(attributesHash);
}

function handleLocaton(locationS: string) {
  if (!locationS) {
    defaultHash();
    return;
  }

  let hashHandler: HashHandler | undefined;
  let parentRoute: Route | undefined = mainRoute;

  const locationStack = locationS.split("/");

  locationStack.forEach((path, index) => {
    if (!parentRoute) return;

    const info = parentRoute[path];
    if (!info) {
      defaultHash();
      return;
    }

    const targetPanel = info[0];
    parentRoute = info[1];

    if (index == 0) {
      hashHandler = info[2];
      navBar.style.setProperty("--focus-no", String(targetPanel.dataset.index));
    }

    if (index == locationStack.length - 1) showPanel(targetPanel);
  });

  return hashHandler;
}

function showPanel(panel: HTMLDivElement, animation = true) {
  if (panelContainer.firstChild)
    panelContainer.removeChild(panelContainer.firstChild);
  panelContainer.appendChild(panel);

  if (animation) return;
}

window.addEventListener("hashchange", handle);
window.addEventListener("load", handle);
