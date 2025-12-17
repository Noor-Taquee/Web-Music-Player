function createPlaylist(playlist) {
  // playlist
  let playlistBtn = createButton(null, "playlist-btn", null, null);

  // playlists' info
  let playlistInfo = createDiv("playlist-btn-info-div");
  playlistBtn.appendChild(playlistInfo);
  playlistInfo.addEventListener("click", () => openPlaylist(playlist));

  // Image of playlist
  let playlistPic = createTextField("playlist-btn-pic", null);
  playlistInfo.appendChild(playlistPic);

  if (playlist.image.length > 0) {
    playlistPic.style.backgroundImage = `url(${playlist.image})`;
  } else {
    // icon if image is not available
    playlistPic.appendChild(createIcon("bold", "music"));
  }

  // about the playlist
  let aboutPlaylistDiv = createDiv("playlist-btn-about-div");
  playlistInfo.appendChild(aboutPlaylistDiv);

  // name of playlist
  aboutPlaylistDiv.appendChild(
    createTextField("playlist-btn-name", playlist.name)
  );

  // privacy and number of songs in the playlist
  aboutPlaylistDiv.appendChild(
    createTextField(
      "playlist-btn-about",
      `${playlist.privacy} | ${playlist.songs.length} songs`
    )
  );

  // options button for playlist
  let bnOptions = createButton(
    null,
    "playlist-options-btn",
    createIcon("bold", "dots-three-vertical"),
    null
  );
  playlistBtn.appendChild(bnOptions);
  bnOptions.addEventListener("click", () => {
    showPlaylistOptions(playlist);
  });

  return playlistBtn;
}

let playlistNameList = [];

//CREATING ELEMENTS
let libraryPanel = document.getElementById("library-panel");

let libraryHeader = createDiv("top-bar");
libraryPanel.appendChild(libraryHeader);

libraryHeader.appendChild(createTextField("library-title", "My Playlists"));

libraryHeader.appendChild(
  createButton(
    null,
    "add-playlist-btn",
    createIcon("bold", "plus"),
    "Add",
    f_AddPlaylist
  )
);

let libraryContent = createDiv("content");
libraryPanel.appendChild(libraryContent);
let libraryContentText = createTextField("text", "LOGIN TO SEE YOUR PLAYLISTS");
libraryContent.appendChild(libraryContentText);

//VARIABLES
let playlistInFocus = null;

//FUNCTIONS
function loadPlaylists() {
  clearContainer(libraryContent);
  if (signedIn) {
    if (playlistList.length > 0) {
      for (let i in playlistList) {
        libraryContent.appendChild(createPlaylist(playlistList[i]));
      }
    } else {
      libraryContentText.textContent = "You don't have any playlists yet.";
      libraryContent.appendChild(libraryContentText);
    }
  } else {
    libraryContentText.textContent = "Login to see or create your playlists.";
    libraryContent.appendChild(libraryContentText);
  }
}

let playlistPanel = createDiv("playlist-panel");
let playlistPanelHeader = createDiv("top-bar");
playlistPanel.appendChild(playlistPanelHeader);

let bnBackPlaylistPanel = document.createElement("button");
playlistPanelHeader.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    f_backPlaylistPanel
  )
);

let playlistPanelContent = createDiv("playlist-panel-content");
playlistPanel.appendChild(playlistPanelContent);

let playlistPanelSongDivP = createTextField("div-text", null);

function openPlaylist(playlist) {
  clearContainer(playlistPanelContent);

  // Area to show playlist name and image
  let playlistInfoPanel = createDiv("playlist-info-panel");
  playlistPanelContent.appendChild(playlistInfoPanel);

  // Playlist image
  let playlistPanelImage = createTextField("playlist-panel-image", "");
  playlistInfoPanel.appendChild(playlistPanelImage);
  playlistPanelImage.style.backgroundImage = `url(${playlist.image})`;

  // Playlist Name
  playlistInfoPanel.appendChild(
    createTextField("playlist-panel-title", playlist.name)
  );

  // Area for songs in the playlist
  let playlistPanelSongDiv = createDiv("playlist-panel-song-div");
  playlistPanelContent.appendChild(playlistPanelSongDiv);

  if (playlist.songs.length > 0) {
    for (let sng of playlist.songs) {
      playlistPanelSongDiv.appendChild(
        createSongBtn(sng, songData[sng].name, songData[sng].artist, songData[sng].image, "rectangle")
      );
    }
  } else {
    playlistPanelSongDivP.textContent = "THE PLAYLIST IS EMPTY";
    libraryContent.appendChild(playlistPanelSongDivP);
  }
  libraryPanel.replaceChild(playlistPanel, libraryContent);
  playlistPanel.style.animation = "slideLeft 0.3s ease-in-out";
  playlistPanel.addEventListener(
    "animationend",
    function playlistPanelSlideLeft() {
      playlistPanel.removeEventListener("animationend", playlistPanelSlideLeft);
    }
  );
  // history.pushState(f_backPlaylistPanel, "", playlist.name);
}

function f_backPlaylistPanel() {
  playlistPanel.style.animation = "slideRight 0.3s ease-in-out";
  playlistPanel.addEventListener(
    "animationend",
    function playlistPanelSlideRight() {
      playlistPanel.removeEventListener(
        "animationend",
        playlistPanelSlideRight
      );
      libraryPanel.replaceChild(libraryContent, playlistPanel);
    }
  );
}

// ADD PLAYLISTS===========================
let addPlaylistPanel = createDiv("add-playlist-panel");

let addPlaylistForm = createDiv("add-playlist-form");
addPlaylistPanel.appendChild(addPlaylistForm);

let playlistNameInput = createInput("text", "Name", null, null);
addPlaylistForm.appendChild(
  createInputDiv(
    "playlist-form-input-div",
    createIcon("bold", "music-notes-simple"),
    playlistNameInput
  )
);

let playlistImageInput = createInput("text", "Image Link", null, null);
addPlaylistForm.appendChild(
  createInputDiv(
    "playlist-form-input-div",
    createIcon("bold", "link"),
    playlistImageInput
  )
);

let addPlaylistBtnDiv = createDiv("playlist-form-btn-div");
addPlaylistPanel.appendChild(addPlaylistBtnDiv);

let bnCancelAddPlaylist = createButton(
  null,
  "playlist-form-btn cancel",
  null,
  "cancel",
  f_cancelAddPlaylist
);
addPlaylistBtnDiv.appendChild(bnCancelAddPlaylist);

let bnConfirmAddPlaylist = createButton(
  null,
  "playlist-form-btn",
  null,
  "Create",
  f_confirmAddPlaylist
);
addPlaylistBtnDiv.appendChild(bnConfirmAddPlaylist);
let bnConfirmAddPlaylistCon = createDiv("playlist-btn-loader");
bnConfirmAddPlaylistCon.appendChild(createIcon("bold", "circle-notch"));
bnConfirmAddPlaylist.appendChild(bnConfirmAddPlaylistCon);

let privacy = "private";

function f_AddPlaylistt() {
  showPlaylistOptions("any");
}

function f_AddPlaylist() {
  if (signedIn) {
    libraryPanel.appendChild(addPlaylistPanel);
    addPlaylistPanel.style.animation = "appear 0.3s ease-in-out";
    addPlaylistPanel.addEventListener(
      "animationend",
      () => {
        addPlaylistPanel.style.animation = "none";
      },
      { once: true }
    );
  } else {
    alert("Login to your account first!");
  }
}

function f_cancelAddPlaylist() {
  if (libraryPanel.contains(addPlaylistPanel)) {
    addPlaylistPanel.style.animation = "disappear 0.3s ease-in-out";
    addPlaylistPanel.addEventListener(
      "animationend",
      () => {
        addPlaylistPanel.style.animation = "none";
        libraryPanel.removeChild(addPlaylistPanel);
      },
      { once: true }
    );
    clearInputFieldsLP();
  }
}

function f_confirmAddPlaylist() {
  let nameOfPlaylist = playlistNameInput.value;
  let imageOfPlaylist = playlistImageInput.value;
  if (nameOfPlaylist.length < 1) {
    alert("Playlist name cannot be empty!");
  } else {
    userData.playlistList.push({
      name: nameOfPlaylist,
      privacy: privacy,
      image: imageOfPlaylist,
      songs: [],
    });
    bnConfirmAddPlaylistCon.style.display = "flex";
    updateDataFile().then(() => {
      f_cancelAddPlaylist();
      loadPlaylists();
      bnConfirmAddPlaylistCon.style.display = "none";
    });
  }
}

function clearInputFieldsLP() {
  playlistNameInput.value = "";
  playlistImageInput.value = "";
}

// MODIFY PLAYLISTS ===========================
let optionPanel = createDiv("option-panel");

let bnCancel = createButton(
  null,
  "option-panel-btn .cancel",
  createIcon("bold", "x"),
  null,
  hidePlaylistOptions
);
optionPanel.appendChild(bnCancel);
let bnRenamePlaylist = createButton(
  null,
  "option-panel-btn",
  createIcon("bold", "note-pencil"),
  "Rename",
  f_renamePlaylist
);
optionPanel.appendChild(bnRenamePlaylist);
let bnDelPlaylist = createButton(
  null,
  "option-panel-btn",
  createIcon("bold", "trash"),
  "Delete",
  f_delPlaylist
);
optionPanel.appendChild(bnDelPlaylist);

function showPlaylistOptions(selectedPlaylist) {
  playlistInFocus = selectedPlaylist;
  libraryPanel.appendChild(optionPanel);
  // history.pushState(f_cancel,"","./options");
  optionPanel.style.animation = "appear 0.3s ease-in-out";
  optionPanel.addEventListener(
    "animationend",
    () => {
      optionPanel.style.animation = "none";
    },
    { once: true }
  );
}

function hidePlaylistOptions() {
  if (libraryPanel.contains(optionPanel)) {
    optionPanel.style.animation = "disappear 0.3s ease-in-out";
    optionPanel.addEventListener(
      "animationend",
      () => {
        optionPanel.style.animation = "none";
        libraryPanel.removeChild(optionPanel);
      },
      { once: true }
    );
  }
}

function f_renamePlaylist() {}

let confirmDelPlaylistPanel;

function f_delPlaylist() {
  hidePlaylistOptions();
  confirmDelPlaylistPanel = createConfirmationPanel("Delete playlist?", `Are you sure you want to delete "${playlistInFocus.name}"`, "Delete", confirmDelPlaylist, f_cancelDelPlaylist);
  libraryContent.appendChild(confirmDelPlaylistPanel);
  // history.pushState(f_cancelDelPlaylist,"","./deletePlaylist");
  confirmDelPlaylistPanel.style.animation = "appear 0.3s ease-in-out";
  confirmDelPlaylistPanel.addEventListener("animationend", function confirmPanelA() {
    confirmDelPlaylistPanel.removeEventListener("animationend", confirmPanelA);
  });
}

function confirmDelPlaylist() {
  playlistList.splice(playlistList.indexOf(playlistInFocus), 1);
  loadPlaylists();
  f_cancelDelPlaylist();
  hidePlaylistOptions();
}

function f_cancelDelPlaylist() {
  confirmDelPlaylistPanel.style.animation = "disappear 0.3s ease-in-out";
  confirmDelPlaylistPanel.addEventListener("animationend", function confirmPanelD() {
    confirmDelPlaylistPanel.removeEventListener("animationend", confirmPanelD);
    libraryContent.removeChild(confirmDelPlaylistPanel);
  });
}

function f_confirmRenamePlaylist(newName, oldName) {}

attend();