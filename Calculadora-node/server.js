// Importações
const express = require('express');
const bodyParser = require('body-parser');

// Inicialização do app
const app = express();

// Middlewares para leitura do body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota POST /calculadora
app.post('/calculadora', (req, res) => {

    // Garantia de que o body existe
    if (!req.body) {
        return res.send(gerarHTML(
            'Erro',
            'Dados não recebidos.'
        ));
    }

    const { operando1, operando2, operador } = req.body;

    const op1 = Number(operando1);
    const op2 = Number(operando2);

    let resultado;

    // Validação básica
    if (isNaN(op1) || isNaN(op2)) {
        return res.send(gerarHTML(
            'Erro',
            'Os operandos devem ser números.'
        ));
    }

    switch (operador) {
        case 'somar':
            resultado = op1 + op2;
            break;

        case 'subtrair':
            resultado = op1 - op2;
            break;

        case 'multiplicar':
            resultado = op1 * op2;
            break;

        case 'dividir':
            if (op2 === 0) {
                return res.send(gerarHTML(
                    'Erro',
                    'Não é possível dividir por 0.'
                ));
            }
            resultado = op1 / op2;
            break;

        default:
            return res.send(gerarHTML(
                'Erro',
                'Operador inválido.'
            ));
    }

    // Retorno em HTML
    res.send(gerarHTML(
        'Resultado',
        `O resultado da operação é: <strong>${resultado}</strong>`
    ));
});

// Função que gera a página HTML
function gerarHTML(titulo, mensagem) {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>${titulo}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background: #ffffff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${titulo}</h1>
            <p>${mensagem}</p>
        </div>
    </body>
    </html>
    `;
}

// Inicialização do servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
