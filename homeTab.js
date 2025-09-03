//CREATING ELEMENTS
let homePanel = document.createElement("div");
homePanel.id = "homePanel";

let homeHeaderDiv = document.createElement("div");
homePanel.appendChild(homeHeaderDiv);
homeHeaderDiv.id = "homeHeaderDiv";


let homeCategoryDiv = document.createElement("div");
homeHeaderDiv.appendChild(homeCategoryDiv);
homeCategoryDiv.id = "homeCategoryDiv";

let homeContentDiv = document.createElement("div");
homePanel.appendChild(homeContentDiv);
homeContentDiv.id = "homeContentDiv";

let recentlyPLayedDiv = document.createElement("div");
homeContentDiv.appendChild(recentlyPLayedDiv);
recentlyPLayedDiv.id = "recentlyPLayedDiv";
let recentlyPLayedDivText = document.createElement("p");
recentlyPLayedDiv.appendChild(recentlyPLayedDivText);
recentlyPLayedDivText.id = "recentlyPLayedDivText";
recentlyPLayedDivText.textContent = "RECENTLY PLAYED SONGS";
let recentlyPLayedDivCon = document.createElement("p");
recentlyPLayedDiv.appendChild(recentlyPLayedDivCon);
recentlyPLayedDivCon.id = "recentlyPLayedDivCon";
recentlyPLayedDivCon.textContent = "LOGIN TO SEE RECENTLY PLAYED SONGS";

let hindiSongDiv = document.createElement("div");
homeContentDiv.appendChild(hindiSongDiv);
hindiSongDiv.id = "hindiSongDiv";
let hindiSongDivText = document.createElement("p");
hindiSongDiv.appendChild(hindiSongDivText);
hindiSongDivText.id = "hindiSongDivText";
hindiSongDivText.textContent = "HINDI SONGS";
let hindiSongDivCon = document.createElement("p");
hindiSongDiv.appendChild(hindiSongDivCon);
hindiSongDivCon.id = "hindiSongDivCon";

let punjabiSongDiv = document.createElement("div");
homeContentDiv.appendChild(punjabiSongDiv);
punjabiSongDiv.id = "punjabiSongDiv";
let punjabiSongDivText = document.createElement("p");
punjabiSongDiv.appendChild(punjabiSongDivText);
punjabiSongDivText.id = "punjabiSongDivText";
punjabiSongDivText.textContent = "PUNJABI SONGS";
let punjabiSongDivCon = document.createElement("p");
punjabiSongDiv.appendChild(punjabiSongDivCon);
punjabiSongDivCon.id = "punjabiSongDivCon";

let englishSongDiv = document.createElement("div");
homeContentDiv.appendChild(englishSongDiv);
englishSongDiv.id = "englishSongDiv";
let englishSongDivText = document.createElement("p");
englishSongDiv.appendChild(englishSongDivText);
englishSongDivText.id = "englishSongDivText";
englishSongDivText.textContent = "ENGLISH SONGS";
let englishSongDivCon = document.createElement("p");
englishSongDiv.appendChild(englishSongDivCon);
englishSongDivCon.id = "englishSongDivCon";

let phonkSongDiv = document.createElement("div");
homeContentDiv.appendChild(phonkSongDiv);
phonkSongDiv.id = "phonkSongDiv";
let phonkSongDivText = document.createElement("p");
phonkSongDiv.appendChild(phonkSongDivText);
phonkSongDivText.id = "phonkSongDivText";
phonkSongDivText.textContent = "PHONK SONGS";
let phonkSongDivCon = document.createElement("p");
phonkSongDiv.appendChild(phonkSongDivCon);
phonkSongDivCon.id = "phonkSongDivCon";

let spanishSongDiv = document.createElement("div");
homeContentDiv.appendChild(spanishSongDiv);
spanishSongDiv.id = "spanishSongDiv";
let spanishSongDivText = document.createElement("p");
spanishSongDiv.appendChild(spanishSongDivText);
spanishSongDivText.id = "spanishSongDivText";
spanishSongDivText.textContent = "SPANISH SONGS";
let spanishSongDivCon = document.createElement("p");
spanishSongDiv.appendChild(spanishSongDivCon);
spanishSongDivCon.id = "spanishSongDivCon";

let tunesDiv = document.createElement("div");
homeContentDiv.appendChild(tunesDiv);
tunesDiv.id = "tunesDiv";
let tunesDivText = document.createElement("p");
tunesDiv.appendChild(tunesDivText);
tunesDivText.id = "tunesDivText";
tunesDivText.textContent = "TUNES";
let tunesDivCon = document.createElement("p");
tunesDiv.appendChild(tunesDivCon);
tunesDivCon.id = "tunesDivCon";

let homePanelSpace = document.createElement("div");
homeContentDiv.appendChild(homePanelSpace);
homePanelSpace.id = "homePanelSpace";



function loadRecentlyPlayedSongs() {
  recentlyPLayedDivCon.innerHTML = "";
  for (let songs of recentlyPlayedSongList) {
    let suggestedSong = document.createElement("button");
    recentlyPLayedDivCon.appendChild(suggestedSong);
    suggestedSong.id = "suggestedSong";
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
    }

    let suggestedSongName = document.createElement("p");
    suggestedSong.appendChild(suggestedSongName);
    suggestedSongName.id = "suggestedSongName";
    suggestedSongName.textContent = songData[songs].name;
  }
}

function loadHomeSongs() {
  for (let songs of HindiTitles) {
    let suggestedSong = document.createElement("button");
    hindiSongDivCon.appendChild(suggestedSong);
    suggestedSong.id = "suggestedSong";
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
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
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
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
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
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
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
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
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
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
    suggestedSong.addEventListener("click",() => playSong(songs));

    let suggestedSongPic = document.createElement("p");
    suggestedSong.appendChild(suggestedSongPic);
    suggestedSongPic.id = "suggestedSongPic";
    let songIcon = document.createElement("i");
    songIcon.className = "fa-solid fa-headphones";
    if (songData[songs].image.length > 0) {
      suggestedSongPic.style.backgroundImage = `url(${songData[songs].image})`;
    } else {
      suggestedSongPic.appendChild(songIcon);
    }

    let suggestedSongName = document.createElement("p");
    suggestedSong.appendChild(suggestedSongName);
    suggestedSongName.id = "suggestedSongName";
    suggestedSongName.textContent = songData[songs].name;
  }
}



attend();