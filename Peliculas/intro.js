// variables, constantes, consola (log, info, warn, error, assert)

// Declaramos variables con let
let pelicula_del_momento = "Barbie";

//Oprimimos en la consola con console.log()
console.log(pelicula_del_momento);

//Declaramos constantes con const
const precio = 55;

console.log(precio);

console.error("Este es un mensaje de error");

console.warn("Esta es una advertencia");

console.info("Esto es información");

//assert continua la ejecución si el valor es verdadero
console.assert(precio === 55);

// Alcance de las variables

if(precio > 50) {
    let respuesta = "Muy caro"
    console.log(respuesta);
} else {
    let respuesta = "Buen precio";
    console.log(respuesta);
}

if(precio > 50) {
    var respuesta2 = "Muy caro"
} else {
    var respuesta2 = "Buen precio";
}
//Respuesta sigue existiendo porque var tiene alcance de función
console.log(respuesta2);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//La siguiente línea tiene error porque i tiene alcance de ámbito
//console.log(i);

//alert, prompt, confirm
alert("Hola mundo!");

const is_hungry = confirm("¿Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);

//funciones tradicionales

function vamonos() {
    console.log("¡Vámonos, ya se acabó la clase");
}

vamonos();

//funciones modernas

const funcion_anonima = () => {
    console.log("Esto es una función anónima");
}

funcion_anonima();

//html dinámico con eventos
const oppenheimer = document.getElementById("Oppenheimer");

console.log(oppenheimer);

const despliega_rating = () => {
    const rating = "10/10 ¡Excelente!"
    oppenheimer.innerHTML = rating;
    oppenheimer.onclick = despliega_nombre;
}

const despliega_nombre = () => {
    const nombre = "Oppenheimer";
    oppenheimer.innerHTML = nombre;
    oppenheimer.onclick = despliega_rating;
}

oppenheimer.onclick = () => {
    console.log("Hiciste click en Oppenheimer");
    despliega_rating();
}

// arreglos

const arreglo = ["Elemento"];

arreglo.push ("Otro elemento");

arreglo[10] = "Uno más";

//arreglos asociativos
arreglo["Once"] = "Otro más";

//recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo
for(let posicion in arreglo) {
    console.log(posicion);
}

for(let valor of arreglo) {
    console.log(valor);
}

//objetos (json: javascript object notation)
const objeto = {
    atributo_1: "valor_1",
    atributo_2: "valor_2",
    atributo_3: "valor_3",
}

console.log(objeto);
console.log(objeto.atributo_1);

for(let posicion in objeto) {
    console.log(posicion);
}

function ejercicio_1() {
    //Ejercicio del laboratorio
    //....

    document.getElementById("ejercicio_1").innerHTML = "Respuesta del ejercicio 1";
}

ejercicio_1();