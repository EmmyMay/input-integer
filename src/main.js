function inputInteger(options, on = {}) {
  const {
    min = 0,
    max = 1000,
    theme,
    label = "Input Integer",
    inputContainerClass = "input_container",
    inputId = "Input-Integer",
    step = "0",
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
  input.step = step;
  input.setAttribute("id", inputId);
  input.onkeyup = (e) => handle_onkeyup(e, input);
  input.onmouseleave = (e) => clearInput(e, input);
  input.onblur = (e) => clearInput(e, input);

  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", inputId);
  inputLabel.textContent = label;

  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", inputContainerClass);
  inputContainer.append(inputLabel, input);
  Object.keys(on).map((K) => {
    return (input[`on${K}`] = on[K]);
  });
  shadow.appendChild(inputContainer);

  shadow.adoptedStyleSheets = [styleSheet];

  return el;
}

function clearInput(e, input) {
  let value = Number(e.target.value);
  if (value < input.min) input.value = "";
}
function handle_onkeyup(e, input) {
  let value = Number(e.target.value);
  if (value > input.max) input.value = input.max;
  if (value < input.min) input.value = 0;
}

module.exports = inputInteger;
