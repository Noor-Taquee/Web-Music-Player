let data = null;
let userData = null;
let  usersList = [];

let userNameKey = "";
let userName = "";
let accountPassword = "";
let profilePicImage = "";
let themeColorPref = "light";
let historyPref = 1;
let favouriteSongList = [];
let searchedTextList = [];
let searchedSongList = [];
let recentlyPlayedSongList = [];
let playlistList = [];
let notificationsList = [];


let dropbox = new Dropbox.Dropbox({
    clientId: 't8wj3k9vzx9thyg',
    fetch: window.fetch.bind(window),
    refreshToken: 'tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL',
    clientSecret: 'il7htvq6cz94oqm'
});

function startBackend() {
  fetchUsersInfo().then(() => {
    fetchSongData();
  });
}

let count = 0;
function songAttendance() {
  count++;
  if (count >= 6) {
    updateSongInfo();
    try {
      setDevicePlayer();
    } catch {}
    let storedUserName = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");
    if (storedUserName != null && usersList.includes(storedUserName) && storedPass == data[storedUserName].password) {
      fetchUserData(localStorage.getItem("username")).then(() => {
        loadingDiv.style.display = "none";
        main.style.display = "flex";
      });
    } else {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
      f_changeThemeColor(themeColorPref);
    }
  }
}

function updateDataFile() {
  fetchUsersInfo().then(() => {
      data[userNameKey] = userData;
    });
  return dumpInfo("/JSON/UserFile.json", data);
}
function dumpInfo(path,data) {
  return dropbox.filesUpload({
    path: path,
    contents: JSON.stringify(data),
    mode: {".tag":"overwrite"},
    autorename: false,
    mute: true
  });
}

function loadInfo(path) {
  return dropbox.filesDownload({path: path}).then(response => response.result.fileBlob.text()).then(text => {
    return JSON.parse(text);
  });
}
function fetchSongData() {
  loadInfo("/JSON/HindiSongs.json").then(data => {
    HindiTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...HindiTitles);
    loadHomeSongs(HindiTitles,hindiSongDivCon);
    songAttendance();
  })
  loadInfo("/JSON/PunjabiSongs.json").then(data => {
    PunjabiTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...PunjabiTitles);
    loadHomeSongs(PunjabiTitles,punjabiSongDivCon);
    songAttendance();
  })
  loadInfo("/JSON/EnglishSongs.json").then(data => {
    EnglishTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...EnglishTitles);
    loadHomeSongs(EnglishTitles,englishSongDivCon);
    songAttendance();
  })
  loadInfo("/JSON/PhonkSongs.json").then(data => {
    PhonkTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...PhonkTitles);
    loadHomeSongs(PhonkTitles,phonkSongDivCon);
    songAttendance();
  })
  loadInfo("/JSON/SpanishSongs.json").then(data => {
    SpanishTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...SpanishTitles);
    loadHomeSongs(SpanishTitles,spanishSongDivCon);
    songAttendance();
  })
  return loadInfo("/JSON/Tunes.json").then(data => {
    TunesTitles = Object.keys(data);
    Object.assign(songData,data);
    titleNames.push(...TunesTitles);
    loadHomeSongs(TunesTitles,tuneDivCon);
    songAttendance();
  })
}
function fetchArtistsData() {
  loadInfo("/JSON/hindiArtists.json").then(data => {
    Object.assign(artistData,data);
    hindiArtists = Object.keys(data);
    artistNames.push(...hindiArtists);
  })
  loadInfo("/JSON/englishArtists.json").then(data => {
    Object.assign(artistData,data);
    englishArtists = Object.keys(data);
    artistNames.push(...englishArtists);
  })
  loadInfo("/JSON/punjabiArtists.json").then(data => {
    Object.assign(artistData,data);
    punjabiArtists = Object.keys(data);
    artistNames.push(...punjabiArtists);
  })
  loadInfo("/JSON/phonkArtists.json").then(data => {
    Object.assign(artistData,data);
    phonkArtists = Object.keys(data);
    artistNames.push(...phonkArtists);
  })
  loadInfo("/JSON/spanishArtists.json").then(data => {
    Object.assign(artistData,data);
    spanishArtists = Object.keys(data);
    artistNames.push(...spanishArtists);
  })
  return loadInfo("/JSON/tunesArtists.json").then(data => {
    Object.assign(artistData,data);
    tunesArtists = Object.keys(data);
    artistNames.push(...tunesArtists);
  }).then(() => {
  });
}

function fetchUsersInfo() {
  return loadInfo("/JSON/UserFile.json").then(response => {
    data = response;
    usersList = Object.keys(data);
  });
}

function fetchUserData(userGivenName) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      userData = data[userGivenName];
      userName = userData.profileName;
      profilePicImage = userData.profilePic;
      accountPassword = userData.password;
      themeColorPref = userData.themeColor;
      favouriteSongList = userData.favouriteSongList;
      recentlyPlayedSongList = userData.recentlyPlayedSongList;
      searchedTextList = userData.searchedTextList;
      searchedSongList = userData.searchedSongList;
      likedSongList = userData.likedSongList;
      playlistList  = userData.playlistList;
      notificationsList = userData.notificationsList;
      localStorage.setItem("username", userGivenName);
      localStorage.setItem("password", accountPassword);
      signedIn = true;
      showInfo();
      loadPlaylists();
      loadRecentlyPlayedSongs();
      loadSearchHistory();
      loadNotifications();
      resolve();
      setHistoryPref(userData.allowPref);
      f_changeThemeColor(userData.themeColor);
      },1000)
  });
}

function sendNotification(receiver,title,content) {
  data[receiver].notificationsList.unshift({
    "title": title,
    "date": `${genDate()}`,
    "time":`${genTime()}`,
    "content": content
  })
}

function genDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function genTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

attend();