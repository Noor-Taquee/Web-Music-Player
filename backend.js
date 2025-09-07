let APIkey = "sl.u.AF97s0k6tHvGKhJ0blTc3rrEizlWD66P7BriZRHDo3mSUOydMNi8LV4FzKZotTOSpruQV90JIThvskDbyXfD1vxAhSAXt3UnzCj7HU2wLLLXExAwWZLc-LHosCDqbJiaJt2YW80zxb8ZTXXZLULbk8EnypLj8l4FeTwVXhhaTCHevbRXs7dB96HHY9BkYvxEzdQgwkhfLH8doEhzASeUEemk03UwaWg4fZeSotSCsz3bVHmCx41p-MopAE29B97-dJ9J0wJjmOBym-DvsERzz6Nl61V_mQ88n9U780HJ-aMx8YJ47_lzkDLTvZSLf7ZgwNF-QTMQMGJ0F7Q_W49IoKdd0PEhZl__-Pk1A2scdFeslZ507ffvsh7NhRgX34nnxF4naldgB3tBIO-6721pj0X1VeQ3xM_tl7hinmRTR6XBUI5bVlJDg_dS1m-zF7cxa-2Z55Cxag6iAJJGY1Fg9qko7TNCFTpe8jaw9w8xnNLr58cga_l5orX4OWLlzUYwtEcXlRp0OYd_Uq5573io3RphafRIWeGcbnXcDiav_qaFXkKVKuVorSVnLxbHw7AGmm5VGyWUEOqCKtxB0dgcbjljsa6SKZvk5_tZ461NOFIzVyXBtriyyeRJO-RXZ1DfdBYmUJsOFQlviDz_9yxIlnY8wSIbdxmHo6N0evBo5qMFffw67yhRtK09LGHRDFMArnOjd95hAa3wQo7fz2A_9CJ_g_1OHHiJkx2qzXtQH1VDMRwmY-SpgtLnZvoeYDK7Jd46pxGNZ-2NJybGl2AQGHetaEsNL_sQ2VZETSqpQnDb0yBJhv1qXTL0rc-8sKVBjeGSa6C78k0gLZKQWAneTtjFloYm9yNDD0BHzORirMhiqCF_uIGPFaEKH9jUCJ_vfCTJsw-S1ftK-KjwG9-1UvszGwviy_PGIrFtWe6DOvN2MiVigAn9ZgeWRxj2BVaWDqBbPqfPuZVp-nBizWUTrBBPf1PFIC1meCvMet8ApFupBzuA8b_yHiJFtY2uZ980n_-_hZ8NUsiW1TYnXLnqaeb_ByjIEIw73x8DeJ21SH9cMj07KQpxKmdT50dtwTL4jHP8ntLnu8oJcR8SzVjqc8iOkifnFYKOwSFI6HJg9NJ9FfxYnSwiG_H2OEDK3uoF2s1w5_e5ocpPH5mkU-cH3lRhLLyO93eL63O8Jq7J8CDiR5INXeQunWh8jJrHITDw0gilS3SnM2q6bdY8nIHXt3gzz5NKjSIYKPuZu2GWvipUkg8Y9WkZJSUuUwPu3vG3S8YgEoclhLGHpdbHC07KYg84hDWTwBkjbcILlTbiDr5nNygkj-v7S5sNie6nNPvlLT046Uud-6yNRfG-ZfZUA4LkZuSRKc_QLbJaaPxG8XsW2B_ZYrStJxST7eq3lMi5IM_51p-vxhqMv99Rp1G_ABs-";
// let APIkey = ;
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