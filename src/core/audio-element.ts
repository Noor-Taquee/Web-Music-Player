import { createElement } from "../utils/create-dom.js";

export const audioElement = createElement("audio", {
  id: "main-audio",
  controls: false,
  preload: "metadata",
});

audioElement.style.display = "none";
