//#region UI
const searchBar = createElement("div", { className: "search-bar" });
searchPanel.appendChild(searchBar);

const searchBox = createElement("div", { className: "search-box" });
searchBar.appendChild(searchBox);

const searchInput = createElement("input", {
  type: "search",
  placeholder: "Search song",
  autocomplete: false,
  id: "search-in-player",
  className: "search-input"
});
searchInput.addEventListener("input", findSearchMatches);
searchBox.appendChild(searchInput);

searchBox.appendChild(createElement("button", {
  className: "search-btn",
  onclick: addSearch
},
[createElement("i", {
  className: "ph-bold ph-magnifying-glass"
})
]));

const searchResultDiv = createElement("div", { className: "search-history-text-list result" });

const searchResultDivText = createElement("p");
searchResultDiv.appendChild(searchResultDivText);

const searchHistoryTextDiv = createElement("div", { className: "search-content-div text" });
searchPanel.appendChild(searchHistoryTextDiv);
searchHistoryTextDiv.appendChild(
  createElement("p", { className: "search-history-title", textContent: "Recent searches" })
);
const searchedTextDiv = createElement("div", { className: "search-history-text-list" });
searchHistoryTextDiv.appendChild(searchedTextDiv);
const searchedTextDivText = createElement("p", {
  className: "div-text",
  textContent: "Login to see your history"
});
searchedTextDiv.appendChild(searchedTextDivText);

const searchHistorySongDiv = createElement("div", { className: "search-content-div song" });
searchPanel.appendChild(searchHistorySongDiv);

searchHistorySongDiv.appendChild(createElement("p", {
  className: "search-history-title",
  textContent: "Recently searched songs"
}));

const searchedSongDiv = createElement("div", { className: "search-history-song-list" });
searchHistorySongDiv.appendChild(searchedSongDiv);

const searchedSongDivText = createElement("p", {
  className: "div-text",
  textContent: "Login to see your history"
});
searchedSongDiv.appendChild(searchedSongDivText);

//#endregion UI

function loadSearchTextHistory() {
  clearContainer(searchedTextDiv);
  if (signedIn) {
    if (currentUser.searchedTextList.length > 0) {
      for (let songs of currentUser.searchedTextList) { }
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
  if (!signedIn) {
    searchedSongDivText.textContent = "Login to see your istory";
    searchedSongDiv.appendChild(searchedSongDivText);
    return;
  }
  
  if (currentUser.searchedSongList.length > 0) {
    for (let songs of currentUser.searchedSongList) { }
  } else {
    searchedSongDivText.textContent = "Nothing searched yet";
    searchedSongDiv.appendChild(searchedSongDivText);
  }
}

function loadSearchHistory() {
  loadSearchTextHistory();
  loadSearchSongHistory();
}

function findSearchMatches() {
  let searchedStr = searchInput.value.toLowerCase();
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
      let searchResultBtn = createElement("button", { className: "search-text-btn" }, [ createElement("p", { textContent: songs }) ]);
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
  if (currentUser.allowHistory) {
    let searchedStr = searchInput.value;
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

