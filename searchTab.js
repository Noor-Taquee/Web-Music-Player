//CREATING ELEMENTS
let searchPanel = document.createElement("div");
searchPanel.id = "searchPanel";

let searchBar = document.createElement("div");
searchPanel.appendChild(searchBar);
searchBar.id = "searchBar";
let searchBox = document.createElement("input");
searchBar.appendChild(searchBox);
searchBox.id = "searchBox";
searchBox.type = "search";
searchBox.placeholder = "Search song";
let bnSearch = document.createElement("button");
searchBar.appendChild(bnSearch);
bnSearch.id = "bnSearch";
let searchIcon = document.createElement("i");
bnSearch.appendChild(searchIcon);
searchIcon.className = "fa-solid fa-search";
let searchP = document.createElement("p");
bnSearch.appendChild(searchP);
searchP.textContent = "SEARCH";


let searchHistoryTextDiv = document.createElement("div");
searchPanel.appendChild(searchHistoryTextDiv);
searchHistoryTextDiv.id = "searchHistoryTextDiv";
let recentSearches = document.createElement("p");
searchHistoryTextDiv.appendChild(recentSearches);
recentSearches.id = "recentSearches";
recentSearches.textContent = "RECENT SEARCHES";
let searchedTextDiv = document.createElement("div");
searchHistoryTextDiv.appendChild(searchedTextDiv);
searchedTextDiv.id = "searchedTextDiv";
searchedTextDiv.textContent = "LOGIN TO SEE YOUR HISTORY";

let searchHistorySongDiv = document.createElement("div");
searchPanel.appendChild(searchHistorySongDiv);
searchHistorySongDiv.id = "searchHistorySongDiv";
let recentSongs = document.createElement("p");
searchHistorySongDiv.appendChild(recentSongs);
recentSongs.id = "recentSongs";
recentSongs.textContent = "RECENT SONGS";
let searchedSongDiv = document.createElement("div");
searchHistorySongDiv.appendChild(searchedSongDiv);
searchedSongDiv.id = "searchedSongDiv";
searchedSongDiv.textContent = "LOGIN TO SEE YOUR HISTORY";

let searchPanelSpace = document.createElement("div");
searchPanel.appendChild(searchPanelSpace);
searchPanelSpace.id = "searchPanelSpace";



function loadSearchTextHistory() {
  searchedTextDiv.innerHTML = "";
  for (let songs of searchedTextList) {
    let searchedText = document.createElement("button");
    searchedTextDiv.appendChild(searchedText);
    searchedText.id = "searchedText";

    let searchedTextP = document.createElement("p");
    searchedText.appendChild(searchedTextP);
    searchedTextP.textContent = songs;

    let searchedIcon = document.createElement("i");
    searchedText.appendChild(searchedIcon);
    searchedIcon.className = "fa-solid fa-search";
  }
}

function loadSearchSongHistory() {
  searchedSongDiv.innerHTML = "";
  for (let songs of searchedSongList) {
    let searchedSong = document.createElement("button");
    searchedSongDiv.appendChild(searchedSong);
    searchedSong.id = "searchedSong";
    searchedSong.addEventListener("click",() => playSong(songs));

    let searchedSongPic = document.createElement("p");
    searchedSong.appendChild(searchedSongPic);
    searchedSongPic.id = "searchedSongPic";
    searchedSongPic.style.backgroundImage = `url(${songData[songs].image})`;

    let searchedSongName = document.createElement("p");
    searchedSong.appendChild(searchedSongName);
    searchedSongName.id = "searchedSongName";
    searchedSongName.textContent = songData[songs].name;
  }
}

function loadSearchHistory() {
  loadSearchTextHistory();
  loadSearchSongHistory();
}



attend();