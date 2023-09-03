const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Agregamos rutas
app.get('/new', (request, response, next) => {

    const html = 
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
            <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-6 p-2 rounded-xl p-3">
                <h1 class="text-6xl font-sans text-black text-center" id="Titulo" name="Titulo">Registro de coleccionables</h1>
            </div>
        </header>
        <main>
            <div class="bg-gray-600 m-6 p-4 mx-96 rounded-xl text-center">
                <form action="/new" method="POST">
                    <label for="nombre">Nombre del coleccionable</label>
                    <input id="nombre" name="nombre" class="input" type="text" placeholder="Funko Pop Batman">
                    <br>
                    <br>
                    <label for="valor">Valor del coleccionable</label>
                    <input id="valor" name="valor" class="input" type="number" placeholder="420">
                    <br>
                    <br>
                    <button id="registrar" name="registrar" type="submit" value="Registrar" class="bg-purple-500 hover:bg-red-500 w-48 h-12 rounded-full">
                        Registrar
                    </button>
                </form>
            </div>
        </main>
        <!--Pie de página-->
        <footer>
            <div class="bg-gray-900 m-6 p-2 rounded-xl p-3">
                <p class="text-center text-1xl font-sans text-white">Editor html utilizado en esta página web: Visual Studio Code</p>
                <p class="text-center text-1xl font-sans text-white">Enlace al sitio del editor: <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></p>
                <br>
                <p class="text-center text-1xl font-sans text-white">Framework de estilo utilizado: Tailwind CSS</p>
                <p class="text-center text-1xl font-sans text-white">Enlace al sitio del framework de estilo: https://tailwindcss.com/</p>
            </div>
        </footer>
    </body>
    </html>
    `;

    response.send(html); 
});

app.post('/new', (request, response, next) => {
    console.log(request.body);
    response.redirect('/')
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);