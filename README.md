# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 0 - Requisitos do ambiente

1. Node v22.14.0
[Instalação do node](https://nodejs.org/pt/download).
Seguir os passos de acordo com o Sistema Operacional utilizado.

2. NPM 10.9.2
Normalmente é instalado junto com o Node.

3. Se for seguir o tutorial a partir de uma outra parte do tutorial que não a inicial, mudar para a branch desejada, baixar o projeto e no nível raiz do projeto (o mesmo do arquivo package.json) executar o comando:

```bash
npm install
```

Isso irá instalar todas as dependências para o projeto.

## 1 - Hello World

Executar os comandos de terminal:

1. criação do arquivo de configuração do projeto.

```bash
npm init --yes
```

2. instalação framework express.

```bash
npm install express
```

3. Acessar [Express](https://expressjs.com/) para código de hello world e documentação.
Copiar o código de "hello world" do site e colar no arquivo index.js

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

```

4. Instação e configuração do Nodemon
Evitar ter que ficar parando e reiniciando o servidor a cada alteração no projeto.

```bash
npm install nodemon
```

Acrescentar o script de inicialização na configuração.
No arquivo package.json adicionar o script de start. Altere a propriedade "scripts" para ficar como a seguir:

```javascript
"scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

A partir de agora para iniciar o projeto iremos utilizar o comando

```bash
npm start
```

## 2 -  - Tratamento de requisições com parâmetros

1. Criar uma nova função para tratamento de requisiçoes do tipo post com parâmetro.
Criar a função no arquivo index.js logo abaixo da função para requisição do hello world!

```javascript
app.post('/ola', (req, res) => {
    // req.body é um objeto que contém os dados enviados no corpo da requisição
    nome = req.body.nome // recupera o valor do parametro com chave = nome
    res.send(`Olá ${nome}`)
})
```

2. Configurar o formato de parser utilizado pelo middleware body-parser.
Para que a instrução que recupera o nome do corpo da requisição funcione é preciso definir o formato de parser a ser feito pelo body-parser.
Adicionar a seguinte configuração logo acima das funções de tratamento de requisições.

```javascript
/*
body-parser é Middleware para fazer o parse do corpo da requisição antes de utilizarmos o req.body.
O express.urlencoded() faz o parse do corpo da requisição para o formato URL-encoded.
O valor falso para extended indica que o body-parser vai aceitar somente strings e arrays, enquanto
o valor verdadeiro indica que o body-parser vai aceitar objetos aninhados ou qualquer outro tipo.
*/
app.use(express.urlencoded({extended: false}))
```

3. Utilizar o postman para testar a função.
Ao criar uma nova requisição no postman, escolher o tipo POST e na aba de parâmetros escolher "body" e em seguida o formato
x-www-form-urlencoded para o formato de envio dos parâmetros.

![Postman - Exemplo de requisição do tipo POST com parâmetro.](https://lh3.googleusercontent.com/d/1MerylzOrFyJIULJT4cG5PR_WygxMjheC=s900?authuser=0 "Requisição com Postman")