//VARIABLES
let currentThemeColor = "DARK";
let currentThemeColorIcon = "dark_mode";
let BlurActive = true;

//CREATING ELEMENTS
let accountPanel = document.createElement("div");
accountPanel.id = "accountPanel";
accountPanel.className = "accountPanel_darkMode";

let accountInfoHeader = document.createElement("div");
accountPanel.appendChild(accountInfoHeader);
accountInfoHeader.id = "accountInfoHeader";
let profilePic = document.createElement("p");
accountInfoHeader.appendChild(profilePic);
profilePic.id = "profilePic";
let profilePicIcon = document.createElement("span");
profilePic.appendChild(profilePicIcon);
profilePicIcon.className = "material-symbols-rounded";
profilePicIcon.textContent = "account_circle";
profilePicIcon.id = "profilePicIcon";

let profileInfoCard = document.createElement("div");
accountInfoHeader.appendChild(profileInfoCard);
profileInfoCard.id = "profileInfoCard";

let profileName = document.createElement("p");
profileInfoCard.appendChild(profileName);
profileName.id = "profileName";

let bnLogin = document.createElement("button");
profileName.appendChild(bnLogin);
bnLogin.id = "bnLogin";
bnLogin.textContent = "LOGIN";
bnLogin.addEventListener("click", f_login);

let separator = document.createElement("hr");
profileInfoCard.appendChild(separator);
separator.id = "separator";
let statsDiv = document.createElement("div");
profileInfoCard.appendChild(statsDiv);
statsDiv.id = "statsDiv";

let playlistsCount = document.createElement("button");
statsDiv.appendChild(playlistsCount);
playlistsCount.addEventListener("click", () => switchTo("libraryPanel"));
let playlistsCountP = document.createElement("p");
playlistsCount.appendChild(playlistsCountP);
playlistsCountP.textContent = "playlists:";

let favouriteSongsCount = document.createElement("button");
statsDiv.appendChild(favouriteSongsCount);
let favouriteSongsCountP = document.createElement("p");
favouriteSongsCount.appendChild(favouriteSongsCountP);
favouriteSongsCountP.textContent = "favourite songs:";

let settingsPanel = document.createElement("div");
accountPanel.appendChild(settingsPanel);
settingsPanel.id = "settingsPanel";

let ChangePassDiv = document.createElement("div");
settingsPanel.appendChild(ChangePassDiv);
ChangePassDiv.id = "buttonDiv";
let bnChangePass = document.createElement("button");
ChangePassDiv.appendChild(bnChangePass);
bnChangePass.id = "bnChangePass";
bnChangePass.addEventListener("click", f_changePass);
let bnChangePassIconDiv = document.createElement("div");
bnChangePass.appendChild(bnChangePassIconDiv);
bnChangePassIconDiv.id = "settingBtnIconDiv";
let bnChangePassIcon = document.createElement("span");
bnChangePassIconDiv.appendChild(bnChangePassIcon);
bnChangePassIcon.className = "material-symbols-rounded";
bnChangePassIcon.textContent = "password";
bnChangePassIcon.id = "settingBtnIcon";
let changePassTextContainer = document.createElement("div");
changePassTextContainer.className = "buttonTextContainer";
bnChangePass.appendChild(changePassTextContainer);
let bnChangePassP = document.createElement("p");
changePassTextContainer.appendChild(bnChangePassP);
bnChangePassP.textContent = "Change Password";
let changePassSelectionIcon = document.createElement("span");
changePassTextContainer.appendChild(changePassSelectionIcon);
changePassSelectionIcon.className = "material-symbols-rounded";
changePassSelectionIcon.textContent = "arrow_forward_ios";

let NotificationsDiv = document.createElement("div");
settingsPanel.appendChild(NotificationsDiv);
NotificationsDiv.id = "buttonDiv";
let bnNotifications = document.createElement("button");
NotificationsDiv.appendChild(bnNotifications);
bnNotifications.id = "bnNotifications";
bnNotifications.addEventListener("click", f_notifications);
let bnNotificationsIconDiv = document.createElement("div");
bnNotifications.appendChild(bnNotificationsIconDiv);
bnNotificationsIconDiv.id = "settingBtnIconDiv";
let bnNotificationsIcon = document.createElement("span");
bnNotificationsIconDiv.appendChild(bnNotificationsIcon);
bnNotificationsIcon.className = "material-symbols-rounded";
bnNotificationsIcon.textContent = "notifications";
bnNotificationsIcon.id = "settingBtnIcon";
let notificationsTextContainer = document.createElement("div");
notificationsTextContainer.className = "buttonTextContainer";
bnNotifications.appendChild(notificationsTextContainer);
let bnNotificationsP = document.createElement("p");
notificationsTextContainer.appendChild(bnNotificationsP);
bnNotificationsP.textContent = "Notifications";
let notificationsSelectionIcon = document.createElement("span");
notificationsTextContainer.appendChild(notificationsSelectionIcon);
notificationsSelectionIcon.className = "material-symbols-rounded";
notificationsSelectionIcon.textContent = "arrow_forward_ios";

let ManageHistoryDiv = document.createElement("div");
settingsPanel.appendChild(ManageHistoryDiv);
ManageHistoryDiv.id = "buttonDiv";
let bnManageHistory = document.createElement("button");
ManageHistoryDiv.appendChild(bnManageHistory);
bnManageHistory.id = "bnManageHistory";
bnManageHistory.addEventListener("click", f_manageHistory);
let bnManageHistoryIconDiv = document.createElement("div");
bnManageHistory.appendChild(bnManageHistoryIconDiv);
bnManageHistoryIconDiv.id = "settingBtnIconDiv";
let bnManageHistoryIcon = document.createElement("span");
bnManageHistoryIconDiv.appendChild(bnManageHistoryIcon);
bnManageHistoryIcon.className = "material-symbols-rounded";
bnManageHistoryIcon.textContent = "manage_history";
bnManageHistoryIcon.id = "settingBtnIcon";
let manageHistoryTextContainer = document.createElement("div");
manageHistoryTextContainer.className = "buttonTextContainer";
bnManageHistory.appendChild(manageHistoryTextContainer);
let bnManageHistoryP = document.createElement("p");
manageHistoryTextContainer.appendChild(bnManageHistoryP);
bnManageHistoryP.textContent = "Manage History";
let manageHistorySelectionIcon = document.createElement("span");
manageHistoryTextContainer.appendChild(manageHistorySelectionIcon);
manageHistorySelectionIcon.className = "material-symbols-rounded";
manageHistorySelectionIcon.textContent = "arrow_forward_ios";

let ChangeThemeDiv = document.createElement("div");
settingsPanel.appendChild(ChangeThemeDiv);
ChangeThemeDiv.id = "buttonDiv";
let bnChangeTheme = document.createElement("button");
ChangeThemeDiv.appendChild(bnChangeTheme);
bnChangeTheme.id = "bnChangeTheme";
bnChangeTheme.addEventListener("click", f_changeTheme);
let bnChangeThemeIconDiv = document.createElement("div");
bnChangeTheme.appendChild(bnChangeThemeIconDiv);
bnChangeThemeIconDiv.id = "settingBtnIconDiv";
let bnChangeThemeIcon = document.createElement("span");
bnChangeThemeIconDiv.appendChild(bnChangeThemeIcon);
bnChangeThemeIcon.className = "material-symbols-rounded";
bnChangeThemeIcon.textContent = "routine";
bnChangeThemeIcon.id = "settingBtnIcon";
let changeThemeTextContainer = document.createElement("div");
changeThemeTextContainer.className = "buttonTextContainer";
bnChangeTheme.appendChild(changeThemeTextContainer);
let bnChangeThemeP = document.createElement("p");
changeThemeTextContainer.appendChild(bnChangeThemeP);
bnChangeThemeP.textContent = "Theme";
let changeThemeSelectionIcon = document.createElement("span");
changeThemeTextContainer.appendChild(changeThemeSelectionIcon);
changeThemeSelectionIcon.className = "material-symbols-rounded";
changeThemeSelectionIcon.textContent = "arrow_forward_ios";

let AudioQualityDiv = document.createElement("div");
settingsPanel.appendChild(AudioQualityDiv);
AudioQualityDiv.id = "buttonDiv";
let bnAudioQuality = document.createElement("button");
AudioQualityDiv.appendChild(bnAudioQuality);
bnAudioQuality.id = "bnAudioQuality";
bnAudioQuality.addEventListener("click", f_audioQuality);
let bnAudioQualityIconDiv = document.createElement("div");
bnAudioQuality.appendChild(bnAudioQualityIconDiv);
bnAudioQualityIconDiv.id = "settingBtnIconDiv";
let bnAudioQualityIcon = document.createElement("span");
bnAudioQualityIconDiv.appendChild(bnAudioQualityIcon);
bnAudioQualityIcon.className = "material-symbols-rounded";
bnAudioQualityIcon.textContent = "tune";
bnAudioQualityIcon.id = "settingBtnIcon";
let audioQualityTextContainer = document.createElement("div");
audioQualityTextContainer.className = "buttonTextContainer";
bnAudioQuality.appendChild(audioQualityTextContainer);
let bnAudioQualityP = document.createElement("p");
audioQualityTextContainer.appendChild(bnAudioQualityP);
bnAudioQualityP.textContent = "Audio Quality";
let audioQualitySelectionIcon = document.createElement("span");
audioQualityTextContainer.appendChild(audioQualitySelectionIcon);
audioQualitySelectionIcon.className = "material-symbols-rounded";
audioQualitySelectionIcon.textContent = "arrow_forward_ios";

let ContributeDiv = document.createElement("div");
settingsPanel.appendChild(ContributeDiv);
ContributeDiv.id = "buttonDiv";
let bnContribute = document.createElement("button");
ContributeDiv.appendChild(bnContribute);
bnContribute.id = "bnContribute";
bnContribute.addEventListener("click", f_contribute);
let bnContributeIconDiv = document.createElement("div");
bnContribute.appendChild(bnContributeIconDiv);
bnContributeIconDiv.id = "settingBtnIconDiv";
let bnContributeIcon = document.createElement("span");
bnContributeIconDiv.appendChild(bnContributeIcon);
bnContributeIcon.className = "material-symbols-rounded";
bnContributeIcon.textContent = "volunteer_activism";
bnContributeIcon.id = "settingBtnIcon";
let contributeTextContainer = document.createElement("div");
contributeTextContainer.className = "buttonTextContainer";
bnContribute.appendChild(contributeTextContainer);
let bnContributeP = document.createElement("p");
contributeTextContainer.appendChild(bnContributeP);
bnContributeP.textContent = "Add Your Favourite Song";
let contributeSelectionIcon = document.createElement("span");
contributeTextContainer.appendChild(contributeSelectionIcon);
contributeSelectionIcon.className = "material-symbols-rounded";
contributeSelectionIcon.textContent = "arrow_forward_ios";

let LogOutDiv = document.createElement("div");
settingsPanel.appendChild(LogOutDiv);
LogOutDiv.id = "buttonDiv";
let bnLogOut = document.createElement("button");
LogOutDiv.appendChild(bnLogOut);
bnLogOut.id = "bnLogOut";
bnLogOut.addEventListener("click", f_logOut);
let bnLogOutIconDiv = document.createElement("div");
bnLogOut.appendChild(bnLogOutIconDiv);
bnLogOutIconDiv.id = "settingBtnIconDiv";
let bnLogOutIcon = document.createElement("span");
bnLogOutIconDiv.appendChild(bnLogOutIcon);
bnLogOutIcon.className = "material-symbols-rounded";
bnLogOutIcon.textContent = "logout";
bnLogOutIcon.id = "settingBtnIcon";
bnLogOutIcon.style.color = "red";
let logOutTextContainer = document.createElement("div");
logOutTextContainer.className = "buttonTextContainer";
bnLogOut.appendChild(logOutTextContainer);
let bnLogOutP = document.createElement("p");
logOutTextContainer.appendChild(bnLogOutP);
bnLogOutP.textContent = "LOG OUT";
bnLogOutP.style.color = "red";

let accountPanelSpace = document.createElement("div");
settingsPanel.appendChild(accountPanelSpace);
accountPanelSpace.id = "accountPanelSpace";

//VRIABLES
let signedIn = false;

function f_login() {
  if (usersList.length > 0) {
    main.replaceChild(loginPanel, accountPanel);
    bottomDiv.style.display = "none";
    currentTab = loginPanel;
    // history.pushState(goBack, "", "/login");
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
    profileName.textContent = userName;
  } else {
    profileName.textContent = "";
    if (!profileName.contains(bnLogin)) {
      profileName.appendChild(bnLogin);
    }
  }
  playlistsCountP.textContent = `playlists: ${playlistList.length}`;
  favouriteSongsCountP.textContent = `favourite songs:${favouriteSongList.length}`;
}

// CHANGEPASS DIV==================================
let changePassPanel = document.createElement("div");
changePassPanel.className = "accountPanel_subPanel";

let changePassPanelTopBar = document.createElement("div");
changePassPanel.appendChild(changePassPanelTopBar);
changePassPanelTopBar.className = "accountPanel_subPanelTopBar";

let bnBackChangePassPanel = document.createElement("button");
changePassPanelTopBar.appendChild(bnBackChangePassPanel);
bnBackChangePassPanel.className = "bnBack_accountPanel_subPanel";
bnBackChangePassPanel.addEventListener("click", f_backChangePassPanel);
let backChangePassIcon = document.createElement("span");
bnBackChangePassPanel.appendChild(backChangePassIcon);
backChangePassIcon.className = "material-symbols-rounded";
backChangePassIcon.textContent = "arrow_back_ios_new";
let bnBackChangePassPanelP = document.createElement("p");
bnBackChangePassPanel.appendChild(bnBackChangePassPanelP);
bnBackChangePassPanelP.textContent = "BACK";

let changePassConDiv = document.createElement("div");
changePassPanel.appendChild(changePassConDiv);
changePassConDiv.className = "accountPanel_subPanelConDiv";

let changePassFormDiv = document.createElement("div");
changePassConDiv.appendChild(changePassFormDiv);
changePassFormDiv.id = "changePassFormDiv";

let oldPasswordInput = document.createElement("input");
changePassFormDiv.appendChild(oldPasswordInput);
oldPasswordInput.type = "password";
oldPasswordInput.placeholder = "OLD PASSWORD";

let newPasswordInput = document.createElement("input");
changePassFormDiv.appendChild(newPasswordInput);
newPasswordInput.type = "password";
newPasswordInput.placeholder = "NEW PASSWORD";

let confirmPasswordInput = document.createElement("input");
changePassFormDiv.appendChild(confirmPasswordInput);
confirmPasswordInput.type = "password";
confirmPasswordInput.placeholder = "CONFIRM NEW PASSWORD";

let changePassFormBtnDiv = document.createElement("div");
changePassFormDiv.appendChild(changePassFormBtnDiv);
changePassFormBtnDiv.id = "changePassFormBtnDiv";

let cancelChangePassBtn = document.createElement("button");
changePassFormBtnDiv.appendChild(cancelChangePassBtn);
cancelChangePassBtn.id = "cancelChangePassBtn";
cancelChangePassBtn.textContent = "CANCEL";
cancelChangePassBtn.addEventListener("click", f_cancelChangePassword);

let confirmChangePassBtn = document.createElement("button");
changePassFormBtnDiv.appendChild(confirmChangePassBtn);
confirmChangePassBtn.id = "confirmChangePassBtn";
confirmChangePassBtn.textContent = "CHANGE";
confirmChangePassBtn.addEventListener("click", f_confirmChangePassword);

function f_changePass() {
  if (signedIn) {
    accountPanel.replaceChild(changePassPanel, settingsPanel);
    changePassPanel.style.animation = "slideLeft 0.3s ease-in-out";
    changePassPanel.addEventListener(
      "animationend",
      function changePassPanelSlideLeft() {
        changePassPanel.removeEventListener(
          "animationend",
          changePassPanelSlideLeft
        );
      }
    );
    // history.pushState(f_backChangePassPanel, "", "/changePassword");
  }
}

function f_backChangePassPanel() {
  changePassPanel.style.animation = "slideRight 0.3s ease-in-out";
  changePassPanel.addEventListener(
    "animationend",
    function changePassPanelSlideRight() {
      changePassPanel.removeEventListener(
        "animationend",
        changePassPanelSlideRight
      );
      accountPanel.replaceChild(settingsPanel, changePassPanel);
    }
  );
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
          data[userNameKey].password = newPassword;
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
let notificationsPanel = document.createElement("div");
notificationsPanel.className = "accountPanel_subPanel";

let notificationsPanelTopBar = document.createElement("div");
notificationsPanel.appendChild(notificationsPanelTopBar);
notificationsPanelTopBar.className = "accountPanel_subPanelTopBar";

let bnBackNotificationsPanel = document.createElement("button");
notificationsPanelTopBar.appendChild(bnBackNotificationsPanel);
bnBackNotificationsPanel.className = "bnBack_accountPanel_subPanel";
bnBackNotificationsPanel.addEventListener("click", f_backNotificationsPanel);
let backNotificationsIcon = document.createElement("span");
bnBackNotificationsPanel.appendChild(backNotificationsIcon);
backNotificationsIcon.className = "material-symbols-rounded";
backNotificationsIcon.textContent = "arrow_back_ios_new";
let bnBackNotificationsPanelP = document.createElement("p");
bnBackNotificationsPanel.appendChild(bnBackNotificationsPanelP);
bnBackNotificationsPanelP.textContent = "BACK";

let notificationsConDiv = document.createElement("div");
notificationsPanel.appendChild(notificationsConDiv);
notificationsConDiv.className = "accountPanel_subPanelConDiv";

function loadNotifications() {
  clearContainer(notificationsConDiv);
  for (i in notificationsList) {
    let notificationDiv = document.createElement("div");
    notificationsConDiv.appendChild(notificationDiv);
    notificationDiv.className = "notificationDiv";

    let NotificationHeader = document.createElement("div");
    notificationDiv.appendChild(NotificationHeader);
    NotificationHeader.id = "notificationHeader";

    let notificationTitleP = document.createElement("p");
    NotificationHeader.appendChild(notificationTitleP);
    notificationTitleP.textContent = notificationsList[i].title;

    let bnRemoveNotification = document.createElement("button");
    NotificationHeader.appendChild(bnRemoveNotification);
    bnRemoveNotification.id = "bnRemoveNotification";
    bnRemoveNotification.addEventListener("click", () =>
      f_removeNotification(notificationsList[i])
    );
    let removeNotificationIcon = document.createElement("span");
    bnRemoveNotification.appendChild(removeNotificationIcon);
    removeNotificationIcon.className = "material-symbols-rounded";
    removeNotificationIcon.textContent = "delete";
    removeNotificationIcon.style.color = "red";
    let removeNotificationP = document.createElement("p");
    bnRemoveNotification.appendChild(removeNotificationP);
    removeNotificationP.textContent = "REMOVE";
    removeNotificationP.style.color = "red";

    let notificationDateP = document.createElement("p");
    notificationDiv.appendChild(notificationDateP);
    notificationDateP.id = "notificationDate";
    notificationDateP.textContent = notificationsList[i].date;
    let notificationTimeP = document.createElement("p");
    notificationDiv.appendChild(notificationTimeP);
    notificationTimeP.id = "notificationTime";
    notificationTimeP.textContent = notificationsList[i].time;

    let notificationContentP = document.createElement("p");
    notificationDiv.appendChild(notificationContentP);
    notificationContentP.textContent = notificationsList[i].content;
  }
  let notificationContentSpace = document.createElement("div");
  notificationsConDiv.appendChild(notificationContentSpace);
  notificationContentSpace.id = "notificationContentSpace";
}

function f_notifications() {
  if (signedIn) {
    accountPanel.replaceChild(notificationsPanel, settingsPanel);
    notificationsPanel.style.animation = "slideLeft 0.3s ease-in-out";
    notificationsPanel.addEventListener(
      "animationend",
      function notificationsPanelSlideLeft() {
        notificationsPanel.removeEventListener(
          "animationend",
          notificationsPanelSlideLeft
        );
      }
    );
    // history.pushState(f_backNotificationsPanel, "", "/notifications");
  }
}

function f_backNotificationsPanel() {
  notificationsPanel.style.animation = "slideRight 0.3s ease-in-out";
  notificationsPanel.addEventListener(
    "animationend",
    function notificationsPanelSlideRight() {
      notificationsPanel.removeEventListener(
        "animationend",
        notificationsPanelSlideRight
      );
      accountPanel.replaceChild(settingsPanel, notificationsPanel);
    }
  );
}

function f_removeNotification(notification) {
  notificationsList.splice(notificationsList.indexOf(notification), 1);
  loadNotifications();
}

// MANAGEHISTORY DIV==============================
let manageHistoryPanel = document.createElement("div");
manageHistoryPanel.className = "accountPanel_subPanel";

let manageHistoryPanelTopBar = document.createElement("div");
manageHistoryPanel.appendChild(manageHistoryPanelTopBar);
manageHistoryPanelTopBar.className = "accountPanel_subPanelTopBar";

let bnBackManageHistoryPanel = document.createElement("button");
manageHistoryPanelTopBar.appendChild(bnBackManageHistoryPanel);
bnBackManageHistoryPanel.className = "bnBack_accountPanel_subPanel";
bnBackManageHistoryPanel.addEventListener("click", f_backManageHistoryPanel);
let backManageHistoryIcon = document.createElement("span");
bnBackManageHistoryPanel.appendChild(backManageHistoryIcon);
backManageHistoryIcon.className = "material-symbols-rounded";
backManageHistoryIcon.textContent = "arrow_back_ios_new";
let bnBackManageHistoryPanelP = document.createElement("p");
bnBackManageHistoryPanel.appendChild(bnBackManageHistoryPanelP);
bnBackManageHistoryPanelP.textContent = "BACK";

let manageHistoryConDiv = document.createElement("div");
manageHistoryPanel.appendChild(manageHistoryConDiv);
manageHistoryConDiv.className = "accountPanel_subPanelConDiv";

let AllowHistoryDiv = document.createElement("div");
manageHistoryConDiv.appendChild(AllowHistoryDiv);
AllowHistoryDiv.id = "AllowHistoryDiv";
let AllowHistoryP = document.createElement("p");
AllowHistoryDiv.appendChild(AllowHistoryP);
AllowHistoryP.id = "AllowHistoryP";
AllowHistoryP.textContent = "ALLOW HISTORY";
let AllowHistoryToggle = document.createElement("div");
AllowHistoryDiv.appendChild(AllowHistoryToggle);
AllowHistoryToggle.id = "AllowHistoryToggle";
let AllowHistoryToggleBall = document.createElement("p");
AllowHistoryToggle.appendChild(AllowHistoryToggleBall);
AllowHistoryToggleBall.id = "AllowHistoryToggleBall";

let bnClearSearchHistory = document.createElement("button");
manageHistoryConDiv.appendChild(bnClearSearchHistory);
bnClearSearchHistory.id = "bnClearSearchHistory";
let bnClearSearchHistoryP = document.createElement("p");
bnClearSearchHistory.appendChild(bnClearSearchHistoryP);
bnClearSearchHistoryP.textContent = "CLEAR SEARCH HISTORY";
bnClearSearchHistoryP.style.color = "red";
bnClearSearchHistory.addEventListener("click", f_clearSearchHistory);

let bnClearPlayedSongHistory = document.createElement("button");
manageHistoryConDiv.appendChild(bnClearPlayedSongHistory);
bnClearPlayedSongHistory.id = "bnClearPlayedSongHistory";
let bnClearPlayedSongHistoryP = document.createElement("p");
bnClearPlayedSongHistory.appendChild(bnClearPlayedSongHistoryP);
bnClearPlayedSongHistoryP.textContent = "CLEAR PLAYED SONG HISTORY";
bnClearPlayedSongHistoryP.style.color = "red";
bnClearPlayedSongHistory.addEventListener("click", f_clearPlayedSongHistory);

let manageHistoryListDiv = document.createElement("div");
function f_manageHistory() {
  if (signedIn) {
    accountPanel.replaceChild(manageHistoryPanel, settingsPanel);
    manageHistoryPanel.style.animation = "slideLeft 0.3s ease-in-out";
    manageHistoryPanel.addEventListener(
      "animationend",
      function manageHistoryPanelSlideLeft() {
        manageHistoryPanel.removeEventListener(
          "animationend",
          manageHistoryPanelSlideLeft
        );
      }
    );
    // history.pushState(f_backManageHistoryPanel, "", "/manage-history");
  }
}

function f_backManageHistoryPanel() {
  manageHistoryPanel.style.animation = "slideRight 0.3s ease-in-out";
  manageHistoryPanel.addEventListener(
    "animationend",
    function manageHistoryPanelSlideRight() {
      manageHistoryPanel.removeEventListener(
        "animationend",
        manageHistoryPanelSlideRight
      );
      accountPanel.replaceChild(settingsPanel, manageHistoryPanel);
    }
  );
}

function stopHistory() {
  if (userData.allowHistory == 1) {
    AllowHistoryToggle.removeEventListener("click", stopHistory);
    AllowHistoryToggle.addEventListener("click", keepHistory);
    AllowHistoryToggleBall.style.transform = "translateX(0)";
    AllowHistoryToggle.style.backgroundColor = "black";
    bnClearSearchHistory.style.display = "none";
    bnClearPlayedSongHistory.style.display = "none";
    userData.allowHistory = 0;
  }
}

function keepHistory() {
  if (userData.allowHistory == 0) {
    AllowHistoryToggle.removeEventListener("click", keepHistory);
    AllowHistoryToggle.addEventListener("click", stopHistory);
    AllowHistoryToggleBall.style.transform = "translateX(4vw)";
    AllowHistoryToggle.style.backgroundColor = "blue";
    bnClearSearchHistory.style.display = "flex";
    bnClearPlayedSongHistory.style.display = "flex";
    userData.AllowHistory = 1;
  }
}

function setHistoryPref(pref) {
  if (pref == 1) {
    try {
      AllowHistoryToggle.removeEventListener("click", keepHistory);
    } catch {
      try {
        AllowHistoryToggle.removeEventListener("click", stopHistory);
      } catch {}
    }
    AllowHistoryToggle.addEventListener("click", stopHistory);
    AllowHistoryToggleBall.style.transform = "translateX(4vw)";
    AllowHistoryToggle.style.backgroundColor = "blue";
    bnClearSearchHistory.style.display = "flex";
    bnClearPlayedSongHistory.style.display = "flex";
  } else {
    try {
      AllowHistoryToggle.removeEventListener("click", stopHistory);
    } catch {
      try {
        AllowHistoryToggle.removeEventListener("click", keepHistory);
      } catch {}
    }
    AllowHistoryToggle.addEventListener("click", keepHistory);
    AllowHistoryToggleBall.style.transform = "translateX(0)";
    AllowHistoryToggle.style.backgroundColor = "black";
    bnClearSearchHistory.style.display = "none";
    bnClearPlayedSongHistory.style.display = "none";
  }
}

function f_clearSearchHistory() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    searchedTextList.splice(0, searchedTextList.length);
    searchedSongList.splice(0, searchedSongList.length);
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
    recentlyPlayedSongList.splice(0, recentlyPlayedSongList.length);
    updateDataFile().then(() => {
      loadRecentlyPlayedSongs();
      loadingDiv.style.display = "none";
      main.style.display = "flex";
    });
  }
}

// CHANGE THEME DIV================================
let changeThemePanel = document.createElement("div");
changeThemePanel.className = "accountPanel_subPanel";

let changeThemePanelTopBar = document.createElement("div");
changeThemePanel.appendChild(changeThemePanelTopBar);
changeThemePanelTopBar.className = "accountPanel_subPanelTopBar";

let bnBackChangeThemePanel = document.createElement("button");
changeThemePanelTopBar.appendChild(bnBackChangeThemePanel);
bnBackChangeThemePanel.className = "bnBack_accountPanel_subPanel";
bnBackChangeThemePanel.addEventListener("click", f_backChangeThemePanel);
let backChangeThemeIcon = document.createElement("span");
bnBackChangeThemePanel.appendChild(backChangeThemeIcon);
backChangeThemeIcon.className = "material-symbols-rounded";
backChangeThemeIcon.textContent = "arrow_back_ios_new";
let bnBackChangeThemePanelP = document.createElement("p");
bnBackChangeThemePanel.appendChild(bnBackChangeThemePanelP);
bnBackChangeThemePanelP.textContent = "BACK";

let changeThemeConDiv = document.createElement("div");
changeThemePanel.appendChild(changeThemeConDiv);
changeThemeConDiv.className = "accountPanel_subPanelConDiv";

let ChangeColorDiv = document.createElement("div");
changeThemeConDiv.appendChild(ChangeColorDiv);
ChangeColorDiv.id = "buttonDiv";
let bnChangeColor = document.createElement("button");
ChangeColorDiv.appendChild(bnChangeColor);
bnChangeColor.id = "bnChangeColor";
let bnChangeColorIcon = document.createElement("span");
bnChangeColor.appendChild(bnChangeColorIcon);
bnChangeColorIcon.className = "material-symbols-rounded";
bnChangeColorIcon.textContent = currentThemeColorIcon;
bnChangeColorIcon.id = "settingBtnIcon";
let ChangeColorTextContainer = document.createElement("div");
ChangeColorTextContainer.className = "buttonTextContainer";
bnChangeColor.appendChild(ChangeColorTextContainer);
let bnChangeColorP = document.createElement("p");
ChangeColorTextContainer.appendChild(bnChangeColorP);
bnChangeColorP.textContent = currentThemeColor;
let ChangeColorSelectionIcon = document.createElement("span");
ChangeColorTextContainer.appendChild(ChangeColorSelectionIcon);
ChangeColorSelectionIcon.className = "material-symbols-rounded";
ChangeColorSelectionIcon.textContent = "unfold_more";

let ChangeBlurDiv = document.createElement("div");
changeThemeConDiv.appendChild(ChangeBlurDiv);
ChangeBlurDiv.id = "ChangeBlurDiv";
let changeBlurP = document.createElement("p");
ChangeBlurDiv.appendChild(changeBlurP);
changeBlurP.id = "changeBlurP";
changeBlurP.textContent = "BLUR EFFECT";
let changeBlurToggle = document.createElement("div");
ChangeBlurDiv.appendChild(changeBlurToggle);
changeBlurToggle.id = "changeBlurToggle";
// changeBlurToggle.addEventListener("click", f_changeBlur);
let changeBlurToggleBall = document.createElement("p");
changeBlurToggle.appendChild(changeBlurToggleBall);
changeBlurToggleBall.id = "changeBlurToggleBall";

function f_changeTheme() {
  accountPanel.replaceChild(changeThemePanel, settingsPanel);
  changeThemePanel.style.animation = "slideLeft 0.3s ease-in-out";
  changeThemePanel.addEventListener(
    "animationend",
    function changeThemePanelSlideLeft() {
      changeThemePanel.removeEventListener(
        "animationend",
        changeThemePanelSlideLeft
      );
    }
  );
  // history.pushState(f_backChangeThemePanel,"","./themepanel");
}

function f_backChangeThemePanel() {
  changeThemePanel.style.animation = "slideRight 0.3s ease-in-out";
  changeThemePanel.addEventListener(
    "animationend",
    function changeThemePanelSlideRight() {
      changeThemePanel.removeEventListener(
        "animationend",
        changeThemePanelSlideRight
      );
      accountPanel.replaceChild(settingsPanel, changeThemePanel);
    }
  );
}

function f_changeThemeColor(color) {
  if (color == "dark") {
    currentThemeColor = "DARK";
    currentThemeColorIcon = "dark_mode";
    bnChangeColor.addEventListener("click", () => f_changeThemeColor("light"));
    loadingDiv.className = "loadingDiv_darkMode";
    bottomDiv.className = "bottomDiv_darkMode";
    homePanel.className = "homePanel_darkMode";
    playerPanel.className = "playerPanel_darkMode";
    searchPanel.className = "searchPanel_darkMode";
    libraryPanel.className = "libraryPanel_darkMode";
    accountPanel.className = "accountPanel_darkMode";
    loginPanel.className = "loginPanel_darkMode";
    contributionPanel.className = "contributionPanel_darkMode";
  } else if (color == "light") {
    currentThemeColor = "LIGHT";
    currentThemeColorIcon = "light_mode";
    bnChangeColor.addEventListener("click", () => f_changeThemeColor("dark"));
    loadingDiv.className = "loadingDiv_lightMode";
    bottomDiv.className = "bottomDiv_lightMode";
    homePanel.className = "homePanel_lightMode";
    playerPanel.className = "playerPanel_lightMode";
    searchPanel.className = "searchPanel_lightMode";
    libraryPanel.className = "libraryPanel_lightMode";
    accountPanel.className = "accountPanel_lightMode";
    loginPanel.className = "loginPanel_lightMode";
    contributionPanel.className = "contributionPanel_lightMode";
  }
  bnChangeColorP.textContent = currentThemeColor;
  bnChangeColorIcon.textContent = currentThemeColorIcon;
  if (signedIn) {
    userData.themeColor = color;
    updateDataFile();
  }
}

function f_changeBlur() {
  if (BlurActive) {
    changeBlurToggleBall.style.transform = "translateX(0)";
    changeBlurToggle.style.backgroundColor = "black";
    BlurActive = false;
  } else {
    changeBlurToggleBall.style.transform = "translateX(4vw)";
    changeBlurToggle.style.backgroundColor = "blue";
    BlurActive = true;
  }
}

// AUDIO QUALITY DIV================================
let audioQualityPanel = document.createElement("div");
audioQualityPanel.className = "accountPanel_subPanel";

let audioQualityPanelTopBar = document.createElement("div");
audioQualityPanel.appendChild(audioQualityPanelTopBar);
audioQualityPanelTopBar.className = "accountPanel_subPanelTopBar";

let bnBackAudioQualityPanel = document.createElement("button");
audioQualityPanelTopBar.appendChild(bnBackAudioQualityPanel);
bnBackAudioQualityPanel.className = "bnBack_accountPanel_subPanel";
bnBackAudioQualityPanel.addEventListener("click", f_backAudioQualityPanel);
let backAudioQualityIcon = document.createElement("span");
bnBackAudioQualityPanel.appendChild(backAudioQualityIcon);
backAudioQualityIcon.className = "material-symbols-rounded";
backAudioQualityIcon.textContent = "arrow_back_ios_new";
let bnBackAudioQualityPanelP = document.createElement("p");
bnBackAudioQualityPanel.appendChild(bnBackAudioQualityPanelP);
bnBackAudioQualityPanelP.textContent = "BACK";

let audioQualityPanelConDiv = document.createElement("div");
audioQualityPanel.appendChild(audioQualityPanelConDiv);
audioQualityPanelConDiv.className = "accountPanel_subPanelConDiv";
let audioQualityPanelP = document.createElement("p");
audioQualityPanelConDiv.appendChild(audioQualityPanelP);
audioQualityPanelP.textContent = "This feature will be available soon.";

function f_audioQuality() {
  accountPanel.replaceChild(audioQualityPanel, settingsPanel);
  audioQualityPanel.style.animation = "slideLeft 0.3s ease-in-out";
  audioQualityPanel.addEventListener(
    "animationend",
    function changeAudioQualityPanelSlideLeft() {
      audioQualityPanel.removeEventListener(
        "animationend",
        changeAudioQualityPanelSlideLeft
      );
    }
  );
  // history.pushState(f_backAudioQualityPanel,"","./audioQualityPanel");
}

function f_backAudioQualityPanel() {
  audioQualityPanel.style.animation = "slideRight 0.3s ease-in-out";
  audioQualityPanel.addEventListener(
    "animationend",
    function changeAudioQualityPanelSlideRight() {
      audioQualityPanel.removeEventListener(
        "animationend",
        changeAudioQualityPanelSlideRight
      );
      accountPanel.replaceChild(settingsPanel, audioQualityPanel);
    }
  );
}

function f_contribute() {
  if (signedIn) {
    main.style.display = "none";
    loadingDiv.style.display = "flex";
    // history.pushState(goBack,"","./contributionPanel");
    startContribution().then(() => {
      main.style.display = "flex";
      loadingDiv.style.display = "none";
      main.replaceChild(contributionPanel, accountPanel);
      currentTab = contributionPanel;
      bottomDiv.style.display = "none";
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
