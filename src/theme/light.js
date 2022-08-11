function theme(containerClass) {
  return `
  input {
  padding: 1rem;
  background-color: hsla(35, 88%, 94%, 0.397);
  border: none;
  width: 15rem;
}

.${containerClass} {
  position: relative;
  width: fit-content;
}

.${containerClass}::after {
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
input:focus {
  outline: none;
}

.${containerClass}:focus-within::after {
  transform: scaleX(1);
  transform-origin: left;
}`;
}

module.exports = theme;
