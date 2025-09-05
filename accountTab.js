
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
bnSettingsIcon.id = "bnSettingsIcon";
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
bnChangePassIcon.id = "bnChangePassIcon";
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
bnManageHistoryIcon.id = "bnManageHistoryIcon";
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
bnAudioQualityIcon.id = "bnAudioQualityIcon";
let bnAudioQualityP = document.createElement("p");
bnAudioQuality.appendChild(bnAudioQualityP);
bnAudioQualityP.textContent = "AUDIO QUALITY";

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

let signInInputContainer = document.createElement("div");
mainContainer.appendChild(signInInputContainer);
signInInputContainer.id = "signInInputContainer";

let nameInput = document.createElement("input");
signInInputContainer.appendChild(nameInput);
nameInput.id = "nameInput";
nameInput.type = "text";
nameInput.placeholder = "USERNAME";

let passInput = document.createElement("input");
signInInputContainer.appendChild(passInput);
passInput.id = "passInput";
passInput.type = "password";
passInput.placeholder = "PASSWORD";

let signUpInputContainer = document.createElement("div");
signUpInputContainer.id = "signUpInputContainer";

let fullNameInput = document.createElement("input");
signUpInputContainer.appendChild(fullNameInput);
fullNameInput.id = "fullNameInput";
fullNameInput.type = "text";
fullNameInput.placeholder = "NAME";

let createUsernameInput = document.createElement("input");
signUpInputContainer.appendChild(createUsernameInput);
createUsernameInput.id = "createUsernameInput";
createUsernameInput.type = "text";
createUsernameInput.placeholder = "CREATE USERNAME";

let createPassInput = document.createElement("input");
signUpInputContainer.appendChild(createPassInput);
createPassInput.id = "createPassInput";
createPassInput.type = "text";
createPassInput.placeholder = "CREATE PASSWORD";


let loginBtn = document.createElement("button");
mainContainer.appendChild(loginBtn);
loginBtn.id = "loginBtn";
loginBtn.textContent = "SIGN IN";
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

let registerWay = "signIn";
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
  if (usersList.length > 0) {
    main.replaceChild(loginPanel,accountPanel);
    currentTab = loginPanel;
  } else {
    alert("Server is not responding!")
  }
}
function f_loginChange() {
  if (registerWay == "signIn") {
    mainContainer.style.height = "65%";
    loginHeader.textContent = "Sign Up";
    mainContainer.replaceChild(signUpInputContainer,signInInputContainer);
    loginBtn.textContent = "CREATE";
    loginBtn.removeEventListener("click",checkIdentity);
    loginBtn.addEventListener("click",checkAvailability);
    loginChangeText.textContent = "Already have an account?";
    loginChangeBtn.textContent = "Sign In";
    registerWay = "signUp";
  } else {
    mainContainer.style.height = "50%";
    loginHeader.textContent = "Sign In";
    mainContainer.replaceChild(signInInputContainer,signUpInputContainer);
    loginBtn.textContent = "SIGN IN";
    loginBtn.removeEventListener("click",checkAvailability);
    loginBtn.addEventListener("click",checkIdentity);
    loginChangeText.textContent = "Don't have an account?";
    loginChangeBtn.textContent = "Create account";
    registerWay = "signIn";
  }
}

function checkIdentity() {
  let userGivenName = nameInput.value;
  let userGivenPass = passInput.value;
  if (usersList.includes(userGivenName)) {
    if (data[userGivenName].password == userGivenPass) {
      switchTo("accountPanel");
      alert("Login Successful!");
      fetchUserData(userGivenName);
    } else {
      alert("Incorrect Password!");
    }
  } else {
    alert("Username is not present!");
  }
}

function checkAvailability() {
  let userGivenFullName = fullNameInput.value;
  let userGivenName = createUsernameInput.value;
  let userGivenPass = createPassInput.value;
  if (usersList.includes(userGivenName)) {
    alert("Username is not available!");
  } else if (userGivenPass.length < 1) {
    alert("Password cannot be empty!");
  } else if (userGivenFullName.length < 1) {
    alert("Please provide your full name!");
  }else {
    alert("Account Created!")
    data[userGivenName] = {"profileName":userGivenFullName,
      "profilePic":"",
      "password":userGivenPass,
      "playlistList":[],
      "recentlyPlayedSongList":[],
      "searchedTextList":[],
      "searchedSongList":[],
      "favouriteSongList":[],
      "volumeLevel":[]
    };
    updateDataFile().then(() => {
      fetchUserData(userGivenName);
    })
    switchTo("accountPanel");
  }
}

function showInfo() {
  profilePic.style.backgroundImage = `url(${profilePicImage})`;
  profileName.textContent = userName;
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}

function changePassword() {}


attend();