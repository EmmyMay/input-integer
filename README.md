# @emmyb/input-integer
## What is it?
It is a number input component that is very flexible for you to customize or use.

**Usage**
```js
import inputInteger from '@emmyb/input-integer'
//or
const inputInteger = require("@emmyb/input-integer");
```
This function returns an el for you to append to the DOM.

********
You can pass in options such as:
```js
const {
    min = 0,  //number
    max = 1000, //number
    theme, //the appearance of the input
    label = "Input Integer", //the label of the input
    inputContainerClass = 
    "input_container", //css classname for the container used for the fancy underline animation
    inputId = "Input-Integer", //input element id. Useful for the label element
    step = "0" //step attribute for incrementing the value of the input
  } = options;
```

## Theming
You can change the appearance of the input either using the two themes 'light' and 'dark' provided by default or you can add yours.
```js
// theme
const { light } = require("@emmyb/input-integer/src/theme/"); //or {dark}
```
You can create yours as was done [here on stackblitz](https://stackblitz.com/edit/js-yzcdts?file=index.js).

## Event Listeners
There are some default event listeners handled for you to ensure min and max are respected. However, you can add an **object holding all your event listeners as below**
```js
import inputInteger from '@emmyb/input-integer'
//or
const inputInteger = require("@emmyb/input-integer");

const {
    min = 0,  //number
    max = 1000, //number
    theme, //the appearance of the input
    label = "Input Integer", //the label of the input
    inputContainerClass = 
    "input_container", //css classname for the container used for the fancy underline animation
    inputId = "Input-Integer", //input element id. Useful for the label element
    step = "0" //step attribute for incrementing the value of the input
  } = options;

// The on object can be anything but its methods have to be just as the name of the event listeners without the "on" prefix.
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
  
const priceComponent = inputInteger(options, on)

```

## Display in the browser
```js
const app = document.createElement("div");
app.append(ageInput.el, birthInput.el);
document.body.appendChild(app);
```