let APIkey = "sl.u.AF8nwfKUzRRaaqOsNFp-VZDiUwzePj_7D1fuTf_OzVE_mAFDwJwWErlJXdntfG0n-ZXYsj6bGLug4UcKDANGZq9XovJ2wgsF4BfbCdkgRKB69tSilNEvqxI2cYYMC5FiY4EN71fRToWCsW45ipldwHSEtQUCjXbF4zeQxfAL7JwDW-pHnFSqn3ouNloXFslV2ywgJRl_FozXLombq8uwzdS0ZfrHBdWMCjEdiuk0wiGlfFVYaUNp00_8gGNP3MLuDl0D5tyPupXO5yt5t04EK8fA5YaJ-LI0c7qp_7b92Rvh6EHF4Gnzbok5ZP0iqZnKkX1ZFlZDd57GLMO8_IrhijfmUZ9_X78lAll8eqlDRnnS7m_3OmbSjZt-m3-vYBxHQ-1L9JLmu7I8_cb2jwQlJGs9V1cgJrfMFdeAlzwXFgcisfECul4GklJ32VGTMAxu94N93iH-s2tJDdvyMofQoXBtodcQIcYjpU0KrFr1DGkwNb3ijYtSj_rl7QcLK9Seox6yP9QXFlRfFEIdGOw_wvHwZD2g0D3XwRl6KvBrhE-I5GDCdZMPVljVQ3luerEiJiMildx7gAtH5b4oXdOxLpcRN1y4-8A8CD85VcUhtjb9fCUc4DdBJC8HFUxXNsOUQItTSZCkkxP68K_O9szM1siRUAtAYg8WBV5OgBrlxacEib2W1AXce9zj7M5ZLwbbbMw7yZerngH-Z-PFXTP50bvuuw4s_wpvVboJhswUukK_rZZxVGiOkcmtx00zw-8dtFXK-_-Gze5JSj1ZcpPmkLgwjoeZd4t68ruhasFcS0biKLvP-hJPD1PmeemTwLzxkQd6v9wK0u6cXwrwrE91gdweCMHCEqiBt8X8Z7bBzOQrYmGVyt2HkO51z30feM0qWuQyyaOu5EXICHFVISGsBwNwfwH2cWCWDI9QWTcWabAOE0OcMU8KbDMP40F_T3Kjv6xokxdhH_pek-UarLCrizYxTkRZhWwa5XFFZJP7qAdpttwMBHWRqBepamffQccRTnhNJR4-kiW33BPxIJM1uwDiTw1JGtNZuS4xFrUhOEDQHtjCar14IVIeeDyxmaslcGz3rVhlG9vNI4BGigFj5ia4_t4eFbbRwLZcc6twtyPxIDpR4-KKVU8VQhsPUdfuSZ2dt4XXAi2NwtFUCeHftJzGlJfpzjMK_klEIUMRx3l1CDgfK0sKAxe_ArUTIW55TCoyC3tT4wD7ErogBpE3GfGkK8AgIJP-gJoMTDFBlnSyochcYP0egyrqL0jMHCGPOclGhspbXVHxBZ39F5ti0drbb2fOD6VOsHZSfed6bXjD0Ie5DhoPJDwxACZBCn7uGmGXqHZOPqHSlXVX01BmuYygJ8mRaHDtdOgCLZsTO5EFAvoZvGnk1rVRz8mf0-TWo5VkxPSfT0JaHCdczVt_VMdI";
let dropbox = null;

function startBackend() {
  dropbox = new Dropbox.Dropbox({
      accessToken: APIkey,
      fetch: window.fetch.bind(window)
  });
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