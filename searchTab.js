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
// --- MODIFIED INSTANT SEARCH ---
function findSearchMatches() {
  let searchedStr = searchBox.value.toLowerCase().trim();
  
  if (searchedStr.length < 1) {
    showHistory();
  } else {
    // Filter the SQL objects list
    let resultList = songsList.filter(song => 
      song.songname.toLowerCase().includes(searchedStr) || 
      (song.artistname && song.artistname.toLowerCase().includes(searchedStr))
    );

    // Sort results: matches starting with the search string come first
    resultList.sort((a, b) => {
      let aIndex = a.songname.toLowerCase().indexOf(searchedStr);
      let bIndex = b.songname.toLowerCase().indexOf(searchedStr);
      return aIndex - bIndex;
    });

    showSearchResult(resultList);
  }
}

// --- MODIFIED RESULT DISPLAY ---
function showSearchResult(resultList) {
  if (searchPanel.contains(searchHistoryTextDiv)) {
    searchPanel.replaceChild(searchResultDiv, searchHistoryTextDiv);
  }
  clearContainer(searchResultDiv);

  if (resultList.length > 0) {
    searchResultDivText.textContent = "";
    resultList.forEach(songObj => {
      // Create a button that displays "Song Name - Artist Name"
      let displayText = `${songObj.songname} • ${songObj.artistname || 'Artist'}`;
      
      let searchResultBtn = createButton(
        null,
        "search-text-btn",
        null,
        displayText,
        null
      );
      
      searchResultDiv.appendChild(searchResultBtn);
      
      searchResultBtn.addEventListener("click", () => {
        playSong(songObj); // Pass the whole SQL Object
        expandToplayer();
        
        // Handle History via DB (Optional step)
        if (currentUser && historyPref === 1) {
          addSongToSearchHistory(songObj);
        }
      });
    });
  } else {
    searchResultDivText.textContent = "No match found in your library!";
    searchResultDiv.appendChild(searchResultDivText);
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