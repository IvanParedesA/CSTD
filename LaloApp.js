console.log("hola desde node!");

//fs es el módulo de filesystem de node, 
//que sirve para acceder a los métodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un método que sirve para escribir en un archivo de manera síncrona.
//Por default, los métodos de node son asíncronos.
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");

//Imprime a los 7 segundos un mensaje
setTimeout( () => { 
        console.log("Ya te hackié jojojo"); 
    }, 7000);

//El siguiente código imprime de manera asíncrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

//El módulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <!DOCTYPE html>
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
            </html>
        `);

        response.end();

    } else if(request.url == "/new") {
        
        response.write(`
        <!DOCTYPE html>
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
                        <h1 class="title">Registro de películas</h1>
                        <form action="/new" method="POST">
                            <label for="nombre">Nombre de la película</label>
                            <input id="nombre" name="nombre" class="input" type="text" placeholder="Oppenheimer">
                            <br><br>
                            <label for="sinapsis">Sinapsis de la película</label>
                            <textarea id="sinapsis" name="sinapsis" class="textarea" placeholder="La historia de la bomba atómica"></textarea>
                            <br>
                            <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
                        </form>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();

    } else {
        response.statusCode = 404;

        response.write(`
        <!DOCTYPE html>
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
                        <h1 class="title">Tu película no se encontró</h1>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();
    }


    /*
    const datos = [];

    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });
    */
});

server.listen(3000);