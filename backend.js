let dropbox = new Dropbox.Dropbox({
    clientId: 't8wj3k9vzx9thyg',
    fetch: window.fetch.bind(window),
    refreshToken: 'tx6ls_Ky8d8AAAAAAAAAAU7Tdtu3uwsD7jwGOUW91scfyH-19uhb3D9meNfK72nL',
    clientSecret: 'il7htvq6cz94oqm'
});

function startBackend() {
  fetchSongData();
  fetchUsersInfo();
}

function updateDataFile() {
  return dropbox.filesUpload({
    path: "/UserFile.json",
    contents: JSON.stringify(data),
    mode: {".tag":"overwrite"},
    autorename: false,
    mute: true
  });
}

function fetchSongData() {
  fetch("HindiSongs.json").then(response => response.json()).then(data => {
    let HindiSongs = data;
    Object.assign(songData,HindiSongs);
    HindiTitles = Object.keys(data);
    return fetch("PunjabiSongs.json");
  }).then(response => response.json()).then(data => {
    let PunjabiSongs = data;
    Object.assign(songData,PunjabiSongs);
    PunjabiTitles = Object.keys(data);
    return fetch("EnglishSongs.json");
  }).then(response => response.json()).then(data => {
    let EnglishSongs = data;
    Object.assign(songData,EnglishSongs);
    EnglishTitles = Object.keys(data);
    return fetch("PhonkSongs.json");
  }).then(response => response.json()).then(data => {
    let PhonkSongs = data;
    Object.assign(songData,PhonkSongs);
    PhonkTitles = Object.keys(data);
    return fetch("SpanishSongs.json");
  }).then(response => response.json()).then(data => {
    let SpanishSongs = data;
    Object.assign(songData,SpanishSongs);
    SpanishTitles = Object.keys(data);
    return fetch("Tunes.json");
  }).then(response => response.json()).then(data => {
    Tunes = data;
    Object.assign(songData,Tunes);
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
  dropbox.filesDownload({path:"/UserFile.json"}).then(response => response.result.fileBlob.text()).then(text => {
    data = JSON.parse(text);
  }).then(()=>{
    usersList = Object.keys(data);
  });
}

function fetchUserData(userGivenName) {
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
  signedIn = true;
}
attend();