function createSettingsPanelBtn( parentContainer, iconName, buttonText, clickFunction) {
  let btn = createButton( null, "settings-panel-button", createIcon("bold", iconName), buttonText, clickFunction);
  parentContainer.appendChild(btn);
  btn.appendChild(createIcon("bold", "caret-right"));
  return btn;
}

//CREATING ELEMENTS
const accountPanel = document.getElementById("account-panel");

const accountInfoHeader = createDiv("account-info-div");
accountPanel.appendChild(accountInfoHeader);

const profilePic = createTextField("profile-picture", null);
accountInfoHeader.appendChild(profilePic);
profilePic.appendChild(createIcon("bold", "user"));

const profileInfoCard = createDiv("profile-info-card");
accountInfoHeader.appendChild(profileInfoCard);

const profileName = createTextField("profile-name", null);
profileInfoCard.appendChild(profileName);

const bnLogin = createButton(null, "login-btn", null, "Sign in", f_login);
profileName.appendChild(bnLogin);

const statsDiv = createDiv("stats-div");
profileInfoCard.appendChild(statsDiv);

const playlistsCountP = createTextField(null, "playlists: ");
const playlistsCountBtn = createButton(null, null, null, null, () => switchTo(playlistsPanel))
statsDiv.appendChild(playlistsCountBtn);
playlistsCountBtn.appendChild(playlistsCountP);

let favouriteSongsCountP = null;

const settingsPanel = createTextField("settings-tab-panel");
accountPanel.appendChild(settingsPanel);

const changePassBtn = createSettingsPanelBtn(
  settingsPanel,
  "key",
  "Change Password",
  f_changePass
);

const notificationsBtn = createSettingsPanelBtn(
  settingsPanel,
  "notification",
  "Notifications",
  f_notifications
);

const manageHistoryBtn = createSettingsPanelBtn(
  settingsPanel,
  "clock-counter-clockwise",
  "Manage History",
  f_manageHistory
);

const changeThemeBtn = createSettingsPanelBtn(
  settingsPanel,
  "sun-dim",
  "Appearance",
  openAppearancePanel
);

const audioQualityBtn = createSettingsPanelBtn(
  settingsPanel,
  "sliders",
  "Audio Quality",
  f_audioQuality
);

const contributeBtn = createSettingsPanelBtn(
  settingsPanel,
  "music-notes-plus",
  "Add Your Favourite Song",
  f_contribute
);

const logOutBtn = createSettingsPanelBtn(
  settingsPanel,
  "sign-out",
  "Log out",
  f_logOut
);
logOutBtn.classList.add("logout-btn");

//VRIABLES
let signedIn = false;

function f_login() {
  if (usersList.length > 0) {
    // history.pushState(goBack, "", "/login");
    loginPanel.style.display = "flex";
    loginPanel.style.animation = "slideUp 0.5s ease";
  } else {
    alert("Server is not responding!");
  }
}

function showInfo() {
  if (signedIn) {
    profilePic.style.backgroundImage = `url(${profilePicImage})`;
    if (profileName.contains(bnLogin)) {
      profileName.removeChild(bnLogin);
    }
    profileName.textContent = userProfileName;
  } else {
    profileName.textContent = "";
    if (!profileName.contains(bnLogin)) {
      profileName.appendChild(bnLogin);
    }
  }
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
}

// CHANGEPASS DIV==================================
const changePassPanel = createDiv("settings-tab-inner-panel");

const changePassPanelTopBar = createDiv("top-bar");
changePassPanel.appendChild(changePassPanelTopBar);

changePassPanelTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    f_backChangePassPanel
  )
);

const changePassConDiv = createDiv("content");
changePassPanel.appendChild(changePassConDiv);

const changePassFormDiv = createDiv("change-pass-form");
changePassConDiv.appendChild(changePassFormDiv);

const oldPasswordInput = createInput(
  "password",
  "Current password",
  "current-password",
  "change-pass-input"
);
changePassFormDiv.appendChild(
  createInputDiv(
    "change-pass-input-div",
    createIcon("bold", "key"),
    oldPasswordInput
  )
);

const newPasswordInputEye = createIcon(
  "bold",
  "eye-slash",
  f_newPasswordInputEye
);
const newPasswordInput = createInput(
  "password",
  "New password",
  "create-new-password",
  "change-pass-input"
);
changePassFormDiv.appendChild(
  createInputDiv(
    "change-pass-input-div",
    createIcon("bold", "key"),
    newPasswordInput,
    newPasswordInputEye
  )
);

const confirmPasswordInput = createInput(
  "password",
  "Confirm password",
  "confirm-create-new-password",
  "change-pass-input"
);
changePassFormDiv.appendChild(
  createInputDiv(
    "change-pass-input-div",
    createIcon("bold", "key"),
    confirmPasswordInput
  )
);

changePassFormDiv.appendChild(
  createButton(
    null,
    "change-pass-btn",
    null,
    "Change password",
    f_confirmChangePassword
  )
);

changePassFormDiv.appendChild(
  createButton(
    null,
    "change-pass-btn cancel",
    null,
    "Cancel",
    f_cancelChangePassword
  )
);

function f_changePass() {
  if (signedIn) {
    accountPanel.replaceChild(changePassPanel, settingsPanel);
    changePassPanel.style.animation = "slideLeft 0.3s ease-in-out";
    changePassPanel.addEventListener(
      "animationend",
      () => {
        changePassPanel.style.animation = "none";
      },
      { once: true }
    );
    // history.pushState(f_backChangePassPanel, "", "/changePassword");
  }
}

function f_backChangePassPanel() {
  if (accountPanel.contains(changePassPanel)) {
    changePassPanel.style.animation = "slideRight 0.3s ease-in-out";
    changePassPanel.addEventListener(
      "animationend",
      () => {
        changePassPanel.style.animation = "none";
        accountPanel.replaceChild(settingsPanel, changePassPanel);
      },
      { once: true }
    );
  }
}

function f_newPasswordInputEye() {
  if (newPasswordInputEye.classList.contains("ph-eye-slash")) {
    newPasswordInputEye.classList.remove("ph-eye-slash");
    newPasswordInputEye.classList.add("ph-eye");
    newPasswordInput.type = "text";
  } else {
    newPasswordInputEye.classList.remove("ph-eye");
    newPasswordInputEye.classList.add("ph-eye-slash");
    newPasswordInput.type = "password";
  }
}

function f_cancelChangePassword() {
  oldPasswordInput.value = "";
  newPasswordInput.value = "";
  confirmPasswordInput.value = "";
  f_backChangePassPanel();
}

function f_confirmChangePassword() {
  let oldPassword = oldPasswordInput.value;
  let newPassword = newPasswordInput.value;
  let confirmPassword = confirmPasswordInput.value;
  if (oldPassword === data[userNameKey].password) {
    if (newPassword === confirmPassword) {
      if (newPassword.length < 1) {
        alert("Password cannot be empty!");
      } else {
        if (newPassword === oldPassword) {
          alert("New password cannot be the same as the old password!");
        } else {
          main.style.display = "none";
          loadingDiv.style.display = "flex";
          userData.password = newPassword;
          updateDataFile().then(() => {
            showInfo();
            localStorage.setItem("password", newPassword);
            loadingDiv.style.display = "none";
            main.style.display = "flex";
            f_backChangePassPanel();
            alert("Password changed successfully!");
          });
        }
      }
    } else {
      alert("Passwords do not match!");
    }
  } else {
    alert("Old password is incorrect!");
  }
}

// NOTIFICATIONS DIV==============================
const notificationsPanel = createDiv("settings-tab-inner-panel");

const notificationsPanelTopBar = createDiv("top-bar");
notificationsPanel.appendChild(notificationsPanelTopBar);

notificationsPanelTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    f_backNotificationsPanel
  )
);

const notificationsConDiv = createDiv("content");
notificationsPanel.appendChild(notificationsConDiv);

function loadNotifications() {
  clearContainer(notificationsConDiv);
  for (let notification of notificationsList) {
    const notificationDiv = createDiv("notification-div");
    notificationsConDiv.appendChild(notificationDiv);

    const NotificationHeader = createDiv("notification-header");
    notificationDiv.appendChild(NotificationHeader);

    NotificationHeader.appendChild(
      createTextField("notification-title", notification.title)
    );

    const bnRemoveNotification = createButton(
      null,
      "remove-notification-btn",
      createIcon("bold", "trash"),
      "Delete",
      null
    );
    NotificationHeader.appendChild(bnRemoveNotification);
    bnRemoveNotification.addEventListener("click", () =>
      f_removeNotification(notification)
    );

    const notificationMetaDataDiv = createDiv("notification-meta-data-div");
    notificationDiv.appendChild(notificationMetaDataDiv);

    notificationMetaDataDiv.appendChild(
      createTextField("notification-date", notification.date)
    );

    notificationMetaDataDiv.appendChild(
      createTextField("notification-time", notification.time)
    );

    notificationDiv.appendChild(
      createTextField("notification-content", notification.content)
    );
  }
}

function f_notifications() {
  if (signedIn) {
    accountPanel.replaceChild(notificationsPanel, settingsPanel);
    notificationsPanel.style.animation = "slideLeft 0.3s ease-in-out";
    notificationsPanel.addEventListener(
      "animationend",
      () => {
        notificationsPanel.style.animation = "none";
      },
      { once: true }
    );
    // history.pushState(f_backNotificationsPanel, "", "/notifications");
  }
}

function f_backNotificationsPanel() {
  if (accountPanel.contains(notificationsPanel)) {
    notificationsPanel.style.animation = "slideRight 0.3s ease-in-out";
    notificationsPanel.addEventListener(
      "animationend",
      () => {
        notificationsPanel.style.animation = "none";
        accountPanel.replaceChild(settingsPanel, notificationsPanel);
      },
      { once: true }
    );
  }
}

function f_removeNotification(notification) {
  notificationsList.splice(notification, 1);
  loadNotifications();
  updateDataFile();
}

// MANAGE HISTORY DIV==============================
const manageHistoryPanel = createDiv("settings-tab-inner-panel");

const manageHistoryPanelTopBar = createDiv("top-bar");
manageHistoryPanel.appendChild(manageHistoryPanelTopBar);

manageHistoryPanelTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    f_backManageHistoryPanel
  )
);

const manageHistoryConDiv = createDiv("content");
manageHistoryPanel.appendChild(manageHistoryConDiv);

const AllowHistoryDiv = createDiv("toggle-div");
manageHistoryConDiv.appendChild(AllowHistoryDiv);

const AllowHistoryP = document.createElement("p");
AllowHistoryDiv.appendChild(
  createTextField("toggle-div-text", "Allow history")
);

const AllowHistoryToggle = createDiv("toggle-element");
AllowHistoryDiv.appendChild(AllowHistoryToggle);
AllowHistoryToggle.addEventListener("click", keepHistory);
const AllowHistoryToggleBall = createDiv("toggle-ball");
AllowHistoryToggle.appendChild(AllowHistoryToggleBall);

const bnClearSearchHistory = document.createElement("button");
manageHistoryConDiv.appendChild(bnClearSearchHistory);
bnClearSearchHistory.id = "bnClearSearchHistory";
const bnClearSearchHistoryP = document.createElement("p");
bnClearSearchHistory.appendChild(bnClearSearchHistoryP);
bnClearSearchHistoryP.textContent = "CLEAR SEARCH HISTORY";
bnClearSearchHistoryP.style.color = "red";
bnClearSearchHistory.addEventListener("click", f_clearSearchHistory);

const bnClearPlayedSongHistory = document.createElement("button");
manageHistoryConDiv.appendChild(bnClearPlayedSongHistory);
bnClearPlayedSongHistory.id = "bnClearPlayedSongHistory";
const bnClearPlayedSongHistoryP = document.createElement("p");
bnClearPlayedSongHistory.appendChild(bnClearPlayedSongHistoryP);
bnClearPlayedSongHistoryP.textContent = "CLEAR PLAYED SONG HISTORY";
bnClearPlayedSongHistoryP.style.color = "red";
bnClearPlayedSongHistory.addEventListener("click", f_clearPlayedSongHistory);

const manageHistoryListDiv = document.createElement("div");
function f_manageHistory() {
  if (signedIn) {
    accountPanel.replaceChild(manageHistoryPanel, settingsPanel);
    manageHistoryPanel.style.animation = "slideLeft 0.3s ease-in-out";
    manageHistoryPanel.addEventListener(
      "animationend",
      () => {
        manageHistoryPanel.style.animation = "none";
      },
      { once: true }
    );
    // history.pushState(f_backManageHistoryPanel, "", "/manage-history");
  }
}

function f_backManageHistoryPanel() {
  if (accountPanel.contains(manageHistoryPanel)) {
    manageHistoryPanel.style.animation = "slideRight 0.3s ease-in-out";
    manageHistoryPanel.addEventListener(
      "animationend",
      () => {
        manageHistoryPanel.style.animation = "none";
        accountPanel.replaceChild(settingsPanel, manageHistoryPanel);
      },
      { once: true }
    );
  }
}

let currentHistoryToggleState = 0;

function stopHistory(dontUpdateFile = false) {
  if (signedIn) {
    AllowHistoryToggle.removeEventListener("click", stopHistory);
    AllowHistoryToggle.classList.remove("active");
    bnClearSearchHistory.style.display = "none";
    bnClearPlayedSongHistory.style.display = "none";
    AllowHistoryToggle.addEventListener("click", keepHistory);
    currentHistoryToggleState = 0;
    if (!dontUpdateFile) {
      userData.allowHistory = 0;
      updateDataFile();
    }
  }
}

function keepHistory(dontUpdateFile = false) {
  if (signedIn) {
    AllowHistoryToggle.removeEventListener("click", keepHistory);
    AllowHistoryToggle.classList.add("active");
    bnClearSearchHistory.style.display = "flex";
    bnClearPlayedSongHistory.style.display = "flex";
    AllowHistoryToggle.addEventListener("click", stopHistory);
    currentHistoryToggleState = 1;
    if (!dontUpdateFile) {
      userData.allowHistory = 1;
      updateDataFile();
    }
  }
}

function setHistoryPref(pref) {
  if (pref == 1) {
    if (currentHistoryToggleState == 0) {
      keepHistory(true);
    }
  } else {
    if (currentHistoryToggleState == 1) {
      stopHistory(true);
    }
  }
}

function f_clearSearchHistory() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    userData.searchedTextList.splice(0, userData.searchedTextList.length);
    userData.searchedSongList.splice(0, userData.searchedSongList.length);
    updateDataFile().then(() => {
      loadSearchHistory();
      loadingDiv.style.display = "none";
      main.style.display = "flex";
    });
  }
}

function f_clearPlayedSongHistory() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    userData.recentlyPlayedSongList.splice(
      0,
      userData.recentlyPlayedSongList.length
    );
    updateDataFile().then(() => {
      loadRecentlyPlayedSongs();
      loadingDiv.style.display = "none";
      main.style.display = "flex";
    });
  }
}

// CHANGE THEME DIV================================
const appearancePanel = createDiv("settings-tab-inner-panel");

const appearancePanelTopBar = createDiv("top-bar");
appearancePanel.appendChild(appearancePanelTopBar);

appearancePanelTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    closeAppearancePanel
  )
);

const appearancePanelConDiv = createDiv("content");
appearancePanel.appendChild(appearancePanelConDiv);

function openAppearancePanel() {
  accountPanel.replaceChild(appearancePanel, settingsPanel);
  appearancePanel.style.animation = "slideLeft 0.3s ease-in-out";
  appearancePanel.addEventListener(
    "animationend",
    () => {
      appearancePanel.style.animation = "none";
    },
    { once: true }
  );
  // history.pushState(f_backChangeThemePanel,"","./themepanel");
}

function closeAppearancePanel() {
  if (accountPanel.contains(appearancePanel)) {
    appearancePanel.style.animation = "slideRight 0.3s ease-in-out";
    appearancePanel.addEventListener(
      "animationend",
      () => {
        appearancePanel.style.animation = "none";
        accountPanel.replaceChild(settingsPanel, appearancePanel);
      },
      { once: true }
    );
  }
}



// THEME COLOR SETTINGS --------------
let appliedThemeColor = "light-mode";
let appliedThemeColorI = null;
let selectedThemeColor = "light-mode";
let selectedThemeColorI = null;

const changeThemeColorBtn = createButton(
  null,
  "settings-panel-button",
  createIcon("fill", "paint-roller"),
  "Theme",
  openThemeColorPanel
);
changeThemeColorBtn.appendChild(createIcon("bold", "caret-up-down"));
appearancePanelConDiv.appendChild(changeThemeColorBtn);

const themeColorSelectionPanel = createDiv("added-panel theme-selection-panel");
themeColorSelectionPanel.appendChild(createTextField("added-panel-header", "Choose Theme"));

const lightIcon = createIcon("fill", "radio-button");
selectedThemeColorI = lightIcon;
appliedThemeColorI = lightIcon;
themeColorSelectionPanel.appendChild(
  createButton(
    null,
    "added-panel-btn ripple",
    lightIcon,
    "Light",
    selectLightTheme
  )
);

const darkIcon = createIcon("bold", "circle");
themeColorSelectionPanel.appendChild(
  createButton(
    null,
    "added-panel-btn ripple",
    darkIcon,
    "Dark",
    selectDarkTheme
  )
);

const themePanelBtnDiv = createDiv("added-panel-btn-div");
themeColorSelectionPanel.appendChild(themePanelBtnDiv);

themePanelBtnDiv.appendChild(
  createButton(
    null,
    null,
    null,
    "cancel",
    closeThemeColorPanel
  )
);

themePanelBtnDiv.appendChild(
  createButton(
    null,
    null,
    null,
    "ok",
    applyThemeColor
  )
);



function selectLightTheme() {
  selectedThemeColorI.className = "ph-bold ph-circle";
  selectedThemeColor = "light-mode";
  selectedThemeColorI = lightIcon;
  selectedThemeColorI.className = "ph-fill ph-radio-button";
}

function selectDarkTheme() {
  selectedThemeColorI.className = "ph-bold ph-circle";
  selectedThemeColor = "dark-mode";
  selectedThemeColorI = darkIcon;
  selectedThemeColorI.className = "ph-fill ph-radio-button";
}


function applyThemeColor() {
  app.classList.remove(appliedThemeColor);
  appliedThemeColorI = selectedThemeColorI;
  appliedThemeColor = selectedThemeColor;
  app.classList.add(appliedThemeColor);
  closeThemeColorPanel();
  if (signedIn) {}
}

function openThemeColorPanel() {
  changeThemeColorBtn.removeEventListener("click", openThemeColorPanel);
  appearancePanel.appendChild(themeColorSelectionPanel);
  themeColorSelectionPanel.style.animation = "appear 0.3s ease";
  themeColorSelectionPanel.addEventListener(
    "animationend",
    () => {
      themeColorSelectionPanel.style.animation = "none";
      changeThemeColorBtn.addEventListener("click", closeThemeColorPanel);
    },
    { once: true }
  );
}

function closeThemeColorPanel() {
  if (appearancePanel.contains(themeColorSelectionPanel)) {
    selectedThemeColorI.className = "ph-bold ph-circle";
    selectedThemeColorI = appliedThemeColorI;
    selectedThemeColorI.className = "ph-fill ph-radio-button";
    changeThemeColorBtn.removeEventListener("click", closeThemeColorPanel);
    themeColorSelectionPanel.style.animation = "disappear 0.3s ease";
    themeColorSelectionPanel.addEventListener(
      "animationend",
      () => {
        themeColorSelectionPanel.style.animation = "none";
        appearancePanel.removeChild(themeColorSelectionPanel);
        changeThemeColorBtn.addEventListener("click", openThemeColorPanel);
      },
      { once: true }
    );
  }
}

function f_changeThemeColor(color) {
  if (color == "dark") {
    if (appliedThemeColor == "light-mode") {
      selectDarkTheme();
      applyThemeColor()
    }
  } else if (color == "light") {
    if (appliedThemeColor == "dark-mode") {
      selectLightTheme();
      applyThemeColor();
    }
  }
}



// BACKGROUND BLUR SETTINGS --------------
let BlurActive = false;

const ChangeBlurDiv = createDiv("toggle-div");
appearancePanelConDiv.appendChild(ChangeBlurDiv);
ChangeBlurDiv.appendChild(createTextField("toggle-div-text", "Blur effect"));

const changeBlurToggle = createDiv("toggle-element");
ChangeBlurDiv.appendChild(changeBlurToggle);
changeBlurToggle.addEventListener("click", f_changeBlur);
const changeBlurToggleBall = createDiv("toggle-ball");
changeBlurToggle.appendChild(changeBlurToggleBall);

function f_changeBlur() {
  if (BlurActive) {
    changeBlurToggle.classList.remove("active");
    app.classList.remove("blur-on");
    BlurActive = false;
  } else {
    changeBlurToggle.classList.add("active");
    app.classList.add("blur-on");
    BlurActive = true;
  }
}

// NAVIGATION DIV SETTINGS-------------
let navBarStyle = "floating";

const changeNavBarStyleDiv = createDiv("toggle-div");
appearancePanelConDiv.appendChild(changeNavBarStyleDiv);
changeNavBarStyleDiv.appendChild(createTextField("toggle-div-text", "Floating Navigation bar"));

const changeNavBarStyleToggle = createDiv("toggle-element active");
changeNavBarStyleDiv.appendChild(changeNavBarStyleToggle);
changeNavBarStyleToggle.addEventListener("click", changeNavBarStyle);
const changeNavBarStyleToggleBall = createDiv("toggle-ball");
changeNavBarStyleToggle.appendChild(changeNavBarStyleToggleBall);

function changeNavBarStyle() {
  if (navBarStyle == "floating") {
    changeNavBarStyleToggle.classList.remove("active");
    bottomDiv.style.animation = "flash 0.2s ease";
    bottomDiv.addEventListener("animationend", () => {
      bottomDiv.classList.remove("floating");
      bottomDiv.classList.add("sticky");
      bottomDiv.style.animation = "none";
    },{once: true});
    navBarStyle = "sticky";
  } else {
    changeNavBarStyleToggle.classList.add("active");
    bottomDiv.style.animation = "flash 0.2s ease";
    bottomDiv.addEventListener("animationend", () => {
      bottomDiv.classList.remove("sticky");
      bottomDiv.classList.add("floating");
      bottomDiv.style.animation = "none";
    },{once: true});
    navBarStyle = "floating";
  }
}




// AUDIO QUALITY DIV================================
const audioQualityPanel = createDiv("settings-tab-inner-panel");

const audioQualityPanelTopBar = createDiv("top-bar");
audioQualityPanel.appendChild(audioQualityPanelTopBar);

audioQualityPanelTopBar.appendChild(
  createButton(
    null,
    "back-btn",
    createIcon("bold", "arrow-left"),
    null,
    f_backAudioQualityPanel
  )
);

const audioQualityPanelConDiv = createDiv("content");
audioQualityPanel.appendChild(audioQualityPanelConDiv);

const audioQualityPanelP = createTextField(
  null,
  "This feature will be available soon!"
);
audioQualityPanelConDiv.appendChild(audioQualityPanelP);

function f_audioQuality() {
  accountPanel.replaceChild(audioQualityPanel, settingsPanel);
  audioQualityPanel.style.animation = "slideLeft 0.3s ease-in-out";
  audioQualityPanel.addEventListener(
    "animationend",
    () => {
      audioQualityPanel.style.animation = "none";
    },
    { once: true }
  );
  // history.pushState(f_backAudioQualityPanel,"","./audioQualityPanel");
}

function f_backAudioQualityPanel() {
  audioQualityPanel.style.animation = "slideRight 0.3s ease-in-out";
  audioQualityPanel.addEventListener(
    "animationend",
    () => {
      audioQualityPanel.style.animation = "none";
      accountPanel.replaceChild(settingsPanel, audioQualityPanel);
    },
    { once: true }
  );
}

function f_contribute() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    // history.pushState(goBack,"","./contributionPanel");
    startContribution().then(() => {
      loadingDiv.style.display = "none";
      main.style.display = "flex";
      contributionPanel.style.display = "flex";
      contributionPanel.style.animation = "slideUp 0.5s ease";
    });
  } else {
    alert("You need to be logged in to contribute!");
  }
}

function f_logOut() {
  if (signedIn) {
    signedIn = false;
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    showInfo();
    loadRecentlyPlayedSongs();
    loadPlaylists();
    loadSearchHistory();
  }
}
attend();