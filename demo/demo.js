const inputInteger = require("..");
// theme
const { light } = require("../src/theme");
const options = {
  theme: light("input_container"),
  min: 1,
  max: 2000,
  inputContainerClass: "input_container",
};
const { el } = inputInteger(options);
document.body.appendChild(el);
