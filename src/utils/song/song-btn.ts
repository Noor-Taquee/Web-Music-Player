import { createElement } from "../create-dom.js";
import type { SongInfo } from "../../core/song.js";
import { setsSong } from "../../core/player.js";

export function createSongBtn(
  songs: SongInfo,
  className: "square" | "rectangle" = "rectangle",
) {
  const songBtn = createElement("button", {
    name: songs.songName,
    className: `suggested-song ${className}`,
    onclick: () => setsSong(songs),
  });

  /** album art or icon as a picture */
  const pic = createElement("p", {
    className: `suggested-song-image ${className}`,
  });
  if (songs.albumArtPath.length > 0) {
    pic.style.backgroundImage = `url(${songs.albumArtPath})`;
  } else {
    const songIcon = createElement("i", { className: "ph-bold ph-music-note" });
    pic.appendChild(songIcon);
  }

  /** div for info and options button */
  const sdiv = createElement("div", {
    className: `suggested-song-info-outer-div ${className}`,
  });

  /** Song name and artists div */
  const aboutSongDiv = createElement("div", {
    className: `suggested-song-about-div ${className}`,
  });

  const songTitle = createElement("p", {
    className: `suggested-song-name ${className}`,
    textContent: songs.songName,
  });

  const artistNames = createElement("p", {
    className: `suggested-song-artist ${className}`,
  });
  const artistSpans: HTMLSpanElement[] = [];
  songs.artistName.forEach((artist, index) => {
    const artistP = createElement("span", {
      textContent: artist,
    });
    artistSpans.push(artistP);
    if (index == 0) return;
    const comma = createElement("span", {
      textContent: ", ",
    });
    artistSpans.push(comma);
  });
  artistNames.append(...artistSpans);

  aboutSongDiv.append(songTitle, artistNames);

  // options button
  const Optionsbtn = createElement(
    "button",
    {
      className: `suggested-song-options-button ${className}`,
      onclick: null,
    },
    [createElement("i", { className: "ph-bold ph-dots-three-vertical" })],
  );
  sdiv.append(aboutSongDiv, Optionsbtn);

  songBtn.append(pic, sdiv);
  return songBtn;
}
