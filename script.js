//ELEMENTS
let outerPlayerPanel = document.getElementById("outerPlayerPanel");
let togglePic = document.getElementById("togglePic");
let toggleLyr = document.getElementById("toggleLyr");
let pictureDiv = document.getElementById("pictureDiv");
let albumArt = document.getElementById("albumArt");
let trackName = document.getElementById("trackName");
let artistName = document.getElementById("artistName");
let bnPrev = document.getElementById("bnPrev");
let bnPlay = document.getElementById("bnPlay");
let bnNext = document.getElementById("bnNext");
let playIcon = document.createElement("i");
let pauseIcon = document.createElement("i");
let lyricsDiv = document.createElement("div");
let lyrics = document.createElement("p");
playIcon.className = "fa-solid fa-play";
pauseIcon.className = "fa-solid fa-pause";
lyricsDiv.className = "lyricsDiv";
lyrics.className = "lyrics";
lyricsDiv.appendChild(lyrics);
lyrics.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing.
    Necessitatibus, esse dolor repudiandae veniam rerum officiis!
    Nesciunt quos quas ipsa dolores deleniti dignissimos.
    Facilis voluptatibus molestiae dolores qui fuga harum.
    Consequuntur minima repudiandae, facere optio minus consequatur.
    Laborum voluptas repudiandae fugit quam autem accusantium!
    Eveniet quisquam ipsam officia, impedit cumque suscipit.
    Cumque ex ratione voluptatibus quam aut sit!
    Iste sint consequatur expedita reprehenderit assumenda voluptates!
    Et, amet suscipit. Odio enim unde illo?
    Et exercitationem id asperiores quod! Tenetur, earum.
    Blanditiis cum eligendi, alias iure explicabo culpa.
    Qui, repellat ea? Accusantium voluptates officia non!
    Natus voluptatem voluptatum numquam debitis error eum!
    Sed ipsam soluta dolore. Blanditiis, tenetur dicta.
    Sed enim in nostrum natus corrupti dignissimos.
    Nobis ab voluptatum veritatis doloremque, corrupti cum?
    Explicabo beatae eius quas numquam sequi dolorem.
    Dolore natus unde voluptate doloremque soluta fuga?
    Labore doloribus eos provident beatae minus exercitationem.
    Delectus sunt corporis id esse deleniti quae.
    Autem commodi veniam, molestias quos iure facilis?
    Rerum repellat facere eum? Fuga, totam ea?
    Vero nostrum perspiciatis, voluptates nulla soluta nisi.
    Dolorum distinctio adipisci architecto magnam. Ut, beatae.
    Iure a nisi, suscipit exercitationem cum omnis.
    Ullam perspiciatis similique tenetur adipisci, obcaecati doloribus.
    Et maiores ratione possimus, quos recusandae repellat?
    Repudiandae facilis id alias blanditiis possimus vitae.
    Nulla iusto exercitationem officia quis cupiditate ex?
    Nam pariatur, ratione debitis voluptas odio sapiente.
    Ducimus quaerat eum dolor quibusdam voluptatibus debitis.
    Sunt velit nesciunt consequuntur aliquid hic quis?
    Exercitationem culpa quibusdam, sapiente explicabo nostrum assumenda.
    Sed amet pariatur at nisi nihil earum!
    Ullam exercitationem veritatis aliquid ipsum dolorem? Dolorem.
    Ad eos, ipsum fuga quo dolorem ea?
    Non itaque ab placeat rem ipsa error?
    Corrupti quidem et labore, animi odit nisi.
    Cupiditate excepturi quo, vel ea asperiores reiciendis!
    Explicabo, possimus a veritatis facilis provident vitae.
    Sed eligendi magnam quam nesciunt illo expedita.
    Neque nesciunt, illum sit voluptas nemo iste.
    Dolor, autem nisi. Saepe ducimus asperiores doloribus.
    Blanditiis repellendus harum omnis ex deleniti eveniet.
    Sit incidunt nostrum dolores quidem necessitatibus laudantium?
    Magnam, possimus aliquid ducimus debitis recusandae aspernatur!
    Laboriosam a sit eum? Quia, fugiat quidem.
    Explicabo consequuntur minus quo veniam sed blanditiis.
    Eius necessitatibus aliquid officia mollitia eum repudiandae?
    Dolorem iure quisquam beatae delectus, quas placeat?
    Veniam possimus omnis magnam enim, rerum error!
    Distinctio reprehenderit quos aliquid expedita atque. Ut.
    Dignissimos maiores pariatur quod ullam voluptatibus dolorem?
    Doloribus fugiat veritatis consectetur voluptatem. Tempora, impedit.
    Accusantium asperiores dicta voluptatem tenetur quis voluptatibus!
    Voluptas vitae magnam ratione deleniti ducimus vero!
    Eaque rerum neque vero ut, obcaecati maiores.
    Voluptas excepturi id repudiandae, dolor rerum in!`;


//VARIABLES
let currentFocus = "picture";
let musicPlaying = false;
let currentSongIndex = 0;
let artList  = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6vlYHpmk5TiFilEwnBrTswfCgk-57n6UAiWzrtPRz7g2Nk1S4oRTxZ4&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2oNEeUrJkjcsTDLxn9BmmDF4e7i6dSW7cZUalpfE1zPjv7p_h-8Ehac&s=10",
  "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/c9/1e/f5c91ed4-f870-7af2-331a-4bbf0b84c8d7/074843931654.png/2048x2048bb.jpg"];
let songList = ["NOVA MARE", "MI GENTE","MONTAGEM FAVELA"];
let artistList = ["SOMEONEreally", "SOMEONEelse","Person"];


//FUNCTIONS
function removeFocus() {
  toggleLyr.style.backgroundColor = "transparent";
  togglePic.style.backgroundColor = "transparent";
  toggleLyr.style.fontWeight = "300";
  togglePic.style.fontWeight = "300";
  currentFocus = "";
}
function stopMusic() {
  albumArt.style.transform = "scale(0.9)";
  bnPlay.removeChild(pauseIcon);
  bnPlay.appendChild(playIcon);
  bnPlay.removeEventListener("click", stopMusic);
  bnPlay.addEventListener("click", startMusic);
  musicPlaying = false;
}
function startMusic() {
  albumArt.style.transform = "scale(1)";
  bnPlay.removeChild(playIcon);
  bnPlay.appendChild(pauseIcon);
  bnPlay.removeEventListener("click", startMusic);
  bnPlay.addEventListener("click", stopMusic);
  musicPlaying = true;
}


//BUTTON FUNCTIONS
function focusOn(part) {
  if (part == "picture") {
    if (currentFocus != "picture") {
      removeFocus();
      togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
      togglePic.style.fontWeight = "500";
      lyricsDiv.style.animationName = "disappear";
      lyricsDiv.style.animationDuration = "0.5s";
      lyricsDiv.addEventListener("animationend",function lTop() {
        lyricsDiv.removeEventListener("animationend",lTop);
        pictureDiv.removeChild(lyricsDiv);
        pictureDiv.appendChild(albumArt);
        albumArt.style.animationName = "appear";
        albumArt.style.animationDuration = "0.5s";
      });
    }
  } else {
    if (currentFocus != "lyrics") {
      removeFocus();
      toggleLyr.style.backgroundColor = "rgba(255,255,255,0.3)";
      toggleLyr.style.fontWeight = "500";
      albumArt.style.animationName = "disappear";
      albumArt.style.animationDuration = "0.5s";
      albumArt.addEventListener("animationend",function pTol() {
        albumArt.removeEventListener("animationend",pTol);
        pictureDiv.removeChild(albumArt);
        pictureDiv.appendChild(lyricsDiv);
        lyricsDiv.style.animationName = "appear";
        lyricsDiv.style.animationDuration = "0.5s";
      });
    }
  }
  currentFocus = part;
}

function changeState() {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}

function changeSong(order) {
  if (order === "next") {
    if (currentSongIndex < songList.length - 1) {
      currentSongIndex++;
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutBehind";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animateNext() {
          albumArt.removeEventListener("animationend",animateNext);
          albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
          albumArt.style.animation = "fadeInAhead";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
      }
    }
  } else {
    if (currentSongIndex > 0) {
      currentSongIndex--;
      if (pictureDiv.contains(albumArt)) {
        albumArt.style.animation = "fadeOutAhead";
        albumArt.style.animationDuration = "0.2s";
        albumArt.addEventListener("animationend",function animatePrev() {
          albumArt.removeEventListener("animationend",animatePrev);
          albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
          albumArt.style.animation = "fadeInBehind";
          albumArt.style.animationDuration = "0.2s";
        });
      } else {
        albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
      }
    }
  }
  trackName.textContent = songList[currentSongIndex];
  artistName.textContent = artistList[currentSongIndex];
  outerPlayerPanel.style.backgroundImage = `url(${artList[currentSongIndex]})`;
}


bnNext.addEventListener("click",() => changeSong("next"));
bnPrev.addEventListener("click",() => changeSong("prev"));
bnPlay.addEventListener("click", changeState);
togglePic.addEventListener("click",() => focusOn("picture"));
toggleLyr.addEventListener("click",() => focusOn("lyrics"));


//KEY BINDINGS
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    changeState();
  } else if (event.key === "ArrowRight") {
    changeSong("next");
  } else if (event.key === "ArrowLeft") {
    changeSong("prev");
  }
});


//INITIALIZATION
albumArt.style.backgroundImage = `url(${artList[currentSongIndex]})`;
outerPlayerPanel.style.backgroundImage = `url(${artList[currentSongIndex]})`;
trackName.textContent = songList[currentSongIndex];
artistName.textContent = artistList[currentSongIndex];
togglePic.style.backgroundColor = "rgba(255,255,255,0.3)";
togglePic.style.fontWeight = "500";
