# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 8 - Models

1. Criar a pasta 'models' no nível raiz do projeto e, nesta pasta, criar o arquivo 'operacao.js' para o modelo de uma operação.

```javascript
/**
 * Classe para representar uma operação da bolsa de valores.
 * @ param { object } data Objecto javascript (chave: valor) com parâmetros da requisição.
 * @ param { string } errors Array de mensagens de erro de validação de propriedades da classe.
 */
class Operacao {
	constructor(data) {
		this.data = data;
		this.errors = [];
	}
}

Operacao.prototype.validate = function () {
    // valida as propriedades da classe
}

Operacao.prototype.create = function () {
	this.validate();   
}

module.exports = Operacao;
```

2. Importar o modelo para ser utilizado no controlador.

```javascript
const Operacao = require('../models/operacao')
```

4. Alterar a função do controlador que salva uma operação para utilizar o modelo.

```javascript
exports.save = function (req, res) {
     /* Criar uma nova instância da classe Operacao com os dados recebidos do corpo da requisição */
    const operacao = new Operacao(req.body)
    /* Validar e realizar as conversoes necessarias nos dados da classe */
    operacao.create()
    if (operacao.errors.length > 0) {
        return res.send(operacao.errors)
    } else {
        listaDeOperacoes.push(operacao.data) // adicionar os dados à lista de operações
        res.redirect('/operacoes') // redirecionar para a página de listagem de operações após salvar
    }
}
```
