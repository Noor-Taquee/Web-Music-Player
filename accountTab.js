
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

let accountPanelSpace = document.createElement("div");
settingsPanel.appendChild(accountPanelSpace);
accountPanelSpace.id = "accountPanelSpace";


let loginPanel = document.createElement("div");
loginPanel.id = "loginPanel";

let mainContainer = document.createElement("div");
loginPanel.appendChild(mainContainer);
mainContainer.id = "mainContainer";

let loginHeader = document.createElement("p");
mainContainer.appendChild(loginHeader);
loginHeader.id = "loginHeader";
loginHeader.textContent = "Sign In";

let inputContainer = document.createElement("div");
mainContainer.appendChild(inputContainer);
inputContainer.id = "inputContainer";

let nameEntryDiv = document.createElement("div");
inputContainer.appendChild(nameEntryDiv);
nameEntryDiv.id = "nameEntryDiv";

let nameInput = document.createElement("input");
nameEntryDiv.appendChild(nameInput);
nameInput.id = "nameInput";
nameInput.type = "text";
nameInput.placeholder = "USERNAME";

let passEntryDiv = document.createElement("div");
inputContainer.appendChild(passEntryDiv);
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
  if (usersList.length > 0) {
    main.replaceChild(loginPanel,accountPanel);
    currentTab = loginPanel;
  } else {
    alert("Server is not responding!")
  }
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
      main.replaceChild(accountPanel,loginPanel);
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
    main.replaceChild(accountPanel,loginPanel);
    currentTab = accountPanel;
  }
}

function showInfo() {
  profilePic.style.backgroundImage = `url(${profilePicImage})`;
  profileName.textContent = userName;
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}



attend();