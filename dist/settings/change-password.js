function openChangePasswordPanel() {
    openSubPanel(settingsPanel, settingsPanelContent, changePassPanel);
}
function closeChangePasswordPanel() {
    openSubPanel(settingsPanel, changePassPanel, settingsPanelContent);
}
//#region UI
const changePassPanel = createElement("div", { className: "settings-tab-inner-panel" });
const changePassPanelTopBar = createElement("div", { className: "top-bar" });
changePassPanel.appendChild(changePassPanelTopBar);
changePassPanelTopBar.appendChild(createElement("button", {
    className: "back-btn toggle",
    onclick: closeChangePasswordPanel
}, [createElement("i", { className: "ph-bold ph-arrow-left" })]));
changePassPanelTopBar.appendChild(createElement("p", {
    className: "top-bar-text",
    textContent: "Change password"
}));
const changePassConDiv = createElement("div", { className: "content" });
changePassPanel.appendChild(changePassConDiv);
const changePassForm = createElement("form", {
    name: "change password",
    autocomplete: "on",
    className: "change-pass-form",
    action: "javascript:void(0)"
});
changePassForm.addEventListener("submit", f_confirmChangePassword);
changePassConDiv.appendChild(changePassForm);
const oldPasswordInputEye = createElement("i", {
    className: "ph-bold ph-eye-slash",
    style: { cursor: "pointer" },
    onclick: () => { togglePasswordVisibilty(oldPasswordInputEye, oldPasswordInput); },
});
const oldPasswordInput = createElement("input", {
    name: "current password",
    type: "password",
    autocomplete: "current-password",
    required: true,
    placeholder: "Current password",
    id: "current-password",
    className: "change-pass-input"
});
changePassForm.appendChild(createElement("div", {
    className: "change-pass-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), oldPasswordInput]));
const newPasswordInputEye = createElement("i", {
    className: "ph-bold ph-eye-slash",
    style: { cursor: "pointer" },
    onclick: () => { togglePasswordVisibilty(newPasswordInputEye, newPasswordInput); },
});
const newPasswordInput = createElement("input", {
    nam: "new password",
    type: "password",
    autocomplete: "new-password",
    required: true,
    placeholder: "New password",
    id: "create-new-password",
    className: "change-pass-input"
});
changePassForm.appendChild(createElement("div", {
    className: "change-pass-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), newPasswordInput, newPasswordInputEye]));
const confirmPasswordInput = createElement("input", {
    name: "confirm password",
    type: "password",
    autocomplete: "off",
    required: true,
    placeholder: "Confirm password",
    id: "confirm-create-new-password",
    className: "change-pass-input"
});
changePassForm.appendChild(createElement("div", {
    className: "change-pass-input-div"
}, [createElement("i", { className: "ph-bold ph-key" }), confirmPasswordInput]));
changePassForm.appendChild(createElement("button", {
    type: "submit",
    className: "change-pass-btn",
}, [createElement("p", { textContent: "Change Password" })]));
changePassForm.appendChild(createElement("button", {
    className: "change-pass-btn cancel",
    onclick: () => { clearInputFields(changePassForm); closeChangePasswordPanel(); }
}, [createElement("p", { textContent: "Cancel" })]));
//#endregion UI
function f_confirmChangePassword() {
    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (oldPassword !== currentUser.password) {
        alert("Old password is incorrect!");
        return;
    }
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    if (newPassword.length < 1) {
        alert("Password cannot be empty!");
        return;
    }
    if (newPassword === oldPassword) {
        alert("New password cannot be the same as the old password!");
        return;
    }
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    currentUser.password = newPassword;
    currentUser.sync().then(() => {
        showInfo();
        localStorage.setItem("password", newPassword);
        loadingDiv.style.display = "none";
        main.style.display = "flex";
        closeChangePasswordPanel();
        alert("Password changed successfully!");
    });
}
//#region onLoad
loadingDiv.style.display = "none";
main.style.display = "flex";
openChangePasswordPanel();
export {};
//#endregion onLoad
//# sourceMappingURL=change-password.js.map