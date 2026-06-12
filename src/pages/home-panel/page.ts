import "./homeTab.css";

import type { SongInfo } from "../../core/song.js";
import { createElement } from "../../utils/create-dom.js";
import { createHomeTabSongDiv } from "../../utils/song/home.js";
import { createSongBtn } from "../../utils/song/song-btn.js";

export const homePanel = createElement("div", {
  id: "example-panel",
  className: "app-panel",
});

//#region panel Bar
const panelBar = createElement("div", {
  className: "panel-bar",
});

const panelNameDiv = createElement("div", {
  className: "panel-name-div",
});
const panelName = createElement("p", {
  className: "panel-name",
  textContent: "Music Player",
});
panelNameDiv.append(panelName);
panelBar.append(panelNameDiv);
//#endregion panel Bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

export type Language = "english" | "hindi" | "";

/**  */
export function loadHomeSongs(songList: SongInfo[], language: string) {
  const [divWrapper, songContainer] = createHomeTabSongDiv(language);
  contentDiv.append(divWrapper);

  let i = 0;
  const listLength = songList.length;
  while (true) {
    if (listLength - i >= 3) {
      songContainer.appendChild(
        createRsongContainer(songList[i]!, songList[i + 1], songList[i + 2]),
      );
      i += 3;
    } else {
      if (listLength - i == 2) {
        songContainer.appendChild(
          createRsongContainer(songList[i]!, songList[i + 1]),
        );
        break;
      } else {
        if (listLength - i == 1) {
          songContainer.appendChild(createRsongContainer(songList[i]!));
          break;
        } else {
          break;
        }
      }
    }
  }
  songContainer.classList.add("rectangle-song-outer-container");
}

function createRsongContainer(s1: SongInfo, s2?: SongInfo, s3?: SongInfo) {
  const div = createElement("div", { className: "rectangle-song-container" });

  div.appendChild(createSongBtn(s1, "rectangle"));

  if (s2) {
    div.appendChild(createSongBtn(s2, "rectangle"));
    if (s3) {
      div.appendChild(createSongBtn(s3, "rectangle"));
    }
  }

  return div;
}
contentDiv.append();
//#endregion content

homePanel.append(panelBar, contentDiv);
