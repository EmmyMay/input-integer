(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const inputInteger = require("..");
// theme
const { dark } = require("../src/theme");

const app = document.createElement("div");
app.setAttribute("id", "app");

const ageOptions = {
  theme: dark(),
  min: 1,
  max: 80,
  inputContainerClass: "input_container",
  label: "Enter your age",
};
const birthOptions = {
  theme: dark(),
  min: 1772,
  max: 2022,
  inputContainerClass: "input2_container",
  label: "Enter your date of birth",
};
const on = {
  keyup: (e) => {
    const value = e.target.value;
    const value_len = value.length;
    const min_length = birthOptions.min.toString().length;
    if (value > birthOptions.max) birthInput.input.value = birthOptions.max;
    if (value_len === min_length && value < birthOptions.min) {
      birthInput.input.value = birthOptions.min;
    }
  },
};

// creating the inputs
const ageInput = inputInteger(ageOptions);
const birthInput = inputInteger(birthOptions, on);

// adding elements to dom
app.append(ageInput, birthInput);
document.body.appendChild(app);

},{"..":2,"../src/theme":4}],2:[function(require,module,exports){
function inputInteger(options, on = {}) {
  const {
    min = 0,
    max = 1000,
    theme,
    label = "Input Integer",
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

},{}],3:[function(require,module,exports){
function theme(containerClass) {
  return `
:host input {
  padding: 1rem;
  background-color: hsla(0, 0%, 4%, 0.205);
  border: none;
  width: 15rem;
}

:host div {
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

:host div::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom: hsl(207, 94%, 53%) 2px solid;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 200ms ease-in;
  z-index: -1;
}
:host input:focus {
  outline: none;

}

:host div:focus-within::after {
  transform: scaleX(1);
  transform-origin: left;
}
:host input::-webkit-outer-spin-button,
:host input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
:host input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

`;
}

module.exports = theme;

},{}],4:[function(require,module,exports){
const light = require("./light");
const dark = require("./dark");

module.exports = {
  light,
  dark,
};

},{"./dark":3,"./light":5}],5:[function(require,module,exports){
function theme(containerClass) {
  return `
:host input {
  padding: 1rem;
  background-color: hsla(35, 88%, 94%, 0.397);
  border: none;
  width: 15rem;
}

:host div {
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

:host div::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom: hsl(35, 36%, 49%) 2px solid;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 200ms ease-in;
  z-index: -1;
}
:host input:focus {
  outline: none;
  box-shadow: -4px 7px 20px -5px rgba(0,0,0,0.29);
-webkit-box-shadow: -4px 7px 20px -5px rgba(0,0,0,0.29);
-moz-box-shadow: -4px 7px 20px -5px rgba(0,0,0,0.29);
}

:host div:focus-within::after {
  transform: scaleX(1);
  transform-origin: left;
}
:host input::-webkit-outer-spin-button,
:host input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

:host input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

`;
}

module.exports = theme;

},{}]},{},[1]);
