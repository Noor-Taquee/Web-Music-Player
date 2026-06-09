import "./style.css";

import { createElement } from "../../utils/create-dom.js";

export const loaderPanel = createElement("div", {
  id: "loading-panel",
  className: "app-panel",
});

const loadingDiv = createElement("div", {});

const barNum = 7;
for (let i = 0; i < barNum; i++) {
  const bar = createElement("span", {
    className: "bar",
  });
  loadingDiv.appendChild(bar);
}

const statusDiv = createElement("div", {
  id: "loading-status-div",
});

const loadingDetail = createElement("p", {
  id: "loading-detail",
});

const progressBar = createElement("div", {
  className: "progress-bar",
});
const progressCovered = createElement("span", {
  className: "progress-covered",
});
progressBar.appendChild(progressCovered);

statusDiv.append(loadingDetail, progressBar);

loaderPanel.append(loadingDiv, statusDiv);
