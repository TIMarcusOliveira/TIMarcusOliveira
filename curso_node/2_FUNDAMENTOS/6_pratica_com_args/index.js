
//externo
const minimist = require("minimist");

//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);
//passar args com node ./index.js --a=1


soma(a, b)