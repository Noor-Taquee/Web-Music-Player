/**
 * This functions adds a script element at the end of body
 * @param {string} id
 * @param {string} src path to js file (eg: "./main/public/script.js")
 * @param {('module')} type
 * @returns {HTMLScriptElement}
 */
function addScript(id, src, type = null) {
  if (document.getElementById(id)) return document.getElementById(id);

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  if (type) { script.type = type }
  document.body.appendChild(script);
  return script;
}

/**
 * This function adds a link element on the head
 * @param {string} id
 * @param {string} href
 * @param {('stylesheet'|'icon'|'manifest')} rel
 * @returns {HTMLLinkElement}
 */
function addLink(id, href, rel = "stylesheet") {
  if (document.getElementById(id)) return document.getElementById(id);

  const newStyle = document.createElement("link");
  newStyle.id = id;
  newStyle.rel = rel;
  newStyle.href = href;
  document.head.appendChild(newStyle);
  return newStyle;
}

/**
 * This function creates a div
 * @param {string} className
 * @param {string} id
 * @returns {HTMLDivElement}
 */
function createDiv(className, id = null) {
  const div = document.createElement("div");
  if (className) { div.className = className }
  if (id) { div.id = id }
  return div;
}

/**
 * This function creates a paragraph element
 * @param {string} className 
 * @param {string} textContent 
 * @param {string} id 
 * @returns {HTMLParagraphElement}
 */
function createTextField(className = null, textContent = null, id = null) {
  const p = document.createElement("p");
  if (className) { p.className = className }
  if (textContent) { p.textContent = textContent }
  return p;
}

/**
 * @param {string} id 
 * @param {string} className 
 * @param {HTMLIconElement} icon 
 * @param {string} text 
 * @param {function} clickFunction 
 * @returns {HTMLButtonElement}
 */
function createButton(id = null, className = null, icon = null, text = null, clickFunction = null) {
  const button = document.createElement("button");
  if (id) { button.id = id }
  if (className) { button.className = className }
  if (icon) { button.appendChild(icon) }
  if (text) {
    const p = document.createElement("p");
    p.textContent = text;
    button.appendChild(p);
  }
  if (clickFunction) { button.addEventListener("click", clickFunction) }
  return button;
}

/**
 * @param {('text'|'number'|'password'|'search')} type 
 * @param {string} placeholder 
 * @param {string} id 
 * @param {string} className 
 * @returns {HTMLInputElement}
 */
function createInput(type, placeholder = null, id = null, className = null) {
  const input = document.createElement("input");
  input.type = type;
  if (placeholder) { input.placeholder = placeholder }
  if (className) { input.className = className }
  if (id) { input.id = id }
  return input;
}

/**
 * Creates a div with input and icons
 * @param {string} className 
 * @param {HTMLElement} iconElement 
 * @param {HTMLInputElement} inputElement 
 * @param {HTMLElement} iconElement2 
 * @returns {HTMLDivElement}
 */
function createInputDiv(className, iconElement, inputElement, iconElement2 = null) {
  const div = document.createElement("div");
  if (className) { div.className = className }
  div.appendChild(iconElement);
  div.appendChild(inputElement);
  if (iconElement2) { div.appendChild(iconElement2) }
  return div;
}

/**
 * Creates a dialogue box for confirmation, query selector -> .confirmation-panel
 * @param {string} header title for confirmation, query selector -> .confirmation-panel-header
 * @param {string} content confirmation message, query selector -> .confirmation-panel-content
 * @param {('Confirm'|'Yes'|'Delete'|'Clear'|'Log out')} btnText 
 * @param {function} btnFunction query selector for positive button -> .confirmation-panel-btn.confirm
 * @param {function} cancelFunction query selector for negative button -> .confirmation-panel-btn.cancel
 * @returns {HTMLDivElement}
 */
function createConfirmationPanel(header, content, btnText, btnFunction, cancelFunction) {
  const div = createDiv("confirmation-panel");
  div.appendChild(createTextField("confirmation-panel-header", header));
  div.appendChild(createTextField("confirmation-panel-content", content));
  div.appendChild(createButton(null, "confirmation-panel-btn confirm", null, btnText, btnFunction));
  div.appendChild(createButton(null, "confirmation-panel-btn cancel", null, "Cancel", cancelFunction));
  return div;
}

/**
 * Clears all the inner contents of the container
 * @param {HTMLElement} container 
 */
function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
