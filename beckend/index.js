/* 
TERMINAL:
npm init > instalar o package.json
npm install express > instala a biblioteca de nod (node_modules)

expressjs.com
Modelo de API: 
REST:  trabalho com json 
SOUP: trabalha com modelo de xml (antigo)

Protocolo HTPP (request e respond)
HEADER
- Status: 
status de resposta: 404 - erro 200 - erro
http.cat (entender o status)
- Method
    - GET
    - POST
BODY
*/ 

const express = require('express'); //toda aplicação é um app 
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {    //app.method('endereco')
    if(!req.body.pudim){
        res.send('Você não tem pudim');
    } else {
        res.send('')
    }
});

/*
app.get('/', (req, res) => {    //app.method('endereco')
    res.send("Hello Word!");
});
*/


/* 
porta de HTTPS é 443
a porta padrão de HTPP é 80
porta é a  identificação de serviço 
*/

//testar API: POSTMAN

app.post ('/', (req, res) =>{
    res.send('Recebi um POST');
});

app.get('/pudim', (req,res) => {
    res.send({
        sabor:'Leite',
        cobertura: 'Caramelo',
        frescura: 'Uva Passa'
    });
});

app.listen(3000); //app.listen(porta);  //sempre deve estar no fim do código 





