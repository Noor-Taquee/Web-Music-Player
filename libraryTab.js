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
bnAddPlaylist.addEventListener("click",f_AddPlaylist);


let libraryContent = document.createElement("div");
libraryPanel.appendChild(libraryContent);
libraryContent.id = "libraryContent";
let libraryContentText = document.createElement("p");
libraryContent.appendChild(libraryContentText);
libraryContentText.id = "libraryContentText";
libraryContentText.textContent = "LOGIN TO SEE YOUR PLAYLISTS";

let optionPanel = document.createElement("div");
optionPanel.id = "optionPanel";

let bnCancel = document.createElement("button");
optionPanel.appendChild(bnCancel);
bnCancel.id = "bnCancel";
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
let bnConfirmDel = document.createElement("button");
delConfirmButtonsDiv.appendChild(bnConfirmDel);
bnConfirmDel.id = "bnConfirmDel";
bnConfirmDel.textContent = "DELETE";




//VARIABLES
let playlistInFocus = null;



//FUNCTIONS
function loadPlaylists() {
  clearContainer(libraryContent);
  if (signedIn) {
    if (playlistList.length > 0) {
      for (let playlists of playlistList) {
        let playlist = document.createElement("div");
        libraryContent.appendChild(playlist);
        playlist.id = "playlist";
        let playlistInfo = document.createElement("div");
        playlist.appendChild(playlistInfo);
        playlistInfo.id = "playlistInfo";
        let playlistPic = document.createElement("p");
        playlistInfo.appendChild(playlistPic);
        playlistPic.id = "playlistPic";
        let playlistIcon = document.createElement("span");
        playlistIcon.className = "material-symbols-rounded";
        playlistIcon.textContent = "queue_music";
        if (playlists.image.length > 0) {
          playlistPic.style.backgroundImage = `url(${playlists.image})`;
        } else {
          playlistPic.appendChild(playlistIcon);
        }
        let playlistName = document.createElement("p");
        playlistInfo.appendChild(playlistName);
        playlistName.id = "playlistName";
        playlistName.textContent = playlists.name;
        let bnOptions = document.createElement("button");
        playlist.appendChild(bnOptions);
        bnOptions.id = "bnOptions";
        bnOptions.addEventListener("click",() => f_options(playlist.name));
        let optionsIcon = document.createElement("span");
        bnOptions.appendChild(optionsIcon);
        optionsIcon.className = "material-symbols-rounded";
        optionsIcon.textContent = "more_vert";
      }
    } else {
      libraryContent.textContent = "YOU DON'T HAVE ANY PLAYLIST";
    }
  } else {
    libraryContent.appendChild(libraryContentText);
  }
  let libraryPanelSpace = document.createElement("div");
  libraryContent.appendChild(libraryPanelSpace);
  libraryPanelSpace.id = "libraryPanelSpace";
}

function getPlaylistNames() {
  for (playlist of playlistList) {
    playlistNameList.push(playlist.name);
  }
}

function f_AddPlaylist() {
  if (signedIn) {
  } else {
    alert("Login to your account first!");
  }
}

function addPlaylist(nameOfPlaylist,privacy,imageOfPlaylist) {
  playlistList.push({
    "name":nameOfPlaylist,
    "privacy":privacy,
    "image":imageOfPlaylist
  });
}

function renamePlaylist(newName,oldName) {
}

function f_options(nameOfPlaylist) {
  playlistInFocus = nameOfPlaylist;
  libraryContent.appendChild(optionPanel);
  optionPanel.style.animation = "appear";
  optionPanel.style.animationDuration = "0.5s";
  optionPanel.addEventListener("animationend", function optionPanelA() {
    optionPanel.removeEventListener("animationend", optionPanelA);
  });
}

bnCancel.addEventListener("click",() => {
  optionPanel.style.animation = "disappear";
  optionPanel.style.animationDuration = "0.5s";
  optionPanel.addEventListener("animationend", function optionPanelD() {
    optionPanel.removeEventListener("animationend", optionPanelD);
    libraryContent.removeChild(optionPanel);
  });
});
bnDelPlaylist.addEventListener("click",() => {
  libraryContent.appendChild(confirmPanelOuter);
  confirmPanelOuter.style.animation = "appear";
  confirmPanelOuter.style.animationDuration = "0.5s";
  confirmPanelOuter.addEventListener("animationend", function confirmPanelA() {
    confirmPanelOuter.removeEventListener("animationend", confirmPanelA);
  });
});
bnCancelDel.addEventListener("click",() => {
  confirmPanelOuter.style.animation = "disappear";
  confirmPanelOuter.style.animationDuration = "0.5s";
  confirmPanelOuter.addEventListener("animationend", function confirmPanelD() {
    confirmPanelOuter.removeEventListener("animationend", confirmPanelD);
    libraryContent.removeChild(confirmPanelOuter);
  });
});



attend();