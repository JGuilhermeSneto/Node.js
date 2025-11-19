const express = require('express')
const app = express()

// Para receber JSON do Postman ou fetch()
app.use(express.json())


app.use(express.urlencoded({ extended: true }))

app.get('/prj01', (req, res) => {
    const nome = req.query.nome
    res.status(200).send(`Meu servidor ${nome} HTTP!`)
})

app.post('/prj02', (req, res) => {
    
    const nome = req.body.nome
    res.send(`Servidor web de ${nome} usando POST.`)
})

app.post('/prj03', (req, res) =>{
    const id = req.body.id
    const nome = req.body.nome
    const dep = req.body.dependentes
    let strdep = ''


    for(i=0; i<dep.length; i++){
        strdep += '['+ dep[i].nome + " | " +dep[i].par   + ']'
    }


    res.send(`<h1>o id enviado é ${id} e o nome enviado é ${nome}.
                    Dependentes: ${strdep}</h1>`)
})


app.post('/prj04', (req, res) => {
    const v1 = req.body.v1
    const v2 = req.body.v2
    const op = req.body.op
    let r = 0

    if (op == "+"){
        r = parseInt(v1) + parseInt(v2)
    }


    res.json({"res" : r}) 
})


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000...')
})
