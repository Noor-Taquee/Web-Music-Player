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

let bnPartySongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPartySongs);
bnPartySongs.id = "bnPartySongs";
bnPartySongs.textContent = "PARTY";

let bnPunjabiSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPunjabiSongs);
bnPunjabiSongs.id = "bnPunjabiSongs";
bnPunjabiSongs.textContent = "PUNJABI";

let bnRomanticSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnRomanticSongs);
bnRomanticSongs.id = "bnRomanticSongs";
bnRomanticSongs.textContent = "ROMANTIC";

let bnSlowedSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnSlowedSongs);
bnSlowedSongs.id = "bnSlowedSongs";
bnSlowedSongs.textContent = "SLOWED";

let bnEnglishSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnEnglishSongs);
bnEnglishSongs.id = "bnEnglishSongs";
bnEnglishSongs.textContent = "ENGLISH";

let bnPhonkSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnPhonkSongs);
bnPhonkSongs.id = "bnPhonkSongs";
bnPhonkSongs.textContent = "PHONK";

let bnDanceSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnDanceSongs);
bnDanceSongs.id = "bnDanceSongs";
bnDanceSongs.textContent = "DANCE";

let bnSpanishSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnSpanishSongs);
bnSpanishSongs.id = "bnSpanishSongs";
bnSpanishSongs.textContent = "SPANISH";

let bnChillSongs = document.createElement("button");
homeCategoryDiv.appendChild(bnChillSongs);
bnChillSongs.id = "bnChillSongs";
bnChillSongs.textContent = "CHILL";

let bnTunes = document.createElement("button");
homeCategoryDiv.appendChild(bnTunes);
bnTunes.id = "bnTunes";
bnTunes.textContent = "TUNES";


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

let tunesDiv = document.createElement("div");
homeContentDiv.appendChild(tunesDiv);
tunesDiv.className = "songDiv";
let tunesDivText = document.createElement("p");
tunesDiv.appendChild(tunesDivText);
tunesDivText.className = "songDivText";
tunesDivText.textContent = "TUNES";
let tunesDivCon = document.createElement("p");
tunesDiv.appendChild(tunesDivCon);
tunesDivCon.className = "songDivCon";

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

function loadHomeSongs() {
  for (let songs of HindiTitles) {
    let suggestedSong = document.createElement("button");
    hindiSongDivCon.appendChild(suggestedSong);
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
  for (let songs of PunjabiTitles) {
    let suggestedSong = document.createElement("button");
    punjabiSongDivCon.appendChild(suggestedSong);
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
  for (let songs of EnglishTitles) {
    let suggestedSong = document.createElement("button");
    englishSongDivCon.appendChild(suggestedSong);
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
  for (let songs of PhonkTitles) {
    let suggestedSong = document.createElement("button");
    phonkSongDivCon.appendChild(suggestedSong);
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
  for (let songs of SpanishTitles) {
    let suggestedSong = document.createElement("button");
    spanishSongDivCon.appendChild(suggestedSong);
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
  for (let songs of TunesTitles) {
    let suggestedSong = document.createElement("button");
    tunesDivCon.appendChild(suggestedSong);
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