if (!document.getElementById("login-css")) {
    const loginStyle = createElement("link", {
        id: "login-css",
        rel: "stylesheet",
        href: "./src/login/loginTab.css"
    });
    document.head.appendChild(loginStyle);
    loginStyle.addEventListener("load", async () => {
        loadingDiv.style.display = "none";
        main.style.display = "flex";
        openLoginPanel();
    });
}
function openLoginPanel() {
    if (loginPanel.style.display == "flex")
        return;
    loginPanel.style.display = "flex";
    loginPanel.style.animation = "slide-in-bottom 0.5s ease";
    loginPanel.classList.add("anim-appear-bottom-panel");
    loginPanel.addEventListener("animationend", () => {
        loginPanel.classList.remove("anim-appear-bottom-panel");
    });
}
function closeLoginPanel() {
    if (loginPanel.style.display = "none")
        return;
    loginPanel.style.animation = "slide-out-bottom 0.5s ease";
    loginPanel.classList.add("anim-disappear-bottom-panel");
    loginPanel.addEventListener("animationend", () => {
        loginPanel.style.display = "none";
        loginPanel.classList.remove("anim-disappear-bottom-panel");
    }, { once: true });
}
//VARIABLES ===========================
let registerWay = "signIn";
function changeMethod() {
    if (registerWay == "signIn") {
        formContainerLT.replaceChild(signUpForm, signInForm);
        pBottom.textContent = "Already have an account?";
        bnCreateAC.querySelector("p").textContent = "Sign in";
        registerWay = "signUp";
    }
    else {
        formContainerLT.replaceChild(signInForm, signUpForm);
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
    const userGivenFullName = fullNameInputSignUp.value.trim();
    const userGivenName = nameInputSignUp.value.trim();
    const userGivenPass = passInputSignUp.value;
    const userGivenConPass = conPassInputSignUp.value;
    bnSignUpCon.style.display = "flex";
    if (userGivenPass.trim().length < 1) {
        bnSignUpCon.style.display = "none";
        alert("Password cannot be empty!");
        return;
    }
    if (userGivenConPass !== userGivenPass) {
        bnSignUpCon.style.display = "none";
        alert("Passwords don't match!");
        return;
    }
    const response = await createNewUser(userGivenFullName, userGivenName, userGivenPass);
    if (response == "username") {
        bnSignUpCon.style.display = "none";
        alert("Username is not available!");
        return;
    }
    if (response) {
        await loginUser(userGivenName, userGivenPass);
        bnSignUpCon.style.display = "none";
        clearInputFields(formContainerLT);
        closeLoginPanel();
    }
}
//#region UI
const loginPanel_topBar = createElement("div", { className: "top-bar" });
loginPanel.appendChild(loginPanel_topBar);
loginPanel_topBar.appendChild(createElement("button", {
    className: "back-btn toggle",
    onclick: closeLoginPanel
}, [createElement("i", { className: "ph-bold ph-arrow-left" })]));
//#region register form
const formContainerLT = createElement("div", { className: "register-form-container" });
loginPanel.appendChild(formContainerLT);
//#region Sign-in form
const signInForm = createElement("form", {
    name: "login form",
    id: "login-form",
    className: "register-form",
    autocomplete: "on",
    action: "javascript:void(0)"
});
signInForm.addEventListener("submit", checkIdentity);
formContainerLT.appendChild(signInForm);
signInForm.appendChild(createElement("p", {
    className: "register-form-header",
    textContent: "SIGN IN"
}));
// MARK: username
const nameInputSignIn = createElement("input", {
    type: "text",
    name: "username",
    autocomplete: "username",
    autocapitalize: "off",
    autocorrect: false,
    required: true,
    placeholder: "Username",
    id: "verify-username",
    className: "register-form-input",
});
signInForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-user" }), nameInputSignIn]));
// MARK: password
const passInputSignIn = createElement("input", {
    type: "password",
    name: "password",
    autocomplete: "current-password",
    autocapitalize: "off",
    autocorrect: false,
    required: true,
    placeholder: "Password",
    id: "verify-password",
    className: "register-form-input"
});
const signInPassEye = createElement("i", {
    className: "ph-bold ph-eye-slash",
    title: "show/hide password",
    style: { cursor: "pointer" }
});
signInPassEye.addEventListener("click", () => { togglePasswordVisibilty(signInPassEye, passInputSignIn); });
signInForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), passInputSignIn, signInPassEye]));
// MARK: button
const bnSignIn = createElement("button", {
    title: "Sign in",
    type: "submit",
    className: "register-btn"
}, [createElement("p", { textContent: "Sign in" })]);
signInForm.appendChild(bnSignIn);
const bnSignInCon = createElement("div", { className: "register-btn-loader" });
bnSignInCon.appendChild(createElement("i", { className: "ph-bold ph-circle-notch" }));
bnSignIn.appendChild(bnSignInCon);
//#endregion Sign-in form
//#region Sign-up form
const signUpForm = createElement("form", {
    name: "signup form",
    id: "signup-form",
    autocomplete: "on",
    className: "register-form",
    action: "javascript:void(0)"
});
signUpForm.addEventListener("submit", checkAvailability);
signUpForm.appendChild(createElement("p", {
    className: "register-form-header",
    textContent: "SIGN UP"
}));
// MARK: full name
const fullNameInputSignUp = createElement("input", {
    name: "full name",
    type: "text",
    autocomplete: "name",
    autocapitalize: "off",
    autocorrect: true,
    required: true,
    placeholder: "Name",
    id: "full-name",
    className: "register-form-input"
});
signUpForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-user-rectangle" }), fullNameInputSignUp]));
// MARK: username
const nameInputSignUp = createElement("input", {
    name: "username",
    type: "text",
    autocomplete: "username",
    required: true,
    autocapitalize: "off",
    autocorrect: false,
    placeholder: "Username",
    id: "create-username",
    className: "register-form-input"
});
signUpForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-user" }), nameInputSignUp]));
// MARK: create password
const passInputSignUp = createElement("input", {
    name: "password",
    type: "password",
    autocomplete: "new-password",
    required: true,
    placeholder: "Create Password",
    id: "create-password",
    className: "register-form-input"
});
const signUpPassEye = createElement("i", {
    className: "ph-bold ph-eye-slash",
    style: { cursor: "pointer" }
});
signUpPassEye.addEventListener("click", () => { togglePasswordVisibilty(signUpPassEye, passInputSignUp); });
signUpForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), passInputSignUp, signUpPassEye]));
// MARK: confirm password
const conPassInputSignUp = createElement("input", {
    name: "confirm password",
    type: "password",
    autocomplete: "off",
    required: true,
    placeholder: "Confirm Password",
    id: "confirm-password",
    className: "register-form-input"
});
signUpForm.appendChild(createElement("div", {
    className: "register-form-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), conPassInputSignUp]));
// MARK: button
const bnSignUp = createElement("button", {
    title: "Sign up",
    type: "submit",
    className: "register-btn",
}, [createElement("p", { textContent: "Create account" })]);
signUpForm.appendChild(bnSignUp);
const bnSignUpCon = createElement("div", { className: "register-btn-loader" });
bnSignUpCon.appendChild(createElement("i", { className: "ph-bold ph-circle-notch" }));
bnSignUp.appendChild(bnSignUpCon);
//#endregion Sign-up form
const bottomContainerLT = createElement("div", { className: "login-panel-bottom-container" });
loginPanel.appendChild(bottomContainerLT);
const pBottom = createElement("p", { textContent: "Don't have an account?" });
bottomContainerLT.appendChild(pBottom);
const bnCreateAC = createElement("button", {
    className: "register-btn"
}, [createElement("p", { textContent: "Create account" })]);
bnCreateAC.addEventListener("click", changeMethod);
bottomContainerLT.appendChild(bnCreateAC);
export {};
//#endregion register form
//#endregion UI
//# sourceMappingURL=loginTab.js.map