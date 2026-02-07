// --- NEW GLOBAL STATE ---
let currentUser = null;
let songsList = [];
let artistsList = [];

// --- API HELPERS ---
async function apiRequest(endpoint, httpMethod = "GET", body = null) {
  console.log("request");

  const options = {
    httpMethod,
    headers: { "Content-Type": "application/json" }
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`/.netlify/functions/${endpoint}`, options);
  if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
  return await response.json();
}

async function startBackend() {
  loadingMessage.textContent = "progress: Initializing system...";
  loadingProgress.style.width = "30%";
  try {
    // Parallel loading for speed
    await Promise.all([
      fetchAllSongs()
      // fetchAllArtists()
    ]);

    checkLocalStorage();
  } catch (err) {
    console.error("Initialization failed:", err);
    loadingMessage.textContent = "Error: Database connection failed.";
  }
}
async function fetchAllSongs() {
  loadingMessage.textContent = "progress: Collecting music library...";
  // Gets all songs from database
  console.log('getting songs');
  // songsList = await apiRequest('get-songs');
  const englishSongs = await apiRequest('get-english-songs');
  loadHomeSongs(englishSongs, englishSongDivCon);
  // loadHomeSongs(hindiSongs, hindiSongDivCon);
  // loadHomeSongs(songsList, punjabiSongDivCon, "Punjabi");
  // loadHomeSongs(songsList, phonkSongDivCon, "Phonk");
  // loadHomeSongs(songsList, spanishSongDivCon, "Spanish");
  // loadHomeSongs(songsList, tuneDivCon, "Tunes");

  songAttendance();
}

async function fetchAllArtists() {
  loadingMessage.textContent = "progress: Collecting artists...";
  try {
    // You'll need a 'get-artists' Netlify function for this
    artistsList = await apiRequest('get-artists');
    artistAttendance();
  } catch (err) {
    console.warn("Could not load artists, but continuing...");
    artistAttendance(); // Still call this so the loader finishes
  }
}

// --- UPDATED ATTENDANCE LOGIC ---
// In your old code, you waited for 6 files. Now we wait for the SQL results.
let songLoaded = false;
function songAttendance() {
  songLoaded = true;
  loadingMessage.textContent = "progress: Songs loaded!";
  if (currentUser) updateUI();
}

let artistLoaded = false;
function artistAttendance() {
  artistLoaded = true;
  // If you have specific Artist UI updates, call them here
}

async function checkLocalStorage() {
  loadingMessage.textContent = "progress: Checking saved session...";
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    try {
      await loginUser(savedUser, savedPass);

      loadingStatusDiv.style.display = "none";
      loadingDiv.style.display = "none";
      main.style.display = "flex";
    } catch (err) {
      loadingMessage.textContent = "Session expired. Please log in.";
      localStorage.clear();
    }
  } else {
    loadingDiv.style.display = "none";
    main.style.display = "flex";
  }
}

async function loginUser(username, password) {
  loadingMessage.textContent = "progress: Authenticating...";
  loadingProgress.style.width = "95%";

  const data = await apiRequest('login', 'POST', { username, password });

  currentUser = data.user;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  userName = currentUser.username;
  userProfileName = currentUser.profilename;
  favouriteSongList = currentUser.favorites || [];

  showInfo();
  updateUI();
}

async function toggleFavorite(songID) {
  await apiRequest('toggle-like', 'POST', {
    userID: currentUser.userid,
    songID: songID
  });
}