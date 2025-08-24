//ELEMENT==========================
let song = document.getElementById("song");


let songList = [ "https://www.dropbox.com/scl/fi/t3pm0e0jpbycg53vx6p5t/Mi-Gente-PagalNew.Com.Se.mp3?rlkey=w83aus2efhqlxkr2oio1zilph&st=zooao9af&raw=1",
"https://www.dropbox.com/scl/fi/1z8g5y3x6q6j3y3x8m7n/Nova-Mare-PagalNew.Com.Se.mp3?rlkey=1v4y3z4b7gk1f4g5x2y5o6o9h&st=zooap5bf&raw=1",
"https://www.dropbox.com/scl/fi/8y1z6x7y8x7y8x7y8x7y/Montagem-Favela-PagalNew.Com.Se.mp3?rlkey=2y3z4b5c6d7e8f9g0h1i2j3k4l&st=zooaq1cf&raw=1"];

let albumArtList  = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2oNEeUrJkjcsTDLxn9BmmDF4e7i6dSW7cZUalpfE1zPjv7p_h-8Ehac&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2oNEeUrJkjcsTDLxn9BmmDF4e7downloadIcondSW7cZUalpfE1zPjv7p_h-8Ehac&s=10",
"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/c9/1e/f5c91ed4-f870-7af2-331a-4bbf0b84c8d7/074843931654.png/2048x2048bb.jpg"];

let trackNameList = ["MI GENTE", "NOVA MARE","MONTAGEM FAVELA"];

let artistNameList = ["J BALVIN,WILLY WILLIAM", "SOMEONEelse","Person"];


//VARIABLES========================
let currentSongIndex = 0;
let musicPlaying = false;
let coveredTime = 0;
let totalTime = 0;
let currentAlbumArt = `url(${albumArtList[currentSongIndex]})`;
let currentTrackName = trackNameList[currentSongIndex];
let currentArtistName = artistNameList[currentSongIndex];
song.src = songList[currentSongIndex];


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
  if (currentSongIndex < songList.length - 1) {
    currentSongIndex++;
    currentAlbumArt = `url(${albumArtList[currentSongIndex]})`;
    currentTrackName = trackNameList[currentSongIndex];
    currentArtistName = artistNameList[currentSongIndex];
    song.src = songList[currentSongIndex];
  } else {
    return false;
  }
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    currentAlbumArt = `url(${albumArtList[currentSongIndex]})`;
    currentTrackName = trackNameList[currentSongIndex];
    currentArtistName = artistNameList[currentSongIndex];
    song.src = songList[currentSongIndex];
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
  if (blurLayer.contains(playerPanel)) {
    initPlayer();
    main.style.backgroundImage = currentAlbumArt;
  }

});
