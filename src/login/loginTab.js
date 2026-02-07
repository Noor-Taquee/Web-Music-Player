const loginPanel = document.getElementById("login-panel");

const topBarLT = createDiv("top-bar");
loginPanel.appendChild(topBarLT);

topBarLT.appendChild(createButton( null, "back-btn", createIcon("bold", "arrow-left"), null, goBackLT));

// #region register form
const formContainerLT = createDiv("register-form-container");
loginPanel.appendChild(formContainerLT);

// #region Sign-in form
const signInContainer = document.createElement("div");
formContainerLT.appendChild(signInContainer);
signInContainer.className = "register-form";

signInContainer.appendChild(createTextField("register-form-header", "SIGN IN"));

const nameInputSignIn = createInput("text", "Username", "varify-username", "register-form-input");
signInContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user"),
    nameInputSignIn
  )
);

const signInPassEye = createIcon("bold", "eye", f_signInPassEye);
const passInputSignIn = createInput("password", "Password", "varify-password", "register-form-input");
signInContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    passInputSignIn,
    signInPassEye
  )
);

const bnSignIn = createButton(
  null,
  "register-btn",
  null,
  "Sign in",
  checkIdentity
);
signInContainer.appendChild(bnSignIn);

const bnSignInCon = createDiv("register-btn-loader");
bnSignInCon.appendChild(createIcon("bold", "circle-notch"));
bnSignIn.appendChild(bnSignInCon);
// #endregion Sign-in form

// #region Sign-up form
const signUpContainer = document.createElement("div");
signUpContainer.className = "register-form";

signUpContainer.appendChild(createTextField("register-form-header", "SIGN UP"));

const fullNameInputSignUp = createInput("text", "Name", "full-name", "register-form-input");
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user-rectangle"),
    fullNameInputSignUp
  )
);

const nameInputSignUp = createInput("text", "Username", "create-username", "register-form-input");
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user"),
    nameInputSignUp
  )
);

const signUpPassEye = createIcon("bold", "eye-slash", f_signUnPassEye);
const passInputSignUp = createInput("password", "Create Password", "create-password", "register-form-input");
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    passInputSignUp,
    signUpPassEye
  )
);

const conPassInputSignUp = createInput("password", "Confirm password", "confirm-password", "register-form-input");
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    conPassInputSignUp
  )
);

const bnSignUp = createButton(null, "register-btn", null, "Create account", checkAvailability);
signUpContainer.appendChild(bnSignUp);

const bnSignUpCon = createDiv("register-btn-loader");
bnSignUpCon.appendChild(createIcon("bold", "circle-notch"));
bnSignUp.appendChild(bnSignUpCon);
// #endregion Sign-up form


let bottomContainerLT = createDiv("login-panel-bottom-container");
loginPanel.appendChild(bottomContainerLT);

const pBottom = createTextField(null, "Don't have an account?");
bottomContainerLT.appendChild(pBottom);

let bnCreateAC = createButton(null, "register-btn", null, "Create account", changeMethod);
bottomContainerLT.appendChild(bnCreateAC);

// #endregion register form
//VARIABLES ===========================
let registerWay = "signIn";

function goBackLT() {
  loginPanel.style.animation = "slideDown 0.5s ease";
  loginPanel.addEventListener("animationend", () => {
      loginPanel.style.display = "none";
    },
    { once: true }
  );
}

function changeMethod() {
  if (registerWay == "signIn") {
    formContainerLT.replaceChild(signUpContainer, signInContainer);
    pBottom.textContent = "Already have an account?";
    bnCreateAC.textContent = "Sign in";
    registerWay = "signUp";
  } else {
    formContainerLT.replaceChild(signInContainer, signUpContainer);
    pBottom.textContent = "Don't have an account?";
    bnCreateAC.textContent = "Create Account";
    registerWay = "signIn";
  }
  clearInputFieldsLT();
}

function f_signInPassEye() {
  if (signInPassEye.classList.contains("ph-eye-slash")) {
    signInPassEye.classList.remove("ph-eye-slash");
    signInPassEye.classList.add("ph-eye");
    passInputSignIn.type = "text";
  } else {
    signInPassEye.classList.remove("ph-eye");
    signInPassEye.classList.add("ph-eye-slash");
    passInputSignIn.type = "password";
  }
}

function f_signUnPassEye() {
  if (signUpPassEye.classList.contains("ph-eye-slash")) {
    signUpPassEye.classList.remove("ph-eye-slash");
    signUpPassEye.classList.add("ph-eye");
    passInputSignUp.type = "text";
  } else {
    signUpPassEye.classList.remove("ph-eye");
    signUpPassEye.classList.add("ph-eye-slash");
    passInputSignUp.type = "password";
  }
}

function checkIdentity() {
  let userGivenName = nameInputSignIn.value.trim();
  let userGivenPass = passInputSignIn.value;
}

function checkAvailability() {
  let userGivenFullName = fullNameInputSignUp.value.trim();
  let userGivenName = nameInputSignUp.value.trim();
  let userGivenPass = passInputSignUp.value;
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

attend();