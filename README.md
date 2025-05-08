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

## 2 - Tratamento de requisições com parâmetros

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

## 3 - Adição de Views ao projeto

1. Criar uma pasta chamada "views" no nível raiz do projeto.

2. No arquivo de execução do projeto (index.js) definir o valor da propriedade do app que indica o local das views.

```javascript
/* Definie o local onde estão localizadas as views do projeto */
app.set('views', 'views')
```

3. Logo abaixo da instrução anterior, definir o valor da propriedade do app que indica qual engine -- motor de construção das páginas dinâmicas -- será utilizado.

```javascript
/* Define o template engine que será utilizado para renderizar as views */
// O EJS é um template engine que permite criar views dinâmicas utilizando JavaScript
app.set('view engine', 'ejs')
```

4. Instalar o EJS

```bash
npm install ejs
```

A partir daqui, para retornar views iremos utilizar o comando a seguir:

```javascript
req.render("nome_do_template_ejs")
```

obs.: o path para o template deve ser considerado a partir do nível da pasta views.

5. Criar dentro da pasta views um template EJS com o nome "ola_form.ejs" e criar um formulário para receber o nome do usuário visitante.
Direcione a ação (action) do formulário para a função de resposta já existente do tipo POST ("/ola").

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial - Olá</title>
</head>
<body>
    <div>
        <h1>Formulário de Visitação</h1>
    </div>
    <div>
        <form action="/ola" method="post">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <br><br>
            <button type="submit">Enviar</button>
        </form>
    </div>
</body>
</html>
```

6. Criar uma função para tratar a requisição do tipo GET para renderizar a view do formulário.

```javascript
app.get('/ola_form', (req, res) => {
    res.render('ola_form')
})
```

7. Executar o projeto e testar acessando a view do formulário.

[http://localhost:3000/ola_form](http://localhost:3000/ola_form)

8. Melhorando a resposta com um template. Criar um novo template EJS com o nome "ola_resposta.ejs" na pasta "views" para responder um olá persnalizado ao visitante.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial - Olá (Resposta)</title>
</head>
<body>
    <div>
        <h1>Resposta ao Visitante</h1>
    </div>
    <div>
        <span>Olá, <%= nome %>!</span><br>
        <span>Obrigado por visitar nosso site.</span>
    </div>
</body>
</html>
```

9. Alterar o método que trata a requisição do tipo POST para "/ola" para retornar o template de resposta renderizado com a informação do formulário.

```javascript
app.post('/ola', (req, res) => {
    // req.body é um objeto que contém os dados enviados no corpo da requisição
    nome = req.body.nome // recupera o valor do parametro com chave = nome
    /* renderiza a view ola_resposta.ejs e passa o valor do nome através do contexto
    que é um objeto javascript que contém as variáveis que serão utilizadas na view */
    res.render('ola_resposta', { nome: nome }) 
})
```

10. Testar novamente acessando o formulário e submetendo o nome do visitante através do botão.

[http://localhost:3000/ola_form](http://localhost:3000/ola_form)

### 3.1 - Exercício

Criar um projeto contendo uma página que recebe dois números através de um formulário, submete os números e exibe o resultado da soma entre esses números em uma página de resposta.
