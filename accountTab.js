let FavouriteSongList = [];



//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";

let accountInfoHeader = document.createElement("div");
accountPanel.appendChild(accountInfoHeader);
accountInfoHeader.id = "accountInfoHeader";
let profilePic = document.createElement("p");
accountInfoHeader.appendChild(profilePic);
profilePic.id = "profilePic";
let profilePicIcon = document.createElement("i");
profilePic.appendChild(profilePicIcon);
profilePicIcon.className = "fa-solid fa-user";
let editIcon = document.createElement("i");
editIcon.className = "fa-solid fa-pen-to-square";
editIcon.id = "editIcon";

let profileInfoCard = document.createElement("div");
accountInfoHeader.appendChild(profileInfoCard);
profileInfoCard.id = "profileInfoCard";

let profileName = document.createElement("p");
profileInfoCard.appendChild(profileName);
profileName.id = "profileName";
profileName.textContent = "User";
let separator = document.createElement("hr");
profileInfoCard.appendChild(separator);
separator.id = "separator";
let statsDiv = document.createElement("div");
profileInfoCard.appendChild(statsDiv);
statsDiv.id = "statsDiv";

let playlistsCount = document.createElement("button");
statsDiv.appendChild(playlistsCount);
let libraryicon = document.createElement("i");
playlistsCount.appendChild(libraryicon);
libraryicon.className = "fa-solid fa-book";
let playlistsCountP = document.createElement("p");
playlistsCount.appendChild(playlistsCountP);
playlistsCountP.textContent = `playlists:${playlistList.length}`;

let favouriteSongsCount = document.createElement("button");
statsDiv.appendChild(favouriteSongsCount);
let favouriteCountIcon = document.createElement("i");
favouriteCountIcon.className = "fa-solid fa-star";
favouriteSongsCount.appendChild(favouriteCountIcon);
let favouriteSongsCountP = document.createElement("p");
favouriteSongsCount.appendChild(favouriteSongsCountP);
favouriteSongsCountP.textContent = `favourite songs:${FavouriteSongList.length}`;


let settingsPanel = document.createElement("div");
accountPanel.appendChild(settingsPanel);
settingsPanel.id = "settingsPanel";

let bnSettings = document.createElement("button");
settingsPanel.appendChild(bnSettings);
bnSettings.id = "bnSettings";
let bnSettingsIcon = document.createElement("i");
bnSettings.appendChild(bnSettingsIcon);
bnSettingsIcon.className = "fa-solid fa-gear";
bnSettingsIcon.id = "bnSettingsIcon";
let bnSettingsP = document.createElement("p");
bnSettings.appendChild(bnSettingsP);
bnSettingsP.textContent = "SETTINGS";

let bnManageHistory = document.createElement("button");
settingsPanel.appendChild(bnManageHistory);
bnManageHistory.id = "bnManageHistory";
let bnManageHistoryIcon = document.createElement("i");
bnManageHistory.appendChild(bnManageHistoryIcon);
bnManageHistoryIcon.className = "fa-solid fa-clock";
bnManageHistoryIcon.id = "bnManageHistoryIcon";
let bnManageHistoryP = document.createElement("p");
bnManageHistory.appendChild(bnManageHistoryP);
bnManageHistoryP.textContent = "MANAGE HISTORY";

let bnfavouriteSongs = document.createElement("button");
settingsPanel.appendChild(bnfavouriteSongs);
bnfavouriteSongs.id = "bnfavouriteSongs";
let bnFavouriteIcon = document.createElement("i");
bnfavouriteSongs.appendChild(bnFavouriteIcon);
bnFavouriteIcon.className = "fa-solid fa-star";
bnFavouriteIcon.id = "bnFavouriteIcon";
let bnfavouriteSongsP = document.createElement("p");
bnfavouriteSongs.appendChild(bnfavouriteSongsP);
bnfavouriteSongsP.textContent = "FAVOURITE SONGS";


function showInfo() {}
playlistsCount.addEventListener("click",() => switchTo("libraryPanel"));



attend();