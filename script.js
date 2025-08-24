//UNIVERSAL ELEMENTS==========================
let main = document.getElementById("mainBody");
let blurLayer = document.getElementById("blurLayer");
let switchDiv = document.getElementById("switchDiv");
let bnHomePanel = document.getElementById("bnHomePanel");
let bnPlayerPanel = document.getElementById("bnPlayerPanel");
let bnSearchPanel = document.getElementById("bnSearchPanel");
let bnLibraryPanel = document.getElementById("bnLibraryPanel");
let bnAccountPanel = document.getElementById("bnAccountPanel");


//SONG====================================
let song = document.getElementById("song");

let musicPlaying = false;
let currentSongIndex = 0;
let artList  = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6vlYHpmk5TiFilEwnBrTswfCgk-57n6UAiWzrtPRz7g2Nk1S4oRTxZ4&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2oNEeUrJkjcsTDLxn9BmmDF4e7downloadIcondSW7cZUalpfE1zPjv7p_h-8Ehac&s=10",
"https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/c9/1e/f5c91ed4-f870-7af2-331a-4bbf0b84c8d7/074843931654.png/2048x2048bb.jpg"];
let songList = ["NOVA MARE", "MI GENTE","MONTAGEM FAVELA"];
let artistList = ["SOMEONEreally", "SOMEONEelse","Person"];

song.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`;
main.style.backgroundImage = `url(${artList[currentSongIndex]})`;

function stopMusic() {
  song.pause();
  albumArt.style.transform = "scale(0.9)";
  bnPlay.replaceChild(playIcon,pauseIcon);
  bnPlay.removeEventListener("click", stopMusic);
  bnPlay.addEventListener("click", startMusic);
  musicPlaying = false;
}
function startMusic() {
  song.play();
  albumArt.style.transform = "scale(1)";
  bnPlay.removeChild(playIcon);
  bnPlay.appendChild(pauseIcon);
  bnPlay.removeEventListener("click", startMusic);
  bnPlay.addEventListener("click", stopMusic);
  musicPlaying = true;
}
function changeState() {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}
function changeSong(order) {
  if (order === "next") {
    if (currentSongIndex < songList.length - 1) {
      currentSongIndex++;
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutBehind";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animateNext() {
          albumArt.removeEventListener("animationend",animateNext);
          albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
          albumArt.style.animation = "fadeInAhead";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
      }
    }
  } else {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutAhead";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animatePrev() {
          albumArt.removeEventListener("animationend",animatePrev);
          albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
          albumArt.style.animation = "fadeInBehind";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
      }
    }
  }
  focusOn("picture");
  trackName.textContent = songList[currentSongIndex];
  artistName.textContent = artistList[currentSongIndex];
  main.style.backgroundImage = `url(${artList[currentSongIndex]})`;
}


//INPUT FUNCTIONS
function setVolumeTo(newVolume) {
  song.volume = newVolume;
};
function setTimeTo(newTime) {
  song.currentTime = newTime;
};




//PLAYERTAB==============================
//CREATING ELEMEMTS
let playerPanel = document.createElement("div");
playerPanel.id = "playerPanel";

let toggleDiv = document.createElement("div");
playerPanel.appendChild(toggleDiv);
toggleDiv.id = "toggleDiv";
let togglePic = document.createElement("button");
toggleDiv.appendChild(togglePic);
togglePic.id = "togglePic";
togglePic.textContent = "PICTURE";
let toggleLyr = document.createElement("button");
toggleDiv.appendChild(toggleLyr);
toggleLyr.id = "toggleLyr";
toggleLyr.textContent = "LYRICS";


let pictureDiv = document.createElement("div");
playerPanel.appendChild(pictureDiv);
pictureDiv.id = "pictureDiv";
let albumArt = document.createElement("p");
pictureDiv.appendChild(albumArt);
albumArt.id = "albumArt";
let lyricsDiv = document.createElement("div");
lyricsDiv.id = "lyricsDiv";
let lyrics = document.createElement("p");
lyricsDiv.appendChild(lyrics);
lyricsDiv.id = "lyrics";


let infoDiv = document.createElement("div");
playerPanel.appendChild(infoDiv);
infoDiv.id = "infoDiv";
let trackName = document.createElement("p");
infoDiv.appendChild(trackName);
trackName.id = "trackName";
let bnArtist = document.createElement("button");
infoDiv.appendChild(bnArtist);
bnArtist.id = "bnArtist";
let artistIcon = document.createElement("i");
bnArtist.appendChild(artistIcon);
artistIcon.className = "fa-solid fa-user";
let artistName = document.createElement("p");
bnArtist.appendChild(artistName);
artistName.id = "artistName";


let controlDiv = document.createElement("div");
playerPanel.appendChild(controlDiv);
controlDiv.id = "controlDiv";

let secondaryControls = document.createElement("div");
controlDiv.appendChild(secondaryControls);
secondaryControls.id = "secondaryControls";

let bnLike = document.createElement("button");
secondaryControls.appendChild(bnLike);
bnLike.id = "bnLike";
let likeIcon = document.createElement("i");
bnLike.appendChild(likeIcon);
likeIcon.className = "fa-regular fa-heart";
bnLike.append(likeIcon, document.createTextNode("LIKE"));

let bnFavourite = document.createElement("button");
secondaryControls.appendChild(bnFavourite);
bnFavourite.id = "bnFavourite";
let favouriteIcon = document.createElement("i");
bnFavourite.appendChild(favouriteIcon);
favouriteIcon.className = "fa-regular fa-star";
bnFavourite.append(favouriteIcon, document.createTextNode("FAVOURITE"));

let bnSave = document.createElement("button");
secondaryControls.appendChild(bnSave);
bnSave.id = "bnSave";
let saveIcon = document.createElement("i");
bnSave.appendChild(saveIcon);
saveIcon.className = "fa-regular fa-bookmark";
bnSave.append(saveIcon, document.createTextNode("SAVE"));

let bnShare = document.createElement("button");
secondaryControls.appendChild(bnShare);
bnShare.id = "bnShare";
let shareIcon = document.createElement("i");
bnShare.appendChild(shareIcon);
shareIcon.className = "fa-solid fa-share";
bnShare.append(shareIcon, document.createTextNode("SHARE"));

let bnDownload = document.createElement("button");
secondaryControls.appendChild(bnDownload);
bnDownload.id = "bnDownload";
let downloadIcon = document.createElement("i");
bnDownload.appendChild(downloadIcon);
downloadIcon.className = "fa-solid fa-download";
bnDownload.append(downloadIcon, document.createTextNode("DOWNLOAD"));

let bnAdd = document.createElement("button");
secondaryControls.appendChild(bnAdd);
bnAdd.id = "bnAdd";
let addIcon = document.createElement("i");
bnAdd.appendChild(addIcon);
addIcon.className = "fa-solid fa-add";
bnAdd.append(addIcon, document.createTextNode("PLAY NEXT"));

let bnMore = document.createElement("button");
secondaryControls.appendChild(bnMore);
bnMore.id = "bnMore";
let moreIcon = document.createElement("i");
bnMore.appendChild(moreIcon);
moreIcon.className = "fa-solid fa-ellipsis";
bnMore.append(moreIcon, document.createTextNode("MORE"));

let primaryControls = document.createElement("div");
controlDiv.appendChild(primaryControls);
primaryControls.id = "primaryControls";

let runtimeInfo = document.createElement("div");
primaryControls.appendChild(runtimeInfo);
runtimeInfo.id = "runtimeInfo";
let time1 = document.createElement("p");
runtimeInfo.appendChild(time1);
time1.id = "time1";
time1.textContent = "0:00";
let timeSlider = document.createElement("input");
runtimeInfo.appendChild(timeSlider);
timeSlider.id = "timeSlider";
timeSlider.type = "range";
timeSlider.min = "0";
timeSlider.max = "";
timeSlider.step = "0.001";
timeSlider.value = "0";
let time2 = document.createElement("p");
runtimeInfo.appendChild(time2);
time2.id = "time2";
time2.textContent = "0:00";

let playbackControls = document.createElement("div");
primaryControls.appendChild(playbackControls);
playbackControls.id = "playbackControls";
let bnPrev = document.createElement("button");
playbackControls.appendChild(bnPrev);
bnPrev.id = "bnPrev";
let prevIcon = document.createElement("i");
bnPrev.appendChild(prevIcon);
prevIcon.className = "fa-solid fa-backward-step";
let bnPlay = document.createElement("button");
playbackControls.appendChild(bnPlay);
bnPlay.id = "bnPlay";
let playIcon = document.createElement("i");
bnPlay.appendChild(playIcon);
playIcon.className = "fa-solid fa-play";
let pauseIcon = document.createElement("i");
pauseIcon.className = "fa-solid fa-pause";
let bnNext = document.createElement("button");
playbackControls.appendChild(bnNext);
bnNext.id = "bnNext";
let nextIcon = document.createElement("i");
bnNext.appendChild(nextIcon);
nextIcon.className = "fa-solid fa-forward-step";

let volumeDiv = document.createElement("div");
primaryControls.appendChild(volumeDiv);
volumeDiv.id = "volumeDiv";
let volumeLowIcon = document.createElement("i");
volumeDiv.appendChild(volumeLowIcon);
volumeLowIcon.className = "fa-solid fa-volume-low";
let volumeSlider = document.createElement("input");
volumeDiv.appendChild(volumeSlider);
volumeSlider.id = "volumeSlider";
volumeSlider.type = "range";
volumeSlider.min = "0";
volumeSlider.max = "1";
volumeSlider.step = "0.01";
volumeSlider.value = "0.4";
let volumeHighIcon = document.createElement("i");
volumeDiv.appendChild(volumeHighIcon);
volumeHighIcon.className = "fa-solid fa-volume-high";


//VARIABLES
let currentFocus = "picture";




//FUNCTIONS
function formatTime(seconds) {
  let min = Math.floor(seconds/60);
  let sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
function removeFocus() {
  toggleLyr.style.backgroundColor = "transparent";
  togglePic.style.backgroundColor = "transparent";
  toggleLyr.style.fontWeight = "300";
  togglePic.style.fontWeight = "300";
  currentFocus = "";
}


//BUTTON FUNCTIONS
function focusOn(part) {
  if (part == "picture") {
    if (currentFocus != "picture") {
      removeFocus();
      togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
      togglePic.style.fontWeight = "500";
      lyricsDiv.style.animationName = "disappear";
      lyricsDiv.style.animationDuration = "0.5s";
      lyricsDiv.addEventListener("animationend",function lTop() {
        lyricsDiv.removeEventListener("animationend",lTop);
        pictureDiv.removeChild(lyricsDiv);
        pictureDiv.appendChild(albumArt);
        albumArt.style.animationName = "appear";
        albumArt.style.animationDuration = "0.5s";
      });
    }
  } else {
    if (currentFocus != "lyrics") {
      removeFocus();
      toggleLyr.style.backgroundColor = "rgba(255,255,255,0.3)";
      toggleLyr.style.fontWeight = "500";
      albumArt.style.animationName = "disappear";
      albumArt.style.animationDuration = "0.5s";
      albumArt.addEventListener("animationend",function pTol() {
        albumArt.removeEventListener("animationend",pTol);
        pictureDiv.removeChild(albumArt);
        pictureDiv.appendChild(lyricsDiv);
        lyricsDiv.style.animationName = "appear";
        lyricsDiv.style.animationDuration = "0.5s";
      });
    }
  }
  currentFocus = part;
}
song.addEventListener("loadedmetadata",() => {
  timeSlider.max = song.duration;
  time2.textContent = formatTime(song.duration);
  time1.textContent = "0:00";
});
setInterval(() => {
  if (musicPlaying) {
    timeSlider.value = song.currentTime;
  }},10);
setInterval(() => {
  if (musicPlaying) {
    time1.textContent = formatTime(song.currentTime)
  }},1000);



bnNext.addEventListener("click",() => changeSong("next"));
bnPrev.addEventListener("click",() => changeSong("prev"));
bnPlay.addEventListener("click", changeState);
togglePic.addEventListener("click",() => focusOn("picture"));
toggleLyr.addEventListener("click",() => focusOn("lyrics"));
timeSlider.addEventListener("input" ,() => setTimeTo(timeSlider.value));
volumeSlider.addEventListener("input" ,() => setVolumeTo(volumeSlider.value));
volumeLowIcon.addEventListener("click",() => setVolumeTo(0))


//KEY BINDINGS
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    changeState();
  } else if (event.key === "ArrowRight") {
    changeSong("next");
  } else if (event.key === "ArrowLeft") {
    changeSong("prev");
  }
});



//INITIALIZATION
albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
trackName.textContent = songList[currentSongIndex];
artistName.textContent = artistList[currentSongIndex];
togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
togglePic.style.fontWeight = "500";




//HOMETAB=================================
//CREATING ELEMENTS
let homePanel = document.createElement("div");
homePanel.id = "homePanel";



//LIBRARYTAB===============================
//CREATING ELEMENTS
let libraryPanel = document.createElement("div");
libraryPanel.id = "libraryPanel";



//ACCOUNTTAB===============================
//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";




let currentTab = null;

function createScreen(defaultTab) {
  blurLayer.removeChild(switchDiv);
  blurLayer.appendChild(defaultTab);
  blurLayer.appendChild(switchDiv);
}
function switchTo(destination) {
  if (blurLayer.contains(homePanel)) {
    bnHomePanel.style.backgroundColor = "transparent";
    bnHomePanel.style.fontSize = "100%";
    bnHomePanel.style.fontWeight = "500";
    currentTab = homePanel;
  } else if (blurLayer.contains(playerPanel)) {
    bnPlayerPanel.style.backgroundColor = "transparent";
    bnPlayerPanel.style.fontSize = "100%";
    bnPlayerPanel.style.fontWeight = "500";
    currentTab = playerPanel;
  } else if (blurLayer.contains(searchPanel)) {
    bnSearchPanel.style.backgroundColor = "transparent";
    bnSearchPanel.style.fontSize = "100%";
    bnSearchPanel.style.fontWeight = "500";
    currentTab = searchPanel;
  } else if (blurLayer.contains(libraryPanel)) {
    bnLibraryPanel.style.backgroundColor = "transparent";
    bnLibraryPanel.style.fontSize = "100%";
    bnLibraryPanel.style.fontWeight = "500";
    currentTab = libraryPanel;
  } else if (blurLayer.contains(accountPanel)) {
    bnAccountPanel.style.backgroundColor = "transparent";
    bnAccountPanel.style.fontSize = "100%";
    bnAccountPanel.style.fontWeight = "500";
    currentTab = accountPanel;
  }
  if (destination == "homePanel") {
    blurLayer.replaceChild(homePanel,currentTab);
    bnHomePanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnHomePanel.style.fontSize = "120%";
    bnHomePanel.style.fontWeight = "700";
  } else if (destination == "playerPanel") {
    bnPlayerPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnPlayerPanel.style.fontSize = "120%";
    bnPlayerPanel.style.fontWeight = "700";
    blurLayer.replaceChild(playerPanel,currentTab);
  } else if (destination == "searchPanel") {
    bnSearchPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnSearchPanel.style.fontSize = "120%";
    bnSearchPanel.style.fontWeight = "700";
    blurLayer.replaceChild(searchPanel,currentTab);
  } else if (destination == "libraryPanel") {
    bnLibraryPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnLibraryPanel.style.fontSize = "120%";
    bnLibraryPanel.style.fontWeight = "700";
    blurLayer.replaceChild(libraryPanel,currentTab);
  } else {
    bnAccountPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnAccountPanel.style.fontSize = "120%";
    bnAccountPanel.style.fontWeight = "700";
    blurLayer.replaceChild(accountPanel,currentTab);
  }
}

createScreen(playerPanel);
bnHomePanel.addEventListener("click",() => switchTo("homePanel"));
bnPlayerPanel.addEventListener("click",() => switchTo("playerPanel"));
bnSearchPanel.addEventListener("click",() => switchTo("searchPanel"));
bnLibraryPanel.addEventListener("click",() => switchTo("libraryPanel"));
bnAccountPanel.addEventListener("click",() => switchTo("accountPanel"));
