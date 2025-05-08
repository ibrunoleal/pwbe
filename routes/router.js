const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})

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


module.exports = router