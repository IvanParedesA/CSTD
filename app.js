const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

let coleccionables = [
    {
        nombre: "Cubo de Rubik",
        imagen: "https://m.media-amazon.com/images/I/81XkUCfu0mL.jpg",
        valor: 382
    },
    {
        nombre: "Funko Pop",
        imagen: "https://m.media-amazon.com/images/I/81CnvOG8+YL._AC_UF894,1000_QL80_.jpg",
        valor: 447
    },
    {
        nombre: "Hot Wheels",
        imagen: "https://globaldiecastdirect.com/62549-thickbox_default/hot-wheels-aston-martin-one-77-coupe.jpg",
        valor: 99
    }
]

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Ruta GET /   (Raiz)
app.get('/', (request, response, next) => {

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
            <div class="bg-gradient-to-r from-cyan-500 to-lime-500 m-6 p-2 rounded-xl p-3">
                <h1 class="text-6xl font-sans text-black text-center" id="Titulo" name="Titulo">Tienda de coleccionables</h1>
            </div>
        </header>
    
        <!--Parte central de la página-->
        <main>
    
            <!--Columnas para los productos-->
            <div class="grid grid-cols-3 gap-3 mx-auto flex items-center">`;

                for(let coleccionable of coleccionables) {
                    html += 
                    `
                    <div>
                        <div class="bg-gray-600 m-6 p-4 rounded-xl text-center">
                            <div class="container bg-gray-300 mx-auto p-4 rounded-xl">
                                <p class="text-2xl font-sans text-black">${coleccionable.nombre}</p>
                                <br>
                                <img class="mx-auto" src="${coleccionable.imagen}" alt="${coleccionable.nombre}" width="300px">
                                <br>
                                <p class="text-2xl font-sans text-black">Precio: $${coleccionable.valor}</p>
                                <br>
                                <p class="text-1xl font-sans text-black"> Cantidad:
                                    <input type="number" id="cantidad${coleccionable.nombre}" name="cantidad${coleccionable.nombre}" placeholder="0" min="0" max="100" class="w-16">
                                </p>
                            </div>
                        </div>
                    </div>
                    `;
                }

            html += 
            `
            </div>
    
            <!--Botón para calcular cuenta total-->
            <div class="flex justify-center">
                <button id="botonCuenta" class="bg-red-500 hover:bg-red-600 w-48 h-12 rounded-full">
                    Calcular Cuenta
                </button>
            </div>
            <br>
    
            <!--Mensaje de ayuda oculto-->
            <div class="flex justify-center mx-64">
                <p id="ayuda" style="visibility:hidden"> 
                    (Este es un mensaje de ayuda oculto) ¡Introduce texto y verás que el color cambia!
                </p>
            </div>
            
            <!--Entrada de texto que cambiar de color-->
            <div class="bg-gray-600 m-6 p-4 rounded-xl flex justify-center mx-64">
                <p>
                    <label for="sugerencia">¿Qué otro colleccionable te gustaría ver en nuestra tienda? </label>
                    <input id="sugerencia" type="text" placeholder="Tarjetas Pokemon">
                </p>
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

//Ruta GET /new
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

//Ruta POST /new
app.post('/new', (request, response, next) => {
    console.log(request.body);

    coleccionables.push({
        nombre: request.body.nombre,
        imagen: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        valor: request.body.valor,
    });

    response.redirect('/')
});

//Ruta GET /pregunta
app.get('/pregunta', (request, response, next) => {

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
            <div class="bg-gradient-to-r from-indigo-500 to-purple-500 m-6 p-2 rounded-xl p-3">
                <h1 class="text-6xl font-sans text-black text-center" id="Titulo" name="Titulo">Preguntas de Laboratorio</h1>
            </div>
        </header>
        <main>
            <div class="bg-gray-600 m-6 p-4 rounded-xl">
                <p class="text-2xl font-sans text-white">Describe el archivo package.json.</p>
                <br>
                <p class="text-1xl font-sans text-white">El archivo package.json contiene todos los metadatos 
                    acerca del proyecto tal como descripción, licencia, dependencias y scripts. Sus principales propiedades
                    son:
                </p>
                <ul class="list-disc font-sans text-white p-4">
                    <li>name (nombre)</li>
                    <li>version number (version)</li>
                    <li>dependencies (dependencias)</li>
                    <li>license (licencia)</li>
                    <li>scripts (comandos)</li>
                </ul>
                <p class="text-2xl font-sans text-white">Referencia</p>
                <br>
                <p class="text-1xl font-sans text-white">Losapuntesde. (2023, 1 septiembre). Package.Json en 
                    Node.js: Configurando tu proyecto. Apuntes de Programador. 
                    https://apuntes.de/nodejs-desarrollo-web/package-json/#gsc.tab=0
                </p>
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