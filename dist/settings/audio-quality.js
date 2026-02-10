function openAudioQualityPanel() {
    openSubPanel(settingsPanel, settingsPanelContent, audioQualityPanel);
}
function closeAudioQualityPanel() {
    openSubPanel(settingsPanel, audioQualityPanel, settingsPanelContent);
}
// AUDIO QUALITY DIV================================
const audioQualityPanel = createElement("div", { className: "settings-tab-inner-panel" });
const audioQualityPanel_topBar = createElement("div", { className: "top-bar" });
audioQualityPanel.appendChild(audioQualityPanel_topBar);
audioQualityPanel_topBar.appendChild(createElement("button", { className: "back-btn toggle", onclick: closeAudioQualityPanel }, [createElement("i", { className: "ph-bold ph-arrow-left" })]));
audioQualityPanel_topBar.appendChild(createElement("p", { className: "top-bar-text", textContent: "Audio Quality" }));
const audioQualityPanelConDiv = createElement("div", { className: "content" });
audioQualityPanel.appendChild(audioQualityPanelConDiv);
const audioQualityPanelP = createElement("p", { textContent: "This feature will be available soon!" });
audioQualityPanelConDiv.appendChild(audioQualityPanelP);
//#region onLoad
loadingDiv.style.display = "none";
main.style.display = "flex";
openAudioQualityPanel();
export {};
//#endregion onLoad
//# sourceMappingURL=audio-quality.js.map