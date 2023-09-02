//fs es el módulo de filesystem de node, 
//que sirve para acceder a los métodos para manipular el sistema de archivos
const filesystem = require('fs');

/*
//writeFileSync es un método que sirve para escribir en un archivo de manera síncrona.
//Por default, los métodos de node son asíncronos.
filesystem.writeFileSync('hola.txt', 'Hola desde node');
console.log("Ya acabé de escribir el archivo");
*/

//El módulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');

//Método createServer: Recibe como parámetro una función asíncrona
//Request es un objeto que contiene toda la información de una petición.
//Response es un objeto que contiene la información de una respuesta
const server = http.createServer( (request, response) => {    

    //request te muestra todo lo que lleva el objeto
    //.url es un atributo que te muestra lo que lleva la url 
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {

        //Avisa que el tipo de contenido que se va a mostrar es html
        response.setHeader('Content-Type', 'text/html');

        response.write(`
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
                <div class="grid grid-cols-3 gap-3 mx-auto flex items-center">
        
                    <!--Columna 1: Cubo de Rubik-->
                    <div>
                        <div class="bg-gray-600 m-6 p-4 rounded-xl text-center">
                            <div class="container bg-gray-300 mx-auto p-4 rounded-xl">
                                <p class="text-2xl font-sans text-black">Cubo de rubik</p>
                                <br>
                                <img class="mx-auto" src="https://m.media-amazon.com/images/I/81XkUCfu0mL.jpg" alt="Cubo de rubik" width="300px">
                                <br>
                                <p class="text-2xl font-sans text-black">Precio: $382</p>
                                <br>
                                <p class="text-1xl font-sans text-black"> Cantidad:
                                    <input type="number" id="cantidadCuboRubik" name="cantidadCuboRubik" placeholder="0" min="0" max="100" class="w-16">
                                </p>
                            </div>
                        </div>
                    </div>
        
                    <!--Columna 2: Funko Pop-->
                    <div>
                        <div class="bg-gray-600 m-6 p-4 rounded-xl text-center">
                            <div class="container bg-gray-300 mx-auto p-4 rounded-xl">
                                <p class="text-2xl font-sans text-black">Funko Pop</p>
                                <br>
                                <img class="mx-auto" src="https://m.media-amazon.com/images/I/81CnvOG8+YL._AC_UF894,1000_QL80_.jpg" alt="Funko pop" width="300px">
                                <br>
                                <p class="text-2xl font-sans text-black">Precio: $447</p>
                                <br>
                                <p class="text-1xl font-sans text-black"> Cantidad:
                                    <input type="number" id="cantidadFunkoPop" name="cantidadFunkoPop" placeholder="0" min="0" max="100" class="w-16">
                                </p>
                            </div>
                        </div>
                    </div>
        
                    <!--Columna 3: Hot Wheels-->
                    <div>
                        <div class="bg-gray-600 m-6 p-4 rounded-xl text-center">
                            <div class="container bg-gray-300 mx-auto p-4 rounded-xl">
                                <p class="text-2xl font-sans text-black">Hot Wheels</p>
                                <br>
                                <img class="mx-auto" src="https://globaldiecastdirect.com/62549-thickbox_default/hot-wheels-aston-martin-one-77-coupe.jpg" alt="Hot Wheels" width="300px">
                                <br>
                                <p class="text-2xl font-sans text-black">Precio: $99</p>
                                <br>
                                <p class="text-1xl font-sans text-black"> Cantidad:
                                    <input type="number" id="cantidadHotWheels" name="cantidadHotWheels" placeholder="0" min="0" max="100" class="w-16">
                                </p>
                            </div>
                        </div>
                    </div>
        
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
        `);

        response.end();

    } else if(request.url == "/new" && request.method == "GET") {
        
        response.write(`
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
        `);

        response.end();

    } else if(request.url == "/new" && request.method == "POST") {
        
        response.write(`El coleccionable fue registrado`);
        response.end();

    } else {

        response.write(`
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
        `);

        response.end();
    }

});

/*
//Evento de javascript para cambiar el color del título
document.getElementById("sugerencia").onkeyup = () => {

    //Mostrar el mensaje de ayuda oculto
    document.getElementById("ayuda").style.visibility = "visible";

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.getElementById("sugerencia").style.color = `rgb(${red}, ${green}, ${blue})`;
}

//Declarar los precios de los productos:

let precioCuboRubik = 382;
let precioFunkoPop = 447;
let precioHotWheels = 99;

//Función para calcular la cuenta
function calcularCuenta() {
    let cuentaFinal = 0;

    let cantCubo = document.getElementById("cantidadCuboRubik").value || 0;

    let cantFunko = document.getElementById("cantidadFunkoPop").value || 0;

    let cantHotWheels = document.getElementById("cantidadHotWheels").value || 0;

    cuentaFinal += (cantCubo * precioCuboRubik);
    cuentaFinal += (cantFunko * precioFunkoPop);
    cuentaFinal += (cantHotWheels * precioHotWheels);

    document.write("Desglose de artículos:" + "<br><br>")
    document.write("Has elegido " + cantCubo + " cubos Rubik" + "<br>");
    document.write("Has elegido " + cantFunko + " Funkos" + "<br>");
    document.write("Has elegido " + cantHotWheels + " HotWheels" + "<br>");
    document.write("<br>" + "Tu cuenta final es de: $" + cuentaFinal);
};

//Mandar a llamar la función de calcular la cuenta
document.getElementById("botonCuenta").onclick = calcularCuenta;

*/
server.listen(3000);