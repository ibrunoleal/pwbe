# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 5 - Arquivos estáticos

1. Criar a pasta 'public' no nível raiz do projeto.

<ul>
    <li>Criar a subpasta "images"</li>
    <li>Criar a subpasta "javascripts</li>
    <li>Criar a subpasta "stylesheets"</li>
</ul>

2. Configura o middleware do express para informar onde estão os arquivos estáticos.

No arquivo 'index.js' adicionar a configuração de uso do express:

```javascript
app.use(express.static('public'))
```

3. A partir daqui, para os arquivos estáticos, utilizar o path relativo ao diretório 'public'.

Exemplo: para inserir (de maneira externa) o arquivo 'hello.css' localizado em "/public/stylesheets/hello.css":

```html
<link rel="stylesheet" href="/stylesheets/hello.css">
```

### 5.1 - Exercício

1. Criar um arquivo de estilo para personalizar o template de resposta ao usuário e outro para personalizar o formulário.

## 6 - Template Layouts

Instalando a dependência.

```bash
npm install express-ejs-layouts
```

Importar e definir a utilização no arquivo 'index.js'

```javascript
const expressLayouts = require('express-ejs-layouts')
``´

Antes de começar, vamos remover os seguintes arquivos para começar um novo exemplo com um projeto "zerado":

<div>
    <ul>
        <li>todos os arquivos de estilo (.css) caso tenha criado</li>
        <li>ola_form.ejs</li>
        <li>ola_resposta.ejs</li>
    </ul>
</div>

Remover as rotas já criadas no arquivo de roteamento (router.js). O arquivo deve ficar assim:

```javascript
const express = require('express')
const router = express.Router()


/* ----- funções de roteamento ----- */


module.exports = router
```

O projeto está com a estrura abaixo até aqui:

```txt
tutorial_pwbe
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┣ 📂javascripts
 ┃ ┗ 📂stylesheets
 ┣ 📂routes
 ┃ ┗ 📜router.js
 ┣ 📂views
 ┣ 📜index.js
 ┣ 📜package.json
```

3. Reorganizando as views.

Criar na pasta views, o arquivo "layout.ejs".

Criar na pasta views, a subpasta "partials" e dentro desta pasta criar os seguintes arquivos:

<div>
    <ul>
        <li>header.ejs</li>
        <li>footer.ejs</li>
    </ul>
</div>

Criar na pasta views (que agora deve estar vazia), a subpasta "pages". A partir daqui vamos criar todos os templates de views organizados nesta pasta.

1. Criar código a ser reaproveitado no footer. Segue um exemplo abaixo.

```html
<div class="footerDiv">
    <p>&copy; 2025 iMoney. All rights reserved.</p>
    <p>Follow us on:
        <a class="footerA" href="https://www.facebook.com/iMoney" target="_blank">Facebook</a> |
        <a class="footerA" href="https://www.twitter.com/iMoney" target="_blank">Twitter</a> |
        <a class="footerA" href="https://www.instagram.com/iMoney" target="_blank">Instagram</a>
    </p>
</div>
```

Criar arquivo "footer-style.css" para o footer (na pasta stylesheets).

```css
.footerDiv {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    padding: 20px;
}

.footerA {
    padding: 14px 16px;
    text-decoration: none;
}
```

5. Criar código a ser reaproveitado no header, como, por exemplo, uma navbar.

```html
<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#operacoes">Operações</a></li>
  <li><a href="#sobre">Sobre</a></li>
</ul>
```

Criar arquivo "navbar-style.css" para o header (na pasta stylesheets).

```css
/* codigo de w3schools.com */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #04AA6D;
}
```

6. Adicionar a inclusão dos arquivos que serão reaproveitados de header e footer no arquivo "layout.ejs", bem como difinir o local de conteúdo das views (body). E, ainda, não esquecer de adicionar a ligação com os arquivos de estilos do header e footer.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iMoney - <%= title %></title>
    <link rel="stylesheet" href="/stylesheets/navbar-style.css">
    <link rel="stylesheet" href="/stylesheets/footer-style.css">
</head>

<body>
    <header>
        <%- include('partials/header') %>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <%- include('partials/footer') %>
    </footer>
</body>

</html>
```

7. Criando um template para a Home do projeto.

Obs.: percebam que na tag título de "layout.ejs" deixamos uma parte para ser definida dinamicamente. O que pode ser feito tanto no tratamento da requisição ao passar como argumento ou como declaração de variável dentro do próprio template ejs.

Criar o arquivo "home.ejs" dentro da pasta "pages".

```html
<div>
    <h1>Bem-vindo ao iMoney</h1>
    <p>Sua solução completa para todas as suas necessidades financeiras.</p>
    <p>Registre suas operações e acompanhe seus investimentos.</p>
</div>
```

8. Criando um template para a listagem de Operações do projeto.

Criar o template 'operacoes.ejs' dentro da pasta 'pages'.

```html
<div>
    <table>
        <thead>
            <th>Data</th>
            <th>Código do ativo</th>
            <th>Tipo de operação</th>
            <th>Quantidade</th>
            <th>Preço unitário</th>
            <th>Valor Bruno</th>
            <th>Taxas B3</th>
            <th>Valor líquido</th>
        </thead>
        <tbody>
                <tr>
                    <td>
                        01/01/2025
                    </td>
                    <td>
                        ITSA4
                    </td>
                    <td>
                       compra
                    </td>
                    <td>
                        500
                    </td>
                    <td>
                        10.00
                    </td>
                    <td>
                        5000.00
                    </td>
                    <td>
                        1.50
                    </td>
                    <td>
                        5001.50
                    </td>
                </tr>
        </tbody>
    </table>
    <div class="container-botoes">
        <a class="botao-link" href="/nova_operacao">Cadastrar nova operação</a>
    </div>
</div>
```

Criar o arquivo 'table-style.css' para estilizar as tabelas.

```css
table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}

th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
```

Criar o arquivo de estilo para personalizar componentes. Nesse caso vamos adicionar estilização dos links como botões.

```css
.botao-link {
  display: inline-block;
  /* Permite largura e altura definidas */
  padding: 10px 20px;
  /* Espaçamento interno */
  background-color: #007bff;
  /* Cor de fundo */
  color: white;
  /* Cor do texto */
  text-decoration: none;
  /* Remove sublinhado padrão do link */
  border-radius: 5px;
  /* Bordas arredondadas */
  cursor: pointer;
  /* Indica que é clicável */
}

/* Estilos para o botão ao passar o mouse */
.botao-link:hover {
  background-color: #0056b3;
  /* Cor de fundo ao passar o mouse */
}

.container-botoes {
  display: flex;
  /* Permite o uso de flexbox */
  justify-content: center;
  /* Centraliza os botões horizontalmente */
  margin-top: 2rem;
  margin-bottom: 2rem;
}
```

9. Criando um template para o cadastro de novas operações.

Criar o template 'nova_operacao.ejs' dentro da pasta 'pages'.

```html
<div class="div-form">
    <form action="" method="POST">
        <div>
            <label for="inputData">Data</label>
            <input type="date" name="data" id="inputData" required>
        </div>
        <div>
            <label for="inputTipo">Código do ativo</label>
            <input type="text" name="ativo" id="inputAtivo" placeholder="Código do ativo" required>   
        </div>
        <div class="radio-group">
            <label for="inputTipo">Tipo de operação:</label>
            <br><br>
            <input type="radio" name="tipoDeOperacao" id="inputTipoCompra" value="compra" checked>
            <label for="inputTipoCompra">Compra</label>
            <input type="radio" name="tipoDeOperacao" id="inputTipoVenda" value="venda">
            <label for="inputTipoVenda">Venda</label>
        </div>
        <div>
            <label for="inputQuantidade">Quantidade</label>
            <input type="number" name="quantidade" id="inputQuantidade" required min="1" step="1">
        </div>
        <div>
            <label for="inputPreco">Preço unitário</label>
            <input type="number" name="preco" id="inputPreco" required min="0.01" step="0.01">
        </div>
        <div>
            <input type="submit" value="Registrar operação">
        </div>
    </form>
</div>
```

Criar, também, o arquivo 'form-style.css' de estilização para formulários.

```css
input[type=text], 
input[type=number], input[type=date]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.div-form {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

.radio-group {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
```

10. Atualizar a importacao de arquivos de estilo no 'layout.ejs'.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iMoney - <%= title %></title>
    <link rel="stylesheet" href="/stylesheets/navbar-style.css">
    <link rel="stylesheet" href="/stylesheets/footer-style.css">
    <link rel="stylesheet" href="/stylesheets/operacoes-style.css">
    <link rel="stylesheet" href="/stylesheets/component-style.css">
    <link rel="stylesheet" href="/stylesheets/table-style.css">
    <link rel="stylesheet" href="/stylesheets/form-style.css">
</head>

<body>
    <header>
        <%- include('partials/header') %>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <%- include('partials/footer') %>
    </footer>
</body>

</html>
``` 

11. Atualizar os links do 'header.ejs' para navegação.

```html
<ul>
    <li><a class="active" href="/">Home</a></li>
    <li><a href="/operacoes">Operações</a></li>
    <li><a href="#sobre">Sobre</a></li>
</ul>
```

12. Criando as rotas.

No arquivo de roteamento 'router.js' definir a requisição para a raiz do projeto para renderizar o template "home".
Obs.: o valor da variável 'title' deve ser definido via passagem pelo contexto (comom no exemplo abaixo) ou declaração de variável no próprio template (<% title = 'Home' %>).
Aproveitando a passagem por contexto, vamos passar, ainda, uma variável para indicar qual o menu do header ativo (Home ou Operações).

Criar, também, rotas para para a listagem de operaçoes e para o formulário de cadastro de operações.

```javascript
const express = require('express')
const router = express.Router()

/* ----- funções de roteamento ----- */
router.get('/', function (req, res) {
  res.render('pages/home',
    {
      title: 'Home',
      paginaAtiva: 'home'
    }
  );
});

router.get('/nova_operacao', function (req, res) {
  res.render('pages/nova_operacao',
    {
      title: 'Nova Operação',
      paginaAtiva: 'operacao'
    }
  );
})

router.get('/operacoes', function (req, res) {
  res.render('pages/operacoes',
    {
      title: 'Operações',
      paginaAtiva: 'operacao'
    }
  );
})

module.exports = router
```

Atualizar o 'header.ejs' para, dinamicamente, verifcar qual menu deve ter a classe css active.

```html
<ul>
    <li><a 
        <% if (paginaAtiva === 'home') { %> class="active" <% } %> 
        href="/">Home</a></li>
    <li><a 
        <% if (paginaAtiva === 'operacao') { %> class="active" <% } %>
        href="/operacoes">Operações</a></li>
    <li><a href="#sobre">Sobre</a></li>
</ul>
```

O projeto deve estar com a estrutura abaixo até aqui.

```txt
📦pwbe
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┣ 📂javascripts
 ┃ ┗ 📂stylesheets
 ┃ ┃ ┣ 📜component-style.css
 ┃ ┃ ┣ 📜footer-style.css
 ┃ ┃ ┣ 📜form-style.css
 ┃ ┃ ┣ 📜navbar-style.css
 ┃ ┃ ┗ 📜table-style.css
 ┣ 📂routes
 ┃ ┗ 📜router.js
 ┣ 📂views
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜home.ejs
 ┃ ┃ ┣ 📜nova_operacao.ejs
 ┃ ┃ ┗ 📜operacoes.ejs
 ┃ ┣ 📂partials
 ┃ ┃ ┣ 📜footer.ejs
 ┃ ┃ ┗ 📜header.ejs
 ┃ ┗ 📜layout.ejs
 ┣ 📜index.js
 ┣ 📜package.json
```
