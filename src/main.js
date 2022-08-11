function inputInteger(options) {
  const {
    min = 1,
    max = 1000,
    theme,
    label = "Input Integer",
    inputContainerClass = "input_container",
    inputId = "Input-Integer",
  } = options;

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(theme);

  const el = document.createElement("div");
  el.setAttribute("id", "input_wrapper");

  const shadow = el.attachShadow({ mode: "closed" });

  const input = document.createElement("input");
  input.type = "number";
  input.min = min;
  input.max = max;
  input.setAttribute("id", inputId);
  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", inputId);
  inputLabel.textContent = label;

  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", inputContainerClass);
  inputContainer.append(inputLabel, input);
  shadow.appendChild(inputContainer);

  shadow.adoptedStyleSheets = [styleSheet];

  return el;
}

module.exports = inputInteger;
