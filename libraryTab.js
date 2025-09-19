let playlistNameList = [];

//CREATING ELEMENTS
let libraryPanel = document.createElement("div");
libraryPanel.id = "libraryPanel";
libraryPanel.className =  "libraryPanel_darkMode";

let libraryHeader = document.createElement("div");
libraryPanel.appendChild(libraryHeader);
libraryHeader.id = "libraryHeader";
let libraryTitle = document.createElement("p");
libraryHeader.appendChild(libraryTitle);
libraryTitle.id = "libraryTitle";
libraryTitle.textContent = "MY PLAYLISTS";

let bnAddPlaylist = document.createElement("button");
libraryHeader.appendChild(bnAddPlaylist);
bnAddPlaylist.id = "bnAddPlaylist";
bnAddPlaylist.addEventListener("click", f_AddPlaylist);
addPlaylistIcon = document.createElement("span");
bnAddPlaylist.appendChild(addPlaylistIcon);
addPlaylistIcon.className = "material-symbols-rounded";
addPlaylistIcon.textContent = "playlist_add";
let bnAddPlaylistP = document.createElement("p");
bnAddPlaylist.appendChild(bnAddPlaylistP);
bnAddPlaylistP.textContent = "ADD";


let libraryContent = document.createElement("div");
libraryPanel.appendChild(libraryContent);
libraryContent.id = "libraryContent";
let libraryContentText = document.createElement("p");
libraryContent.appendChild(libraryContentText);
libraryContentText.id = "libraryContentText";
libraryContentText.textContent = "LOGIN TO SEE YOUR PLAYLISTS";



//VARIABLES
let playlistInFocus = null;



//FUNCTIONS
function loadPlaylists() {
  clearContainer(libraryContent);
  if (signedIn) {
    if (playlistList.length > 0) {
      for (let i in playlistList) {
        // playlist
        let playlist = document.createElement("button");
        libraryContent.appendChild(playlist);
        playlist.id = "playlist";

        // playlists' info
        let playlistInfo = document.createElement("div");
        playlist.appendChild(playlistInfo);
        playlistInfo.id = "playlistInfo";
        playlistInfo.addEventListener("click",() => openPlaylist(playlistList[i]));
        // Image of playlist
        let playlistPic = document.createElement("p");
        playlistInfo.appendChild(playlistPic);
        playlistPic.id = "playlistPic";
        // icon if image is not available
        let playlistIcon = document.createElement("span");
        playlistIcon.className = "material-symbols-rounded";
        playlistIcon.textContent = "queue_music";
        if (playlistList[i].image.length > 0) {
          playlistPic.style.backgroundImage = `url(${playlistList[i].image})`;
        } else {
          playlistPic.appendChild(playlistIcon);
        }
        // about the playlist
        let aboutPlaylistDiv = document.createElement("div");
        playlistInfo.appendChild(aboutPlaylistDiv);
        aboutPlaylistDiv.id = "aboutPlaylistDiv";
        // name of playlist
        let playlistName = document.createElement("p");
        aboutPlaylistDiv.appendChild(playlistName);
        playlistName.id = "playlistName";
        playlistName.textContent = playlistList[i].name;
        // privacy and number of songs in the playlist
        let aboutPlaylistP = document.createElement("p");
        aboutPlaylistDiv.appendChild(aboutPlaylistP);
        aboutPlaylistP.id = "aboutPlaylistP";
        aboutPlaylistP.textContent = `${playlistList[i].privacy} | ${playlistList[i].songs.length} songs`;

        // options button for playlist
        let bnOptions = document.createElement("button");
        playlist.appendChild(bnOptions);
        bnOptions.id = "bnOptions";
        bnOptions.addEventListener("click",() => {
          f_options(playlistList[i]);
        });
        let optionsIcon = document.createElement("span");
        bnOptions.appendChild(optionsIcon);
        optionsIcon.className = "material-symbols-rounded";
        optionsIcon.textContent = "more_vert";
      }
    } else {
      libraryContentText.textContent = "YOU DON'T HAVE ANY PLAYLIST";
      libraryContent.appendChild(libraryContentText);
    }
  } else {
    libraryContentText.textContent = "LOGIN TO SEE YOUR PLAYLISTS";
    libraryContent.appendChild(libraryContentText);
  }
  let libraryPanelSpace = document.createElement("div");
  libraryContent.appendChild(libraryPanelSpace);
  libraryPanelSpace.id = "libraryPanelSpace";
}

let playlistPanel = document.createElement("div");
playlistPanel.id = "playlistPanel";
let playlistPanelHeader = document.createElement("div");
playlistPanel.appendChild(playlistPanelHeader);
playlistPanelHeader.id = "playlistPanelHeader";
let bnBackPlaylistPanel = document.createElement("button");
playlistPanelHeader.appendChild(bnBackPlaylistPanel);
bnBackPlaylistPanel.id = "bnBackPlaylistPanel";
bnBackPlaylistPanel.addEventListener("click", f_backPlaylistPanel);
let backPlaylistPanelIcon = document.createElement("span");
bnBackPlaylistPanel.appendChild(backPlaylistPanelIcon);
backPlaylistPanelIcon.className = "material-symbols-rounded";
backPlaylistPanelIcon.textContent = "arrow_back_ios_new";
let bnBackPlaylistPanelP = document.createElement("p");
bnBackPlaylistPanel.appendChild(bnBackPlaylistPanelP);
bnBackPlaylistPanelP.textContent = "BACK";

let playlistPanelContent = document.createElement("div");
playlistPanel.appendChild(playlistPanelContent);
playlistPanelContent.id = "playlistPanelContent";


function getPlaylistNames() {
  for (playlist of playlistList) {
    playlistNameList.push(playlist.name);
  }
}

function openPlaylist(playlist) {
  clearContainer(playlistPanelContent);

  // Area to show playlist name and image
  let playlistInfoPanel = document.createElement("div");
  playlistPanelContent.appendChild(playlistInfoPanel);
  playlistInfoPanel.id = "playlistInfoPanel";
  // Playlist image
  let playlistPanelImage = document.createElement("p");
  playlistInfoPanel.appendChild(playlistPanelImage);
  playlistPanelImage.id = "playlistPanelImage";
  playlistPanelImage.style.backgroundImage = `url(${playlist.image})`;
  // Playlist Name
  let playlistPanelTitle = document.createElement("p");
  playlistInfoPanel.appendChild(playlistPanelTitle);
  playlistPanelTitle.id = "playlistPanelTitle";
  playlistPanelTitle.textContent = playlist.name;

  // Area for songs in the playlist
  let playlistPanelSongDiv = document.createElement("div");
  playlistPanelContent.appendChild(playlistPanelSongDiv);
  playlistPanelSongDiv.id = "playlistPanelSongDiv";

  if (playlist.songs.length > 0) {
    for (let i in playlist.songs) {
      // song of playlist
      let playlistSong = document.createElement("button");
      playlistPanelSongDiv.appendChild(playlistSong);
      playlistSong.id = "playlistSong";

      // Area for song's info
      let playlistSongInfo = document.createElement("div");
      playlistSong.appendChild(playlistSongInfo);
      playlistSongInfo.id = "playlistSongInfo";
      playlistSongInfo.addEventListener("click",() => playSong(playlist.songs[i]));
      // Album art of song
      let playlistSongPic = document.createElement("p");
      playlistSongInfo.appendChild(playlistSongPic);
      playlistSongPic.id = "playlistSongPic";
      // Icon if picture is not available
      let playlistSongIcon = document.createElement("span");
      playlistSongIcon.className = "material-symbols-rounded";
      playlistSongIcon.textContent = "headphones";
      if (songData[playlist.songs[i]].image.length > 0) {
        playlistSongPic.style.backgroundImage = `url(${songData[playlist.songs[i]].image})`;
      } else {
        playlistSongPic.appendChild(playlistSongIcon);
      }
      // Name of song
      let playlistSongName = document.createElement("p");
      playlistSongInfo.appendChild(playlistSongName);
      playlistSongName.id = "playlistSongName";
      playlistSongName.textContent = songData[playlist.songs[i]].name;

      // Options for song
      let bnPlaylistSongOptions = document.createElement("button");
      playlistSong.appendChild(bnPlaylistSongOptions);
      bnPlaylistSongOptions.id = "bnOptions";
      bnPlaylistSongOptions.addEventListener("click",() => {});
      let playlistSongOptionsIcon = document.createElement("span");
      bnPlaylistSongOptions.appendChild(playlistSongOptionsIcon);
      playlistSongOptionsIcon.className = "material-symbols-rounded";
      playlistSongOptionsIcon.textContent = "more_vert";
    }
  } else {
    playlistPanelSongDivP.textContent = "THE PLAYLIST IS EMPTY";
    libraryContent.appendChild(playlistPanelSongDivP);
  }
  libraryPanel.replaceChild(playlistPanel, libraryContent);
  playlistPanel.style.animation = "slideLeft 0.3s ease-in-out";
  playlistPanel.addEventListener("animationend", function playlistPanelSlideLeft() {
    playlistPanel.removeEventListener("animationend", playlistPanelSlideLeft);
  });
  // history.pushState(f_backPlaylistPanel, "", playlist.name);
}

function f_backPlaylistPanel() {
  playlistPanel.style.animation = "slideRight 0.3s ease-in-out";
  playlistPanel.addEventListener("animationend", function playlistPanelSlideRight() {
    playlistPanel.removeEventListener("animationend", playlistPanelSlideRight);
    libraryPanel.replaceChild(libraryContent, playlistPanel);
  });
}


// ADD PLAYLISTS===========================
let addPlaylistPanel = document.createElement("div");
addPlaylistPanel.id = "addPlaylistPanel";

let addPlaylistForm = document.createElement("div");
addPlaylistPanel.appendChild(addPlaylistForm);
addPlaylistForm.id = "addPlaylistForm";
let playlistNameInput = document.createElement("input");
addPlaylistForm.appendChild(playlistNameInput);
playlistNameInput.id = "playlistNameInput";
playlistNameInput.type = "text";
playlistNameInput.placeholder = "Playlist Name";
let playlistImageInput = document.createElement("input");
addPlaylistForm.appendChild(playlistImageInput);
playlistImageInput.id = "playlistImageInput";
playlistImageInput.type = "text";
playlistImageInput.placeholder = "Playlist Image URL";
let privacyToggle = document.createElement("div");
addPlaylistForm.appendChild(privacyToggle);
privacyToggle.id = "privacyToggle";
let privateToggle = document.createElement("p");
privacyToggle.appendChild(privateToggle);
privateToggle.id = "privateToggle";
privateToggle.textContent = "Private";
let publicToggle = document.createElement("p");
privacyToggle.appendChild(publicToggle);
publicToggle.id = "publicToggle";
publicToggle.textContent = "Public";
let privacyToggleLayer = document.createElement("div");
privacyToggle.appendChild(privacyToggleLayer);
privacyToggleLayer.id = "privacyToggleLayer";

let addPlaylistBtnDiv = document.createElement("div");
addPlaylistPanel.appendChild(addPlaylistBtnDiv);
addPlaylistBtnDiv.id = "addPlaylistBtnDiv";

let bnCancelAddPlaylist = document.createElement("button");
addPlaylistBtnDiv.appendChild(bnCancelAddPlaylist);
bnCancelAddPlaylist.id = "bnCancelAddPlaylist";
let bnCancelAddPlaylistP = document.createElement("p");
bnCancelAddPlaylist.appendChild(bnCancelAddPlaylistP);
bnCancelAddPlaylistP.textContent = "CANCEL";
bnCancelAddPlaylist.addEventListener("click", f_cancelAddPlaylist);

let bnConfirmAddPlaylist = document.createElement("button");
addPlaylistBtnDiv.appendChild(bnConfirmAddPlaylist);
bnConfirmAddPlaylist.id = "bnConfirmAddPlaylist";
let bnConfirmAddPlaylistP = document.createElement("p");
bnConfirmAddPlaylist.appendChild(bnConfirmAddPlaylistP);
bnConfirmAddPlaylistP.textContent = "ADD";
bnConfirmAddPlaylist.addEventListener("click", f_confirmAddPlaylist);


let privacy = "public";


function f_AddPlaylist() {
  if (signedIn) {
    libraryPanel.appendChild(addPlaylistPanel);
    // history.pushState(f_cancelAddPlaylist,"","./addPlaylist");
    addPlaylistPanel.style.animation = "appear 0.3s ease-in-out";
    addPlaylistPanel.addEventListener("animationend", function addPlaylistPanelA() {
      addPlaylistPanel.removeEventListener("animationend", addPlaylistPanelA);
    });
  } else {
    alert("Login to your account first!");
  }
}

function f_cancelAddPlaylist() {
  addPlaylistPanel.style.animation = "disappear 0.3s ease-in-out";
  addPlaylistPanel.addEventListener("animationend", function addPlaylistPanelD() {
    addPlaylistPanel.removeEventListener("animationend", addPlaylistPanelD);
    libraryPanel.removeChild(addPlaylistPanel);
  });
  clearInputFieldsLP();
}

function f_confirmAddPlaylist() {
  let nameOfPlaylist = playlistNameInput.value;
  let imageOfPlaylist = playlistImageInput.value;
  if (nameOfPlaylist.length < 1) {
    alert("Playlist name cannot be empty!");
    return;
  } else {
    playlistList.push({
      "name": nameOfPlaylist,
      "privacy": privacy,
      "image": imageOfPlaylist,
      "songs": []
    });
    updateDataFile();
    loadPlaylists();
    f_cancelAddPlaylist();
  }
}

function clearInputFieldsLP() {
  playlistNameInput.value = "";
  playlistImageInput.value = "";
}


// MODIFY PLAYLISTS===========================
let optionPanel = document.createElement("div");
optionPanel.id = "optionPanel";

let bnCancel = document.createElement("button");
optionPanel.appendChild(bnCancel);
bnCancel.id = "bnCancel";
bnCancel.addEventListener("click", f_cancel);
let cancelIcon = document.createElement("span");
bnCancel.appendChild(cancelIcon);
cancelIcon.className = "material-symbols-rounded";
cancelIcon.textContent = "cancel";
let bnCancelP = document.createElement("p");
bnCancel.appendChild(bnCancelP);
bnCancelP.textContent = "CANCEL";

let bnRenamePlaylist = document.createElement("button");
optionPanel.appendChild(bnRenamePlaylist);
bnRenamePlaylist.id = "bnRenamePlaylist";
bnRenamePlaylist.addEventListener("click", f_renamePlaylist);
let renamePlaylistIcon = document.createElement("span");
bnRenamePlaylist.appendChild(renamePlaylistIcon);
renamePlaylistIcon.className = "material-symbols-rounded";
renamePlaylistIcon.textContent = "edit";
let bnRenamePlaylistP = document.createElement("p");
bnRenamePlaylist.appendChild(bnRenamePlaylistP);
bnRenamePlaylistP.textContent = "RENAME";

let bnDelPlaylist = document.createElement("button");
optionPanel.appendChild(bnDelPlaylist);
bnDelPlaylist.id = "bnDelPlaylist";
bnDelPlaylist.addEventListener("click", f_delPlaylist);
let delPlaylistIcon = document.createElement("span");
bnDelPlaylist.appendChild(delPlaylistIcon);
delPlaylistIcon.className = "material-symbols-rounded";
delPlaylistIcon.textContent = "delete";
let bnDelPlaylistP = document.createElement("p");
bnDelPlaylist.appendChild(bnDelPlaylistP);
bnDelPlaylistP.textContent = "DELETE";

let confirmPanelOuter = document.createElement("div");
confirmPanelOuter.id = "confirmPanelOuter";
let confirmPanel = document.createElement("div");
confirmPanelOuter.appendChild(confirmPanel);
confirmPanel.id = "confirmPanel";
let DelDisclaimerText = document.createElement("p");
confirmPanel.appendChild(DelDisclaimerText);
DelDisclaimerText.id = "DelDisclaimerText";
DelDisclaimerText.textContent = "Are you sure you want to delete this playlist?";

let delConfirmButtonsDiv = document.createElement("div");
confirmPanel.appendChild(delConfirmButtonsDiv);
delConfirmButtonsDiv.id = "delConfirmButtonsDiv";
let bnCancelDel = document.createElement("button");
delConfirmButtonsDiv.appendChild(bnCancelDel);
bnCancelDel.id = "bnCancelDel";
bnCancelDel.textContent = "CANCEL";
bnCancelDel.addEventListener("click", f_cancelDelPlaylist);
let bnConfirmDel = document.createElement("button");
delConfirmButtonsDiv.appendChild(bnConfirmDel);
bnConfirmDel.id = "bnConfirmDel";
bnConfirmDel.textContent = "DELETE";
bnConfirmDel.addEventListener("click", confirmDelPlaylist);


function f_options(selectedPlaylist) {
  playlistInFocus = selectedPlaylist;
  libraryPanel.appendChild(optionPanel);
  // history.pushState(f_cancel,"","./options");
  optionPanel.style.animation = "appear 0.3s ease-in-out";
  optionPanel.addEventListener("animationend", function optionPanelA() {
    optionPanel.removeEventListener("animationend", optionPanelA);
  });
}

function f_cancel() {
  optionPanel.style.animation = "disappear 0.3s ease-in-out";
  optionPanel.addEventListener("animationend", function optionPanelD() {
    optionPanel.removeEventListener("animationend", optionPanelD);
    libraryPanel.removeChild(optionPanel);
  });
}

function f_renamePlaylist() {}

function f_delPlaylist() {
  libraryContent.appendChild(confirmPanelOuter);
  // history.pushState(f_cancelDelPlaylist,"","./deletePlaylist");
  confirmPanelOuter.style.animation = "appear 0.3s ease-in-out";
  confirmPanelOuter.addEventListener("animationend", function confirmPanelA() {
    confirmPanelOuter.removeEventListener("animationend", confirmPanelA);
  });
};

function confirmDelPlaylist() {
  playlistList.splice(playlistList.indexOf(playlistInFocus),1);
  loadPlaylists();
  f_cancelDelPlaylist();
  f_cancel();
}

function f_cancelDelPlaylist() {
  confirmPanelOuter.style.animation = "disappear 0.3s ease-in-out";
  confirmPanelOuter.addEventListener("animationend", function confirmPanelD() {
    confirmPanelOuter.removeEventListener("animationend", confirmPanelD);
    libraryContent.removeChild(confirmPanelOuter);
  });
}

function f_confirmRenamePlaylist(newName,oldName) {
}


attend();