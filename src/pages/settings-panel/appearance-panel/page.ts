import { createElement } from "../../../utils/create-dom.js";

export const apperancePanel = createElement("div", {
  className: "app-panel",
  id: "apperance-panel",
});

//#region bar
const panelBar = createElement("div");
//#endregion bar

//#region content
const contentDiv = createElement("div", {
  className: "content-div",
});

//#endregion content

apperancePanel.append(panelBar, contentDiv);
