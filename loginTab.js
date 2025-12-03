let loginPanel = document.getElementById("login-panel");

let topBarLT = document.createElement("div");
loginPanel.appendChild(topBarLT);
topBarLT.className = "top-bar";

topBarLT.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    goBackLT
  )
);

let formContainerLT = document.createElement("div");
loginPanel.appendChild(formContainerLT);
formContainerLT.className = "register-form-container";

let signInContainer = document.createElement("div");
formContainerLT.appendChild(signInContainer);
signInContainer.className = "register-form";

let loginHeaderSignIn = document.createElement("p");
signInContainer.appendChild(loginHeaderSignIn);
loginHeaderSignIn.className = "register-form-header";
loginHeaderSignIn.textContent = "SIGN IN";

let nameInputSignIn = createInput(
  "text",
  "Username",
  "varify-username",
  "register-form-input"
);
signInContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user"),
    nameInputSignIn
  )
);

let signInPassEye = createIcon("bold", "eye", f_signInPassEye);
let passInputSignIn = createInput(
  "password",
  "Password",
  "varify-password",
  "register-form-input"
);
signInContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    passInputSignIn,
    signInPassEye
  )
);

let bnSignIn = createButton(
  null,
  "register-btn",
  null,
  "Sign in",
  checkIdentity
);
signInContainer.appendChild(bnSignIn);
let bnSignInCon = createDiv("register-btn-loader");
bnSignInCon.appendChild(createIcon("bold", "circle-notch"));
bnSignIn.appendChild(bnSignInCon);

let signUpContainer = document.createElement("div");
signUpContainer.className = "register-form";

let loginHeaderSignUp = document.createElement("p");
signUpContainer.appendChild(loginHeaderSignUp);
loginHeaderSignUp.className = "register-form-header";
loginHeaderSignUp.textContent = "SIGN UP";

let fullNameInputSignUp = createInput(
  "text",
  "Name",
  "full-name",
  "register-form-input"
);
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user-rectangle"),
    fullNameInputSignUp
  )
);

let nameInputSignUp = createInput(
  "text",
  "Username",
  "create-username",
  "register-form-input"
);
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "user"),
    nameInputSignUp
  )
);

let signUpPassEye = createIcon("bold", "eye-slash", f_signUnPassEye);
let passInputSignUp = createInput(
  "password",
  "Create Password",
  "create-password",
  "register-form-input"
);
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    passInputSignUp,
    signUpPassEye
  )
);

let conPassInputSignUp = createInput(
  "password",
  "Confirm password",
  "confirm-password",
  "register-form-input"
);
signUpContainer.appendChild(
  createInputDiv(
    "register-form-input-div",
    createIcon("bold", "key"),
    conPassInputSignUp
  )
);

let bnSignUp = createButton(
  null,
  "register-btn",
  null,
  "Create account",
  checkAvailability
);
signUpContainer.appendChild(bnSignUp);
let bnSignUpCon = createDiv("register-btn-loader");
bnSignUpCon.appendChild(createIcon("bold", "circle-notch"));
bnSignUp.appendChild(bnSignUpCon);

let bottomContainerLT = document.createElement("div");
loginPanel.appendChild(bottomContainerLT);
bottomContainerLT.className = "login-panel-bottom-container";

let pBottom = createTextField(null, "Don't have an account?");
bottomContainerLT.appendChild(pBottom);

let bnCreateAC = createButton(
  null,
  "register-btn",
  null,
  "Create account",
  changeMethod
);
bottomContainerLT.appendChild(bnCreateAC);

//VARIABLES ===========================
let registerWay = "signIn";

function goBackLT() {
  loginPanel.style.animation = "slideDown 0.5s ease";
  loginPanel.addEventListener(
    "animationend",
    () => {
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
  if (usersList.includes(userGivenName)) {
    if (userUIDmap[userGivenName][1] == userGivenPass) {
      bnSignInCon.style.display = "flex";
      userUID = userUIDmap[userGivenName][0];
      loginUser(userUID).then(() => {
        clearInputFieldsLT();
        goBackLT();
      });
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
  } else {
    bnSignUpCon.style.display = "flex";
    createNewUser(userGivenFullName, userGivenName, userGivenPass).then(() => {
      loginUser(userUID);
      clearInputFieldsLT();
      goBackLT();
    });
  }
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