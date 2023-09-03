const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasColeccionables = require('./routes/coleccionables.routes');

app.use('/coleccionables', rutasColeccionables);

//Ruta de error 404
app.use((request, response, next) => {
    console.log('Otro middleware!');

    let html = 
    `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Coleccionables</title>
    </head>
    <body>
        <!--Encabezado-->
        <header>
            <div class="bg-red-500 m-6 p-2 rounded-xl p-3">
                <h1 class="text-6xl font-sans text-black text-center" id="Titulo" name="Titulo">Error 404: Not Found</h1>
            </div>
        </header>
        <main>
            <div class="flex justify-center">
                <h1 class="text-3xl font-sans text-black text-center" id="Titulo" name="Titulo">
                    Ese sí es un coleccionable muy raro. 
                </h1>
            </div>
        </main>
    </body>
    </html>
    `;

    //Código de error
    response.statusCode = 404;

    response.send(html); //Manda la respuesta
});

app.listen(3000);