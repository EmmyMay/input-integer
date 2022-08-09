const inputInteger = require('..')
const name = inputInteger('Jan Oblak')
let p = document.createElement('p')
p.innerHTML = name
document.body.appendChild(p)