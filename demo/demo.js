const inputInteger = require("..");
const name = inputInteger("Jan Oblak");
const app = document.getElementById("app");
let heading = document.createElement("h1");
heading.innerHTML = name;
app.appendChild(heading);
