if (!document.getElementById("contribution-css")) {
  addLink("contribution-css", "src/contribution/contributionTab.css", "stylesheet").onload = async () => {
    await startContribution();
    loadingDiv.style.display = "none";
    main.style.display = "flex";
    openContributionPanel();
  }
}

function openContributionPanel() {
  contributionPanel.style.display = "flex";
  contributionPanel.style.animation = "slide-in-bottom 0.5s ease";
}

function closeContributionPanel() {
  contributionPanel.style.animation = "slide-out-bottom 0.5s ease";
  contributionPanel.addEventListener("animationend", () => {
    contributionPanel.style.display = "none";
  }, { once: true });
}

//#region UI

const ct_topBar = createElement("div", { className: "panel-header" });
contributionPanel.appendChild(ct_topBar);

const ct_backBtn = createElement("button", {
  className: "back-btn toggle",
  onclick: closeContributionPanel
}, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]);
ct_topBar.appendChild(ct_backBtn);

const bnContributeCT = createElement("button", {
  className: "contribute-btn",
  onclick: goToInput,
  name: "Go to contribute form",
  title: "Open contribution form"
}, [ createElement("p", { textContent: "Add song" }) ]);
ct_topBar.appendChild(bnContributeCT);

const contributionContent = createElement("div", { className: "content" });
contributionPanel.appendChild(contributionContent);

const contributionInputOuterDiv = createElement("div", { className: "contribution-form-div" });

const contributionInputDiv = createElement("div", { className: "contribution-form" });
contributionInputOuterDiv.appendChild(contributionInputDiv);

const songNameInput = createElement("input", {
  type: "text",
  placeholder: "Title",
  id: "song-name-input",
  className: "contribution-form-input",
  autocomplete: false
});
contributionInputDiv.appendChild(createElement("div", {
  className: "contribution-form-input-div"
}, [ createElement("i", { className: "ph-bold ph-music-notes-simple" }), songNameInput ]));

const artistNameInputOuterDiv = createElement("div", { className: "artist-input-div" });
contributionInputDiv.appendChild(artistNameInputOuterDiv);

artistNameInputOuterDiv.appendChild(
  createElement("div", {
    className: "contribution-form-input-div"
  }, [
    createElement("i", { className: "ph-bold ph-user" }), 
    createElement("input", {
      type: "text",
      placeholder: "Artist",
      id: "artist-1",
      className: "contribution-form-input artist"
    })
  ])
);
const bnAddArtist = createElement("button", {
  className: "contribute-btn artist",
  onclick: addArtist
}, [ createElement("i", { className: "ph-bold ph-plus" }) ]);
artistNameInputOuterDiv.appendChild(bnAddArtist);

const imageLinkInput = createElement("input", {
  type: "text",
  placeholder: "Image link",
  id: "image-link-input",
  className: "contribution-form-input"
});
contributionInputDiv.appendChild(createElement("div", {
  className: "contribution-form-input-div"
}, [ createElement("i", { className: "ph-bold ph-link" }), imageLinkInput ]));

const songLinkInput = createElement("input", {
  type: "text",
  placeholder: "Song link",
  id: "song-link-input",
  className: "contribution-form-input"
});
contributionInputDiv.appendChild(createElement("div", {
  className: "contribution-form-input-div"
}, [ createElement("i", { className: "ph-bold ph-link" }), songLinkInput ]));

const songInfoInput = createElement("input", {
  type: "text",
  placeholder: "About song",
  id: "about-song-input",
  className: "contribution-form-input"
});
contributionInputDiv.appendChild(createElement("div", {
  className: "contribution-form-input-div"
}, [ createElement("i", { className: "ph-bold ph-info" }), songInfoInput ]));

const buttonDivCT = createElement("div", { className: "button-div-input-div" });
contributionInputOuterDiv.appendChild(buttonDivCT);

const bnAddCT = createElement("button", {
  className: "contribute-btn",
  onclick: addContribution
}, [ createElement("p", { textContent: "Add" }) ]);
buttonDivCT.appendChild(bnAddCT);

const messageDivCT = createElement("div", { className: "message-div" });
contributionInputOuterDiv.appendChild(messageDivCT);

messageDivCT.appendChild(createElement("p", {
  className: "message-text",
  textContent: "Your song will be added soon!"
}));
messageDivCT.appendChild(createElement("p", {
  className: "message-text",
  textContent: "It has been sent to review."
}));

const bnGotItCT = createElement("button", {
  className: "contribute-btn",
  onclick: hideMessageCT
}, [ createElement("p", { textContent: "Got it" }) ]);
messageDivCT.appendChild(bnGotItCT);

//#region contribution help
const contributionHelpDiv = createElement("div", { className: "contribution-help-content-div" });
contributionContent.appendChild(contributionHelpDiv);

contributionHelpDiv.appendChild(createElement("p", { className: "imp", textContent: "Thank you for contributing to our music library!" }));

contributionHelpDiv.appendChild(createElement("p", { className: "warning", textContent: "Please search for the song you want to add to ensure it doesn't already exist." }));

contributionHelpDiv.appendChild(createElement("p", { className: "imp very", textContent: "HOW TO ADD SONGS:" }));

contributionHelpDiv.appendChild(createElement("p", { className: "imp", textContent: "Before you start, make sure you have a dropbox account." }));

contributionHelpDiv.appendChild(createElement("p", { className: "steps-text", textContent: "STEP-1: FILL OUT THE SONG DETAILS" }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "On the contribution page, you will see a form with a few fields. Please fill them out accurately" }));

const songP = createElement("p", { className: "key-value", textContent: "Song name:" });
contributionHelpDiv.appendChild(songP)
const songSpan = createElement("span");
songP.appendChild(songSpan);
songSpan.textContent = "The full title of the song.";

const artistP = createElement("p", { className: "key-value", textContent: "Artist name:" });
contributionHelpDiv.appendChild(artistP)
const artistSpan = createElement("span");
artistP.appendChild(artistSpan);
artistSpan.textContent = "The name of the artist or band.";

const aboutSongP = createElement("p", { className: "key-value", textContent: "About the song:" });
contributionHelpDiv.appendChild(aboutSongP)
const aboutSongSpan = createElement("span");
aboutSongP.appendChild(aboutSongSpan);
aboutSongSpan.textContent = "A short description(please include the language of the song).";

contributionHelpDiv.appendChild(createElement("p", { className: "steps-text", textContent: "STEP-2: GET YOUR SONG LINK FROM DROPBOX" }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "An audio file of the song. We accept common formats like MP3, M4A, and WAV." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "Open the Dropbox app or website." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "Navigate to the song file you want to share." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "Tap on the three dots on the file" }));

const img1 = createElement("img");
contributionHelpDiv.appendChild(img1);
img1.src = "https://www.dropbox.com/scl/fi/9qck0zqiv5azseryhc5n5/ss_dropbpxUI.png?rlkey=aq2uexgg24bk1t2hr0hov4qkf&st=ym2s8din&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Tap share." }));

const img2 = createElement("img");
contributionHelpDiv.appendChild(img2);
img2.src = "https://www.dropbox.com/scl/fi/dp27z24p53dir7eti7t0u/ss_dropboxPopup.png?rlkey=2qe7m1azgtsqht1wo6v5b49sn&st=w1xapt3m&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Copy this link. This is the SONG LINK." }));

const img3 = createElement("img");
contributionHelpDiv.appendChild(img3);
img3.src = "https://www.dropbox.com/scl/fi/smbele1owrwdm52663m92/ss_shareWin.png?rlkey=ss610s5hkckd2v5r6kzvwojm6&st=vi684ig9&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Make sure the link's permissions are set to Anyone with the link can view" }));

const img4 = createElement("img");
contributionHelpDiv.appendChild(img4);
img4.src = "https://www.dropbox.com/scl/fi/r8zuotyea1elb2e9wst67/ss_access.png?rlkey=jzqunm61b2u8knqcmxon26qk8&st=gl3rsjwd&raw=1";

contributionHelpDiv.appendChild(createElement("p", { className: "steps-text", textContent: "STEP 3: FIND AN ALBUM ART" }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "An image for the song's album art. We recommend a high-quality square image." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "Open your browser." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "Search for the album art and tap on the image." }));

const img5 = createElement("img");
contributionHelpDiv.appendChild(img5);
img5.src = "https://www.dropbox.com/scl/fi/sftocqa3l51jcfok69905/ss_photos.png?rlkey=9g5y1cgrus1j11q2v0ou3hnbd&st=5tm0ovkn&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Press and hold the image until a popup appears." }));

contributionHelpDiv.appendChild(createElement("p", { textContent: "open the image in a new tab." }));

const img6 = createElement("img");
contributionHelpDiv.appendChild(img6);
img6.src = "https://www.dropbox.com/scl/fi/xutd6id5fysw9xsoek0h0/ss_withPopup.png?rlkey=dhbujr3n2gw21gnkm9afpu1u3&st=c88p7s0a&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Tap the link on your address bar." }));

const img7 = createElement("img");
contributionHelpDiv.appendChild(img7);
img7.src = "https://www.dropbox.com/scl/fi/9dejbjqno1800lu4disww/ss_imageTab.png?rlkey=cxk654utstoymqfbvwcbfqc5f&st=1v6b2fbs&raw=1";

contributionHelpDiv.appendChild(createElement("p", { textContent: "Copy this link.This is the IMAGE LINK" }));

const img8 = createElement("img");
contributionHelpDiv.appendChild(img8);
img8.src = "https://www.dropbox.com/scl/fi/pt7q1kri66cl0qkc0757i/ss_addressBar.png?rlkey=mzpio2fjzp3zhmzaaxwyd1jo8&st=jnn8ecv9&raw=1";

contributionHelpDiv.appendChild(createElement("p", { className: "steps-text", textContent: "STEP 4: SUBMIT YOUR CONTRIBUTION" }));

contributionHelpDiv.appendChild(createElement("p", { textContent: 'Paste the SONG LINK and IMAGE LINK into the respective fields on the form. Review all the information to ensure it\'s correct. Click the "ADD" button.' }));

//#endregion contribution help

//#endregion UI

// VARIABLES ============================
let artistNumber = 1;
let artistNameCT = [];
let songNameCT = null;
let songLinkCT = null;
let imageLinkCT = null;
let songInfoCT = null;
let contributer = null;

/** Contains data about all the conntributions @type {Object} */
let contributionRequestFile = null;

function goToInput() {
  history.pushState(null, null, "#/contributionTab/form");
  contributionContent.style.animation = "flash 0.2s ease";
  contributionContent.addEventListener( "animationend", () => {
    contributionContent.style.animation = "none";
    
    ct_backBtn.removeEventListener("click", closeContributionPanel);
    ct_backBtn.addEventListener("click", goToHelp);
    
    contributionContent.replaceChild( contributionInputOuterDiv, contributionHelpDiv);
    
    bnContributeCT.style.display = "none";
    ELforArtists();
  }, { once : true });
}

function goToHelp() {
  history.pushState(null, null, "#/contributionTab/help");
  contributionContent.style.animation = "flash 0.2s ease 1";
  contributionContent.addEventListener("animationend", () => {
    contributionContent.style.animation = "none";

    ct_backBtn.removeEventListener("click", goToHelp);
    ct_backBtn.addEventListener("click", closeContributionPanel);

    contributionContent.replaceChild(contributionHelpDiv, contributionInputOuterDiv);

    bnContributeCT.style.display = "flex";
  }, { once : true });
}

async function startContribution() {
  contributionRequestFile = await loadInfo("/JSON/addSong.json");
}

function addArtist() {
  artistNameInputOuterDiv.insertBefore(
  createElement("div", { className: "contribution-form-input-div" }, [
    createElement("i", { className: "ph-bold ph-user" }), 
    createElement("input", {
      type: "text",
      placeholder: "Artist",
      id: `artist-${artistNumber}`,
      className: "contribution-form-input artist"
    })
  ]),
  bnAddArtist
);
  artistNumber++;
  ELforArtists();
}

/** Adds Event Listeners to input for artists */
function ELforArtists() {
  document.querySelectorAll(".contribution-form-input.artist")
  .forEach(input => {
    input.addEventListener("focus", () => { bnAddArtist.style.display = "flex" });
    input.addEventListener("blur", () => {
      setTimeout(() => {
        const focusedElement = document.activeElement;
        if (!focusedElement.classList.contains("artist")) {
          bnAddArtist.style.display = "none";
        }
      }, 200);
    });
  });
}

function createID() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const millisecond = now.getMilliseconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${millisecond}`;
}

function addContribution() {
  if (checkFields()) {
    contributionPanel.style.display = "none";
    loadingDiv.style.display = "flex";
    contributionRequestFile[createID()] = {
      user: contributer,
      name: songNameCT,
      artist: artistNameCT,
      audio: songLinkCT,
      image: imageLinkCT,
      description: songInfoCT,
    };
    sendNotification(
      "noortaquee",
      "SONG REQUEST",
      `${contributer} requested to add a new song.`
    );
    dumpInfo("/JSON/addSong.json", contributionRequestFile).then(() => {
      clearInputFieldsCT();
      loadingDiv.style.display = "none";
      contributionPanel.style.display = "flex";
      showMessageCT();
    });
  }
}

function checkFields() {
  songNameCT = songNameInput.value;
  for (const i = 1; i <= artistNumber; i++) {
    artistNameCT.unshift(document.getElementById(`artist-${i}`).value);
  }
  songLinkCT = songLinkInput.value;
  imageLinkCT = imageLinkInput.value;
  songInfoCT = songInfoInput.value;
  contributer = userName;
  if (songNameCT.length < 1) {
    alert("Please enter the song name");
    return false;
  } else if (artistNameCT.length < 1) {
    alert("Please enter the artist name");
    return false;
  } else if (imageLinkCT.length < 1) {
    alert("Please enter the image link");
    return false;
  } else if (songLinkCT.length < 1) {
    alert("Please enter the song link");
    return false;
  } else if (songInfoCT.length < 1) {
    alert("Please enter atleast the language of the song");
    return false;
  } else {
    return true;
  }
}

function clearInputFieldsCT() {
  songNameInput.value = "";
  artistNameInput.value = "";
  songLinkInput.value = "";
  imageLinkInput.value = "";
  songInfoInput.value = "";
}

function showMessageCT() {
  messageDivCT.style.display = "flex";
  messageDivCT.style.animation = "slide-in-bottom 0.5s ease 1";
  setTimeout(() => {
    messageDivCT.style.animation = "none";
  }, 500);
}

function hideMessageCT() {
  messageDivCT.style.animation = "slide-out-bottom 0.5s ease";
  messageDivCT.addEventListener(
    "animationend",
    () => {
      messageDivCT.style.display = "none";
    },
    { once: true }
  );
}

