//CREATING ELEMENTS
let homePanel = document.createElement("div");
homePanel.id = "homePanel";
homePanel.className = "homePanel_darkMode";

let homeHeaderDiv = document.createElement("div");
homePanel.appendChild(homeHeaderDiv);
homeHeaderDiv.id = "homeHeaderDiv";

let homeCategoryDiv = document.createElement("div");
homeHeaderDiv.appendChild(homeCategoryDiv);
homeCategoryDiv.id = "homeCategoryDiv";

let bnHindiSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnHindiSongs);
bnHindiSongs.id = "bnHindiSongs";
bnHindiSongs.textContent = "HINDI";
let hindiSongsDiv = document.createElement("div");
hindiSongsDiv.id = "hindiSongsDiv";

let bnPartySongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPartySongs);
bnPartySongs.id = "bnPartySongs";
bnPartySongs.textContent = "PARTY";
let partySongsDiv = document.createElement("div");
partySongsDiv.id = "partySongsDiv";

let bnPunjabiSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPunjabiSongs);
bnPunjabiSongs.id = "bnPunjabiSongs";
bnPunjabiSongs.textContent = "PUNJABI";
let punjabiSongsDiv = document.createElement("div");
punjabiSongsDiv.id = "punjabiSongsDiv";

let bnRomanticSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnRomanticSongs);
bnRomanticSongs.id = "bnRomanticSongs";
bnRomanticSongs.textContent = "ROMANTIC";
let romanticSongsDiv = document.createElement("div");
romanticSongsDiv.id = "romanticSongsDiv";

let bnSlowedSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnSlowedSongs);
bnSlowedSongs.id = "bnSlowedSongs";
bnSlowedSongs.textContent = "SLOWED";
let slowedSongsDiv = document.createElement("div");
slowedSongsDiv.id = "slowedSongsDiv";

let bnEnglishSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnEnglishSongs);
bnEnglishSongs.id = "bnEnglishSongs";
bnEnglishSongs.textContent = "ENGLISH";
let englishSongsDiv = document.createElement("div");
englishSongsDiv.id = "englishSongsDiv";

let bnPhonkSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPhonkSongs);
bnPhonkSongs.id = "bnPhonkSongs";
bnPhonkSongs.textContent = "PHONK";
let phonkSongsDiv = document.createElement("div");
phonkSongsDiv.id = "phonkSongsDiv";

let bnDanceSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnDanceSongs);
bnDanceSongs.id = "bnDanceSongs";
bnDanceSongs.textContent = "DANCE";
let danceSongsDiv = document.createElement("div");
danceSongsDiv.id = "danceSongsDiv";

let bnSpanishSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnSpanishSongs);
bnSpanishSongs.id = "bnSpanishSongs";
bnSpanishSongs.textContent = "SPANISH";
let spanishSongsDiv = document.createElement("div");
spanishSongsDiv.id = "spanishSongsDiv";

let bnChillSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnChillSongs);
bnChillSongs.id = "bnChillSongs";
bnChillSongs.textContent = "CHILL";
let chillSongsDiv = document.createElement("div");
chillSongsDiv.id = "chillSongsDiv";

let bnTunes = document.createElement("button");
homeCategoryDiv.appendChild(bnTunes);
bnTunes.id = "bnTunes";
bnTunes.textContent = "TUNES";
let tunesDiv = document.createElement("div");
tunesDiv.id = "tunesDiv";

let homeContentDiv = document.createElement("div");
homePanel.appendChild(homeContentDiv);
homeContentDiv.id = "homeContentDiv";

let recentlyPlayedDiv = document.createElement("div");
homeContentDiv.appendChild(recentlyPlayedDiv);
recentlyPlayedDiv.className = "songDiv";
let recentlyPlayedDivText = document.createElement("p");
recentlyPlayedDiv.appendChild(recentlyPlayedDivText);
recentlyPlayedDivText.className = "songDivText";
recentlyPlayedDivText.textContent = "RECENTLY PLAYED SONGS";
let recentlyPlayedDivCon = document.createElement("p");
recentlyPlayedDiv.appendChild(recentlyPlayedDivCon);
recentlyPlayedDivCon.className = "songDivCon";
let recentlyPlayedDivConText = document.createElement("p");
recentlyPlayedDivCon.appendChild(recentlyPlayedDivConText);
recentlyPlayedDivConText.id = "recentlyPlayedDivConText";
recentlyPlayedDivConText.textContent = "LOGIN TO SEE RECENTLY PLAYED SONGS";

let qawwaliDiv = document.createElement("div");
homeContentDiv.appendChild(qawwaliDiv);
qawwaliDiv.className = "songDiv";
let qawwaliDivText = document.createElement("p");
qawwaliDiv.appendChild(qawwaliDivText);
qawwaliDivText.className = "songDivText";
qawwaliDivText.textContent = "QAWWALI";
let qawwaliDivCon = document.createElement("p");
qawwaliDiv.appendChild(qawwaliDivCon);
qawwaliDivCon.className = "songDivCon";

let hindiSongDiv = document.createElement("div");
homeContentDiv.appendChild(hindiSongDiv);
hindiSongDiv.className = "songDiv";
let hindiSongDivText = document.createElement("p");
hindiSongDiv.appendChild(hindiSongDivText);
hindiSongDivText.className = "songDivText";
hindiSongDivText.textContent = "HINDI SONGS";
let hindiSongDivCon = document.createElement("p");
hindiSongDiv.appendChild(hindiSongDivCon);
hindiSongDivCon.className = "songDivCon";

let punjabiSongDiv = document.createElement("div");
homeContentDiv.appendChild(punjabiSongDiv);
punjabiSongDiv.className = "songDiv";
let punjabiSongDivText = document.createElement("p");
punjabiSongDiv.appendChild(punjabiSongDivText);
punjabiSongDivText.className = "songDivText";
punjabiSongDivText.textContent = "PUNJABI SONGS";
let punjabiSongDivCon = document.createElement("p");
punjabiSongDiv.appendChild(punjabiSongDivCon);
punjabiSongDivCon.className = "songDivCon";

let englishSongDiv = document.createElement("div");
homeContentDiv.appendChild(englishSongDiv);
englishSongDiv.className = "songDiv";
let englishSongDivText = document.createElement("p");
englishSongDiv.appendChild(englishSongDivText);
englishSongDivText.className = "songDivText";
englishSongDivText.textContent = "ENGLISH SONGS";
let englishSongDivCon = document.createElement("p");
englishSongDiv.appendChild(englishSongDivCon);
englishSongDivCon.className = "songDivCon";

let phonkSongDiv = document.createElement("div");
homeContentDiv.appendChild(phonkSongDiv);
phonkSongDiv.className = "songDiv";
let phonkSongDivText = document.createElement("p");
phonkSongDiv.appendChild(phonkSongDivText);
phonkSongDivText.className = "songDivText";
phonkSongDivText.textContent = "PHONK SONGS";
let phonkSongDivCon = document.createElement("p");
phonkSongDiv.appendChild(phonkSongDivCon);
phonkSongDivCon.className = "songDivCon";

let spanishSongDiv = document.createElement("div");
homeContentDiv.appendChild(spanishSongDiv);
spanishSongDiv.className = "songDiv";
let spanishSongDivText = document.createElement("p");
spanishSongDiv.appendChild(spanishSongDivText);
spanishSongDivText.className = "songDivText";
spanishSongDivText.textContent = "SPANISH SONGS";
let spanishSongDivCon = document.createElement("p");
spanishSongDiv.appendChild(spanishSongDivCon);
spanishSongDivCon.className = "songDivCon";

let tuneDiv = document.createElement("div");
homeContentDiv.appendChild(tuneDiv);
tuneDiv.className = "songDiv";
let tuneDivText = document.createElement("p");
tuneDiv.appendChild(tuneDivText);
tuneDivText.className = "songDivText";
tuneDivText.textContent = "TUNES";
let tuneDivCon = document.createElement("p");
tuneDiv.appendChild(tuneDivCon);
tuneDivCon.className = "songDivCon";

let homePanelSpace = document.createElement("div");
homeContentDiv.appendChild(homePanelSpace);
homePanelSpace.id = "homePanelSpace";

function loadRecentlyPlayedSongs() {
  clearContainer(recentlyPlayedDivCon);
  if (signedIn) {
    if (recentlyPlayedSongList.length > 0) {
      for (let songs of recentlyPlayedSongList) {
        let suggestedSong = document.createElement("button");
        recentlyPlayedDivCon.appendChild(suggestedSong);
        suggestedSong.id = "suggestedSong";
        suggestedSong.addEventListener("click", () => playSong(songs));
        let songIcon = document.createElement("span");
        songIcon.className = "material-symbols-rounded";
        songIcon.textContent = "headphones";
        if (songData[songs].image.length > 0) {
          suggestedSong.style.backgroundImage = `url(${songData[songs].image})`;
        } else {
          suggestedSong.appendChild(songIcon);
        }
        let suggestedSongName = document.createElement("p");
        suggestedSong.appendChild(suggestedSongName);
        suggestedSongName.id = "suggestedSongName";
        suggestedSongName.textContent = songData[songs].name;
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

function loadHomeSongs(songList, songContainer) {
  for (let songs of songList) {
    let suggestedSong = document.createElement("button");
    songContainer.appendChild(suggestedSong);
    suggestedSong.id = "suggestedSong";
    suggestedSong.addEventListener("click", () => playSong(songs));

    let songIcon = document.createElement("span");
    songIcon.className = "material-symbols-rounded";
    songIcon.textContent = "headphones";
    if (songData[songs].image.length > 0) {
      suggestedSong.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSong.appendChild(songIcon);
    }

    let suggestedSongName = document.createElement("p");
    suggestedSong.appendChild(suggestedSongName);
    suggestedSongName.id = "suggestedSongName";
    suggestedSongName.textContent = songData[songs].name;
  }
}

attend();
