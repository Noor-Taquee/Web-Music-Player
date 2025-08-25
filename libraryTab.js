let playlistList = [
    {"name": "playlist 1","image":"","songNames": []},
    {"name": "playlist 2","image":"","songNames": []},
    {"name": "playlist 3","image":"","songNames": []},
    {"name": "playlist 4","image":"","songNames": []},
    {"name": "playlist 5","image":"","songNames": []},
    {"name": "playlist 6","image":"","songNames": []},
    {"name": "playlist 7","image":"","songNames": []},
    {"name": "playlist 8","image":"","songNames": []},
    {"name": "playlist 9","image":"","songNames": []},
    {"name": "playlist 10","image":"","songNames": []},
    {"name": "playlist 11","image":"","songNames": []},
    {"name": "playlist 12","image":"","songNames": []},
    {"name": "playlist 13","image":"","songNames": []},
    {"name": "playlist 14","image":"","songNames": []},
    {"name": "playlist 15","image":"","songNames": []},
];
let playlistNameList = [];

//CREATING ELEMENTS
let libraryPanel = document.createElement("div");
libraryPanel.id = "libraryPanel";

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
addPlaylistIcon = document.createElement("i");
bnAddPlaylist.appendChild(addPlaylistIcon);
addPlaylistIcon.className = "fa-solid fa-add";
let bnAddPlaylistP = document.createElement("p");
bnAddPlaylist.appendChild(bnAddPlaylistP);
bnAddPlaylistP.textContent = "ADD";

let libraryContent = document.createElement("div");
libraryPanel.appendChild(libraryContent);
libraryContent.id = "libraryContent";

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
  playlistPic.style.backgroundImage = `url(${playlist.image})`;

  let playlistName = document.createElement("p");
  playlistInfo.appendChild(playlistName);
  playlistName.id = "playlistName";
  playlistName.textContent = playlists.name;

  let bnOptions = document.createElement("button");
  playlist.appendChild(bnOptions);
  bnOptions.id = "bnOptions";
  bnOptions.addEventListener("click",() => f_options(playlist.name))

  let optionsIcon = document.createElement("i");
  bnOptions.appendChild(optionsIcon);
  optionsIcon.className = "fa-solid fa-ellipsis";
}

let optionPanel = document.createElement("div");
optionPanel.id = "optionPanel";

let bnCancel = document.createElement("button");
optionPanel.appendChild(bnCancel);
bnCancel.id = "bnCancel";
let cancelIcon = document.createElement("i");
bnCancel.appendChild(cancelIcon);
cancelIcon.className = "fa-solid fa-cancel";
let bnCancelP = document.createElement("p");
bnCancel.appendChild(bnCancelP);
bnCancelP.textContent = "CANCEL";

let bnRenamePlaylist = document.createElement("button");
optionPanel.appendChild(bnRenamePlaylist);
bnRenamePlaylist.id = "bnRenamePlaylist";
let deletePlaylistIcon = document.createElement("i");
bnRenamePlaylist.appendChild(deletePlaylistIcon);
deletePlaylistIcon.className = "fa-solid fa-pen";
let bnRenamePlaylistP = document.createElement("p");
bnRenamePlaylist.appendChild(bnRenamePlaylistP);
bnRenamePlaylistP.textContent = "RENAME";

let bnDelPlaylist = document.createElement("button");
optionPanel.appendChild(bnDelPlaylist);
bnDelPlaylist.id = "bnDelPlaylist";
let renamePlaylistIcon = document.createElement("i");
bnDelPlaylist.appendChild(renamePlaylistIcon);
renamePlaylistIcon.className = "fa-solid fa-trash";
let bnDelPlaylistP = document.createElement("p");
bnDelPlaylist.appendChild(bnDelPlaylistP);
bnDelPlaylistP.textContent = "DELETE";
playlist.appendChild(optionPanel);



//FUNCTIONS
function getPlaylistNames() {
  for (playlist of playlistList) {
    playlistNameList.push(playlist.name);
  }
}
function addPlaylist(nameOfPlaylist,imageOfPlaylist) {
  playlistList.push({
    "name":nameOfPlaylist,
    "image":imageOfPlaylist
  });
}
function renamePlaylist(newName,oldName) {
}

function f_options(nameOfPlaylist) {
    libraryContent.appendChild(optionPanel);
}

bnCancel.addEventListener("click",() => {
   libraryContent.removeChild(optionPanel);
});
