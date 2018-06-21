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
app.get('/', (req, res) => {    //app.method('endereco')
    res.send("Hello Word!";)
})

app.listen(3000); //app.listen(porta);

/* 
porta de HTTPS é 443
a porta padrão de HTPP é 80
porta é a  identificação de serviço 






