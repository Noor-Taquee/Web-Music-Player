//CREATING ELEMENTS
let searchPanel = document.createElement("div");
searchPanel.id = "searchPanel";
searchPanel.className = "searchPanel_darkMode";

let searchBar = document.createElement("div");
searchPanel.appendChild(searchBar);
searchBar.id = "searchBar";
let searchBox = document.createElement("input");
searchBar.appendChild(searchBox);
searchBox.id = "searchBox";
searchBox.type = "search";
searchBox.placeholder = "Search song";
searchBox.addEventListener("input", findSearchMatches);
let bnSearch = document.createElement("button");
searchBar.appendChild(bnSearch);
bnSearch.id = "bnSearch";
bnSearch.addEventListener("click", addSearch);
let searchIcon = document.createElement("span");
bnSearch.appendChild(searchIcon);
searchIcon.className = "material-symbols-rounded";
searchIcon.textContent = "search";
let searchP = document.createElement("p");
bnSearch.appendChild(searchP);
searchP.textContent = "SEARCH";

let searchResultDiv = document.createElement("div");
searchResultDiv.id = "searchResultDiv";

let searchResultDivText = document.createElement("p");
searchResultDiv.appendChild(searchResultDivText);

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
let searchedTextDivText = document.createElement("p");
searchedTextDiv.appendChild(searchedTextDivText);
searchedTextDivText.id = "searchedTextDivText";
searchedTextDivText.textContent = "LOGIN TO SEE YOUR HISTORY";

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
let searchedSongDivText = document.createElement("p");
searchedSongDiv.appendChild(searchedSongDivText);
searchedSongDivText.id = "searchedSongDivText";
searchedSongDivText.textContent = "LOGIN TO SEE YOUR HISTORY";

let searchPanelSpace = document.createElement("div");
searchPanel.appendChild(searchPanelSpace);
searchPanelSpace.id = "searchPanelSpace";

function loadSearchTextHistory() {
  clearContainer(searchedTextDiv);
  if (signedIn) {
    if (searchedTextList.length > 0) {
      for (let songs of searchedTextList) {
        let searchedText = document.createElement("button");
        searchedTextDiv.appendChild(searchedText);
        searchedText.id = "searchedText";

        let searchedTextP = document.createElement("p");
        searchedText.appendChild(searchedTextP);
        searchedTextP.textContent = songs;

        let searchedIcon = document.createElement("span");
        searchedText.appendChild(searchedIcon);
        searchedIcon.className = "material-symbols-rounded";
        searchedIcon.textContent = "search";
      }
    } else {
      searchedTextDivText.textContent = "NOTHING SEARCHED YET";
      searchedTextDiv.appendChild(searchedTextDivText);
    }
  } else {
    searchedTextDivText.textContent = "LOGIN TO SEE YOUR HISTORY";
    searchedTextDiv.appendChild(searchedTextDivText);
  }
}

function loadSearchSongHistory() {
  clearContainer(searchedSongDiv);
  if (signedIn) {
    if (searchedSongList.length > 0) {
      for (let songs of searchedSongList) {
        let searchedSong = document.createElement("button");
        searchedSongDiv.appendChild(searchedSong);
        searchedSong.id = "searchedSong";
        searchedSong.addEventListener("click", () => playSong(songs));

        let searchedSongPic = document.createElement("p");
        searchedSong.appendChild(searchedSongPic);
        searchedSongPic.id = "searchedSongPic";
        searchedSongPic.style.backgroundImage = `url(${songData[songs].image})`;

        let searchedSongName = document.createElement("p");
        searchedSong.appendChild(searchedSongName);
        searchedSongName.id = "searchedSongName";
        searchedSongName.textContent = songData[songs].name;
      }
    } else {
      searchedSongDivText.textContent = "NOTHING SEARCHED YET";
      searchedSongDiv.appendChild(searchedSongDivText);
    }
  } else {
    searchedSongDivText.textContent = "LOGIN TO SEE YOUR HISTORY";
    searchedSongDiv.appendChild(searchedSongDivText);
  }
}

function loadSearchHistory() {
  loadSearchTextHistory();
  loadSearchSongHistory();
}

function findSearchMatches() {
  let searchedStr = searchBox.value.toLowerCase();
  if (searchedStr.length < 1) {
    showHistory();
  } else {
    let resultList = {};
    for (let songs of titleNames) {
      if (songs.toLowerCase().includes(searchedStr)) {
        resultList[songs] = songs.toLowerCase().indexOf(searchedStr);
      }
    }
    let sortedResultList = Object.entries(resultList).sort(
      (a, b) => a[1] - b[1]
    );
    resultList = [];
    for (let songs of sortedResultList) {
      resultList.push(songs[0]);
    }
    showSearchResult(resultList);
  }
}

function showSearchResult(resultList) {
  if (searchPanel.contains(searchHistoryTextDiv)) {
    searchPanel.replaceChild(searchResultDiv, searchHistoryTextDiv);
  }
  clearContainer(searchResultDiv);
  if (resultList.length > 0) {
    searchResultDivText.textContent = "";
    for (let songs of resultList) {
      let searchResultBtn = document.createElement("button");
      searchResultDiv.appendChild(searchResultBtn);
      searchResultBtn.id = "searchResultBtn";
      searchResultBtn.textContent = songs;
      searchResultBtn.addEventListener("click", function () {
        playSong(songs);
        switchTo("playerPanel");
        if (historyAllowed) {
          if (searchedSongList.includes(songs)) {
            searchedSongList.splice(searchedSongList.indexOf(songs), 1);
          }
          searchedSongList.unshift(songs);
          loadSearchSongHistory();
        }
      });
    }
  } else {
    searchResultDivText.textContent = "No match!";
  }
}

function addSearch() {
  if (historyAllowed) {
    let searchedStr = searchBox.value;
    if (searchedStr.length > 0) {
      if (searchedTextList.includes(searchedStr)) {
        searchedTextList.splice(searchedTextList.indexOf(searchedStr), 1);
      }
      searchedTextList.unshift(searchedStr);
      loadSearchTextHistory();
    }
  }
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function showHistory() {
  if (searchPanel.contains(searchResultDiv)) {
    searchPanel.replaceChild(searchHistoryTextDiv, searchResultDiv);
  }
}

attend();
