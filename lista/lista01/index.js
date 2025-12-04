const bodyParser = require('body-parser')
const express = require('express')
const app = express()

<<<<<<< HEAD
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
=======
app.use(bodyParser.urlencoded({extended:true}))

app.post('/calculadora', (req,res) =>{
    let op1 = Number(req.body.operando1)
    let op2= Number(req.body.operando2)
    let op = Number(req.body.operador)

    let resultado = 0

    if (op == '+'){
        resultado = op1 + op2
    }

    res.send(`<h1>Resultado = ${resultado}</h1>`)
})

app.listen(3000 , () => {
    console.log('Servidor rodando...')
})
>>>>>>> e28250f (aai)
