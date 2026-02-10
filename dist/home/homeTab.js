//#region helper functions
function createHomeTabSongDiv(parentDiv, hText) {
    const innerDiv = createElement("div", { className: "song-container-content" });
    const div = createElement("div", {
        className: "song-container-div"
    }, [createElement("p", {
            className: "song-container-header",
            textContent: hText
        }), innerDiv]);
    parentDiv.appendChild(div);
    return innerDiv;
}
function createSongBtn(songs, Name, artist, image, className = "rectangle") {
    // button element
    const suggestedSong = createElement("button", {
        className: `suggested-song ${className}`,
        onclick: () => playSong(songs)
    });
    // album art or icon as a picture
    const pic = createElement("p", {
        className: `suggested-song-image ${className}`
    });
    suggestedSong.appendChild(pic);
    if (image.length > 0) {
        pic.style.backgroundImage = `url(${image})`;
    }
    else {
        pic.appendChild(createElement("i", { className: "ph-bold ph-music-note" }));
    }
    // div for button and info
    const sdiv = createElement("div", {
        className: `suggested-song-info-outer-div ${className}`
    });
    suggestedSong.appendChild(sdiv);
    // Song name and artists div
    const aboutSongDiv = createElement("div", {
        className: `suggested-song-about-div ${className}`
    }, [createElement("p", {
            className: `suggested-song-name ${className}`,
            textContent: Name
        }), createElement("p", {
            className: `suggested-song-artist ${className}`,
            textContent: artist
        })]);
    sdiv.appendChild(aboutSongDiv);
    // options button
    const btn = createElement("button", {
        className: `suggested-song-options-button ${className}`,
        onclick: null
    }, [createElement("i", { className: "ph-bold ph-dots-three-vertical" })]);
    sdiv.appendChild(btn);
    return suggestedSong;
}
//#endregion helper functions
//#region UI
const homeContentDiv = createElement("div", { className: "home-tab-content-div" });
homePanel.appendChild(homeContentDiv);
//#region Header
const homeHeaderDiv = createElement("div", { className: "top-bar flow" });
homeContentDiv.appendChild(homeHeaderDiv);
const appNameDiv = createElement("div", { className: "app-name-div" });
appNameDiv.appendChild(createElement("p", {
    className: "Name",
    textContent: "MusicPlayer"
}));
homeHeaderDiv.appendChild(appNameDiv);
const utilityDiv = createElement("div", { className: "utility-div" });
homeHeaderDiv.appendChild(utilityDiv);
const homeSearchButton = createElement("button", {}, [createElement("i", { className: "ph-bold ph-magnifying-glass" })]);
utilityDiv.appendChild(homeSearchButton);
const homeAccountButton = createElement("button", {}, [createElement("i", { className: "ph-bold ph-user" })]);
utilityDiv.appendChild(homeAccountButton);
//#endregion Header
//#region song category bar
const homeCategoryDiv = createElement("div", { className: "home-song-category-div" });
// homeHeaderDiv.appendChild(homeCategoryDiv);
const bnHindiSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Hindi" })]);
homeCategoryDiv.appendChild(bnHindiSongs);
const hindiSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnPunjabiSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Punjabi" })]);
homeCategoryDiv.appendChild(bnPunjabiSongs);
const punjabiSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnEnglishSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "English" })]);
homeCategoryDiv.appendChild(bnEnglishSongs);
const englishSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnPhonkSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Phonk" })]);
homeCategoryDiv.appendChild(bnPhonkSongs);
const phonkSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnSpanishSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Spanish" })]);
homeCategoryDiv.appendChild(bnSpanishSongs);
const spanishSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnTunes = createElement("button", { onclick: null }, [createElement("p", { textContent: "Tunes" })]);
homeCategoryDiv.appendChild(bnTunes);
const tunesDiv = createElement("div", { className: "home-tab-content-div" });
const bnPartySongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Party" })]);
homeCategoryDiv.appendChild(bnPartySongs);
const partySongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnRomanticSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Romantic" })]);
homeCategoryDiv.appendChild(bnRomanticSongs);
const romanticSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnSlowedSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Slowed" })]);
homeCategoryDiv.appendChild(bnSlowedSongs);
const slowedSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnDanceSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Dance" })]);
homeCategoryDiv.appendChild(bnDanceSongs);
const danceSongsDiv = createElement("div", { className: "home-tab-content-div" });
const bnChillSongs = createElement("button", { onclick: null }, [createElement("p", { textContent: "Chill" })]);
homeCategoryDiv.appendChild(bnChillSongs);
const chillSongsDiv = createElement("div", { className: "home-tab-content-div" });
//#endregion song category bar
const recentlyPlayedDivCon = createHomeTabSongDiv(homeContentDiv, "RECENTLY PLAYED SONGS");
const recentlyPlayedDivConText = createElement("p", {
    className: "div-text",
    textContent: "Login to see your playlists"
});
// const qawwaliDivCon = createHomeTabSongDiv(homeContentDiv, "QAWWALI");
const hindiSongDivCon = createHomeTabSongDiv(homeContentDiv, "HINDI SONGS");
const punjabiSongDivCon = createHomeTabSongDiv(homeContentDiv, "PUNJABI SONGS");
const englishSongDivCon = createHomeTabSongDiv(homeContentDiv, "ENGLISH SONGS");
const phonkSongDivCon = createHomeTabSongDiv(homeContentDiv, "PHONK SONGS");
const spanishSongDivCon = createHomeTabSongDiv(homeContentDiv, "SPANISH SONGS");
const tuneDivCon = createHomeTabSongDiv(homeContentDiv, "TUNES");
//#endregion UI
//#region functions
function loadRecentlyPlayedSongs() {
    clearContainer(recentlyPlayedDivCon);
    if (!signedIn) {
        recentlyPlayedDivConText.textContent = "LOGIN TO SEE RECENTLY PLAYED SONGS";
        recentlyPlayedDivCon.appendChild(recentlyPlayedDivConText);
        return;
    }
    if (currentUser.recentlyPlayedSongList.length == 0) {
        recentlyPlayedDivConText.textContent = "NO SONGS PLAYED RECENTLY";
        recentlyPlayedDivCon.appendChild(recentlyPlayedDivConText);
        return;
    }
    recentlyPlayedDivConText.textContent = "";
    currentUser.recentlyPlayedSongList.forEach((song) => {
        recentlyPlayedDivCon.appendChild(createSongBtn(song, songData[song].name, songData[song].artist, songData[song].image, "square"));
    });
}
/**
 *
 * @param {Array<string>} songList
 * @param {HTMLDivElement} songContainer
 */
function loadHomeSongs(songList, songContainer) {
    let i = 0;
    const f = songList.length;
    while (true) {
        if ((f - i) >= 3) {
            songContainer.appendChild(createRsongContainer(songList[i], songList[i + 1], songList[i + 2]));
            i += 3;
        }
        else {
            if ((f - i) == 2) {
                songContainer.appendChild(createRsongContainer(songList[i], songList[i + 1]));
                break;
            }
            else {
                if ((f - i) == 1) {
                    songContainer.appendChild(createRsongContainer(songList[i]));
                    break;
                }
                else {
                    break;
                }
            }
        }
    }
    songContainer.classList.add("rectangle-song-outer-container");
}
function createRsongContainer(s1, s2 = null, s3 = null) {
    const div = createElement("div", { className: "rectangle-song-container" });
    div.appendChild(createSongBtn(s1, songData[s1].name, songData[s1].artist, songData[s1].image, "rectangle"));
    if (s2) {
        div.appendChild(createSongBtn(s2, songData[s2].name, songData[s2].artist, songData[s2].image, "rectangle"));
        if (s3) {
            div.appendChild(createSongBtn(s3, songData[s3].name, songData[s3].artist, songData[s3].image, "rectangle"));
        }
    }
    return div;
}
export {};
//#endregion functions
//# sourceMappingURL=homeTab.js.map