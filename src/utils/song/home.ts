import { createElement } from "../create-dom.js";

export function createHomeTabSongDiv(
  headerText: string,
): [HTMLDivElement, HTMLDivElement] {
  const innerDiv = createElement("div", {
    className: "song-container-content",
  });

  const divHeader = createElement("p", {
    className: "song-container-header",
    textContent: headerText,
  });

  const div = createElement(
    "div",
    {
      className: "song-container-div",
    },
    [divHeader, innerDiv],
  );

  return [div, innerDiv];
}
