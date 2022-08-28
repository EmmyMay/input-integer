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
