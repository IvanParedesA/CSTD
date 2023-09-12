const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');

app.use(session({

    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Para acceder a la información de las cookies
    const cookies = request.get('Cookie');

    //String con toda la información de las cookies
    console.log(cookies); 

    //Para obtener el valor de la primera cookie
    console.log(cookies.split('=')[1]);

    //Para crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');
    
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