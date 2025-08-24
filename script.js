//ELEMENTS==========================
let main = document.getElementById("main");
let blurLayer = document.getElementById("blurLayer");
let switchDiv = document.getElementById("switchDiv");
let bnHomePanel = document.getElementById("bnHomePanel");
let bnPlayerPanel = document.getElementById("bnPlayerPanel");
let bnSearchPanel = document.getElementById("bnSearchPanel");
let bnLibraryPanel = document.getElementById("bnLibraryPanel");
let bnAccountPanel = document.getElementById("bnAccountPanel");

let currentTab = null;

function createScreen(defaultTab,btn) {
  blurLayer.removeChild(switchDiv);
  blurLayer.appendChild(defaultTab);
  blurLayer.appendChild(switchDiv);
  btn.style.backgroundColor = "rgba(255,255,255,0.3)";
  btn.style.fontSize = "120%";
  btn.style.fontWeight = "700";
}
function switchTo(destination) {
  if (blurLayer.contains(homePanel)) {
    bnHomePanel.style.backgroundColor = "transparent";
    bnHomePanel.style.fontSize = "100%";
    bnHomePanel.style.fontWeight = "500";
    currentTab = homePanel;
  } else if (blurLayer.contains(playerPanel)) {
    bnPlayerPanel.style.backgroundColor = "transparent";
    bnPlayerPanel.style.fontSize = "100%";
    bnPlayerPanel.style.fontWeight = "500";
    currentTab = playerPanel;
  } else if (blurLayer.contains(searchPanel)) {
    bnSearchPanel.style.backgroundColor = "transparent";
    bnSearchPanel.style.fontSize = "100%";
    bnSearchPanel.style.fontWeight = "500";
    currentTab = searchPanel;
  } else if (blurLayer.contains(libraryPanel)) {
    bnLibraryPanel.style.backgroundColor = "transparent";
    bnLibraryPanel.style.fontSize = "100%";
    bnLibraryPanel.style.fontWeight = "500";
    currentTab = libraryPanel;
  } else if (blurLayer.contains(accountPanel)) {
    bnAccountPanel.style.backgroundColor = "transparent";
    bnAccountPanel.style.fontSize = "100%";
    bnAccountPanel.style.fontWeight = "500";
    currentTab = accountPanel;
  }
  if (destination == "homePanel") {
    blurLayer.replaceChild(homePanel,currentTab);
    bnHomePanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnHomePanel.style.fontSize = "120%";
    bnHomePanel.style.fontWeight = "700";
  } else if (destination == "playerPanel") {
    bnPlayerPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnPlayerPanel.style.fontSize = "120%";
    bnPlayerPanel.style.fontWeight = "700";
    blurLayer.replaceChild(playerPanel,currentTab);
  } else if (destination == "searchPanel") {
    bnSearchPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnSearchPanel.style.fontSize = "120%";
    bnSearchPanel.style.fontWeight = "700";
    blurLayer.replaceChild(searchPanel,currentTab);
  } else if (destination == "libraryPanel") {
    bnLibraryPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnLibraryPanel.style.fontSize = "120%";
    bnLibraryPanel.style.fontWeight = "700";
    blurLayer.replaceChild(libraryPanel,currentTab);
  } else {
    bnAccountPanel.style.backgroundColor = "rgba(255,255,255,0.3)";
    bnAccountPanel.style.fontSize = "120%";
    bnAccountPanel.style.fontWeight = "700";
    blurLayer.replaceChild(accountPanel,currentTab);
  }
}

bnHomePanel.addEventListener("click",() => switchTo("homePanel"));
bnPlayerPanel.addEventListener("click",() => switchTo("playerPanel"));
bnSearchPanel.addEventListener("click",() => switchTo("searchPanel"));
bnLibraryPanel.addEventListener("click",() => switchTo("libraryPanel"));
bnAccountPanel.addEventListener("click",() => switchTo("accountPanel"));
