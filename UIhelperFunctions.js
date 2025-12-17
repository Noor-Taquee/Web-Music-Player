function createDiv(className, id = null) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }
  return div;
}

function createTextField(className = null, content = null) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = content;
  return p;
}

function createButton(
  id = null,
  className = null,
  icon = null,
  text = null,
  clickFunction = null
) {
  let button = document.createElement("button");
  if (id) {
    button.id = id;
  }
  if (className) {
    button.className = className;
  }
  if (icon) {
    button.appendChild(icon);
  }
  if (text) {
    let p = document.createElement("p");
    p.textContent = text;
    button.appendChild(p);
  }
  if (clickFunction) {
    button.addEventListener("click", clickFunction);
  }
  return button;
}

function createIcon(type = null, name, clickFunction = null, id = null) {
  if (!type) {
    type = "regular";
  }
  let icon = document.createElement("i");
  icon.className = `ph-${type} ph-${name}`;

  if (clickFunction) {
    icon.addEventListener("click", clickFunction);
  }

  return icon;
}

function createInput(type, placeholder, id = null, className = null) {
  let input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  if (className) {
    input.className = className;
  }
  if (id) {
    input.id = id;
  }
  return input;
}

function createInputDiv(
  className,
  iconElement,
  inputElement,
  iconElement2 = null
) {
  let div = document.createElement("div");
  if (className) {
    div.className = className;
  }
  div.appendChild(iconElement);
  div.appendChild(inputElement);

  if (iconElement2) {
    div.appendChild(iconElement2);
  }

  return div;
}

function createConfirmationPanel(header, content, btnText, btnFunction, cancelFunction) {
  let div = createDiv("confirmation-panel");
  let divHeader = createTextField("confirmation-panel-header", header);
  div.appendChild(divHeader);
  let divContent = createTextField("confirmation-panel-content", content);
  div.appendChild(divContent);
  let opt1 = createButton(null, "confirmation-panel-btn confirm", null, btnText, btnFunction);
  div.appendChild(opt1);
  let opt2 = createButton(null, "confirmation-panel-btn cancel", null, "Cancel", cancelFunction);
  div.appendChild(opt2);
  return div;
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
