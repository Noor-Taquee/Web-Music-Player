let APIkey = "sl.u.AF_V5k58gNXm0On1UPaVYyc1IbQd7z2Rh_y2ddEnWt7rjdvKCEdTVTMojwn-YYMHUVfRESFy1vTz2ss9mvsJcZrmkbBPy2WI3Nm8mHU9ouNR2GlwyjgSRtUrXMR7BA5zxSxzEf1M2GTx0MmzN_ooLeWYzCC4kQPW13CbBxT9hZabXb8dKXQzOfCojII17aDvxhwO0ybO8ETwU5h1xA7QAJE-kQR-LsaL9_6rJMzlo-C6uZcuAQjRghVno5G7-l1uOHvz61R_Qu3mp7awB2pTyWQ3Lw6Apz5dV8NsU6AC4dmAmha5CvMmmgZDuy78n_uxegXlvyBb4Ye_k0cZ7deEAGpQ91oBCSDl9USDwdJw8y7VhX9Oz96b4BE76MzCCwtvfW6dEzW_HaOGzVSl08RQltyPtrRDzQCqPMNWyUP_HebEXvWkeJmxB0X-s7MEwwwDPBd6X6xS_ptY6J25lsz7KUb5LXeT9AKPP3EyaUqAr4ff7PApjT9JuoeC4tVBjcFW58q2kZyW-yqMGZ4lHtos1P4dlMz23x6wOFKvErokb_QhNSVxQh3dbnQaDd8fAb-AU9dAK70hJ4MyZBOrax_lKXHjO97xLA7u4sFbRo2ZzTVIJ_ZmjfRD56c5w1gAUWl-R88EhOAB6DN2L7PKiDtLmnUm9ZPrtd7H8T8wlkZ4uPi1bX7EWlf1swk_fwpt9SVnChZtG_wkuAnnxamlzto3luJhq7dkymY5WTkFNYCeKKfTT38Kub6Yh4qmXclHWen6zUXzw7E7DtWNAwh8qrRobFY80rUi2-Z56ocVq0XKyBar8ACkx888f50aI2JCb8HWvsJ7AjVl9AtIFWTtQBs4obJXIpJwjFLnqEf0p4xyZ6otFX6QV85cB_ai71jE8bnb9EbxX79sqWt8gOgxLzRFFTzFdn_40xJsYBfS8cl0zbDci0_HSl43vZLF3wvDiXkLWTEMAWjjsF1ivvw9BWdz1WHtKlG-lE_EDYK0VwNR43qT9ifBR4ku6PQFm8oB7H89LY6CKKdtkhxe-cFkBz8xVfjcu-MzgQUbhbcZmmQL3UuFDmtMwQSPXdDzMJZW8xzzr0c8_8M2W1tOY9hxw7hfr54bi2_xFb4lesIr14TACzLoxPbU-mxIme2iG0SibBn0BpT4foqf3ZGkQXGTEC4KhbhU-Q6b3--wyEn3rDu0bM7XtEbfgEM0Ol05KfxSA8MYVGn_jEFV3lJDgStZzIMgeZ98w3HWynEpjqo0d7H0exfqovfZq82kBd9QnZi7Pusk22EBSaz9zjnRNBH2noZdi0CQDDTYCaC-dqhAUKX3uItItlMTnV0sQiYUvfSwAQicLUEM7V6XRY4TzKIotu8yrJ7a-yjpfgDuYhYt3DufK474-B1N_WzKoRR-o1WzaBqB5zlNOX7ZOkCu-8i2v0E12DOA";
let drpbx = null;
function startBackend() {
  drpbx = new Dropbox.Dropbox({
      accessToken: APIkey,
      fetch: window.fetch.bind(window)
  });
  fetchSongData();
  fetchUsersInfo();
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
    updateSongInfo();
    loadHomeSongs();
    if (signedIn) {
      fetchUserData();
    }
  });
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
attend();