
function openNotificationsPanel() { 
  openSubPanel(settingsPanel, settingsPanelContent, notificationsPanel);
  loadNotifications();
}
function closeNotificationsPanel() {
  openSubPanel(settingsPanel, notificationsPanel, settingsPanelContent);
}

//#region UI

const notificationsPanel = createElement("div", { className: "settings-tab-inner-panel" });

const notificationsPanel_topBar = createElement("div", { className: "top-bar" });
notificationsPanel.appendChild(notificationsPanel_topBar);

notificationsPanel_topBar.appendChild(createElement("button", {
  className: "back-btn toggle",
  onclick: closeNotificationsPanel,
  title: "Back"
}, [ createElement("i", { className: "ph-bold ph-arrow-left" }) ]));

notificationsPanel_topBar.appendChild(createElement("p", {
  className: "top-bar-text",
  textContent: "Notifications"
}));

const notificationsPanel_content = createElement("div", { className: "content blur" });
notificationsPanel.appendChild(notificationsPanel_content);

//#region functions
/** @param {object} notification  */
function createNotification(notification) {
  
  const notificationDiv = createElement("div", { className: "notification-div" });

  const NotificationHeader = createElement("div", { className: "notification-header" });
  notificationDiv.appendChild(NotificationHeader);

  NotificationHeader.appendChild(createElement("p", {
    className: "notification-title",
    textContent: notification.title
  }));

  const bnRemoveNotification = createElement("button", {
    className: "remove-notification-btn toggle",
    onclick: () => {
      if (notificationDiv.classList.contains("inactive")) return;
      notificationDiv.classList.add("inactive");
      deleteNotification(notification);
    },
    title: "Delete notification",
  }, [ createElement("i", { className: "ph-bold ph-trash" })]);
  NotificationHeader.appendChild(bnRemoveNotification);

  const notificationMetaDataDiv = createElement("div", { className: "notification-meta-data-div" });
  notificationDiv.appendChild(notificationMetaDataDiv);

  notificationMetaDataDiv.appendChild(createElement("p", {
    className: "notification-date",
    textContent: notification.date
  }));

  notificationMetaDataDiv.appendChild(createElement("p", {
    className: "notification-time",
    textContent: notification.time
  }));

  notificationDiv.appendChild(createElement("p", {
    className: "notification-content",
    textContent: notification.content
  }));

  return notificationDiv;
}
//#endregion functions

const notificationContainer = createElement("div", { className: "notification-container" });
notificationsPanel_content.appendChild(notificationContainer);


//#endregion UI

function loadNotifications() {
  if (!signedIn) return;

  clearContainer(notificationContainer);

  currentUser.notificationsList.forEach((notification) => {
    notificationContainer.appendChild(createNotification(notification));
  });
}

/** @param {object} notification */
async function deleteNotification(notification) {
  const index = currentUser.notificationsList.indexOf(notification);
  currentUser.notificationsList.splice(index, 1);
  
  await currentUser.sync();
  loadNotifications();
}



//#region onLoad
loadingDiv.style.display = "none";
main.style.display = "flex";
openNotificationsPanel();
//#endregion onLoad