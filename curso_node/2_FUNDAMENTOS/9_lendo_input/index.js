const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem favorita? ', (linguagem) => {
    if (linguagem === 'Phyton'){
        console.log('Isso nem é linguagem')
    }else{
        console.log(`A sua linguagem favorita é ${linguagem}`)
    }
    readline.close()
})