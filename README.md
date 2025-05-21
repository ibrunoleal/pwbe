# Tutorial para a disciplina de Programação Web Back-End período 2025-1

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
