import { createElement } from "../../utils/create-dom.js";

export const miniPlayer = createElement("div", {
  className: "mini-player",
  id: "mini-player",
});

const miniInfoDiv = createElement("div", {
  className: "mini-info-div",
});
miniPlayer.appendChild(miniInfoDiv);
// miniInfoDiv.addEventListener("click", expandToplayer);

// Album art
const miniAlbumArt = createElement("p", {
  className: "mini-album-art",
});
miniInfoDiv.appendChild(miniAlbumArt);

// If no album art, show icon
const miniPlayerSongIcon = createElement("i", {
  className: "ph-bold ph-headphones",
});

// Song playing info
const miniTrackInfoDiv = createElement("div", {
  className: "mini-track-info-div",
});
miniInfoDiv.appendChild(miniTrackInfoDiv);

// Track title and artist name
const miniTrackName = createElement("p", {
  className: "mini-track-name",
});
miniTrackInfoDiv.appendChild(miniTrackName);

const miniArtistName = createElement("p", {
  className: "mini-artist-name",
});
miniTrackInfoDiv.appendChild(miniArtistName);

// Playback controls for mini player
const miniPlaybackControlsDiv = createElement("div", {
  className: "mini-playback-controls-div",
});
miniPlayer.appendChild(miniPlaybackControlsDiv);

// skip back
const miniBnPrev = createElement(
  "button",
  {
    className: "mini-playback-control-btn",
    onclick: () => {
      changeSong("prev");
    },
  },
  [createElement("i", { className: "ph-fill ph-skip-back" })],
);
miniPlaybackControlsDiv.appendChild(miniBnPrev);

// play/pause
const miniPlaybackBtnIcon = createElement("i", {
  className: "ph-bold ph-spinner",
});
const miniBnPlay = createElement(
  "button",
  {
    id: "mini-play-btn",
    className: "mini-playback-control-btn do-spin",
  },
  [miniPlaybackBtnIcon],
);
miniPlaybackControlsDiv.appendChild(miniBnPlay);

// skip forward
const miniBnNext = createElement(
  "button",
  {
    className: "mini-playback-control-btn",
    onclick: () => {
      changeSong("next");
    },
  },
  [createElement("i", { className: "ph-fill ph-skip-forward" })],
);
miniPlaybackControlsDiv.appendChild(miniBnNext);

// FUNCTIONS ===========================
function initMiniPlayer() {
  miniAlbumArt.style.backgroundImage = `url(${currentAlbumArt})`;

  miniTrackName.textContent = currentTrackName;
  miniArtistName.textContent = currentArtistName;

  miniPlaybackBtnIcon.className = "ph-fill ph-play";
  miniBnPlay.classList.remove("do-spin");
  miniBnPlay.addEventListener("click", changeState);
}
