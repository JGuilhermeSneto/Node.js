const express = require('express')
const app = express()

// Para receber JSON do Postman ou fetch()
app.use(express.json())

// Para receber dados de formulário HTML (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }))

app.get('/prj01', (req, res) => {
    const nome = req.query.nome
    res.status(200).send(`Meu servidor ${nome} HTTP!`)
})

app.post('/prj02', (req, res) => {
    // Agora funciona tanto para JSON quanto formulário
    const nome = req.body.nome
    res.send(`Servidor web de ${nome} usando POST.`)
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000...')
})
