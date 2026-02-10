const settingsPanelContent = createElement("div", { className: "content-fill" });
settingsPanel.appendChild(settingsPanelContent);
const settingsPanel_header = createElement("div", { className: "panel-header" });
settingsPanelContent.appendChild(settingsPanel_header);
settingsPanel_header.appendChild(createElement("p", { className: "panel-header-text", textContent: "Settings" }));
const settingsPanel_content = createElement("div", { className: "content" });
settingsPanelContent.appendChild(settingsPanel_content);
//#region settings
const settingsPanel_accountSettings_buttonContainer = createElement("div", {
    className: "button-container",
    id: "settings-panel-button-container"
});
settingsPanel_accountSettings_buttonContainer.style.display = "none";
settingsPanel_content.appendChild(settingsPanel_accountSettings_buttonContainer);
function openChangePasswordPanel() { }
const changePassBtn = createSettingsPanelBtn(settingsPanel_accountSettings_buttonContainer, "key", "Change Password", "change your password", () => { openImportedPanel("change-password-js", openChangePasswordPanel, "src/settings/change-password.js", true); });
function openNotificationsPanel() { }
const notificationsBtn = createSettingsPanelBtn(settingsPanel_accountSettings_buttonContainer, "notification", "Notifications", "", () => { openImportedPanel("notifications-js", openNotificationsPanel, "src/settings/notifications.js", true); });
function openManageHistoryPanel() { }
const manageHistoryBtn = createSettingsPanelBtn(settingsPanel_accountSettings_buttonContainer, "clock-counter-clockwise", "History", "manage history", () => { openImportedPanel("manage-history-js", openManageHistoryPanel, "src/settings/manage-history.js", true); });
const logOutBtn = createSettingsPanelBtn(settingsPanel_accountSettings_buttonContainer, "sign-out", "Log out", "", signOutUser);
logOutBtn.classList.add("logout-btn");
const settingsPanel_appSettings_buttonContainer = createElement("div", {
    className: "button-container",
    id: "settings-panel-button-container"
});
settingsPanel_content.appendChild(settingsPanel_appSettings_buttonContainer);
function openAppearancePanel() { }
const changeThemeBtn = createSettingsPanelBtn(settingsPanel_appSettings_buttonContainer, "sun-dim", "Appearance", "Theme, blur, navigation", () => { openImportedPanel("appearance-js", openAppearancePanel, "src/settings/appearance.js"); });
function openAudioQualityPanel() { }
const audioQualityBtn = createSettingsPanelBtn(settingsPanel_appSettings_buttonContainer, "sliders", "Audio Quality", "", () => { openImportedPanel("audio-quality-js", openAudioQualityPanel, "src/settings/audio-quality.js"); });
const settingsPanel_miscSettings_buttonContainer = createElement("div", {
    className: "button-container",
    id: "settings-panel-button-container"
});
settingsPanel_content.appendChild(settingsPanel_miscSettings_buttonContainer);
function openContributionPanel() { }
const contributeBtn = createSettingsPanelBtn(settingsPanel_miscSettings_buttonContainer, "music-notes-plus", "Contribution", "Add Your Favourite Song", () => { openImportedPanel("contribution-js", openContributionPanel, "src/contribution/contributionTab.js", true); });
//#endregion settings
function updateDeviceColor() {
    const themeTag = document.querySelector("meta[name=theme-color]");
    const color = window.getComputedStyle(app).getPropertyValue("--primary-bg");
    themeTag.setAttribute("content", color);
}
function setTheme(theme) {
    app.dataset.theme = theme;
    updateDeviceColor();
    if (signedIn) {
        currentUser.theme = theme;
        currentUser.sync();
    }
}
/**
 * Opens a new panel by importing a script
 * @param {string} id
 * @param {Function} openFunction
 * @param {string} path
 * @param {boolean} userCheck
 * @returns
 */
function openImportedPanel(id, openFunction, path, userCheck = false) {
    if (userCheck && !signedIn) {
        alert("You need to be logged in to use this feature!");
        return;
    }
    if (document.getElementById(id)) {
        openFunction();
        return;
    }
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    addScript(id, path);
}
/**
 * Replaces children with an animation
 * @param {HTMLDivElement} parent container that contains both child
 * @param {HTMLDivElement} oldChild child to be removed
 * @param {HTMLDivElement} newChild child to be appended
 * @param {HTMLDivElement} animationParent container that carries out animation, By default it is the parent
 */
function openSubPanel(parent, oldChild, newChild, animationParent = null) {
    oldChild.classList.add("anim-outgoing-panel");
    oldChild.addEventListener("animationend", () => {
        oldChild.classList.remove("anim-outgoing-panel");
        parent.removeChild(oldChild);
    }, { once: true });
    parent.appendChild(newChild);
    newChild.classList.add("anim-incoming-panel");
    newChild.addEventListener("animationend", () => {
        newChild.classList.remove("anim-incoming-panel");
    }, { once: true });
}
export {};
//# sourceMappingURL=settingsTab.js.map