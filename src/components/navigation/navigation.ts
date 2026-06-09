import "./navigation.css";
import { createElement } from "../../utils/create-dom.js";

export const navBar = createElement("div", {
  id: "navigation-bar",
});

const navFocus = createElement("span", {
  id: "nav-focus",
});

const homeBtn = createElement("button", {
  className: "nav-btn",
}, [
  createElement("i", { className: "ph-bold ph-house" }),
  createElement("p", { textContent: "home" }),
]);
homeBtn.addEventListener("click", () => {
  window.location.hash = "#home";
});

const searchBtn = createElement("button", {
  className: "nav-btn",
}, [
  createElement("i", { className: "ph-bold ph-magnifying-glass" }),
  createElement("p", { textContent: "search" }),
]);
searchBtn.addEventListener("click", () => {
  window.location.hash = "#search";
});

const libraryBtn = createElement("button", {
  className: "nav-btn",
}, [
  createElement("i", { className: "ph-bold ph-library" }),
  createElement("p", { textContent: "library" }),
]);
libraryBtn.addEventListener("click", () => {
  window.location.hash = "#library";
});

const settingsBtn = createElement("button", {
  className: "nav-btn",
}, [
  createElement("i", { className: "ph-bold ph-gear-fine" }),
  createElement("p", { textContent: "settings" }),
]);
settingsBtn.addEventListener("click", () => {
  window.location.hash = "#settings";
});



navBar.append( navFocus, homeBtn, searchBtn, libraryBtn, settingsBtn );