//#region helper functions
/**
 * Creates a playlist button
 * @param {Object} playlist 
 * @returns {HTMLButtonElement} 
 */
function createPlaylist(playlist) {
  // playlist
  const playlistBtn = createElement("button", { className: "playlist-btn" });

  // playlists' info
  const playlistInfo = createElement("div", { className: "playlist-btn-info-div" });
  playlistBtn.appendChild(playlistInfo);
  playlistInfo.addEventListener("click", () => openPlaylist(playlist));

  // Image of playlist
  const playlistPic = createElement("p", { className: "playlist-btn-pic" });
  playlistInfo.appendChild(playlistPic);

  if (playlist.image.length > 0) {
    playlistPic.style.backgroundImage = `url(${playlist.image})`;
  } else {
    // icon if image is not available
    playlistPic.appendChild(createElement("i", { className: "ph-bold ph-music" }));
  }

  // about the playlist
  const aboutPlaylistDiv = createElement("div", { className: "playlist-btn-about-div" });
  playlistInfo.appendChild(aboutPlaylistDiv);

  // name of playlist
  aboutPlaylistDiv.appendChild(createElement("p", { className: "playlist-btn-name", textContent: playlist.name }));

  // privacy and number of songs in the playlist
  aboutPlaylistDiv.appendChild(createElement("p", { className: "playlist-btn-about", textContent: `${playlist.privacy} | ${playlist.songs.length} songs` }));

  // options button for playlist
  const bnOptions = createElement("button", { className: "playlist-options-btn", onclick: null }, [ createElement("i", { className: "ph-bold ph-dots-three-vertical" }) ]);
  playlistBtn.appendChild(bnOptions);
  bnOptions.addEventListener("click", () => { playlistInFocus = playlist; showPlaylistOptions(); });

  return playlistBtn;
}
//#endregion helper functions

//CREATING ELEMENTS

const libraryPanelContent = createElement("div", { className: "content-fill" });
libraryPanel.appendChild(libraryPanelContent);

const libraryPanel_header = createElement("div", { className: "panel-header" });
libraryPanelContent.appendChild(libraryPanel_header);

libraryPanel_header.appendChild(createElement("p", { className: "library-title", textContent: "My Playlists" }));

libraryPanel_header.appendChild(createElement("button", { id: "add-playlist", className: "toggle", onclick: showAddPlaylistPanel }, [ createElement("i", { className: "ph-bold ph-plus" }) ]));

const libraryPanel_content = createElement("div", { className: "content" });
libraryPanelContent.appendChild(libraryPanel_content);

const libraryContentText = createElement("p", { className: "div-text", textContent: "LOGIN TO SEE YOUR PLAYLISTS" });
libraryPanel_content.appendChild(libraryContentText);

//VARIABLES
let playlistInFocus = null;

//FUNCTIONS
function loadPlaylists() {
  clearContainer(libraryPanel_content);

  if (!signedIn) {
    libraryContentText.textContent = "Login to see or create your playlists.";
    libraryPanel_content.appendChild(libraryContentText);
    return;
  }

  if (currentUser.playlistList.length < 1) {
    libraryContentText.textContent = "You don't have any playlists yet.";
    libraryPanel_content.appendChild(libraryContentText);
  }

  for (let i of currentUser.playlistList) {
    libraryPanel_content.appendChild(createPlaylist(i));
  }
}

//#region playlist panel
const playlistPanel = createElement("div", { className: "playlist-panel content-fill" });

const playlistPanel_header = createElement("div", { className: "top-bar" });
playlistPanel.appendChild(playlistPanel_header);

const bnBackPlaylistPanel = createElement("button");
playlistPanel_header.appendChild(createElement("button", { className: "back-btn toggle", onclick: f_backPlaylistPanel }, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));

const playlistPanel_content = createElement("div", { className: "playlist-panel-content" });
playlistPanel.appendChild(playlistPanel_content);

const playlistPanelSongDivP = createElement("p", { className: "div-text" });

/**
 * Creates a window for playlist
 * @param {object} playlist 
 */
function openPlaylist(playlist) {
  clearContainer(playlistPanel_content);

  // Area to show playlist name and image
  const playlistInfoPanel = createElement("div", { className: "playlist-info-panel" });
  playlistPanel_content.appendChild(playlistInfoPanel);

  // Playlist image
  const playlistPanelImage = createElement("p", { className: "playlist-panel-image", textContent: "" });
  playlistInfoPanel.appendChild(playlistPanelImage);
  playlistPanelImage.style.backgroundImage = `url(${playlist.image})`;

  // Area to show playlist details
  const playlistInfoPanelDetails = createElement("div", { className: "playlist-info-panel-details" });
  playlistInfoPanel.appendChild(playlistInfoPanelDetails);

  // Playlist Name
  playlistInfoPanelDetails.appendChild(createElement("p", { className: "playlist-panel-title", textContent: playlist.name }));
  playlistInfoPanelDetails.appendChild(createElement("p", { className: "playlist-panel-info", textContent: `${playlist.privacy}` }));
  playlistInfoPanelDetails.appendChild(createElement("p", { className: "playlist-panel-info", textContent: `${playlist.songs.length} songs` }));

  // Playlist Actions
  playlistInfoPanelDetails.appendChild(createElement("button", { id: "edit-playlist", className: "edit-btn", onclick: null }, [ createElement("i", { className: "ph-fill ph-pencil" }), createElement("p", { textContent: "Edit" }) ]));

  // Area for songs in the playlist
  const playlistPanelSongDiv = createElement("div", { className: "playlist-panel-song-div" });
  playlistPanel_content.appendChild(playlistPanelSongDiv);

  if (playlist.songs.length > 0) {
    for (let sng of playlist.songs) {
      playlistPanelSongDiv.appendChild(
        createSongBtn(sng, songData[sng].name, songData[sng].artist, songData[sng].image, "rectangle")
      );
    }
  } else {
    playlistPanelSongDivP.textContent = "THE PLAYLIST IS EMPTY";
    libraryPanel_content.appendChild(playlistPanelSongDivP);
  }

  openSubPanel(libraryPanel, libraryPanelContent, playlistPanel);
}

function f_backPlaylistPanel() {
  openSubPanel(libraryPanel, playlistPanel, libraryPanelContent);
}
//#endregion playlist panel

//#region add form

//#region functions

let privacy = "private";

function showAddPlaylistPanel() {
  if (!signedIn) { alert("Login to your account first!"); return; }

  libraryPanel.appendChild(addPlaylistPanel);
  addPlaylistPanel.style.animation = "appear 0.3s ease-in-out";
}

function hideAddPlaylistPanel() {
  if (!libraryPanel.contains(addPlaylistPanel)) return;

  addPlaylistPanel.style.animation = "disappear 0.3s ease-in-out";
  addPlaylistPanel.addEventListener("animationend", () => {
    libraryPanel.removeChild(addPlaylistPanel);
  }, { once: true });
  clearInputFields(addPlaylistPanel);
}

function f_confirmAddPlaylist() {
  let nameOfPlaylist = playlistNameInput.value;
  let imageOfPlaylist = playlistImageInput.value;

  if (nameOfPlaylist.trim().length < 1) { alert("Playlist name cannot be empty!") }
  else {
    currentUser.playlistList.push({
      name: nameOfPlaylist,
      privacy: privacy,
      image: imageOfPlaylist,
      songs: [],
    });
    bnConfirmAddPlaylistCon.style.display = "flex";
    currentUser.sync().then(() => {
      hideAddPlaylistPanel();
      loadPlaylists();
      bnConfirmAddPlaylistCon.style.display = "none";
    });
  }
}

//#endregion functions

const addPlaylistPanel = createElement("div", { className: "add-playlist-panel" });
addPlaylistPanel.addEventListener("animationend", () => { addPlaylistPanel.style.animation = "none" });

const addPlaylistForm = createElement("div", { className: "add-playlist-form" });
addPlaylistPanel.appendChild(addPlaylistForm);

const playlistNameInput = createElement("input", { type: "text", placeholder: "Name" });
addPlaylistForm.appendChild(createElement("div", { className: "playlist-form-input-div" }, [ createElement("i", { className: "ph-bold ph-music-notes-simple" }), playlistNameInput ]));

const playlistImageInput = createElement("input", { type: "text", placeholder: "Image Link" });
addPlaylistForm.appendChild(createElement("div", { className: "playlist-form-input-div" }, [ createElement("i", { className: "ph-bold ph-link" }), playlistImageInput ]));

const addPlaylistBtnDiv = createElement("div", { className: "playlist-form-btn-div" });
addPlaylistPanel.appendChild(addPlaylistBtnDiv);

const bnCancelAddPlaylist = createElement("button", { className: "playlist-form-btn cancel", onclick: hideAddPlaylistPanel }, [ createElement("p", { textContent: "cancel" }) ]);
addPlaylistBtnDiv.appendChild(bnCancelAddPlaylist);

const bnConfirmAddPlaylist = createElement("button", { className: "playlist-form-btn", onclick: f_confirmAddPlaylist }, [ createElement("p", { textContent: "Create" }) ]);
addPlaylistBtnDiv.appendChild(bnConfirmAddPlaylist);

const bnConfirmAddPlaylistCon = createElement("div", { className: "playlist-btn-loader" });
bnConfirmAddPlaylistCon.appendChild(createElement("i", { className: "ph-bold ph-circle-notch" }));
bnConfirmAddPlaylist.appendChild(bnConfirmAddPlaylistCon);

//#endregion add form

//#region modify playlist

//#region functions
function showPlaylistOptions() {
  if (libraryPanel.contains(optionPanel)) return;

  libraryPanel.appendChild(optionPanel);
  optionPanel.style.animation = "appear 0.3s ease-in-out";
  optionPanel.addEventListener("animationend", () => {
    optionPanel.style.animation = "none";
  },
    { once: true }
  );
}

function hidePlaylistOptions() {
  if (!libraryPanel.contains(optionPanel)) return;

  optionPanel.style.animation = "disappear 0.3s ease-in";
  optionPanel.addEventListener("animationend", () => {
    optionPanel.style.animation = "none";
    libraryPanel.removeChild(optionPanel);
  }, { once: true }
  );
}

//#region rename playlist
function showRenamePlaylistPanel() { }

function hideRenamePlaylistPanel() { }

function renamePlaylist() { }
//#endregion rename playlist

//#region delete playlist
let confirmDelPlaylistPanel;

function showDeletePlaylistPanel() {
  hidePlaylistOptions();
  if (libraryPanel_content.contains(confirmDelPlaylistPanel)) return;

  confirmDelPlaylistPanel = createConfirmationPanel(
    "Delete playlist?",
    `Are you sure you want to delete "${playlistInFocus.name}"`,
    "Delete",
    () => { deletePlaylist(playlistInFocus) },
    hideDeletePlaylistPanel 
  );
  confirmDelPlaylistPanel.addEventListener("animationend", () => { confirmDelPlaylistPanel.style.animation = "none" });
  libraryPanel_content.appendChild(confirmDelPlaylistPanel);
  confirmDelPlaylistPanel.style.animation = "appear 0.3s ease-in-out";
}

function hideDeletePlaylistPanel() {
  if (!libraryPanel_content.contains(confirmDelPlaylistPanel)) return;

  confirmDelPlaylistPanel.style.animation = "disappear 0.3s ease-in-out";
  confirmDelPlaylistPanel.addEventListener("animationend", () => {
    libraryPanel_content.removeChild(confirmDelPlaylistPanel);
  }, { once: true });
}

function deletePlaylist(playlist) {
  currentUser.playlistList.splice(currentUser.playlistList.indexOf(playlist), 1);
  currentUser.sync();
  loadPlaylists();
  hideDeletePlaylistPanel();
}

//#region delete playlist

//#endregion functions

const optionPanel = createElement("div", { className: "option-panel" });

optionPanel.appendChild(createElement("button", { className: "option-panel-btn .cancel", onclick: hidePlaylistOptions }, [ createElement("i", { className: "ph-bold ph-x" }) ]));

optionPanel.appendChild(createElement("button", { className: "option-panel-btn", onclick: showRenamePlaylistPanel }, [ createElement("i", { className: "ph-bold ph-note-pencil" }), createElement("p", { textContent: "Rename" }) ]));

optionPanel.appendChild(createElement("button", { className: "option-panel-btn", onclick: showDeletePlaylistPanel }, [ createElement("i", { className: "ph-bold ph-trash" }), createElement("p", { textContent: "Delete" }) ]));
//#endregion modify playlist

