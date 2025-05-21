const chalk = require('chalk');
const log = console.log;

const nota = 7

if(nota >=7){
    log(chalk.green('Aprovado'));
} else {
    log(chalk.bgRed('Reprovado'));
}