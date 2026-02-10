function openAppearancePanel() {
    openSubPanel(settingsPanel, settingsPanelContent, appearancePanel);
    syncTheme();
}
function closeAppearancePanel() {
    openSubPanel(settingsPanel, appearancePanel, settingsPanelContent);
}
//#region UI
const appearancePanel = createElement("div", { className: "settings-tab-inner-panel" });
const appearancePanel_topBar = createElement("div", { className: "top-bar" });
appearancePanel.appendChild(appearancePanel_topBar);
appearancePanel_topBar.appendChild(createElement("button", {
    className: "back-btn toggle",
    onclick: closeAppearancePanel
}, [createElement("i", { className: "ph-bold ph-arrow-left" })]));
appearancePanel_topBar.appendChild(createElement("p", {
    className: "top-bar-text",
    textContent: "Appearance"
}));
const appearancePanel_content = createElement("div", { className: "content" });
appearancePanel.appendChild(appearancePanel_content);
//#region theme
const appearancePanel_themeSection = createElement("div", { className: "settings-section" });
appearancePanel_content.appendChild(appearancePanel_themeSection);
function syncTheme() {
    const id = app.dataset.theme == "light" ? "light-input" : "dark-input";
    const appliedOption = themeDiv.querySelector(".selected");
    if (appliedOption) {
        appliedOption.querySelector("i").classList.replace("ph-fill", "ph-bold");
        appliedOption.querySelector("i").classList.replace("ph-radio-button", "ph-circle");
        appliedOption.classList.remove("selected");
    }
    const selectedOption = themeDiv.querySelector(`#option-${id}`);
    selectedOption.classList.add("selected");
    selectedOption.querySelector("i").classList.replace("ph-bold", "ph-fill");
    selectedOption.querySelector("i").classList.replace("ph-circle", "ph-radio-button");
}
//#region theme selection
const themeDiv = createElement("div", { className: "selection-div inactive", id: "theme-div" });
appearancePanel_themeSection.appendChild(themeDiv);
const themeHeader = createElement("div", { className: "selection-header" });
themeDiv.appendChild(themeHeader);
themeHeader.appendChild(createElement("p", {
    className: "selection-header-text",
    textContent: "Theme"
}));
const themeSelectionCon = createElement("div", { className: "selection-content" });
themeDiv.appendChild(themeSelectionCon);
const themeOptionContainer = createElement("div", { className: "selection-option-container" });
themeSelectionCon.appendChild(themeOptionContainer);
const lightOption = createElement("div", {
    className: "selection-option",
    id: "option-light-input"
});
themeOptionContainer.appendChild(lightOption);
lightOption.addEventListener("click", () => {
    if (themeDiv.classList.contains("inactive"))
        return;
    setTheme("light");
    syncTheme();
});
const lightOptionImageDiv = createElement("div", { className: "option-image-div" });
lightOption.appendChild(lightOptionImageDiv);
const lightOptionImage = createElement("div", {
    className: "option-image",
    id: "option-image-light"
});
lightOptionImage.dataset.theme = "light";
const lightOptionImageInnerDiv = createElement("div", { className: "option-image-inner-div" });
lightOptionImageInnerDiv.dataset.theme = "light";
lightOptionImage.appendChild(lightOptionImageInnerDiv);
lightOptionImageDiv.appendChild(lightOptionImage);
const lightOptionSelectionInd = createElement("div", { className: "selection-indicator" });
lightOption.appendChild(lightOptionSelectionInd);
const lightOptionIcon = createElement("i", { className: "ph-bold ph-circle" });
lightOptionSelectionInd.appendChild(lightOptionIcon);
const lightOptionText = createElement("p", {
    className: "option-text",
    textContent: "Light"
});
lightOptionSelectionInd.appendChild(lightOptionText);
const darkOption = createElement("div", {
    className: "selection-option",
    id: "option-dark-input"
});
themeOptionContainer.appendChild(darkOption);
darkOption.addEventListener("click", () => {
    if (themeDiv.classList.contains("inactive"))
        return;
    setTheme("dark");
    syncTheme();
});
const darkOptionImageDiv = createElement("div", { className: "option-image-div" });
darkOption.appendChild(darkOptionImageDiv);
const darkOptionImage = createElement("div", {
    className: "option-image",
    id: "option-image-dark"
});
darkOptionImage.dataset.theme = "dark";
const darkOptionImageInnerDiv = createElement("div", { className: "option-image-inner-div" });
darkOptionImageInnerDiv.dataset.theme = "dark";
darkOptionImage.appendChild(darkOptionImageInnerDiv);
darkOptionImageDiv.appendChild(darkOptionImage);
const darkOptionSelectionInd = createElement("div", { className: "selection-indicator" });
darkOption.appendChild(darkOptionSelectionInd);
const darkOptionIcon = createElement("i", { className: "ph-bold ph-circle" });
darkOptionSelectionInd.appendChild(darkOptionIcon);
const darkOptionText = createElement("p", {
    className: "option-text",
    textContent: "Dark"
});
darkOptionSelectionInd.appendChild(darkOptionText);
//#endregion theme selection
const autoTheme_ToggleDiv = createElement("div", { className: "toggle-div" });
appearancePanel_themeSection.appendChild(createElement("hr"));
appearancePanel_themeSection.appendChild(autoTheme_ToggleDiv);
autoTheme_ToggleDiv.appendChild(createElement("p", {
    className: "toggle-div-text",
    textContent: "Follow device theme"
}));
const autoThemeToggle = createElement("div", { className: "toggle-element active" });
autoTheme_ToggleDiv.appendChild(autoThemeToggle);
autoThemeToggle.addEventListener("click", toggleAutoTheme);
const autoThemeToggleBall = createElement("div", { className: "toggle-ball" });
autoThemeToggle.appendChild(autoThemeToggleBall);
function toggleAutoTheme() {
    if (autoTheme_ToggleDiv.classList.contains("inactive"))
        return;
    autoThemeToggle.classList.toggle("active");
    if (autoThemeToggle.classList.contains("active")) {
        if (themeDiv.classList.contains("inactive"))
            return;
        themeDiv.classList.add("inactive");
        handleAutoTheme(colorSchemeQuery);
        colorSchemeQuery.addEventListener("change", handleAutoTheme);
    }
    else {
        themeDiv.classList.remove("inactive");
        colorSchemeQuery.removeEventListener("change", handleAutoTheme);
    }
}
//#endregion theme
//#region blur
const appearancePanel_blurSection = createElement("div", { className: "settings-section" });
appearancePanel_content.appendChild(appearancePanel_blurSection);
let BlurActive = false;
const changeBlur_toggleDiv = createElement("div", { className: "toggle-div" });
appearancePanel_blurSection.appendChild(changeBlur_toggleDiv);
changeBlur_toggleDiv.appendChild(createElement("p", {
    className: "toggle-div-text",
    textContent: "Transparency"
}, [createElement("span", {
        className: "setting-version-indicator",
        textContent: "(Beta)"
    })]));
const changeBlurToggle = createElement("div", { className: "toggle-element" });
changeBlur_toggleDiv.appendChild(changeBlurToggle);
changeBlurToggle.addEventListener("click", toggleBlur);
const changeBlurToggleBall = createElement("div", { className: "toggle-ball" });
changeBlurToggle.appendChild(changeBlurToggleBall);
function toggleBlur() {
    if (changeBlur_toggleDiv.classList.contains("inactive"))
        return;
    changeBlurToggle.classList.toggle("active");
    app.dataset.blur = changeBlurToggle.classList.contains("active") ? "true" : "false";
}
const blurIntensity_sliderDiv = createElement("div", { className: "slider-div" });
appearancePanel_blurSection.appendChild(createElement("hr"));
appearancePanel_blurSection.appendChild(blurIntensity_sliderDiv);
const blurIntensity_sliderDiv_header = createElement("div", { className: "header" });
blurIntensity_sliderDiv.appendChild(blurIntensity_sliderDiv_header);
blurIntensity_sliderDiv_header.appendChild(createElement("p", {
    className: "slider-div-text",
    textContent: "Blur Intensity"
}));
const blurIntensity_sliderDiv_content = createElement("div", { className: "content" });
blurIntensity_sliderDiv.appendChild(blurIntensity_sliderDiv_content);
const blurIntensitySlider = createElement("input", {
    type: "range",
    min: 0,
    max: 200,
    value: 50,
    step: 10,
    id: "blur-intensity-slider",
    className: "setting-slider"
});
blurIntensity_sliderDiv_content.appendChild(blurIntensitySlider);
blurIntensitySlider.addEventListener("touchdown", (e) => { e.preventDefault(); }, { passive: false });
blurIntensitySlider.addEventListener("input", changeBlurIntensity);
function changeBlurIntensity() {
    app.style.setProperty("--blur-intensity", `${blurIntensitySlider.value}px`);
}
const transparency_sliderDiv = createElement("div", { className: "slider-div" });
appearancePanel_blurSection.appendChild(createElement("hr"));
appearancePanel_blurSection.appendChild(transparency_sliderDiv);
const transparency_sliderDiv_header = createElement("div", { className: "header" });
transparency_sliderDiv.appendChild(transparency_sliderDiv_header);
transparency_sliderDiv_header.appendChild(createElement("p", {
    className: "slider-div-text",
    textContent: "Background transparency"
}));
const transparency_sliderDiv_content = createElement("div", { className: "content" });
transparency_sliderDiv.appendChild(transparency_sliderDiv_content);
const transparencySlider = createElement("input", {
    type: "range",
    min: 0,
    max: 1.0,
    value: 0.3,
    step: 0.05,
    id: "transparency-slider",
    className: "setting-slider"
});
transparency_sliderDiv_content.appendChild(transparencySlider);
transparencySlider.addEventListener("touchdown", (e) => { e.preventDefault(); }, { passive: false });
transparencySlider.addEventListener("input", changeBackgroundTransparency);
function changeBackgroundTransparency() {
    app.style.setProperty("--background-transparency", transparencySlider.value);
}
//#endregion blur
//#region Naviation div
const appearancePanel_navSection = createElement("div", { className: "settings-section" });
appearancePanel_content.appendChild(appearancePanel_navSection);
let navBarStyle = "floating";
const changeNavBarStyle_toggleDiv = createElement("div", { className: "toggle-div" });
appearancePanel_navSection.appendChild(changeNavBarStyle_toggleDiv);
changeNavBarStyle_toggleDiv.appendChild(createElement("p", {
    className: "toggle-div-text",
    textContent: "Floating Navigation bar"
}));
const changeNavBarStyleToggle = createElement("div", { className: "toggle-element active" });
changeNavBarStyle_toggleDiv.appendChild(changeNavBarStyleToggle);
changeNavBarStyleToggle.addEventListener("click", changeNavBarStyle);
const changeNavBarStyleToggleBall = createElement("div", { className: "toggle-ball" });
changeNavBarStyleToggle.appendChild(changeNavBarStyleToggleBall);
function changeNavBarStyle() {
    if (changeNavBarStyle_toggleDiv.classList.contains("inactive"))
        return;
    changeNavBarStyleToggle.classList.toggle("active");
    bottomDiv.dataset.style = changeNavBarStyleToggle.classList.contains("active") ? "floating" : "sticky";
}
//#endregion Naviation div
//#endregion UI
//#region onLoad
loadingDiv.style.display = "none";
main.style.display = "flex";
openAppearancePanel();
export {};
//#endregion onLoad
//# sourceMappingURL=appearance.js.map