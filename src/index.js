let id = 0;

function inputInteger(options, protocol, on = {}) {
  const {
    min = 0,
    max = 1000,
    theme,
    label = "Input Integer",
    inputId = "Input-Integer",
    step = "0",
  } = options;

  // event name
  const componentName = `integer-${id++}`;

  // Component communication
  const notify = protocol({ from: componentName }, listen);
  function listen(message) {
    const { type, data } = message;
    if (type === "update") {
      input.value = data;
    }
  }

  const el = document.createElement("div");
  el.setAttribute("id", "input_wrapper");

  const shadow = el.attachShadow({ mode: "closed" });

  const input = document.createElement("input");
  input.type = "number";
  input.min = min;
  input.max = max;
  input.step = step;
  input.setAttribute("id", inputId);
  input.onkeydown = (e) => handle_onkeydown(e, input);
  input.onmouseleave = (e) => clearInput(e, input);
  input.onblur = (e) => clearInput(e, input);

  function clearInput(e, input) {
    let value = Number(e.target.value);
    if (value < input.min) input.value = "";
  }
  function handle_onkeydown(e, input) {
    let value = Number(e.target.value);
    if (value > input.max) input.value = input.max;
    if (value < input.min) input.value = 0;
    if (value < input.max)
      notify({ from: componentName, type: "update", data: value });
  }

  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", inputId);
  inputLabel.textContent = label;

  const inputContainer = document.createElement("div");
  inputContainer.append(inputLabel, input);
  Object.keys(on).map((K) => {
    return (input[`on${K}`] = on[K]);
  });
  shadow.appendChild(inputContainer);

  // component styling
  styleComponent(theme, shadow);

  return el;
}
const styleComponent = (theme, shadow) => {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(theme);
  shadow.adoptedStyleSheets = [styleSheet];
};
module.exports = inputInteger;
