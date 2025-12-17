let userUIDmap = null; // {username: [UID, password]}
let usersList = []; //[user1, user2]
let userData = null; //{}

let userUID = "";
let userName = "";
let userProfileName = "";
let accountPassword = "";
let profilePicImage = "";
let themeColorPref = "";
let historyPref = 1;
let favouriteSongList = [];
let searchedTextList = [];
let searchedSongList = [];
let recentlyPlayedSongList = [];
let playlistList = [];
let notificationsList = [];

let dropbox = new Dropbox.Dropbox({
  clientId: "t8wj3k9vzx9thyg",
  fetch: window.fetch.bind(window),
  refreshToken:
    "tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL",
  clientSecret: "il7htvq6cz94oqm",
});
function dumpInfo(path, data) {
  return dropbox.filesUpload({
    path: path,
    contents: JSON.stringify(data),
    mode: { ".tag": "overwrite" },
    autorename: false,
    mute: true,
  });
}
function loadInfo(path) {
  return dropbox
    .filesDownload({ path: path })
    .then((response) => response.result.fileBlob.text())
    .then((text) => {
      return JSON.parse(text);
    });
}

function startBackend() {
  // Collects data from database
  fetchSongData();
  fetchUsersInfo().then(() => {
    checkLocalStorage();
  });
  fetchArtistsData();
}

function fetchUsersInfo() {
  // Gets allUsers info from database
  loadingMessage.textContent = "progress: Collecting users...";
  return loadInfo("/JSON/UserList.json").then((response) => {
    userUIDmap = response;
    usersList = Object.keys(response);
    loadingMessage.textContent = "progress: users collected";
  });
}

function checkLocalStorage() {
  loadingMessage.textContent = "progress: checking saved users";
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  if (
    username !== null &&
    userUIDmap[username] &&
    userUIDmap[username][1] == password
  ) {
    loadingMessage.textContent = "progress: user found in device";
    loadingProgress.style.width = "90%";
    loginUser(userUIDmap[username][0]).then(() => {
      loadingProgress.style.width = "100%";
      loadingStatusDiv.style.display = "none";
      loadingDiv.style.display = "none";
      checkOrientation();
      main.style.display = "flex";
    });
  } else {
    loadingMessage.textContent = "progress: No users found in this device!";
    loadingProgress.style.width = "100%";
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    loadingStatusDiv.style.display = "none";
    loadingDiv.style.display = "none";
    checkOrientation();
    main.style.display = "flex";
  }
}

function updateDataFile() {
  console.log(userUID);
  return dumpInfo(`/USERS/${userUID}.json`, userData).then(
    console.log("data file updated!")
  );
}

let songCount = 0;
let songLoaded = false;
function songAttendance() {
  // Tracks if all song data has arrived
  songCount++;
  if (songCount >= 6) {
    loadingMessage.textContent = "progress: getting user data...";
    loadingProgress.style.width = "95%";
    songLoaded = true;
    updateUI();
    updateSongInfo();
    try {
      setDevicePlayer();
    } catch {}
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

function loginUser(UID) {
  // Gets data of a specific user
  userUID = UID;
  loadingMessage.textContent = "progress: logging you in...";
  return loadInfo(`/USERS/${UID}.json`).then((data) => {
    userData = data;
    userName = userData.userName;
    userProfileName = userData.profileName;
    profilePicImage = userData.profilePic;
    accountPassword = userData.password;
    recentlyPlayedSongList = userData.recentlyPlayedSongList;
    searchedTextList = userData.searchedTextList;
    searchedSongList = userData.searchedSongList;
    playlistList = userData.playlistList;
    favouriteSongList = userData.favouriteSongList;
    notificationsList = userData.notificationsList;
    themeColorPref = userData.themeColor;
    historyPref = userData.allowHistory;
    localStorage.setItem("username", userName);
    localStorage.setItem("password", accountPassword);
    signedIn = true;
    showInfo();
    loadNotifications();
    setHistoryPref(historyPref);
    f_changeThemeColor(themeColorPref);
    updateUI();
    loadingMessage.textContent = "progress: login successful!";
  });
}

function updateUI() {
  if (songLoaded && signedIn) {
    loadingMessage.textContent =
      "progress: preparing your songs and playlists...";
    loadRecentlyPlayedSongs();
    loadPlaylists();
    loadSearchHistory();
    setRippleStyle();
  }
}

function sendNotification(receiver, title, content) {
  return loadInfo(`/USERS/${userUIDmap[receiver][0]}.json`).then((data) => {
    data.notificationsList.unshift({
      title: title,
      date: `${genDate()}`,
      time: `${genTime()}`,
      content: content,
    });
    return dumpInfo(`/USERS/${userUIDmap[receiver][0]}.json`, data);
  });
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

function createNewUser(userGivenFullName, userGivenName, userGivenPass) {
  userUID = generateUID();
  userUIDmap[userGivenName] = [userUID, userGivenPass];
  let newUserData = {
    userName: userGivenName,
    password: userGivenPass,
    profileName: userGivenFullName,
    profilePic: "",
    playlistList: [],
    recentlyPlayedSongList: [],
    searchedTextList: [],
    searchedSongList: [],
    favouriteSongList: [],
    notificationsList: [],
    allowHistory: 1,
    themeColor: "light",
  };
  return dumpInfo("/JSON/UserList.json", userUIDmap).then(() => {
    return dumpInfo(`/USERS/${userUID}.json`, newUserData).then(() => {
      return sendNotification(
        "noortaquee",
        "ACCOUNT CREATION",
        `${userGivenFullName} created a new account.`
      );
    });
  });
}

attend();
