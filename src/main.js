function inputInteger(options) {
  const { min = 1, max = 1000, theme, label = "Input Integer" } = options;

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(theme);

  const el = document.createElement("div");
  el.setAttribute("id", "input_wrapper");

  const shadow = el.attachShadow({ mode: "closed" });
  const input = document.createElement("input");
  input.type = "number";
  input.min = min;
  input.max = max;

  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "input_container");
  inputContainer.appendChild(input);
  shadow.appendChild(inputContainer);

  shadow.adoptedStyleSheets = [styleSheet];

  return el;
}

module.exports = inputInteger;
