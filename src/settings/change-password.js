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

changePassPanelTopBar.appendChild(createElement("button", { className: "back-btn toggle", onclick: closeChangePasswordPanel }, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));
changePassPanelTopBar.appendChild(createElement("p", { className: "top-bar-text", textContent: "Change password" }));

const changePassConDiv = createElement("div", { className: "content" });
changePassPanel.appendChild(changePassConDiv);

const changePassFormDiv = createElement("div", { className: "change-pass-form" });
changePassConDiv.appendChild(changePassFormDiv);

const oldPasswordInputEye = createElement("i", { className: "ph-bold ph-eye-slash", onclick: () => { togglePasswordVisibilty(oldPasswordInputEye, oldPasswordInput) }, style: { cursor: "pointer" } });
const oldPasswordInput = createElement("input", {
  type: "password",
  placeholder: "Current password",
  id: "current-password",
  className: "change-pass-input"
});
changePassFormDiv.appendChild(
  createElement("div", { className: "change-pass-input-div" }, [
    createElement("i", { className: "ph-bold ph-key" }),
    oldPasswordInput
  ])
);

const newPasswordInputEye = createElement("i", { className: "ph-bold ph-eye-slash", onclick: () => { togglePasswordVisibilty(newPasswordInputEye, newPasswordInput) }, style: { cursor: "pointer" } });
const newPasswordInput = createElement("input", {
  type: "password",
  placeholder: "New password",
  id: "create-new-password",
  className: "change-pass-input"
});
changePassFormDiv.appendChild(
  createElement("div", { className: "change-pass-input-div" }, [
    createElement("i", { className: "ph-bold ph-key" }),
    newPasswordInput,
    newPasswordInputEye
  ])
);

const confirmPasswordInput = createElement("input", {
  type: "password",
  placeholder: "Confirm password",
  id: "confirm-create-new-password",
  className: "change-pass-input"
});
changePassFormDiv.appendChild(
  createElement("div", { className: "change-pass-input-div" }, [
    createElement("i", { className: "ph-bold ph-key" }),
    confirmPasswordInput
  ])
);

changePassFormDiv.appendChild(createElement("button", { className: "change-pass-btn", onclick: f_confirmChangePassword }, [ createElement("p", { textContent: "Change password" }) ]));

changePassFormDiv.appendChild(createElement("button", { className: "change-pass-btn cancel", onclick: () => { clearInputFields(changePassFormDiv); closeChangePasswordPanel(); } }, [ createElement("p", { textContent: "Cancel" }) ]));
//#endregion UI

function f_confirmChangePassword() {
  const oldPassword = oldPasswordInput.value;
  const newPassword = newPasswordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (oldPassword !== currentUser.password) { alert("Old password is incorrect!"); return; }
  if (newPassword !== confirmPassword) { alert("Passwords do not match!"); return; }
  if (newPassword.length < 1) { alert("Password cannot be empty!"); return; }
  if (newPassword === oldPassword) { alert("New password cannot be the same as the old password!"); return; }
  
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
//#endregion onLoad