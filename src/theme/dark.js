function theme() {
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
