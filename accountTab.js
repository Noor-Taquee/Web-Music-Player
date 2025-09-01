
//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";

let accountInfoHeader = document.createElement("div");
accountPanel.appendChild(accountInfoHeader);
accountInfoHeader.id = "accountInfoHeader";
let profilePic = document.createElement("p");
accountInfoHeader.appendChild(profilePic);
profilePic.id = "profilePic";
let profilePicIcon = document.createElement("i");
profilePic.appendChild(profilePicIcon);
profilePicIcon.className = "fa-solid fa-user";
let editIcon = document.createElement("i");
editIcon.className = "fa-solid fa-pen";
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
let libraryicon = document.createElement("i");
playlistsCount.appendChild(libraryicon);
libraryicon.className = "fa-solid fa-book";
let playlistsCountP = document.createElement("p");
playlistsCount.appendChild(playlistsCountP);
playlistsCountP.textContent = "playlists:";

let favouriteSongsCount = document.createElement("button");
statsDiv.appendChild(favouriteSongsCount);
let favouriteCountIcon = document.createElement("i");
favouriteCountIcon.className = "fa-solid fa-star";
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
let bnSettingsIcon = document.createElement("i");
bnSettings.appendChild(bnSettingsIcon);
bnSettingsIcon.className = "fa-solid fa-gear";
bnSettingsIcon.id = "bnSettingsIcon";
let bnSettingsP = document.createElement("p");
bnSettings.appendChild(bnSettingsP);
bnSettingsP.textContent = "SETTINGS";

let bnChangePass = document.createElement("button");
settingsPanel.appendChild(bnChangePass);
bnChangePass.id = "bnChangePass";
let bnChangePassIcon = document.createElement("i");
bnChangePass.appendChild(bnChangePassIcon);
bnChangePassIcon.className = "fa-solid fa-key";
bnChangePassIcon.id = "bnChangePassIcon";
let bnChangePassP = document.createElement("p");
bnChangePass.appendChild(bnChangePassP);
bnChangePassP.textContent = "CHANGE PASSWORD";

let bnManageHistory = document.createElement("button");
settingsPanel.appendChild(bnManageHistory);
bnManageHistory.id = "bnManageHistory";
let bnManageHistoryIcon = document.createElement("i");
bnManageHistory.appendChild(bnManageHistoryIcon);
bnManageHistoryIcon.className = "fa-solid fa-clock";
bnManageHistoryIcon.id = "bnManageHistoryIcon";
let bnManageHistoryP = document.createElement("p");
bnManageHistory.appendChild(bnManageHistoryP);
bnManageHistoryP.textContent = "MANAGE HISTORY";

let bnAudioQuality = document.createElement("button");
settingsPanel.appendChild(bnAudioQuality);
bnAudioQuality.id = "bnAudioQuality";
let bnAudioQualityIcon = document.createElement("i");
bnAudioQuality.appendChild(bnAudioQualityIcon);
bnAudioQualityIcon.className = "fa-solid fa-music";
bnAudioQualityIcon.id = "bnAudioQualityIcon";
let bnAudioQualityP = document.createElement("p");
bnAudioQuality.appendChild(bnAudioQualityP);
bnAudioQualityP.textContent = "AUDIO QUALITY";

let bnfavouriteSongs = document.createElement("button");
settingsPanel.appendChild(bnfavouriteSongs);
bnfavouriteSongs.id = "bnfavouriteSongs";
let bnFavouriteIcon = document.createElement("i");
bnfavouriteSongs.appendChild(bnFavouriteIcon);
bnFavouriteIcon.className = "fa-solid fa-star";
bnFavouriteIcon.id = "bnFavouriteIcon";
let bnfavouriteSongsP = document.createElement("p");
bnfavouriteSongs.appendChild(bnfavouriteSongsP);
bnfavouriteSongsP.textContent = "FAVOURITE SONGS";



let loginPanel = document.createElement("div");
loginPanel.id = "loginPanel";

let mainContainer = document.createElement("div");
loginPanel.appendChild(mainContainer);
mainContainer.id = "mainContainer";

let loginHeader = document.createElement("p");
mainContainer.appendChild(loginHeader);
loginHeader.id = "loginHeader";
loginHeader.textContent = "Sign In";

let nameEntryDiv = document.createElement("div");
mainContainer.appendChild(nameEntryDiv);
nameEntryDiv.id = "nameEntryDiv";

let nameInput = document.createElement("input");
nameEntryDiv.appendChild(nameInput);
nameInput.id = "nameInput";
nameInput.type = "text";
nameInput.placeholder = "USERNAME";

let passEntryDiv = document.createElement("div");
mainContainer.appendChild(passEntryDiv);
passEntryDiv.id = "passEntryDiv";

let passInput = document.createElement("input");
passEntryDiv.appendChild(passInput);
passInput.id = "passInput";
passInput.type = "password";
passInput.placeholder = "PASSWORD";

let loginBtn = document.createElement("button");
mainContainer.appendChild(loginBtn);
loginBtn.id = "loginBtn";
loginBtn.textContent = "LOG IN";
loginBtn.addEventListener("click", checkIdentity);

let loginFooter = document.createElement("div");
mainContainer.appendChild(loginFooter);
loginFooter.id = "loginFooter";

let loginChangeText = document.createElement("p");
loginFooter.appendChild(loginChangeText);
loginChangeText.id = "loginChangeText";
loginChangeText.textContent = "Don't have an account?";

let loginChangeBtn = document.createElement("btn");
loginFooter.appendChild(loginChangeBtn);
loginChangeBtn.id = "loginChangeBtn";
loginChangeBtn.textContent = "Create account";
loginChangeBtn.addEventListener("click",f_loginChange);

const drpbx = new Dropbox.Dropbox({
    accessToken: 'sl.u.AF8CndDV1ozXFcZZDLhb0ucoGsu77CzELG8L68pTojHEXYdukRFQd5TI5QLVAsDGDAUvSdy3rG6wi_wZRhmjaQ47jCCyEg_VyVBCXdrlZFws7hW2ES1OErUDvNt5Tn-LzAOoYY6V4FrgoU9BM7i93B9n36RrkF6JQ9pfm5DsuHX5VymWdVqhV5HD-dA28jKXaH1JEZTn0cjtRIRi3NRlhPmPImu9eIoczn2C-sHC97w2LZYkxKVwTEBVoa6jT0aMScyvmXBdqDYC36ouX-HSFNBWfRhIhrjc7ohkTEsXXQZ4x2MAoHOx81JjTWH9Ks2ye3BgscUbzfRrLuxzTKVk_i3VGq4V4xLqKr9wrVJtGUSIpU-r050FkvwWrNuVZMgTdd7Cye3T5yV5Qz4-YEjG7XR5DYHUjgmXMWB9rCyp_tQJi15w2BFJl-mjAxjFT12WcREGpzIQ28lFXiVmO_4gorOL1a5T4xg9123U8qRJPQWVac3si_VrzhJJKAOYpgIG2LmrZSnmYfKgfbJWUqsVDgnAnPeMrpvXgcqU_ID6kJsxYPsB79317sOclVAya11IsHgIWXTNvS9JViNLNGl1NJpSPhU502LXw2a4Q0R-Iog-53tu0zx7Zipl4xLUMTbLAY00bxHODaRYsz3A15Snn-2ZmDOaXY7ijUA-5EdMDiaRuImG3hple3KtfXSRplTN1neM21XDVOlBcTWtcbx5wMjP550KhvecHf675xjJ0at_xZPuAnLPS5ky3Nb_zu4maKPiP8yuBx9suB3iROSyri6Nrpi7lDnAM9nYT70Rh4jdr_jvNBDTQewn9YlneT3URcXk9tRl7Mx-cdxAUeNTWKW87XoKBcFcrjN5wg_FeJUBAtcwvqTxVTTGqwvq04dMtrxiG7Ysb6nGuROK_XXvyhP9DBXRRvpMq6reXyDlA9bICH3wS2_WTYQ08PW7JBSpDYg2Vly6T7MDlc2OQ19EtwNydEMSSkBABWQSko4G9GokxWPLzo2YWlG1-S5doniBRy08PFOCg8Wer6MJ-whmAtxn5m_I9E5IVlqr23qEayPX2iQsZC9dI4mDVe0l4bWTM-GX6MrBKEnriqzQMLvwbm2TMAbqVvCv-6VhcQorInV9BD383HeHRUGKyPbQBoZyLmsVeUmOARiGWj_kwYEyag5L7AhqYUBFINt_E69sI6F0-zH6kpSnopKZQ8dL4lBf2xMrRsMmNgAeWKKT_e--Yp1T6gaL1YAusQyIv5_wbRbSvkAtVdHBLGjlF2AwePlhBpFcNOhUAGau87ItUKx15ChkkZmP5gFmHxTb1eV-dQ_3nQAoLxwRJB9ApbJDhIff6ICc3ZZC4zbBPd7vTlx0FlBKosPPFsyqNv1cwvbNBna1GhegCYGgxCse_tpZvzTQlLXMl24fwrDEVWtJmJ9VOTou',
    fetch: window.fetch.bind(window)
});
let reisterWay = "signIn";
let  usersList = [];
let data = null;
let userData = null;
let userName = "";
let profilePicImage = "";
let accountPassword = "";
let volumeLevel = 0;
let favouriteSongList = [];
let searchedTextList = [];
let searchedSongList = [];
let recentlyPlayedSongList = [];
let playlistList = [];
let userGivenName = "";


//VRIABLES
let signedIn = false;


function f_login() {
  userGivenName = "aUser";
  blurLayer.replaceChild(loginPanel,accountPanel);
  currentTab = loginPanel;
}
function f_loginChange() {
  if (reisterWay == "signIn") {
    loginHeader.textContent = "Sign Up";
    nameInput.placeholder = "CREATE USERNAME";
    passInput.type = "text";
    passInput.placeholder = "CREATE PASSWORD";
    loginBtn.textContent = "CREATE";
    loginBtn.removeEventListener("click",checkIdentity);
    loginBtn.addEventListener("click",checkAvailability);
    loginChangeText.textContent = "Already have an account?";
    loginChangeBtn.textContent = "Sign In";
    reisterWay = "signUp";
  } else {
    loginHeader.textContent = "Sign In";
    nameInput.placeholder = "USERNAME";
    passInput.type = "password";
    passInput.placeholder = "PASSWORD";
    loginBtn.textContent = "LOG IN";
    loginBtn.removeEventListener("click",checkAvailability);
    loginBtn.addEventListener("click",checkIdentity);
    loginChangeText.textContent = "Don't have an account?";
    loginChangeBtn.textContent = "Create account";
    reisterWay = "signIn";
  }
}

function checkIdentity() {
  userGivenName = nameInput.value;
  userGivenPass = passInput.value;
  if (usersList.includes(userGivenName)) {
    if (data[userGivenName].password == userGivenPass) {
      alert("Login Successful!")
      fetchUserData();
      blurLayer.replaceChild(accountPanel,loginPanel);
      currentTab = accountPanel;
    } else {
      alert("Incorrect Password!")
    }
  } else {
    alert("Username is not present!")
  }
}
function checkAvailability() {
  userGivenName = nameInput.value;
  userGivenPass = passInput.value;
  if (usersList.includes(userGivenName)) {
    alert("Username is not available!")
  } else if (userGivenPass.length < 1) {
    alert("Password cannot be empty!")
  } else {
    alert("Account Created!")
    blurLayer.replaceChild(accountPanel,loginPanel);
    currentTab = accountPanel;
  }
}

function fetchUsersInfo() {
  drpbx.filesDownload({path:"/UserFile.json"}).then(response => response.result.fileBlob.text()).then(text => {
    data = JSON.parse(text);
  }).then(()=>{
    usersList = Object.keys(data);
  });
}
function fetchUserData() {
  userData = data[userGivenName];
  userName = userData.profileName;
  profilePicImage = userData.profilePic;
  accountPassword = userData.password;
  volumeLevel = userData.volumeLevel;
  favouriteSongList = userData.favouriteSongList;
  recentlyPlayedSongList = userData.recentlyPlayedSongList;
  searchedTextList = userData.searchedTextList;
  searchedSongList = userData.searchedSongList;
  likedSongList = userData.likedSongList;
  playlistList  = userData.playlistList;
  showInfo();
  loadPlaylists();
  loadRecentlyPlayedSongs();
  loadSearchHistory();
  setVolumeTo(volumeLevel);
}

function updateDataFile() {
  drpbx.filesUpload({
    path: "/UserFile.json",
    contents: JSON.stringify(data),
    mode: {".tag":"overwrite"},
    autorename: false,
    mute: true
  });
}

function showInfo() {
  profilePic.style.backgroundImage = `url(${profilePicImage})`;
  profileName.textContent = userName;
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}



attend();