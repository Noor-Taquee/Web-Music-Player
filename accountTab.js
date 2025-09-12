//VARIABLES
let currentThemeColor = "DARK";
let currentThemeColorIcon = "dark_mode";

//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";
accountPanel.className = "accountPanel_darkMode";

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
profilePicIcon.id = "profilePicIcon";

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

let ChangePassDiv = document.createElement("div");
settingsPanel.appendChild(ChangePassDiv);
ChangePassDiv.id = "buttonDiv";
let bnChangePass = document.createElement("button");
ChangePassDiv.appendChild(bnChangePass);
bnChangePass.id = "bnChangePass";
bnChangePass.addEventListener("click", showChangePassDiv);
let bnChangePassIcon = document.createElement("span");
bnChangePass.appendChild(bnChangePassIcon);
bnChangePassIcon.className = "material-symbols-rounded";
bnChangePassIcon.textContent = "password";
bnChangePassIcon.id = "settingBtnIcon";
let changePassTextContainer = document.createElement("div");
changePassTextContainer.className = "buttonTextContainer";
bnChangePass.appendChild(changePassTextContainer);
let bnChangePassP = document.createElement("p");
changePassTextContainer.appendChild(bnChangePassP);
bnChangePassP.textContent = "CHANGE PASSWORD";
let changePassSelectionIcon = document.createElement("span");
changePassTextContainer.appendChild(changePassSelectionIcon);
changePassSelectionIcon.className = "material-symbols-rounded";
changePassSelectionIcon.textContent = "arrow_forward_ios";

let ManageHistoryDiv = document.createElement("div");
settingsPanel.appendChild(ManageHistoryDiv);
ManageHistoryDiv.id = "buttonDiv";
let bnManageHistory = document.createElement("button");
ManageHistoryDiv.appendChild(bnManageHistory);
bnManageHistory.id = "bnManageHistory";
let bnManageHistoryIcon = document.createElement("span");
bnManageHistory.appendChild(bnManageHistoryIcon);
bnManageHistoryIcon.className = "material-symbols-rounded";
bnManageHistoryIcon.textContent = "manage_history";
bnManageHistoryIcon.id = "settingBtnIcon";
let manageHistoryTextContainer = document.createElement("div");
manageHistoryTextContainer.className = "buttonTextContainer";
bnManageHistory.appendChild(manageHistoryTextContainer);
let bnManageHistoryP = document.createElement("p");
manageHistoryTextContainer.appendChild(bnManageHistoryP);
bnManageHistoryP.textContent = "MANAGE HISTORY";
let manageHistorySelectionIcon = document.createElement("span");
manageHistoryTextContainer.appendChild(manageHistorySelectionIcon);
manageHistorySelectionIcon.className = "material-symbols-rounded";
manageHistorySelectionIcon.textContent = "arrow_forward_ios";

let ChangeThemeDiv = document.createElement("div");
settingsPanel.appendChild(ChangeThemeDiv);
ChangeThemeDiv.id = "buttonDiv";
let bnChangeTheme = document.createElement("button");
ChangeThemeDiv.appendChild(bnChangeTheme);
bnChangeTheme.id = "bnChangeTheme";
let bnChangeThemeIcon = document.createElement("span");
bnChangeTheme.appendChild(bnChangeThemeIcon);
bnChangeThemeIcon.className = "material-symbols-rounded";
bnChangeThemeIcon.textContent = "routine";
bnChangeThemeIcon.id = "settingBtnIcon";
let changeThemeTextContainer = document.createElement("div");
changeThemeTextContainer.className = "buttonTextContainer";
bnChangeTheme.appendChild(changeThemeTextContainer);
let bnChangeThemeP = document.createElement("p");
changeThemeTextContainer.appendChild(bnChangeThemeP);
bnChangeThemeP.textContent = "THEME";
let changeThemeSelectionIcon = document.createElement("span");
changeThemeTextContainer.appendChild(changeThemeSelectionIcon);
changeThemeSelectionIcon.className = "material-symbols-rounded";
changeThemeSelectionIcon.textContent = "arrow_forward_ios";

let ChangeColorDiv = document.createElement("div");
settingsPanel.appendChild(ChangeColorDiv);
ChangeColorDiv.id = "buttonDiv";
let bnChangeColor = document.createElement("button");
ChangeColorDiv.appendChild(bnChangeColor);
bnChangeColor.id = "bnChangeColor";
bnChangeColor.addEventListener("click", f_changeThemeColor);
let bnChangeColorIcon = document.createElement("span");
bnChangeColor.appendChild(bnChangeColorIcon);
bnChangeColorIcon.className = "material-symbols-rounded";
bnChangeColorIcon.textContent = currentThemeColorIcon;
bnChangeColorIcon.id = "settingBtnIcon";
let ChangeColorTextContainer = document.createElement("div");
ChangeColorTextContainer.className = "buttonTextContainer";
bnChangeColor.appendChild(ChangeColorTextContainer);
let bnChangeColorP = document.createElement("p");
ChangeColorTextContainer.appendChild(bnChangeColorP);
bnChangeColorP.textContent = currentThemeColor;
let ChangeColorSelectionIcon = document.createElement("span");
ChangeColorTextContainer.appendChild(ChangeColorSelectionIcon);
ChangeColorSelectionIcon.className = "material-symbols-rounded";
ChangeColorSelectionIcon.textContent = "unfold_more";

let AudioQualityDiv = document.createElement("div");
settingsPanel.appendChild(AudioQualityDiv);
AudioQualityDiv.id = "buttonDiv";
let bnAudioQuality = document.createElement("button");
AudioQualityDiv.appendChild(bnAudioQuality);
bnAudioQuality.id = "bnAudioQuality";
let bnAudioQualityIcon = document.createElement("span");
bnAudioQuality.appendChild(bnAudioQualityIcon);
bnAudioQualityIcon.className = "material-symbols-rounded";
bnAudioQualityIcon.textContent = "tune";
bnAudioQualityIcon.id = "settingBtnIcon";
let audioQualityTextContainer = document.createElement("div");
audioQualityTextContainer.className = "buttonTextContainer";
bnAudioQuality.appendChild(audioQualityTextContainer);
let bnAudioQualityP = document.createElement("p");
audioQualityTextContainer.appendChild(bnAudioQualityP);
bnAudioQualityP.textContent = "AUDIO QUALITY";
let audioQualitySelectionIcon = document.createElement("span");
audioQualityTextContainer.appendChild(audioQualitySelectionIcon);
audioQualitySelectionIcon.className = "material-symbols-rounded";
audioQualitySelectionIcon.textContent = "arrow_forward_ios";


let ContributeDiv = document.createElement("div");
settingsPanel.appendChild(ContributeDiv);
ContributeDiv.id = "buttonDiv";
let bnContribute = document.createElement("button");
ContributeDiv.appendChild(bnContribute);
bnContribute.id = "bnContribute";
bnContribute.addEventListener("click", f_contribute);
let bnContributeIcon = document.createElement("span");
bnContribute.appendChild(bnContributeIcon);
bnContributeIcon.className = "material-symbols-rounded";
bnContributeIcon.textContent = "volunteer_activism";
bnContributeIcon.id = "settingBtnIcon";
let contributeTextContainer = document.createElement("div");
contributeTextContainer.className = "buttonTextContainer";
bnContribute.appendChild(contributeTextContainer);
let bnContributeP = document.createElement("p");
contributeTextContainer.appendChild(bnContributeP);
bnContributeP.textContent = "ADD YOUR FAVOURITE SONG";
let contributeSelectionIcon = document.createElement("span");
contributeTextContainer.appendChild(contributeSelectionIcon);
contributeSelectionIcon.className = "material-symbols-rounded";
contributeSelectionIcon.textContent = "arrow_forward_ios";


let LogOutDiv = document.createElement("div");
settingsPanel.appendChild(LogOutDiv);
LogOutDiv.id = "buttonDiv";
let bnLogOut = document.createElement("button");
LogOutDiv.appendChild(bnLogOut);
bnLogOut.id = "bnLogOut";
bnLogOut.addEventListener("click", f_logOut);
let bnLogOutIcon = document.createElement("span");
bnLogOut.appendChild(bnLogOutIcon);
bnLogOutIcon.className = "material-symbols-rounded";
bnLogOutIcon.textContent = "logout";
bnLogOutIcon.id = "settingBtnIcon";
bnLogOutIcon.style.color = "red";
let logOutTextContainer = document.createElement("div");
logOutTextContainer.className = "buttonTextContainer";
bnLogOut.appendChild(logOutTextContainer);
let bnLogOutP = document.createElement("p");
logOutTextContainer.appendChild(bnLogOutP);
bnLogOutP.textContent = "LOG OUT";
bnLogOutP.style.color = "red";

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

function showChangePassDiv() {
  ChangePassConDiv.style.display = "flex";
  bnChangePass.removeEventListener("click", showChangePassDiv);
  bnChangePass.addEventListener("click", hideChangePassDiv);
}

function hideChangePassDiv() {
  ChangePassConDiv.style.display = "none";
  bnChangePass.removeEventListener("click", hideChangePassDiv);
  bnChangePass.addEventListener("click", showChangePassDiv);
}

function f_confirmChangePassword() {}

function f_manageHistory() {}

function f_changeThemeColor() {
  if (currentThemeColor != "DARK") {
    currentThemeColor = "DARK";
    currentThemeColorIcon = "dark_mode";
    loadingDiv.className = "loadingDiv_darkMode"
    bottomDiv.className = "bottomDiv_darkMode";
    homePanel.className = "homePanel_darkMode";
    playerPanel.className = "playerPanel_darkMode";
    searchPanel.className = "searchPanel_darkMode";
    libraryPanel.className = "libraryPanel_darkMode";
    accountPanel.className = "accountPanel_darkMode";
    libraryPanel.className = "libraryPanel_darkMode";
    contributionPanel.className = "contributionPanel_darkMode";
  } else if (currentThemeColor != "LIGHT") {
    currentThemeColor = "LIGHT";
    currentThemeColorIcon = "light_mode";
    loadingDiv.className = "loadingDiv_lightMode"
    bottomDiv.className = "bottomDiv_lightMode";
    homePanel.className = "homePanel_lightMode";
    playerPanel.className = "playerPanel_lightMode";
    searchPanel.className = "searchPanel_lightMode";
    libraryPanel.className = "libraryPanel_lightMode";
    accountPanel.className = "accountPanel_lightMode";
    libraryPanel.className = "libraryPanel_lightMode";
    contributionPanel.className = "contributionPanel_lightMode";
  }
  bnChangeColorP.textContent = currentThemeColor;
  bnChangeColorIcon.textContent = currentThemeColorIcon;
}

function f_audioQuality() {
  if (signedIn) {
  }
}

function f_contribute() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    startContribution().then(() => {
      main.style.display = "flex";
      loadingDiv.style.display = "none";
      main.replaceChild(contributionPanel, accountPanel);
      currentTab = contributionPanel;
      bottomDiv.style.display = "none";
    })
  } else {
    alert("You need to be logged in to contribute!");
  }
}

function f_logOut() {
  if (signedIn) {
    signedIn = false;
    showInfo();
    loadRecentlyPlayedSongs();
    loadPlaylists();
    loadSearchHistory();
  }
}
attend();