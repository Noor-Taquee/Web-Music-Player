let contributionPanel = document.getElementById("contribution-panel");

let topBarCT = createDiv("top-bar");
contributionPanel.appendChild(topBarCT);

let bnBackCT = createButton(
  null,
  "back-btn",
  createIcon("bold", "arrow-left"),
  null,
  goBackCT
);
topBarCT.appendChild(bnBackCT);

let bnContributeCT = createButton(
  null,
  "contribute-btn",
  null,
  "Add song",
  goToInput
);
topBarCT.appendChild(bnContributeCT);

let contributionContent = createDiv("content");
contributionPanel.appendChild(contributionContent);

let contributionInputOuterDiv = createDiv("contribution-form-div");

let contributionInputDiv = createDiv("contribution-form");
contributionInputOuterDiv.appendChild(contributionInputDiv);

let songNameInput = createInput(
  "text",
  "Title",
  null,
  "contribution-form-input"
);
contributionInputDiv.appendChild(
  createInputDiv(
    "contribution-form-input-div",
    createIcon("bold", "music-notes-simple"),
    songNameInput
  )
);

let artistNameInputOuterDiv = createDiv("artist-input-div");
contributionInputDiv.appendChild(artistNameInputOuterDiv);

artistNameInputOuterDiv.appendChild(
  createInputDiv(
    "contribution-form-input-div",
    createIcon("bold", "user"),
    createInput("text", "Artist", "artist-1", "contribution-form-input artist")
  )
);
let bnAddArtist = createButton(
  null,
  "contribute-btn artist",
  createIcon("bold", "plus"),
  null,
  addArtist
);
artistNameInputOuterDiv.appendChild(bnAddArtist);

let imageLinkInput = createInput(
  "text",
  "Image link",
  null,
  "contribution-form-input"
);
contributionInputDiv.appendChild(
  createInputDiv(
    "contribution-form-input-div",
    createIcon("bold", "link"),
    imageLinkInput
  )
);

let songLinkInput = createInput(
  "text",
  "Song link",
  null,
  "contribution-form-input"
);
contributionInputDiv.appendChild(
  createInputDiv(
    "contribution-form-input-div",
    createIcon("bold", "link"),
    songLinkInput
  )
);

let songInfoInput = createInput(
  "text",
  "About song",
  null,
  "contribution-form-input"
);
contributionInputDiv.appendChild(
  createInputDiv(
    "contribution-form-input-div",
    createIcon("bold", "info"),
    songInfoInput
  )
);

let buttonDivCT = createDiv("button-div-input-div");
contributionInputOuterDiv.appendChild(buttonDivCT);

let bnAddCT = createButton(
  null,
  "contribute-btn",
  null,
  "Add",
  addContribution
);
buttonDivCT.appendChild(bnAddCT);

let messageDivCT = createDiv("message-div");
contributionInputOuterDiv.appendChild(messageDivCT);

messageDivCT.appendChild(
  createTextField("message-text", "Your song will be added soon!")
);
messageDivCT.appendChild(
  createTextField("message-text", "It has been sent to review.")
);
let bnGotItCT = createButton(
  null,
  "contribute-btn",
  null,
  "Got it",
  hideMessageCT
);
messageDivCT.appendChild(bnGotItCT);

let contributionHelpDiv = createDiv("contribution-help-content-div");
contributionContent.appendChild(contributionHelpDiv);

let pThank = createTextField(
  null,
  "Thank you for contributing to our music library!"
);
contributionHelpDiv.appendChild(pThank);

let p2 = document.createElement("p");
contributionHelpDiv.appendChild(p2);
p2.style.color = "red";
p2.textContent =
  "Please search for the song you want to add to ensure it doesn't already exist.";

let p3 = document.createElement("p");
contributionHelpDiv.appendChild(p3);
p3.textContent = "HOW TO ADD SONGS:";

let p4 = document.createElement("p");
contributionHelpDiv.appendChild(p4);
p4.textContent = "Before you start, make sure you have a dropbox account.";

let p5 = document.createElement("p");
contributionHelpDiv.appendChild(p5);
p5.className = "steps-text";
p5.textContent = "STEP 1: FILL OUT THE SONG DETAILS";

let p6 = document.createElement("p");
contributionHelpDiv.appendChild(p6);
p6.textContent =
  "On the contribution page, you will see a form with a few fields. Please fill them out accurately";

let p7 = document.createElement("p");
contributionHelpDiv.appendChild(p7);
p7.textContent = "SONG NAME: The full title of the song.";

let p8 = document.createElement("p");
contributionHelpDiv.appendChild(p8);
p8.textContent = "ARTIST NAME: The name of the artist or band.";

let p9 = document.createElement("p");
contributionHelpDiv.appendChild(p9);
p9.textContent =
  "ABOUT THE SONG: A short description(please include the language of the song).";

let p10 = document.createElement("p");
contributionHelpDiv.appendChild(p10);
p10.className = "steps-text";
p10.textContent = "STEP 2: GET YOUR SONG LINK FROM DROPBOX";

let p11 = document.createElement("p");
contributionHelpDiv.appendChild(p11);
p11.textContent =
  "An audio file of the song. We accept common formats like MP3, M4A, and WAV.";

let p12 = document.createElement("p");
contributionHelpDiv.appendChild(p12);
p12.textContent = "Open the Dropbox app or website.";

let p13 = document.createElement("p");
contributionHelpDiv.appendChild(p13);
p13.textContent = "Navigate to the song file you want to share.";

let p14 = document.createElement("p");
contributionHelpDiv.appendChild(p14);
p14.textContent = "Tap on the three dots on the file";

let img1 = document.createElement("img");
contributionHelpDiv.appendChild(img1);
img1.src =
  "https://www.dropbox.com/scl/fi/9qck0zqiv5azseryhc5n5/ss_dropbpxUI.png?rlkey=aq2uexgg24bk1t2hr0hov4qkf&st=ym2s8din&raw=1";

let p15 = document.createElement("p");
contributionHelpDiv.appendChild(p15);
p15.textContent = "Tap share.";

let img2 = document.createElement("img");
contributionHelpDiv.appendChild(img2);
img2.src =
  "https://www.dropbox.com/scl/fi/dp27z24p53dir7eti7t0u/ss_dropboxPopup.png?rlkey=2qe7m1azgtsqht1wo6v5b49sn&st=w1xapt3m&raw=1";

let p16 = document.createElement("p");
contributionHelpDiv.appendChild(p16);
p16.textContent = "Copy this link. This is the SONG LINK.";

let img3 = document.createElement("img");
contributionHelpDiv.appendChild(img3);
img3.src =
  "https://www.dropbox.com/scl/fi/smbele1owrwdm52663m92/ss_shareWin.png?rlkey=ss610s5hkckd2v5r6kzvwojm6&st=vi684ig9&raw=1";

let p17 = document.createElement("p");
contributionHelpDiv.appendChild(p17);
p17.textContent =
  "Make sure the link's permissions are set to Anyone with the link can view";

let img4 = document.createElement("img");
contributionHelpDiv.appendChild(img4);
img4.src =
  "https://www.dropbox.com/scl/fi/r8zuotyea1elb2e9wst67/ss_access.png?rlkey=jzqunm61b2u8knqcmxon26qk8&st=gl3rsjwd&raw=1";

let p18 = document.createElement("p");
contributionHelpDiv.appendChild(p18);
p18.className = "steps-text";
p18.textContent = "STEP 3: FIND AN ALBUM ART";

let p19 = document.createElement("p");
contributionHelpDiv.appendChild(p19);
p19.textContent =
  "An image for the song's album art. We recommend a high-quality square image.";

let p20 = document.createElement("p");
contributionHelpDiv.appendChild(p20);
p20.textContent = "Open your browser.";

let p21 = document.createElement("p");
contributionHelpDiv.appendChild(p21);
p21.textContent = "Search for the album art and tap on the image.";

let img5 = document.createElement("img");
contributionHelpDiv.appendChild(img5);
img5.src =
  "https://www.dropbox.com/scl/fi/sftocqa3l51jcfok69905/ss_photos.png?rlkey=9g5y1cgrus1j11q2v0ou3hnbd&st=5tm0ovkn&raw=1";

let p22 = document.createElement("p");
contributionHelpDiv.appendChild(p22);
p22.textContent = "Press and hold the image until a popup appears.";

let p23 = document.createElement("p");
contributionHelpDiv.appendChild(p23);
p23.textContent = "open the image in a new tab.";

let img6 = document.createElement("img");
contributionHelpDiv.appendChild(img6);
img6.src =
  "https://www.dropbox.com/scl/fi/xutd6id5fysw9xsoek0h0/ss_withPopup.png?rlkey=dhbujr3n2gw21gnkm9afpu1u3&st=c88p7s0a&raw=1";

let p24 = document.createElement("p");
contributionHelpDiv.appendChild(p24);
p24.textContent = "Tap the link on your address bar.";

let img7 = document.createElement("img");
contributionHelpDiv.appendChild(img7);
img7.src =
  "https://www.dropbox.com/scl/fi/9dejbjqno1800lu4disww/ss_imageTab.png?rlkey=cxk654utstoymqfbvwcbfqc5f&st=1v6b2fbs&raw=1";

let p25 = document.createElement("p");
contributionHelpDiv.appendChild(p25);
p25.textContent = "Copy this link.This is the IMAGE LINK";

let img8 = document.createElement("img");
contributionHelpDiv.appendChild(img8);
img8.src =
  "https://www.dropbox.com/scl/fi/pt7q1kri66cl0qkc0757i/ss_addressBar.png?rlkey=mzpio2fjzp3zhmzaaxwyd1jo8&st=jnn8ecv9&raw=1";

let p26 = document.createElement("p");
contributionHelpDiv.appendChild(p26);
p26.className = "steps-text";
p26.textContent = "STEP 4: SUBMIT YOUR CONTRIBUTION";

let p27 = document.createElement("p");
contributionHelpDiv.appendChild(p27);
p27.textContent =
  'Paste the SONG LINK and IMAGE LINK into the respective fields on the form. Review all the information to ensure it\'s correct. Click the "ADD" button.';

// VARIABLES ============================
let artistNumber = 2;
let songNameCT = null;
let artistNameCT = [];
let songLinkCT = null;
let imageLinkCT = null;
let songInfoCT = null;
let contributer = null;
let contributionRequestFile = null;

function goBackCT() {
  contributionPanel.style.animation = "slideDown 0.5s ease";
  contributionPanel.addEventListener(
    "animationend",
    () => {
      contributionPanel.style.animation = "none";
      contributionPanel.style.display = "none";
    },
    { once: true }
  );
}

function goToInput() {
  contributionContent.style.animation = "flash 0.2s ease";
  contributionContent.addEventListener(
    "animationend",
    () => {
      contributionContent.style.animation = "none";
      bnBackCT.removeEventListener("click", goBackCT);
      bnBackCT.addEventListener("click", goToHelp);
      contributionContent.replaceChild(
        contributionInputOuterDiv,
        contributionHelpDiv
      );
      bnContributeCT.style.display = "none";
      ELforArtists();
    },
    { once: true }
  );
  // history.pushState(goToHelp, null, "/contributionTab");
}

function goToHelp() {
  contributionContent.style.animation = "flash 0.2s ease 1";
  contributionContent.addEventListener(
    "animationend",
    () => {
      contributionContent.style.animation = "none";
      bnBackCT.removeEventListener("click", goToHelp);
      bnBackCT.addEventListener("click", goBackCT);
      contributionContent.replaceChild(
        contributionHelpDiv,
        contributionInputOuterDiv
      );
      bnContributeCT.style.display = "flex";
    },
    { once: true }
  );
}

function startContribution() {
  return loadInfo("/JSON/addSong.json").then((data) => {
    contributionRequestFile = data;
  });
}

function addArtist() {
  artistNameInputOuterDiv.insertBefore(
    createInputDiv(
      "contribution-form-input-div",
      createIcon("bold", "user"),
      createInput(
        "text",
        "Artist",
        `artist-${artistNumber}`,
        "contribution-form-input artist"
      )
    ),
    bnAddArtist
  );
  artistNumber++;
  ELforArtists();
}
function ELforArtists() {
  let artistInputs = document.querySelectorAll(
    ".contribution-form-input.artist"
  );
  for (let input of artistInputs) {
    input.addEventListener("focus", () => {
      bnAddArtist.style.display = "flex";
    });
    input.addEventListener("blur", () => {
      setTimeout(() => {
        let fE = document.activeElement;
        if (!fE.classList.contains("artist")) {
          bnAddArtist.style.display = "none";
        }
      }, 200);
    });
  }
}

function createID() {
  let now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let millisecond = now.getMilliseconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${millisecond}`;
}

function addContribution() {
  showMessageCT(); // Temporary
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
      updateDataFile();
      clearInputFieldsCT();
      loadingDiv.style.display = "none";
      contributionPanel.style.display = "flex";
      showMessageCT();
    });
  }
}

function checkFields() {
  songNameCT = songNameInput.value;
  for (let i = 1; i <= artistNumber; i++) {
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
  messageDivCT.style.animation = "slideUp 0.5s ease 1";
  setTimeout(() => {
    messageDivCT.style.animation = "none";
  }, 500);
}

function hideMessageCT() {
  messageDivCT.style.animation = "slideDown 0.5s ease";
  messageDivCT.addEventListener(
    "animationend",
    () => {
      messageDivCT.style.display = "none";
    },
    { once: true }
  );
}

attend();