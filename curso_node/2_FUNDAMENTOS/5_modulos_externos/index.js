const minimist = require("minimist");

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(nome)
console.log(profissao)


//o minimist ajuda a ler os argumentos apresentados