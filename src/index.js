let id = 0;

function inputInteger(options, protocol, on = {}) {
  // component name
  const componentName = `integer-${id++}`;

  const {
    min = 0,
    max = 1000,
    theme,
    labelValue = "Input Integer",
    inputId = "Input-Integer",
    step = "0",
  } = options;

  const el = document.createElement("div");
  const shadow = el.attachShadow({ mode: "closed" });

  shadow.innerHTML = `
  <div>
    <label for="${inputId}">${labelValue}</label>
    <input min="${min}" max="${max}" step="${step}" type="number">
  </div>
`;
  const [, input] = shadow.firstElementChild.children;

  // event handling
  input.onkeyup = (e) => handle_onkeyup(e, input);
  input.onmouseleave = (e) => clearInput(e, input);
  input.onblur = (e) => clearInput(e, input);

  // capturing events
  Object.keys(on).map((K) => {
    return (input[`on${K}`] = on[K]);
  });

  // Component communication
  const notify = protocol({ from: componentName }, listen);
  function listen(message) {
    const { type, data } = message;
    if (type === "update") {
      input.value = data;
    }
  }

  function clearInput(e, input) {
    let value = Number(e.target.value);
    if (value < input.min) input.value = "";
  }
  function handle_onkeyup(e, input) {
    let value = Number(e.target.value);
    if (value > input.max) input.value = input.max;
    if (value < input.min) input.value = 0;
    if (value < input.max)
      notify({ from: componentName, type: "update", data: value });
  }

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
