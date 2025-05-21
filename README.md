# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 4 - Roteamento

1. Criar a pasta 'routes' no nível raiz do projeto e dentro dela criar o arquivo 'router.js'.

Importar o express e criar a miniaplicação de roteamento do express.

```javascript
const express = require('express')
const router = express.Router()
```

2. No final do arquivo, exportar o roteador para poder ser utilizado em outros arquivos.

```javascript
module.exports = router
```

3. Trazer as funções de roteamento do "index.js" para o arquivo de rotas e fazer o ajuste no objeto que controla as requisições (antes o objeto app) para o router, conforme exemplo abaixo.

```javascript
// antes no arquivo index.js
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// agora no aquivo router.js
router.get('/', (req, res) => {
    res.send('Hello World!')
})
```

Não esquecer de trazer as demais funções.

```javascript
router.post('/ola', (req, res) => {
    // req.body é um objeto que contém os dados enviados no corpo da requisição
    nome = req.body.nome // recupera o valor do parametro com chave = nome
    /* renderiza a view ola_resposta.ejs e passa o valor do nome através do contexto
    que é um objeto javascript que contém as variáveis que serão utilizadas na view */
    res.render('ola_resposta', { nome: nome }) 
})

router.get('/ola_form', (req, res) => {
    res.render('ola_form')
})
```

Obs.: não esquecer de apagar as funções de roteamento do arquivo 'index.js'.

4. Importar os objetos e funções exportadas pelo roteador.

No arquivo "index.js" adicionar a importação antes das definições "set" e "use".

```javascript
// roteamentos
const router = require('./routes/router')
```

5. Fazer com que o app agora redirecione todas as requisições do projeto para o roteador (objeto router).

Adicionar a definição de uso antes do 'listen' (execução do app) no arquivo 'index.js'.

```javascript
app.use('/', router)
```

Tudo deve continuar funcionando com anteriormente, porém com a modularização dos roteamentos.

### 4.1 - Exercício

1. Criar um aplicação que contem uma página com um formulário (método POST) similar ao da imagem abaixo para cadastrar operações de compra e venda na bolsa de valores do Brasil.

<div align="center">

![Modelo de formulário para o exercício](https://lh3.googleusercontent.com/d/1OjHO0WJpUMGNOQFJydWH8Cb8xC6C1ghR=s250?authuser=0 "Requisição com Postman")

</div>

<ul>
    <li>Criar dois exemplos de códigos: ITSA4 e BBSE3 no select</li>
    <li>Quantidade deve ser um número inteiro</li>
    <li>Preço deve ser um número float</li>
</ul>

1. Definir a ação do formulário para uma função que trata os dados submetidos pelo formulário, cria um objeto javascript e o insere em uma lista.

2. Criar uma página que contém um tabela que lista todos as operações salvas na lista.

3. Desafio: após o passo 2, redirecionar para a página que lista as operações.
