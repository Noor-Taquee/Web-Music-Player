function openManageHistoryPanel() {
  openSubPanel(settingsPanel, settingsPanelContent, manageHistoryPanel);
  syncHistoryPref();
}
function closeManageHistoryPanel() {
  openSubPanel(settingsPanel, manageHistoryPanel, settingsPanelContent);
}

const manageHistoryPanel = createElement("div", { className: "settings-tab-inner-panel" });

const manageHistoryPanelTopBar = createElement("div", { className: "top-bar" });
manageHistoryPanel.appendChild(manageHistoryPanelTopBar);

manageHistoryPanelTopBar.appendChild(createElement("button", { className: "back-btn toggle", onclick: closeManageHistoryPanel }, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));
manageHistoryPanelTopBar.appendChild(createElement("p", { className: "top-bar-text", textContent: "History" }));

const manageHistoryConDiv = createElement("div", { className: "content" });
manageHistoryPanel.appendChild(manageHistoryConDiv);

//#region allow history
function stopHistory(dontUpdateFile = false) {
  if (!signedIn) return;
  
  manageHistory_clearSection.style.display = "none";
  
  if (currentUser.allowHistory = 0) return;
  
  currentUser.allowHistory = 0;
  currentUser.sync();
}

function keepHistory(dontUpdateFile = false) {
  if (!signedIn) return;
  
  manageHistory_clearSection.style.display = "flex";
  
  if (currentUser.allowHistory = 1) return;
  
  currentUser.allowHistory = 1;
  currentUser.sync();
}

function syncHistoryPref() {
  if (!signedIn) return;

  if (currentUser.allowHistory) { 
    if (AllowHistoryToggle.classList.contains("active")) return;
    AllowHistoryToggle.classList.add("active");
  }
  else { AllowHistoryToggle.classList.remove("active") }
}

const manageHistory_permissionSection = createElement("div", { className: "settings-section" });
manageHistoryConDiv.appendChild(manageHistory_permissionSection);

const AllowHistoryDiv = createElement("div", { className: "toggle-div" });
manageHistory_permissionSection.appendChild(AllowHistoryDiv);

const AllowHistoryP = createElement("p");
AllowHistoryDiv.appendChild(createElement("p", { className: "toggle-div-text", textContent: "Allow history" }));

const AllowHistoryToggle = createElement("div", { className: "toggle-element" });
AllowHistoryDiv.appendChild(AllowHistoryToggle);
AllowHistoryToggle.addEventListener("click", () => {
  AllowHistoryToggle.classList.toggle("active");
  
  if (AllowHistoryToggle.classList.contains("active")) {
    keepHistory();
  }
  else { stopHistory() }
});

const AllowHistoryToggleBall = createElement("div", { className: "toggle-ball" });
AllowHistoryToggle.appendChild(AllowHistoryToggleBall);

//#endregion allow history

//#region clear history
const manageHistory_clearSection = createElement("div", { className: "settings-section" });
manageHistoryConDiv.appendChild(manageHistory_clearSection);

const bnClearSearchHistory = createElement("button", { id: "clear-search-history", className: "clear-history-btn", onclick: f_clearSearchHistory }, [ createElement("p", { textContent: "Clear search history" }) ]);
manageHistory_clearSection.appendChild(bnClearSearchHistory);

const bnClearPlayedSongHistory = createElement("button", { id: "clear-played-song-history", className: "clear-history-btn", onclick: f_clearPlayedSongHistory }, [ createElement("p", { textContent: "Clear played song history" }) ]);
manageHistory_clearSection.appendChild(createElement("hr"));
manageHistory_clearSection.appendChild(bnClearPlayedSongHistory);


async function f_clearSearchHistory() {
  if (!signedIn) return;

  main.style.display = "none";
  loadingDiv.style.display = "flex";

  currentUser.searchedTextList.splice(0, currentUser.searchedTextList.length);
  currentUser.searchedSongList.splice(0, currentUser.searchedSongList.length);

  await currentUser.sync();

  loadSearchHistory();
  loadingDiv.style.display = "none";
  main.style.display = "flex";
}

async function f_clearPlayedSongHistory() {
  if (!signedIn) return;

  main.style.display = "none";
  loadingDiv.style.display = "flex";

  currentUser.recentlyPlayedSongList.splice(0, currentUser.recentlyPlayedSongList.length);

  await currentUser.sync();
  
  loadRecentlyPlayedSongs();
  loadingDiv.style.display = "none";
  main.style.display = "flex";
}
//#endregion clear history

//#region onLoad
loadingDiv.style.display = "none";
main.style.display = "flex";
openManageHistoryPanel();
//#endregion onLoad