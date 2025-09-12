let data = null;
let userData = null;
let  usersList = [];

let userName = "";
let accountPassword = "";
let profilePicImage = "";
let favouriteSongList = [];
let searchedTextList = [];
let searchedSongList = [];
let recentlyPlayedSongList = [];
let playlistList = [];


let dropbox = new Dropbox.Dropbox({
    clientId: 't8wj3k9vzx9thyg',
    fetch: window.fetch.bind(window),
    refreshToken: 'tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL',
    clientSecret: 'il7htvq6cz94oqm'
});

function startBackend() {
  fetchUsersInfo().then(() => {
    fetchSongData().then(() => {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
    });
  })
}

function updateDataFile() {
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
  return loadInfo("/JSON/HindiSongs.json").then(data => {
    Object.assign(songData,data);
    HindiTitles = Object.keys(data);
    return loadInfo("/JSON/PunjabiSongs.json");
  }).then(data => {
    Object.assign(songData,data);
    PunjabiTitles = Object.keys(data);
    return loadInfo("/JSON/EnglishSongs.json");
  }).then(data => {
    Object.assign(songData,data);
    EnglishTitles = Object.keys(data);
    return loadInfo("/JSON/PhonkSongs.json");
  }).then(data => {
    Object.assign(songData,data);
    PhonkTitles = Object.keys(data);
    return loadInfo("/JSON/SpanishSongs.json");
  }).then(data => {
    Object.assign(songData,data);
    SpanishTitles = Object.keys(data);
    return loadInfo("/JSON/Tunes.json");
  }).then(data => {
    Object.assign(songData,data);
    TunesTitles = Object.keys(data);
  }).then(() => {
    titleNames.push(...HindiTitles);
    titleNames.push(...PunjabiTitles);
    titleNames.push(...EnglishTitles);
    titleNames.push(...PhonkTitles);
    titleNames.push(...SpanishTitles);
    titleNames.push(...TunesTitles);
    loadHomeSongs();
    updateSongInfo();
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
      volumeLevel = userData.volumeLevel;
      favouriteSongList = userData.favouriteSongList;
      recentlyPlayedSongList = userData.recentlyPlayedSongList;
      searchedTextList = userData.searchedTextList;
      searchedSongList = userData.searchedSongList;
      likedSongList = userData.likedSongList;
      playlistList  = userData.playlistList;
      signedIn = true;
      showInfo();
      loadPlaylists();
      loadRecentlyPlayedSongs();
      loadSearchHistory();
      resolve();
    },1000)
  });
}
attend();