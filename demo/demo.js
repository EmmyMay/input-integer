const inputInteger = require("@emmyb/input-integer");
// theme
const { light } = require("@emmyb/input-integer/src/theme/");

const app = document.createElement("div");
app.setAttribute("id", "app");

const ageOptions = {
  theme: light("input_container"),
  min: 1,
  max: 80,
  inputContainerClass: "input_container",
  label: "Enter your age",
};
const birthOptions = {
  theme: light("input2_container"),
  min: 1772,
  max: 2022,
  inputContainerClass: "input2_container",
  label: "Enter your date of birth",
};
// creating the inputs
const ageInput = inputInteger(ageOptions);
const birthInput = inputInteger(birthOptions);

// different on keyup functionality
// you can override the default event listener functions here
birthInput.input.onkeyup = (e) => {
  const value = e.target.value;
  const value_len = value.length;
  const min_length = birthOptions.min.toString().length;
  if (value > birthOptions.max) birthInput.input.value = birthOptions.max;
  if (value_len === min_length && value < birthOptions.min) {
    birthInput.input.value = birthOptions.min;
  }
};

// adding elements to dom
app.append(ageInput.el, birthInput.el);
document.body.appendChild(app);
