# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 3 - Adição de Views ao projeto

1. Criar uma pasta chamada 'views' no nível raiz do projeto.

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
    Obs.: na época deste tutorial versão '3.1.10'.
   
```bash
npm install ejs
```

A partir daqui, para retornar views iremos utilizar o comando a seguir:

```javascript
req.render("nome_do_template_ejs")
```

Obs.: o path para o template deve ser considerado a partir do nível da pasta 'views'.

5. Criar dentro da pasta views um template EJS com o nome "ola_form.ejs" e criar um formulário para receber o nome do usuário visitante.
Em seguida direcione a ação (action) do formulário para a função de resposta já existente do tipo POST ("/ola").

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
