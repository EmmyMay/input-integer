const inputInteger = require('..')
const name = inputInteger('Jan Oblak')
let heading = document.createElement('h1')
heading.innerHTML = name
document.body.appendChild(heading)