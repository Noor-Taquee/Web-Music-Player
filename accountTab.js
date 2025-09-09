//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";

let accountInfoHeader = document.createElement("div");
accountPanel.appendChild(accountInfoHeader);
accountInfoHeader.id = "accountInfoHeader";
let profilePic = document.createElement("p");
accountInfoHeader.appendChild(profilePic);
profilePic.id = "profilePic";
let profilePicIcon = document.createElement("span");
profilePic.appendChild(profilePicIcon);
profilePicIcon.className = "material-symbols-rounded";
profilePicIcon.textContent = "account_circle";
let editIcon = document.createElement("span");
profilePic.appendChild(editIcon);
editIcon.className = "material-symbols-rounded";
editIcon.textContent = "edit";
editIcon.id = "editIcon";

let profileInfoCard = document.createElement("div");
accountInfoHeader.appendChild(profileInfoCard);
profileInfoCard.id = "profileInfoCard";

let profileName = document.createElement("p");
profileInfoCard.appendChild(profileName);
profileName.id = "profileName";

let bnLogin = document.createElement("button");
profileName.appendChild(bnLogin);
bnLogin.id = "bnLogin";
bnLogin.textContent = "LOGIN";
bnLogin.addEventListener("click",f_login);

let separator = document.createElement("hr");
profileInfoCard.appendChild(separator);
separator.id = "separator";
let statsDiv = document.createElement("div");
profileInfoCard.appendChild(statsDiv);
statsDiv.id = "statsDiv";

let playlistsCount = document.createElement("button");
statsDiv.appendChild(playlistsCount);
playlistsCount.addEventListener("click",() => switchTo("libraryPanel"));
let libraryicon = document.createElement("span");
playlistsCount.appendChild(libraryicon);
libraryicon.className = "material-symbols-rounded";
libraryicon.textContent = "library_music";
let playlistsCountP = document.createElement("p");
playlistsCount.appendChild(playlistsCountP);
playlistsCountP.textContent = "playlists:";

let favouriteSongsCount = document.createElement("button");
statsDiv.appendChild(favouriteSongsCount);
let favouriteCountIcon = document.createElement("span");
favouriteCountIcon.className = "material-symbols-rounded";
favouriteCountIcon.textContent = "star";
favouriteSongsCount.appendChild(favouriteCountIcon);
let favouriteSongsCountP = document.createElement("p");
favouriteSongsCount.appendChild(favouriteSongsCountP);
favouriteSongsCountP.textContent = "favourite songs:";


let settingsPanel = document.createElement("div");
accountPanel.appendChild(settingsPanel);
settingsPanel.id = "settingsPanel";

let bnSettings = document.createElement("button");
settingsPanel.appendChild(bnSettings);
bnSettings.id = "bnSettings";
let bnSettingsIcon = document.createElement("span");
bnSettings.appendChild(bnSettingsIcon);
bnSettingsIcon.className = "material-symbols-rounded";
bnSettingsIcon.textContent = "settings";
let bnSettingsP = document.createElement("p");
bnSettings.appendChild(bnSettingsP);
bnSettingsP.textContent = "SETTINGS";

let bnChangePass = document.createElement("button");
settingsPanel.appendChild(bnChangePass);
bnChangePass.id = "bnChangePass";
bnChangePass.addEventListener("click",changePassword);
let bnChangePassIcon = document.createElement("span");
bnChangePass.appendChild(bnChangePassIcon);
bnChangePassIcon.className = "material-symbols-rounded";
bnChangePassIcon.textContent = "password";
let bnChangePassP = document.createElement("p");
bnChangePass.appendChild(bnChangePassP);
bnChangePassP.textContent = "CHANGE PASSWORD";

let bnManageHistory = document.createElement("button");
settingsPanel.appendChild(bnManageHistory);
bnManageHistory.id = "bnManageHistory";
let bnManageHistoryIcon = document.createElement("span");
bnManageHistory.appendChild(bnManageHistoryIcon);
bnManageHistoryIcon.className = "material-symbols-rounded";
bnManageHistoryIcon.textContent = "manage_history";
let bnManageHistoryP = document.createElement("p");
bnManageHistory.appendChild(bnManageHistoryP);
bnManageHistoryP.textContent = "MANAGE HISTORY";

let bnAudioQuality = document.createElement("button");
settingsPanel.appendChild(bnAudioQuality);
bnAudioQuality.id = "bnAudioQuality";
let bnAudioQualityIcon = document.createElement("span");
bnAudioQuality.appendChild(bnAudioQualityIcon);
bnAudioQualityIcon.className = "material-symbols-rounded";
bnAudioQualityIcon.textContent = "tune";
let bnAudioQualityP = document.createElement("p");
bnAudioQuality.appendChild(bnAudioQualityP);
bnAudioQualityP.textContent = "AUDIO QUALITY";

// let bnContribute = document.createElement("button");
// settingsPanel.appendChild(bnContribute);
// bnContribute.id = "bnContribute";
// bnContribute.addEventListener("click",f_contribute);
// let bnContributeIcon = document.createElement("span");
// bnContribute.appendChild(bnContributeIcon);
// bnContributeIcon.className = "material-symbols-rounded";
// bnContributeIcon.textContent = "volunteer_activism";
// let bnContributeP = document.createElement("p");
// bnContribute.appendChild(bnContributeP);
// bnContributeP.textContent = "CONTRIBUTE";

let bnLogOut = document.createElement("button");
settingsPanel.appendChild(bnLogOut);
bnLogOut.id = "bnLogOut";
bnLogOut.addEventListener("click",f_logOut);
let bnLogOutIcon = document.createElement("span");
bnLogOut.appendChild(bnLogOutIcon);
bnLogOutIcon.className = "material-symbols-rounded";
bnLogOutIcon.textContent = "logout";
let bnLogOutP = document.createElement("p");
bnLogOut.appendChild(bnLogOutP);
bnLogOutP.textContent = "LOG OUT";

let accountPanelSpace = document.createElement("div");
settingsPanel.appendChild(accountPanelSpace);
accountPanelSpace.id = "accountPanelSpace";


//VRIABLES
let signedIn = false;


function f_login() {
  if (usersList.length > 0) {
    main.replaceChild(loginPanel,accountPanel);
    bottomDiv.style.display = "none";
    currentTab = loginPanel;
  } else {
    alert("Server is not responding!")
  }
}
function showInfo() {
  if (signedIn) {
    profilePic.style.backgroundImage = `url(${profilePicImage})`;
    if (profileName.contains(bnLogin)) {
      profileName.removeChild(bnLogin);
    }
    profileName.textContent = userName;
  } else {
    profileName.textContent = "";
    if (!profileName.contains(bnLogin)) {
      profileName.appendChild(bnLogin);
    }
  }
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}

function changePassword() {}


function f_contribute() {
  main.replaceChild(contributionPanel, accountPanel);
  currentTab = contributionPanel;
}

function f_logOut() {
  if (signedIn) {
    signedIn = false;
    showInfo();
    loadHomeSongs();
    loadPlaylists();
    loadSearchHistory();
    f_login();
  }
}

attend();