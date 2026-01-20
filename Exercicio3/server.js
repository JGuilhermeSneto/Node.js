const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// "Banco de dados" em memória
let usuarios = [];

/* ================================
   ADD USUÁRIO
   POST /usuarios/add
================================ */
app.post('/usuarios/add', (req, res) => {
    const { nome } = req.body;

    if (!nome || nome.trim() === '') {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>O nome não pode ser vazio.</p>
                </body>
            </html>
        `);
    }

    usuarios.push(nome.trim());

    res.send(`
        <html>
            <body>
                <h1>Sucesso</h1>
                <p>Usuário "${nome}" adicionado com sucesso.</p>
            </body>
        </html>
    `);
});

/* ================================
   LISTAR USUÁRIOS
   GET ou POST /usuarios/list
================================ */
app.get('/usuarios/list', listarUsuarios);
app.post('/usuarios/list', listarUsuarios);

function listarUsuarios(req, res) {
    let listaHtml = usuarios.map(u => `<li>${u}</li>`).join('');

    if (usuarios.length === 0) {
        listaHtml = '<li>Nenhum usuário cadastrado.</li>';
    }

    res.send(`
        <html>
            <body>
                <h1>Lista de Usuários</h1>
                <ul>
                    ${listaHtml}
                </ul>
            </body>
        </html>
    `);
}

/* ================================
   DELETAR USUÁRIO
   POST /usuarios/del
================================ */
app.post('/usuarios/del', (req, res) => {
    const { nome } = req.body;

    const index = usuarios.indexOf(nome);

    if (index === -1) {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>Usuário não encontrado.</p>
                </body>
            </html>
        `);
    }

    usuarios.splice(index, 1);

    res.send(`
        <html>
            <body>
                <h1>Sucesso</h1>
                <p>Usuário "${nome}" removido com sucesso.</p>
            </body>
        </html>
    `);
});

/* ================================
   ATUALIZAR USUÁRIO
   POST /usuarios/update
================================ */
app.post('/usuarios/update', (req, res) => {
    const { nome, novonome } = req.body;

    const index = usuarios.indexOf(nome);

    if (index === -1) {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>Usuário não encontrado.</p>
                </body>
            </html>
        `);
    }

    if (!novonome || novonome.trim() === '') {
        return res.send(`
            <html>
                <body>
                    <h1>Erro</h1>
                    <p>O novo nome não pode ser vazio.</p>
                </body>
            </html>
        `);
    }

    usuarios[index] = novonome.trim();

    res.send(`
        <html>
            <body>
                <h1>Sucesso</h1>
                <p>Usuário atualizado com sucesso.</p>
            </body>
        </html>
    `);
});

/* ================================
   SERVIDOR
================================ */
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
