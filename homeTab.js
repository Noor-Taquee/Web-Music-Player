function createHomeTabSongDiv(parentDiv, hText) {
  let div = createDiv("song-container-div");
  parentDiv.appendChild(div);

  div.appendChild(createTextField("song-container-header", hText));

  let innerDiv = createDiv("song-container-content");
  div.appendChild(innerDiv);

  return innerDiv;
}

// 1. Updated Song Button to use SQL Object structure
function createSongBtn(songObj, className = "rectangle") {
  // songObj now looks like: { songid: 1, songname: "Title", songimage: "url", ... }
  
  let suggestedSong = document.createElement("button");
  suggestedSong.className = `suggested-song ${className}`;
  
  // Pass the whole object to playSong
  suggestedSong.addEventListener("click", () => playSong(songObj));

  // Image handling (Postgres uses lowercase column names by default)
  let pic = createTextField(`suggested-song-image ${className}`);
  suggestedSong.appendChild(pic);
  
  if (songObj.songimage && songObj.songimage.length > 0) {
    pic.style.backgroundImage = `url(${songObj.songimage})`;
  } else {
    pic.appendChild(createIcon("bold", "music-note"));
  }

  let sdiv = createDiv(`suggested-song-info-outer-div ${className}`);
  suggestedSong.appendChild(sdiv);

  let aboutSongDiv = createDiv(`suggested-song-about-div ${className}`);
  sdiv.appendChild(aboutSongDiv);
  
  // Update: use songObj.songname (SQL column name)
  aboutSongDiv.appendChild(
    createTextField(`suggested-song-name ${className}`, songObj.songname)
  );
  
  // Note: For artist name, you might need to join tables or 
  // ensure your SQL query includes the artist name string.
  aboutSongDiv.appendChild(
    createTextField(`suggested-song-artist ${className}`, songObj.artistname || "Unknown Artist")
  );

  let btn = createButton(null, `suggested-song-options-button ${className}`, createIcon("bold", "dots-three-vertical"), null, null);
  sdiv.appendChild(btn);

  return suggestedSong;
}

//CREATING ELEMENTS
let homePanel = document.getElementById("home-panel");

let homeHeaderDiv = createDiv("top-bar");
homePanel.appendChild(homeHeaderDiv);

homeHeaderDiv.appendChild(createTextField("Name", "MusicPlayer"));

let homeCategoryDiv = createDiv("home-song-category-div");
// homeHeaderDiv.appendChild(homeCategoryDiv);

let bnHindiSongs = createButton(null, null, null, "Hindi", null);
homeCategoryDiv.appendChild(bnHindiSongs);
let hindiSongsDiv = createDiv("home-tab-content-div");


let bnPunjabiSongs = createButton(null, null, null, "Punjabi", null);
homeCategoryDiv.appendChild(bnPunjabiSongs);
let punjabiSongsDiv = createDiv("home-tab-content-div");


let bnEnglishSongs = createButton(null, null, null, "English", null);
homeCategoryDiv.appendChild(bnEnglishSongs);
let englishSongsDiv = createDiv("home-tab-content-div");


let bnPhonkSongs = createButton(null, null, null, "Phonk", null);
homeCategoryDiv.appendChild(bnPhonkSongs);
let phonkSongsDiv = createDiv("home-tab-content-div");


let bnSpanishSongs = createButton(null, null, null, "Spanish", null);
homeCategoryDiv.appendChild(bnSpanishSongs);
let spanishSongsDiv = createDiv("home-tab-content-div");


let bnTunes = createButton(null, null, null, "Tunes", null);
homeCategoryDiv.appendChild(bnTunes);
let tunesDiv = createDiv("home-tab-content-div");


let bnPartySongs = createButton(null, null, null, "Party", null);
homeCategoryDiv.appendChild(bnPartySongs);
let partySongsDiv = createDiv("home-tab-content-div");


let bnRomanticSongs = createButton(null, null, null, "Romantic", null);
homeCategoryDiv.appendChild(bnRomanticSongs);
let romanticSongsDiv = createDiv("home-tab-content-div");


let bnSlowedSongs = createButton(null, null, null, "Slowed", null);
homeCategoryDiv.appendChild(bnSlowedSongs);
let slowedSongsDiv = createDiv("home-tab-content-div");


let bnDanceSongs = createButton(null, null, null, "Dance", null);
homeCategoryDiv.appendChild(bnDanceSongs);
let danceSongsDiv = createDiv("home-tab-content-div");


let bnChillSongs = createButton(null, null, null, "Chill", null);
homeCategoryDiv.appendChild(bnChillSongs);
let chillSongsDiv = createDiv("home-tab-content-div");


let homeContentDiv = createDiv("home-tab-content-div");
homePanel.appendChild(homeContentDiv);

let recentlyPlayedDivCon = createHomeTabSongDiv(
  homeContentDiv,
  "RECENTLY PLAYED SONGS"
);
let recentlyPlayedDivConText = createTextField(
  "div-text",
  "Login to see your plaaylists"
);
// let qawwaliDivCon = createHomeTabSongDiv(homeContentDiv, "QAWWALI");
let hindiSongDivCon = createHomeTabSongDiv(homeContentDiv, "HINDI SONGS");
let punjabiSongDivCon = createHomeTabSongDiv(homeContentDiv, "PUNJABI SONGS");
let englishSongDivCon = createHomeTabSongDiv(homeContentDiv, "ENGLISH SONGS");
let phonkSongDivCon = createHomeTabSongDiv(homeContentDiv, "PHONK SONGS");
let spanishSongDivCon = createHomeTabSongDiv(homeContentDiv, "SPANISH SONGS");
let tuneDivCon = createHomeTabSongDiv(homeContentDiv, "TUNES");

function loadRecentlyPlayedSongs() {
  clearContainer(recentlyPlayedDivCon);
  if (signedIn) {
    if (recentlyPlayedSongList.length > 0) {
      for (let songs of recentlyPlayedSongList) {
        recentlyPlayedDivCon.appendChild(createSongBtn(songs, "square"));
      }
    } else {
      recentlyPlayedDivConText.textContent = "NO SONGS PLAYED RECENTLY";
      recentlyPlayedDivCon.appendChild(recentlyPlayedDivConText);
    }
  } else {
    recentlyPlayedDivConText.textContent = "LOGIN TO SEE RECENTLY PLAYED SONGS";
    recentlyPlayedDivCon.appendChild(recentlyPlayedDivConText);
  }
}

// 2. Updated Loader to filter the DB array
function loadHomeSongs(fullSongList, songContainer, genre) {
  // Clear container first
  clearContainer(songContainer);
  
  // Filter the big array from SQL by the specific genre
  const filteredList = fullSongList.filter(s => s.songgenre === genre);
  
  let i = 0;
  let f = filteredList.length;
  
  // Your original 3-per-column logic remains the same, just using filteredList
  while (i < f) {
    if ((f - i) >= 3) {
      songContainer.appendChild(createRsongContainer(filteredList[i], filteredList[i+1], filteredList[i+2]));
      i += 3;
    } else if ((f - i) == 2) {
      songContainer.appendChild(createRsongContainer(filteredList[i], filteredList[i+1]));
      break;
    } else {
      songContainer.appendChild(createRsongContainer(filteredList[i]));
      break;
    }
  }
  songContainer.classList.add("rectangle-song-outer-container");
}

function createRsongContainer(s1, s2 = null, s3 = null) {
  let div = createDiv("rectangle-song-container");

  div.appendChild(createSongBtn(s1, "rectangle"));

  if (s2) {
    div.appendChild(createSongBtn(s2, "rectangle"));
    if (s3) {
      div.appendChild(createSongBtn(s3, "rectangle"));
    }
  }

  return div;
}

attend();