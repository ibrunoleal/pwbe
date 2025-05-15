// lista para atuar como base de dados temporária
const listaDeOperacoes = []


exports.save = function (req, res) {
    let data = req.body
    console.log(data); // exibir os dados da requisição no console
    listaDeOperacoes.push(data) // adicionar os dados à lista de operações
    res.redirect('/operacoes') // redirecionar para a página de listagem de operações após salvar
}

exports.listaDeOperacoes = listaDeOperacoes