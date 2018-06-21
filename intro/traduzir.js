let dicionario = require('./dicionario.json');

let palavra = process.argv[2];
let traducao = dicionario[palavra];


if (palavra == 'listar-tudo'){
    console.log(dicionario);
} else if(traducao == undefined){
    console.log('Não tem essa palavra!')
} else{
    console.log(traducao);
}

