//#region helper functions
function createSettingsPanelBtn(parentContainer, iconName, buttonText, buttonDescription, clickFunction) {
    const button = createElement("button", { className: "settings-panel-btn" });
    parentContainer.appendChild(button);
    const iconDiv = createElement("div", { className: "icon-div" });
    iconDiv.appendChild(createElement("i", { className: "ph-bold ph-" + iconName }));
    button.appendChild(iconDiv);
    const con = createElement("div", { className: "button-content" });
    button.appendChild(con);
    con.appendChild(createElement("p", { className: "button-header", textContent: buttonText }));
    con.appendChild(createElement("p", { className: "button-description", textContent: buttonDescription }));
    button.addEventListener("click", clickFunction);
    const icon2div = createElement("div", { className: "icon-div" });
    icon2div.appendChild(createElement("i", { className: "ph-bold ph-caret-right" }));
    button.appendChild(icon2div);
    return button;
}
//#endregion helper functions
//#region UI
const accountPanel_header = createElement("div", { className: "panel-header" });
accountPanel.appendChild(accountPanel_header);
accountPanel_header.appendChild(createElement("p", { className: "panel-header-text", textContent: "Account" }));
accountPanel_header.appendChild(createElement("button", { id: "settings-btn", className: "toggle", onclick: () => { switchTo(settingsPanel); } }, [createElement("i", { className: "ph-bold ph-gear-fine" })]));
//#region user-details
const accountPanel_content = createElement("div", { className: "content" });
accountPanel.appendChild(accountPanel_content);
function openLoginPanel() { }
const bnLogin = createElement("button", { className: "login-btn", onclick: () => { openImportedPanel("login-js", openLoginPanel, "src/login/loginTab.js"); } }, [createElement("p", { textContent: "Sign in" })]);
accountPanel_content.appendChild(bnLogin);
const accountInfoDiv = createElement("div", { className: "account-info-div" });
const profilePic = createElement("p", { className: "profile-picture" });
accountInfoDiv.appendChild(profilePic);
const profilePicIcon = createElement("i", { className: "ph-bold ph-user" });
profilePic.appendChild(profilePicIcon);
const profileInfoCard = createElement("div", { className: "profile-info-card" });
accountInfoDiv.appendChild(profileInfoCard);
const profileName = createElement("p", { className: "profile-name" });
profileInfoCard.appendChild(profileName);
const statsDiv = createElement("div", { className: "stats-div" });
profileInfoCard.appendChild(statsDiv);
const playlistsCount = createElement("button");
statsDiv.appendChild(playlistsCount);
playlistsCount.addEventListener("click", () => switchTo(libraryPanel));
const playlistsCountP = createElement("p", { textContent: "playlists: " });
playlistsCount.appendChild(playlistsCountP);
let favouriteSongsCountP = null;
//#endregion user-details
//#endregion UI
//#region functions
function signOutUser() {
    if (!signedIn)
        return;
    signedIn = false;
    currentUser = null;
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    showInfo();
    settingsPanel_accountSettings_buttonContainer.style.display = "none";
    loadRecentlyPlayedSongs();
    loadPlaylists();
    loadSearchHistory();
}
function showInfo() {
    if (signedIn) {
        profilePic.style.backgroundImage = `url(${currentUser.profilePic})`;
        profileName.textContent = currentUser.name;
        playlistsCountP.textContent = `playlists: ${currentUser.playlistList.length}`;
        if (accountPanel_content.contains(accountInfoDiv))
            return;
        accountPanel_content.replaceChild(accountInfoDiv, bnLogin);
    }
    else {
        profileName.textContent = "";
        if (accountPanel_content.contains(bnLogin))
            return;
        accountPanel_content.replaceChild(bnLogin, accountInfoDiv);
    }
}
export {};
//#endregion functions
//# sourceMappingURL=accountTab.js.map