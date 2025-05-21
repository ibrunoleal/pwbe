# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 7 - Controladores

1. Criar diretório 'controllers' no nível raiz do projeto e dentro desta pasta o arquivo 'operacao-controller.js'.

2. Criar no controlador uma lista para representar a base de dados temporária para as operações, lembrando de fazer o export ao final ou na declaração.
   
3. Criar a função de salvar a opearação utilizando o exports.

```javascript
// lista para atuar como base de dados temporária
const listaDeOperacoes = []


exports.save = function (req, res) {
    let data = req.body
    console.log(data); // exibir os dados da requisição no console
    listaDeOperacoes.push(data) // adicionar os dados à lista de operações
    res.redirect('/operacoes') // redirecionar para a página de listagem de operações após salvar
}

exports.listaDeOperacoes = listaDeOperacoes
```

Aqui iremos perceber, mais na frente, pela impressão no log (console), que os dados estão como string e não nos tipos desejados como int para a quantidade ou float para preço. Além disso não estamos calculando as  propriedades derivadas (valor bruto, taxas e valor líquido) e nem fazendo nenhuma verificação de validade dos dados. Porém, deixaremos para tratar isso no devido lugar que é no modelo.

4. Criar a função de roteamento para a função de salvar a operação.

No roteador importar o controlador.

```javascript
const operacaoController = require('../controllers/operacao-controller')
```

Em seguida, criar função de roteamento no roteador.

```javascript
router.post('/salvar_operacao', operacaoController.save)
```

5. Ajustar a ação do formulário de cadastro de operação ('nova_operacao.ejs').

```html
<!-- ... codigo omitito acima -->
<form action="/salvar_operacao" method="POST">
<!-- codigo omitito abaixo ... -->
```

6. Atulizar o template de listagem de operações para exibir os dados da lista de operações.

```html
<!-- ... codigo omitito acima -->
<tbody>
    <% for (let i = 0; i < operacoes.length; i++) { %>
        <% operacao = operacoes[i] %>
        <tr>
            <td>
                <%= operacao.data %>
            </td>
            <td>
                <%= operacao.ativo %>
            </td>
            <td>
                <%= operacao.tipoDeOperacao %>
            </td>
            <td>
                <%= operacao.quantidade %>
            </td>
            <td>
                <%= operacao.preco %>
            </td>
            <td>
                <%= operacao.valorBruno %>
            </td>
            <td>
                <%= operacao.taxaB3 %>
            </td>
            <td>
                <%= operacao.valorLiquido %>
            </td>
        </tr>
    <% } %>
</tbody>
<!-- codigo omitito abaixo ... -->
```

7. Alterar a função de roteamento de listagem de operações para passar a lista de operações como argumento.

```javascript
router.get('/operacoes', function (req, res) {
  res.render('pages/operacoes',
    {
      title: 'Operações',
      paginaAtiva: 'operacao',
      operacoes: operacaoController.listaDeOperacoes
    }
  );
})
```

Ao fim desta etapa o projeto estará com a seguinte estrutura.

```txt
📦pwbe
 ┣ 📂controllers
 ┃ ┗ 📜operacao-controller.js
 ┣ 📂public
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
 ┗ 📜README.md
```

### 7.1 Exercício

"Baixar" essa versão do projeto e na view de listagem de operações, criar um formulário com um único campo para realizar a busca de operações pelo código do ativo. Utilize a mesma view de listagem de operações para exibir o resultado da pesquisa.
