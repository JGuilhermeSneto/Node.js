const express = require('express');
const app = express();

// Para receber dados de forms (substitui body-parser)
app.use(express.urlencoded({ extended: true }));

// Rota GET com query params
app.get('/get', (req, res) => {


    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;


    if(nome == undefined || nome == ""){
        res.status(400).send()
    }
    res.status(200).send(`Teste get nome = ${nome} e sobrenome = ${sobrenome} = ok`);
});


app.post('/post', (req,res) => {
    const nome = req.query.nome
    const sobrenome = req.query.sobrenome


    
    res.status(`Teste post npme =${nome} e sobrenome = ${sobrenome} = ok`)
})
// Rota de teste
app.get('/teste', (req, res) => {
    res.status(200).send('<h1>Servidor rodando</h1>');
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando...');
});
