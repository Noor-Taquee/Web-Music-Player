//ELEMENT==========================
let song = document.getElementById("song");


//VARIABLES========================
let musicPlaying = false;
let songData = {};
let HindiTitles = null;
let PunjabiTitles = null;
let EnglishTitles = null;
let PhonkTitles = null;
let SpanishTitles = null;
let TunesTitles = null;
let titleNames = [];
let currentSongIndex = 0;
let currentSong = null;

let coveredTime = null;
let totalTime = null;
let currentAlbumArt = null;
let currentTrackName = null;
let currentArtistName = null;


function startFetching() {
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
    loadSearchHistory();
  });
}



function updateSongInfo() {
  currentSong = songData[titleNames[currentSongIndex]];
  currentAlbumArt = currentSong.image;
  currentTrackName = currentSong.name;
  currentArtistName = currentSong.artist;
  song.src = currentSong.audio;
  main.style.backgroundImage = `url(${currentAlbumArt})`;
}

function formatTime(seconds) {
  let min = Math.floor(seconds/60);
  let sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function startMusic() {
  song.play();
  musicPlaying = true;
}

function stopMusic() {
  song.pause();
  musicPlaying = false;
}

function nextSong() {
  if (currentSongIndex < titleNames.length - 1) {
    currentSongIndex++;
    updateSongInfo();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    return true;
  } else {
    return false;
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    updateSongInfo();
    main.style.backgroundImage = `url(${currentAlbumArt})`;
    return true;
  } else {
    return false;
  }
}

function setVolumeTo(newVolume) {
  song.volume = newVolume;
}
function setTimeTo(newTime) {
  song.currentTime = newTime;
  coveredTime = formatTime(song.currentTime);
}

song.addEventListener("loadedmetadata",() => {
  totalTime = formatTime(song.duration);
  initPlayer();
  initMiniPlayer();
});




attend();
