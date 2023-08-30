console.log("hola desde node!")

/*filesystem es una variable donde se va a alojar el modulo fs de 
node que accede a métodos para manipular el sistema de archivos*/
const filesystem = require('fs');

// La función writeFile es asíncrona (por default), pero writeFileSync sí es síncrona
// hola.txt es el nombre del archivo
// Hola desde node es lo que se va a escribir en el archivo
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");

setTimeout( () => {
        console.error("Ya te hackié jojojojo")
    }, 7000);

//Función encontrada en facebook que permite ordenar números según su representación como milisegundos
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


//Módulo http de node: Tiene todas las funciones para recibir peticiones http y enviar respuestas de http
const http = require('http');

//Método createServer: Recibe como parámetro una función asíncrona
//Request es un objeto que contiene toda la información de una petición.
//Response es un objeto que contiene la información de una respuesta
const server = http.createServer( (request, response) => {  

    //request te muestra todo lo que lleva el objeto
    //.url es un atributo que te muestra lo que lleva la url 
    console.log(request.url);
    
    //Avisa que el tipo de contenido que se va a mostrar es html
    response.setHeader('Content-Type', 'text/html');

    //Se escribe algo en la respuesta de html
    response.write("Hola desde node!");

    //.end envía la respuesta una vez que ya está completa
    response.end(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Películas</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <section class="section">
                <div class="container">
                    <h1 class="title">Películas</h1>
                    <p>
                        <em>Cuando</em> <b>nosotros</b> <i>escribimos</i>  sobre <strong>películas</strong>
                    </p>
                    <br>
                    <p>
                        <label for="favorita">¿Cuál es tu película favorita?</label>
                        <input id="favorita" class="input is-primary" type="text" placeholder="Oppenheimer">
                    </p>
                    <br>
                    <h2 class="subtitle">En cartelera</h2>
                    <button id="boton_cartelera" class="button is-info is-rounded">Ver cartelera</button>
    
                    <div id="posters"></div>
    
                    <table>
                        <tbody>
                            <tr>
                                <td id="Oppenheimer">Oppenheimer</td>
                            </tr>
                            <tr>
                                <td style="color:pink">Barbie</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Película</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>Fecha: 10 de agosto de 2023</td>
                            </tr>
                        </tfoot>
                    </table>
    
                    <h3 class="subtitle">Mis favoritas</h3>
                    <ol class="favorito">
                        <li>Lobo de Wallstreet</li>
                        <li>Django</li>
                        <li>Madagascar</li>
                    </ol>
    
                    <div id="ejercicio_1"></div>
    
                    <button id="boton_cartelera" class="button is-danger is-rounded">Botón en rama</button>
    
                </div>
            </section>
        </main>
        <footer>
    
        </footer>
    </body>
    </html>`);
});

//Establecemos el puerto al que llegaran todas las peticiones
server.listen(3000);