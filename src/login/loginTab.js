if (!document.getElementById("login-css")) {
  addLink("login-css", "src/login/loginTab.css", "stylesheet").onload = async () => {
    loadingDiv.style.display = "none";
    main.style.display = "flex";
    openLoginPanel();
  }
}

function openLoginPanel() {
  loginPanel.style.display = "flex";
  loginPanel.style.animation = "slide-in-bottom 0.5s ease";
}

function closeLoginPanel() {
  loginPanel.style.animation = "slide-out-bottom 0.5s ease";
  loginPanel.addEventListener("animationend", () => {
    loginPanel.style.display = "none";
  }, { once: true });
}

//VARIABLES ===========================
let registerWay = "signIn";

function changeMethod() {
  if (registerWay == "signIn") {
    formContainerLT.replaceChild(signUpContainer, signInContainer);
    pBottom.textContent = "Already have an account?";
    bnCreateAC.querySelector("p").textContent = "Sign in";
    registerWay = "signUp";
  } else {
    formContainerLT.replaceChild(signInContainer, signUpContainer);
    pBottom.textContent = "Don't have an account?";
    bnCreateAC.querySelector("p").textContent = "Create Account";
    registerWay = "signIn";
  }
  clearInputFieldsLT();
}


function clearInputFieldsLT() {
  nameInputSignIn.value = "";
  passInputSignIn.value = "";
  fullNameInputSignUp.value = "";
  nameInputSignUp.value = "";
  passInputSignUp.value = "";
  bnSignInCon.style.display = "none";
  bnSignUpCon.style.display = "none";
}

async function checkIdentity() {
  let userGivenName = nameInputSignIn.value.trim();
  let userGivenPass = passInputSignIn.value;

  bnSignInCon.style.display = "flex";

  const response = await loginUser(userGivenName, userGivenPass);

  if (response == "password") {
    alert("Incorrect Password!");
    bnSignInCon.style.display = "none";
  }
  else if (response == "username") {
    alert("Username not found!");
    bnSignInCon.style.display = "none";
  }
  else if (response) {
    bnSignInCon.style.display = "none";
    clearInputFields(formContainerLT);
    closeLoginPanel();
  }
}

async function checkAvailability() {
  let userGivenFullName = fullNameInputSignUp.value.trim();
  let userGivenName = nameInputSignUp.value.trim();
  let userGivenPass = passInputSignUp.value;
  
  if (usersList.includes(userGivenName)) { alert("Username is not available!"); return }
  else if (userGivenPass.trim().length < 1) { alert("Password cannot be empty!"); return }
  else if (userGivenFullName.length < 1) { alert("Please provide your full name!"); return }
  
  bnSignUpCon.style.display = "flex";
  await createNewUser(userGivenFullName, userGivenName, userGivenPass);
  await loginUser(userUID);
  clearInputFieldsLT();
  closeLoginPanel();
}

//#region UI
const lt_topBar = createElement("div", { className: "top-bar" });
loginPanel.appendChild(lt_topBar);

lt_topBar.appendChild(createElement("button", { className: "back-btn toggle", onclick: closeLoginPanel }, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));

//#region register form
const formContainerLT = createElement("div", { className: "register-form-container" });
loginPanel.appendChild(formContainerLT);

//#region Sign-in form
const signInContainer = createElement("div", { className: "register-form" });
formContainerLT.appendChild(signInContainer);

signInContainer.appendChild(createElement("p", { className: "register-form-header", textContent: "SIGN IN" }));

const nameInputSignIn = createElement("input", { type: "text", placeholder: "Username", id: "varify-username", className: "register-form-input" });
signInContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-user" }), nameInputSignIn ]));

const signInPassEye = createElement("i", { className: "ph-bold ph-eye-slash", onclick: () => { togglePasswordVisibilty(signInPassEye, passInputSignIn) }, style: { cursor: "pointer" } });
const passInputSignIn = createElement("input", { type: "password", placeholder: "Password", id: "varify-password", className: "register-form-input" });
signInContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-key" }), passInputSignIn, signInPassEye ]));

const bnSignIn = createElement("button", { className: "register-btn", onclick: checkIdentity }, [ createElement("p", { textContent: "Sign in" }) ]);
signInContainer.appendChild(bnSignIn);

const bnSignInCon = createElement("div", { className: "register-btn-loader" });
bnSignInCon.appendChild(createElement("i", { className: "ph-bold ph-circle-notch" }));
bnSignIn.appendChild(bnSignInCon);
//#endregion Sign-in form

//#region Sign-up form
const signUpContainer = createElement("div", { className: "register-form" });

signUpContainer.appendChild(createElement("p", { className: "register-form-header", textContent: "SIGN UP" }));

const fullNameInputSignUp = createElement("input", { type: "text", placeholder: "Name", id: "full-name", className: "register-form-input" });
signUpContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-user-rectangle" }), fullNameInputSignUp ]));

const nameInputSignUp = createElement("input", { type: "text", placeholder: "Username", id: "create-username", className: "register-form-input" });
signUpContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-user" }), nameInputSignUp ]));

const signUpPassEye = createElement("i", { className: "ph-bold ph-eye-slash", onclick: () => { togglePasswordVisibilty(signUpPassEye, passInputSignUp) }, style: { cursor: "pointer" } });
const passInputSignUp = createElement("input", { type: "password", placeholder: "Create Password", id: "create-password", className: "register-form-input" });
signUpContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-key" }), passInputSignUp, signUpPassEye ]));

const conPassInputSignUp = createElement("input", { type: "password", placeholder: "Confirm password", id: "confirm-password", className: "register-form-input" });
signUpContainer.appendChild(createElement("div", { className: "register-form-input-div" }, [ createElement("i", { className: "ph-bold ph-key" }), conPassInputSignUp ]));

const bnSignUp = createElement("button", { className: "register-btn", onclick: checkAvailability }, [ createElement("p", { textContent: "Create account" }) ]);
signUpContainer.appendChild(bnSignUp);

const bnSignUpCon = createElement("div", { className: "register-btn-loader" });
bnSignUpCon.appendChild(createElement("i", { className: "ph-bold ph-circle-notch" }));
bnSignUp.appendChild(bnSignUpCon);
//#endregion Sign-up form

const bottomContainerLT = createElement("div", { className: "login-panel-bottom-container" });
loginPanel.appendChild(bottomContainerLT);

const pBottom = createElement("p", { textContent: "Don't have an account?" });
bottomContainerLT.appendChild(pBottom);

const bnCreateAC = createElement("button", { className: "register-btn", onclick: changeMethod }, [ createElement("p", { textContent: "Create account" }) ]);
bottomContainerLT.appendChild(bnCreateAC);

//#endregion register form

//#endregion UI

//#region oload
loadingDiv.style.display = "none";
main.style.display = "flex";
openLoginPanel();
//#endregion oload
