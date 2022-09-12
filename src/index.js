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

  // component name
  const componentName = `integer-${id++}`;
  const el = createElement({ attr: "id", attrVal: "input_wrapper" });

  const shadow = el.attachShadow({ mode: "closed" });

  const input = createElement({ el: "input", attr: "id", attrVal: inputId });
  input.type = "number";
  input.min = min;
  input.max = max;
  input.step = step;

  // event handling
  input.onkeyup = (e) => handle_onkeyup(e, input);
  input.onmouseleave = (e) => clearInput(e, input);
  input.onblur = (e) => clearInput(e, input);

  const inputLabel = createElement({
    el: "label",
    attr: "for",
    attrVal: inputId,
  });
  inputLabel.textContent = label;

  const inputContainer = createElement();
  appendElement(inputContainer, inputLabel, input);

  appendElement(shadow, inputContainer);

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
const createElement = ({ el = "div", attr, attrVal } = {}) => {
  const ele = document.createElement(el);
  if (attr && attrVal) ele.setAttribute(attr, attrVal);
  return ele;
};
const appendElement = (target, ...children) => {
  target.append(...children);
};
module.exports = inputInteger;
