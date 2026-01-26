/** contains data about user */
class user {
  constructor() {
    /** identifier of the user in the logic @type {string} */ this.UID = "";
    /** identifier of the user known to user @type {string} */ this.username = "";
    /** @type {string} */ this.password = "";
    /** display name of user @type {string} */ this.name = "";
    /** url of the picture @type {string} */ this.profilePic = "";
    /** @type {Array<object>} */ this.playlistList = [];
    /** @type {Array<string>} */ this.recentlyPlayedSongList = [];
    /** @type {Array<string>} */ this.searchedTextList = [];
    /** @type {Array<string>} */ this.searchedSongList = [];
    /** @type {Array<string>} */ this.favouriteSongList = [];
    /** @type {Array<object>} */ this.notificationsList = [];
    /** @type {number} */ this.allowHistory = 1;
    /** @type {string} */ this.theme = "light";
  }
  /**
   * Syncs user data with the cloud 
   * @returns 
   */
  async sync() {
    const userData = {
      userName: this.username,
      password: this.password,
      profileName: this.name,
      profilePic: this.profilePic,
      playlistList: this.playlistList,
      recentlyPlayedSongList: this.recentlyPlayedSongList,
      searchedTextList: this.searchedTextList,
      searchedSongList: this.searchedSongList,
      favouriteSongList: this.favouriteSongList,
      notificationsList: this.notificationsList,
      allowHistory: this.allowHistory,
      themeColor: this.theme,
    }
    await dumpInfo(`/USERS/${this.UID}.json`, userData);
  }
}

/** holds the current user's data @type {user} */
let currentUser;

/** flag to check if a user is available @type {boolean} */
let signedIn = false;

/** @structure {username: [UID, password]} @type {Object.<string, [string, string]>} */
let userUIDmap = null;

/** @structure [user1, user2] @type {string[]} */
let usersList = [];

//#region dropbox
/** 
 * @type {Dropbox} 
 */
const dropbox = new Dropbox.Dropbox({
  clientId: "t8wj3k9vzx9thyg",
  fetch: window.fetch.bind(window),
  refreshToken: "tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL",
  clientSecret: "il7htvq6cz94oqm",
});

/**
 * Uploads data into the `path` in the cloud storage **Dropbox** 
 * @param {string} path be careful while entering path 
 * @param {Object} data it stringifies the json 
 * @returns {Promise<void>}
 */
async function dumpInfo(path, data) {
  await dropbox.filesUpload({
    path: path,
    contents: JSON.stringify(data),
    mode: { ".tag": "overwrite" },
    autorename: false,
    mute: true,
  });
}

/**
 * Gets data from dropbox
 * @param {string} path path to storage in the cloud
 * @returns {Promise<object>} 
 */
async function loadInfo(path) {
  const response = await dropbox.filesDownload({ path: path });
  const text = await response.result.fileBlob.text()
  return JSON.parse(text);
}
//#endregion dropbox

/** Collects data from database */
async function startBackend() {
  fetchSongData();
  fetchArtistsData();
  await fetchUsersInfo();
  await checkLocalStorage();
}

/**
 * Gets all users info from database and populates userUIDmap and usersList
 * @returns {Promise<void>}
 */
async function fetchUsersInfo() {
  loadingMessage.textContent = "progress: Collecting users...";
  const response = await loadInfo("/JSON/UserList.json");
  userUIDmap = response;
  usersList = Object.keys(response);
}

/** Checks for saved users in local storage */
async function checkLocalStorage() {
  loadingMessage.textContent = "progress: checking saved users";
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  
  if (username != null) { await loginUser(username,  password); } 
  
  else { localStorage.removeItem("username"); localStorage.removeItem("password"); }
}


let songCount = 0;
let songLoaded = false;
/** Tracks if all song data has arrived */
function songAttendance() {
  songCount++;
  if (songCount >= 6) {
    loadingMessage.textContent = "progress: getting user data...";
    loadingProgress.style.width = "95%";
    songLoaded = true;
    updateUI();
    updateSongInfo();
    try {
      setDevicePlayer();
    } catch { }
  }
}
function fetchSongData() {
  loadingMessage.textContent = "progress: getting songs ready...";
  loadInfo("/JSON/HindiSongs.json").then((data) => {
    HindiTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...HindiTitles);
    loadHomeSongs(HindiTitles, hindiSongDivCon);
    songAttendance();
  });
  loadInfo("/JSON/PunjabiSongs.json").then((data) => {
    PunjabiTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...PunjabiTitles);
    loadHomeSongs(PunjabiTitles, punjabiSongDivCon);
    songAttendance();
  });
  loadInfo("/JSON/EnglishSongs.json").then((data) => {
    EnglishTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...EnglishTitles);
    loadHomeSongs(EnglishTitles, englishSongDivCon);
    songAttendance();
  });
  loadInfo("/JSON/PhonkSongs.json").then((data) => {
    PhonkTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...PhonkTitles);
    loadHomeSongs(PhonkTitles, phonkSongDivCon);
    songAttendance();
  });
  loadInfo("/JSON/SpanishSongs.json").then((data) => {
    SpanishTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...SpanishTitles);
    loadHomeSongs(SpanishTitles, spanishSongDivCon);
    songAttendance();
  });
  loadInfo("/JSON/Tunes.json").then((data) => {
    TunesTitles = Object.keys(data);
    Object.assign(songData, data);
    titleNames.push(...TunesTitles);
    loadHomeSongs(TunesTitles, tuneDivCon);
    songAttendance();
  });
}

let artistCount = 0;
let artistLoaded = false;
function artistAttendance() {
  // Tracks if all artist data has arrived
  artistCount++;
  if (artistCount >= 6) {
    artistLoaded = true;
    updateSongInfoUI();
  }
}
function fetchArtistsData() {
  loadInfo("/JSON/hindiArtists.json").then((data) => {
    Object.assign(artistData, data);
    hindiArtists = Object.keys(data);
    artistNames.push(...hindiArtists);
    artistAttendance();
  });
  loadInfo("/JSON/englishArtists.json").then((data) => {
    Object.assign(artistData, data);
    englishArtists = Object.keys(data);
    artistNames.push(...englishArtists);
    artistAttendance();
  });
  loadInfo("/JSON/punjabiArtists.json").then((data) => {
    Object.assign(artistData, data);
    punjabiArtists = Object.keys(data);
    artistNames.push(...punjabiArtists);
    artistAttendance();
  });
  loadInfo("/JSON/phonkArtists.json").then((data) => {
    Object.assign(artistData, data);
    phonkArtists = Object.keys(data);
    artistNames.push(...phonkArtists);
    artistAttendance();
  });
  loadInfo("/JSON/spanishArtists.json").then((data) => {
    Object.assign(artistData, data);
    spanishArtists = Object.keys(data);
    artistNames.push(...spanishArtists);
    artistAttendance();
  });
  loadInfo("/JSON/tunesArtists.json").then((data) => {
    Object.assign(artistData, data);
    tunesArtists = Object.keys(data);
    artistNames.push(...tunesArtists);
    artistAttendance();
  });
}

/** 
 * Gets data of a specific user 
 * @param {string} username 
 * @param {string} password 
 */
async function loginUser(username, password) {
  // Brings the whole database
  const users = await loadInfo("/JSON/UserList.json");
  const usernames = Object.keys(users);

  if (!usernames.includes(username)) { return "username"; }
  if (users[username][1] != password) { return "password"; }

  const UID = users[username][0];

  const data = await loadInfo(`/USERS/${UID}.json`);

  currentUser = new user();
  currentUser.UID = UID;
  currentUser.username = data.userName;
  currentUser.name = data.profileName;
  currentUser.profilePic = data.profilePic;
  currentUser.password = data.password;
  currentUser.recentlyPlayedSongList = data.recentlyPlayedSongList;
  currentUser.searchedTextList = data.searchedTextList;
  currentUser.searchedSongList = data.searchedSongList;
  currentUser.playlistList = data.playlistList;
  currentUser.favouriteSongList = data.favouriteSongList;
  currentUser.notificationsList = data.notificationsList;
  currentUser.theme = data.themeColor;
  currentUser.allowHistory = data.allowHistory;
  localStorage.setItem("username", currentUser.username);
  localStorage.setItem("password", currentUser.password);
  
  signedIn = true;
  updateUI();
  
  return true;
}

function updateUI() {
  if (songLoaded && signedIn) {
    loadingMessage.textContent = "progress: preparing your songs and playlists...";
    showInfo();
    settingsPanel_accountSettings_buttonContainer.style.display = "flex";
    loadRecentlyPlayedSongs();
    loadPlaylists();
    loadSearchHistory();
  }
}

/**
 * 
 * @param {string} receiver username of the receiver 
 * @param {string} title title of notification
 * @param {string} content body of notification
 * @returns 
 */
async function sendNotification(receiver, title, content) {
  const users = await loadInfo("/JSON/UserList.json");
  if (!Object.keys(users).includes(receiver)) { return; }

  const data = await loadInfo(`/USERS/${users[receiver][0]}.json`);
  data.notificationsList.unshift({
    title: title,
    date: `${genDate()}`,
    time: `${genTime()}`,
    content: content,
  });
  await dumpInfo(`/USERS/${users[receiver][0]}.json`, data);
}

function genDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = currentDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function genTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = currentTime.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

function generateUID() {
  let current = new Date();
  return `user-${current.getFullYear()}${current.getDate()}-${current.getHours()}${current.getMinutes()}${current.getSeconds()}${current.getMilliseconds()}`;
}

//#region account creation
async function createNewUser(userGivenFullName, userGivenName, userGivenPass) {
  const userUID = generateUID();
  
  const users = await loadInfo("/JSON/UserList.json");
  if (Object.keys(users).includes(userGivenName)) { return "username"; }
  users[userGivenName] = [userUID, userGivenPass];
  await dumpInfo("/JSON/UserList.json", users);

  currentUser = new user();
  currentUser.UID = userUID;
  currentUser.username = userGivenName;
  currentUser.name = userGivenFullName;
  currentUser.password = userGivenPass;

  await currentUser.sync();
  await sendNotification( "noortaquee", "ACCOUNT CREATION", `${userGivenFullName} created a new account.`);

  signedIn = true;
  updateUI();
  return true;
}
//#endregion account creation


