let songNameHistory = ["song name 1","song name 2","song name 3","song name 4","song name 5","song name 6","song name 7","song name 8","song name 9","song name 10"];
let songPicHistory = [["","SAIYYARA"],["","BSJSBSBBS"],["","MI GENTE"],["","NOVA MARE"],["","MONTAGEM FAVELA"]];


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


let searchHistoryNameDiv = document.createElement("div");
searchPanel.appendChild(searchHistoryNameDiv);
searchHistoryNameDiv.id = "searchHistoryNameDiv";
let recentSearches = document.createElement("p");
searchHistoryNameDiv.appendChild(recentSearches);
recentSearches.id = "recentSearches";
recentSearches.textContent = "RECENT SEARCHES";
let searchedSongNameDiv = document.createElement("div");
searchHistoryNameDiv.appendChild(searchedSongNameDiv);
searchedSongNameDiv.id = "searchedSongNameDiv";

for (let songName of songNameHistory) {
  let searchedNameSong = document.createElement("button");
  searchedSongNameDiv.appendChild(searchedNameSong);
  searchedNameSong.id = "searchedNameSong";
  let searchedNameP = document.createElement("p");
  searchedNameSong.appendChild(searchedNameP);
  searchedNameP.textContent = songName;
  let searchedNameIcon = document.createElement("i");
  searchedNameSong.appendChild(searchedNameIcon);
  searchedNameIcon.className = "fa-solid fa-search";
}

let searchHistoryPicDiv = document.createElement("div");
searchPanel.appendChild(searchHistoryPicDiv);
searchHistoryPicDiv.id = "searchHistoryPicDiv";
let recentSongs = document.createElement("p");
searchHistoryPicDiv.appendChild(recentSongs);
recentSongs.id = "recentSongs";
recentSongs.textContent = "RECENT SONGS";
let searchedSongPicDiv = document.createElement("div");
searchHistoryPicDiv.appendChild(searchedSongPicDiv);
searchedSongPicDiv.id = "searchedSongPicDiv";

for (let songPic of songPicHistory) {
  let searchedPicSong = document.createElement("button");
  searchedSongPicDiv.appendChild(searchedPicSong);
  searchedPicSong.id = "searchedPicSong";
  let searchedSongPic = document.createElement("p");
  searchedPicSong.appendChild(searchedSongPic);
  searchedSongPic.id = "searchedSongPic";
  searchedSongPic.style.backgroundImage = `url(${songPic[0]})`;
  let searchedSongName = document.createElement("p");
  searchedPicSong.appendChild(searchedSongName);
  searchedSongName.id = "searchedSongName";
  searchedSongName.textContent = songPic[1];
}
