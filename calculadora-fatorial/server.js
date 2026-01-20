const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para ler JSON e formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ================================
   ROTA /fatorial
================================ */
app.post('/fatorial', (req, res) => {
    const { numero } = req.body;

    // Validação
    if (numero === undefined) {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>Parâmetro "numero" não recebido.</p>
                </body>
            </html>
        `);
    }

    const n = Number(numero);

    if (isNaN(n) || n < 0) {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>O número deve ser um valor inteiro não negativo.</p>
                </body>
            </html>
        `);
    }

    // Limite para evitar números muito grandes
    if (n > 170) {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>O resultado é um número muito grande.</p>
                </body>
            </html>
        `);
    }

    // Cálculo do fatorial
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }

    res.send(`
        <html>
            <body>
                <h1>Resultado</h1>
                <p>O fatorial de ${n} é: ${fatorial}</p>
            </body>
        </html>
    `);
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
