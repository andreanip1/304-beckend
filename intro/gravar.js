const fs = require('fs');
let texto = 'Estou gravando um arquivo';

fs.writeFile('text.tx', texto, (error) => {
    if(error){
        console.log('Houve um erro ao gravar o arquivo');
    } else {
        console.log('Gravei o arquivo');
    }
});

console.log('Já mandei gravar'); 