const inputInteger = require("..");
// theme
const { light } = require("../src/theme");
const el = document.getElementById("app");
const options = {
  theme: light(),
  min: 1,
  max: 2000,
};
const inputComponent = inputInteger(options);
document.body.appendChild(inputComponent);
