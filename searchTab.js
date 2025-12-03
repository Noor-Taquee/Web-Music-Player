//CREATING ELEMENTS
let searchPanel = document.getElementById("search-panel");

let searchBar = createDiv("search-bar");
searchPanel.appendChild(searchBar);

let searchBox = createInput("search", "Search song", "search-in-player", "search-box");
searchBar.appendChild(searchBox);
searchBox.addEventListener("input", findSearchMatches);

let bnSearch = createButton(
  null,
  "search-btn",
  createIcon("bold", "magnifying-glass"),
  null,
  addSearch
);
searchBar.appendChild(bnSearch);

let searchResultDiv = createDiv("search-history-text-list result");

let searchResultDivText = document.createElement("p");
searchResultDiv.appendChild(searchResultDivText);

let searchHistoryTextDiv = createDiv("search-content-div text");
searchPanel.appendChild(searchHistoryTextDiv);
searchHistoryTextDiv.appendChild(
  createTextField("search-history-title", "Recent searches")
);
let searchedTextDiv = createDiv("search-history-text-list");
searchHistoryTextDiv.appendChild(searchedTextDiv);
let searchedTextDivText = createTextField(
  "div-text",
  "Login to see your history"
);
searchedTextDiv.appendChild(searchedTextDivText);

let searchHistorySongDiv = createDiv("search-content-div song");
searchPanel.appendChild(searchHistorySongDiv);

searchHistorySongDiv.appendChild(
  createTextField("search-history-title", "Recently searched songs")
);

let searchedSongDiv = createDiv("search-history-song-list");
searchHistorySongDiv.appendChild(searchedSongDiv);

let searchedSongDivText = createTextField(
  "div-text",
  "Login to see your history"
);
searchedSongDiv.appendChild(searchedSongDivText);

function loadSearchTextHistory() {
  clearContainer(searchedTextDiv);
  if (signedIn) {
    if (searchedTextList.length > 0) {
      for (let songs of searchedTextList) {
      }
    } else {
      searchedTextDivText.textContent = "Nothing searched yet";
      searchedTextDiv.appendChild(searchedTextDivText);
    }
  } else {
    searchedTextDivText.textContent = "Login to see your history";
    searchedTextDiv.appendChild(searchedTextDivText);
  }
}

function loadSearchSongHistory() {
  clearContainer(searchedSongDiv);
  if (signedIn) {
    if (searchedSongList.length > 0) {
      for (let songs of searchedSongList) {
      }
    } else {
      searchedSongDivText.textContent = "Nothing searched yet";
      searchedSongDiv.appendChild(searchedSongDivText);
    }
  } else {
    searchedSongDivText.textContent = "Login to see your istory";
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
      let searchResultBtn = createButton(
        null,
        "search-text-btn",
        null,
        songs,
        null
      );
      searchResultDiv.appendChild(searchResultBtn);
      searchResultBtn.addEventListener("click", () => {
        playSong(songs);
        expandToplayer();
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
  if (userData.allowHistory) {
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

function showHistory() {
  if (searchPanel.contains(searchResultDiv)) {
    searchPanel.replaceChild(searchHistoryTextDiv, searchResultDiv);
  }
}

attend();