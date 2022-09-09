const inputInteger = require("../src");
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
