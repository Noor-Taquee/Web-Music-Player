let loginPanel = document.createElement("div");
loginPanel.id = "loginPanel";
loginPanel.className = "loginPanel_darkMode";

let topBarLT = document.createElement("div");
loginPanel.appendChild(topBarLT);
topBarLT.id = "topBarLT";

let bnBackLT = document.createElement("button");
topBarLT.appendChild(bnBackLT);
bnBackLT.id = "bnBackLT";
bnBackLT.addEventListener("click", goBack);
let backIcon = document.createElement("span");
backIcon.className = "material-symbols-rounded";
backIcon.textContent = "arrow_back_ios_new";
bnBackLT.appendChild(backIcon);
let bnBackP = document.createElement("p");
bnBackLT.appendChild(bnBackP);
bnBackP.id = "bnBackP";
bnBackP.textContent = "BACK";


let signInContainer = document.createElement("div");
loginPanel.appendChild(signInContainer);
signInContainer.id = "signInContainer";

let loginHeaderSignIn = document.createElement("p");
signInContainer.appendChild(loginHeaderSignIn);
loginHeaderSignIn.id = "loginHeaderSignIn";
loginHeaderSignIn.textContent = "SIGN IN";

let nameDivSignIn = document.createElement("div");
signInContainer.appendChild(nameDivSignIn);
nameDivSignIn.id = "nameDivSignIn";
let nameInputSignIn = document.createElement("input");
nameDivSignIn.appendChild(nameInputSignIn);
nameInputSignIn.id = "nameInputSignIn";
nameInputSignIn.type = "text";
nameInputSignIn.placeholder = "USERNAME";

let passDivSignIn = document.createElement("div");
signInContainer.appendChild(passDivSignIn);
passDivSignIn.id = "paesDivSignIn";
let passInputSignIn = document.createElement("input");
passDivSignIn.appendChild(passInputSignIn);
passInputSignIn.id = "passInputSignIn";
passInputSignIn.type = "password";
passInputSignIn.placeholder = "PASSWORD";

let eyeIcon = document.createElement("span");
passDivSignIn.appendChild(eyeIcon);
eyeIcon.className = "material-symbols-rounded";
eyeIcon.textContent = "visibility";
eyeIcon.id = "eyeIcon";
eyeIcon.addEventListener("click", () => {
  if (passInputSignIn.type === "password") {
    passInputSignIn.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else {
    passInputSignIn.type = "password";
    eyeIcon.textContent = "visibility";
  }
  if (passInputSignUp.type === "password") {
    passInputSignUp.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else {
    passInputSignUp.type = "password";
    eyeIcon.textContent = "visibility";
  }
});

let bnSignIn = document.createElement("button");
signInContainer.appendChild(bnSignIn);
bnSignIn.id = "bnSignIn";
bnSignIn.textContent = "SIGN IN";
bnSignIn.addEventListener("click", checkIdentity);


let signUpContainer = document.createElement("div");
signUpContainer.id = "signUpContainer";

let loginHeaderSignUp = document.createElement("p");
signUpContainer.appendChild(loginHeaderSignUp);
loginHeaderSignUp.id = "loginHeaderSignUp";
loginHeaderSignUp.textContent = "SIGN UP";

let fullNameDivSignUp = document.createElement("div");
signUpContainer.appendChild(fullNameDivSignUp);
fullNameDivSignUp.id = "fullNameDivSignUp";
let fullNameInputSignUp = document.createElement("input");
fullNameDivSignUp.appendChild(fullNameInputSignUp);
fullNameInputSignUp.id = "fullNameInputSignUp";
fullNameInputSignUp.type = "text";
fullNameInputSignUp.placeholder = "FULL NAME";

let nameDivSignUp = document.createElement("div");
signUpContainer.appendChild(nameDivSignUp);
nameDivSignUp.id = "nameDivSignUp";
let nameInputSignUp = document.createElement("input");
nameDivSignUp.appendChild(nameInputSignUp);
nameInputSignUp.id = "nameInputSignUp";
nameInputSignUp.type = "text";
nameInputSignUp.placeholder = "USERNAME";

let passDivSignUp = document.createElement("div");
signUpContainer.appendChild(passDivSignUp);
passDivSignUp.id = "paesDivSignUp";
let passInputSignUp = document.createElement("input");
passDivSignUp.appendChild(passInputSignUp);
passInputSignUp.id = "passInputUp";
passInputSignUp.type = "password";
passInputSignUp.placeholder = "PASSWORD";

let bnSignUp = document.createElement("button");
signUpContainer.appendChild(bnSignUp);
bnSignUp.id = "bnSignUp";
bnSignUp.textContent = "SIGN UP";
bnSignUp.addEventListener("click", checkAvailability);


let bottomContainerLT = document.createElement("div");
loginPanel.appendChild(bottomContainerLT);
bottomContainerLT.id = "bottomContainerLT";

let pBottom = document.createElement("p");
bottomContainerLT.appendChild(pBottom);
pBottom.textContent = "Don't have an account?";

let bnCreateAC = document.createElement("button");
bottomContainerLT.appendChild(bnCreateAC);
bnCreateAC.id = "bnCreateAC";
bnCreateAC.textContent = "CREATE ACCOUNT";
bnCreateAC.addEventListener("click", changeMethod);




let registerWay = "signIn";

function goBack() {
  switchTo("accountPanel");
  clearInputFieldsLT();
  clearInputFieldsCT();
  bottomDiv.style.display = "flex";
}

function changeMethod() {
  if (registerWay == "signIn") {
    loginPanel.replaceChild(signUpContainer,signInContainer);
    passDivSignUp.appendChild(eyeIcon);
    pBottom.textContent = "Already have an account?";
    bnCreateAC.textContent = "SIGN IN";
    registerWay = "signUp";
  } else {
    loginPanel.replaceChild(signInContainer,signUpContainer);
    passDivSignIn.appendChild(eyeIcon);
    pBottom.textContent = "Don't have an account?";
    bnCreateAC.textContent = "CREATE ACCOUNT";
    registerWay = "signIn";
  }
  clearInputFieldsLT();
}

function checkIdentity() {
  let userGivenName = nameInputSignIn.value.trim();
  let userGivenPass = passInputSignIn.value;
  if (usersList.includes(userGivenName)) {
    if (data[userGivenName].password == userGivenPass) {
      userNameKey = userGivenName;
      main.style.display = "none";
      loadingDiv.style.display = "flex";
      fetchUserData(userGivenName).then(() => {
        main.style.display = "flex";
        loadingDiv.style.display = "none";
        goBack();
      })
    } else {
      alert("Incorrect Password!");
    }
  } else {
    alert("Username is not present!");
  }
}

function checkAvailability() {
  let userGivenFullName = fullNameInputSignUp.value.trim();
  let userGivenName = nameInputSignUp.value.trim();
  let userGivenPass = passInputSignUp.value;
  if (usersList.includes(userGivenName)) {
    alert("Username is not available!");
  } else if (userGivenPass.trim().length < 1) {
    alert("Password cannot be empty!");
  } else if (userGivenFullName.length < 1) {
    alert("Please provide your full name!");
  }else {
    data[userGivenName] = {"profileName":userGivenFullName,
      "profilePic":"",
      "password":userGivenPass,
      "playlistList":[],
      "recentlyPlayedSongList":[],
      "searchedTextList":[],
      "searchedSongList":[],
      "favouriteSongList":[],
      "notificationsList":[]
    };
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    sendNotificationLT(userGivenFullName);
    updateDataFile().then(() => {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
      fetchUserData(userGivenName);
      goBack();
    })
  }
}

function clearInputFieldsLT() {
  nameInputSignIn.value = "";
  passInputSignIn.value = "";
  fullNameInputSignUp.value = "";
  nameInputSignUp.value = "";
  passInputSignUp.value = "";
}

function sendNotificationLT(userFullName) {
  data["noortaquee"].notificationsList.push({
    "title": "NEW ACCOUNT CREATED",
    "date": `${genDate()}`,
    "time":`${genTime()}`,
    "content": `${userFullName} created a new account.`,
  })
}

function genDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function genTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

attend();