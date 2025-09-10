const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    
    res.end(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Meu Site em Node.js</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    text-align: center;
                    margin: 0;
                    padding: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <h1>🚀 Hello World em Node.js</h1>
            <p>Esse é meu primeiro site rodando com Node!</p>
        </body>
        </html>
    `);
}).listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080");
});
