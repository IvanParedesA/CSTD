//==============
//Ejercicio 1
//==============

document.write("Ejercicio 1: <br><br>");

//Prompt para que el usuario ingrese un número
const numero = Number(prompt("Inserte un número: "));

//Se crea una tabla en una variable para alojar el texto de html
let tabla = `<table">`;

//Ciclo para introducir filas y celdas a la tabla
for(let i = 1; i < numero + 1; i++){
    tabla +=
        `
        <tr>
            <td>${i}</td>
            <td>${i * i}</td>
            <td>${i * i * i}</td>
        </tr>
        <br>
        `;
}

//Se cierra la tabla
tabla += `</table>`;

//Se escribe la tabla en el documento html
document.write(tabla);

//==============
//Ejercicio 2
//==============

document.write("<br> Ejercicio 2: <br><br>");

//Creamos variables para los números aleatorios
let random1 = Math.floor(Math.random()*100);
let random2 = Math.floor(Math.random()*100);

//Definimos la variable de suma
let suma = random1 + random2;

//Variable con el objeto Date que guarda el tiempo en que se empezó la operación
let tiempoInicio = new Date();

//Prompt con la suma para que la responda el usuario
let respuesta = Number(prompt("Resuelve: " + random1 + " + " + random2));

//Variable con el objeto Date que guarda el tiempo en que se finalizó la operación
let tiempoFinal = new Date();

//Calculamos el tiempo que transcurrió entre el inicio y el final
let tiempoDiferencia = tiempoFinal - tiempoInicio;

//Transformamos milisegundos a segundos
let diferenciaSegundos = tiempoDiferencia / 1000;

//Condicionales
if(respuesta == suma) {
    document.write("¡Haz logrado hacer la suma en " + diferenciaSegundos + " segundos! <br>");
} else {
    document.write("No lograste resolver la suma y tardaste " + diferenciaSegundos + " segundos. :( <br>");
}

//==============
//Ejercicio 3
//==============

document.write("<br> Ejercicio 3: <br><br>");

//Creamos el arreglo con números y lo ordenamos con .sort()
let arreglo = [2, 5, -8, 0, 6, 3, -7, 3, 0, 4, 2, 9, -4, 8, 6, 0];

//Ordenamos el arreglo con la función .sort()
arreglo.sort();

//Mostramos el arreglo para verificar el funcionamiento de la función
document.write("Arreglo: ");
document.write("[" + arreglo + "] <br><br>");

//Definimos la función
function contador(inputArreglo) {

    //Definimos los contadores para la función
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    //Ciclo para encontrar los números
    for(let i = 0; i < inputArreglo.length; i++) {
        if(inputArreglo[i] < 0) {
            negativos ++;
        }
        else if(inputArreglo[i] === 0) {
            ceros ++;
        }
        else if(inputArreglo[i] > 0){
            positivos ++;
        }
    }

    //Enviamos la respuesta
    document.write("La cantidad de números negativos es de: " + negativos + "<br>");
    document.write("La cantidad de ceros en el arreglo es de: " + ceros + "<br>");
    document.write("La cantidad de números mayores a cero es de: " + positivos + "<br>");
}

//Llamamos a la función
console.log(contador(arreglo));

//==============
//Ejercicio 4
//==============

document.write("<br> Ejercicio 4: <br><br>");

//Definimos un arreglo de arreglos
let arregloDeArreglos = [[1,2,3,4],[10,11,12,13],[25,26,27,28]];

//Mostramos el arreglo de arreglos
document.write("Este es un arreglo de arreglos: ");
document.write("[[" + arregloDeArreglos[0] + "], [" + arregloDeArreglos[1] + "], [" + arregloDeArreglos[2] + "]] <br>");

//Definimos la función
function promedios(inputArreglo) {

    //Arreglo para alojar los promedios
    const arregloPromedios = [];

    //Ciclo para obtener el promedio de cada uno de los arreglos
    for(let i = 0; i < inputArreglo.length; i++) {

        //Declaramos variables
        let suma = 0;
        let promedio = 0;
        let contador = 0;

        //Ciclo anidado que recorre los números de los arreglos internos
        for(let j = 0; j < inputArreglo[i].length; j++) {
            suma += inputArreglo[i][j];
            contador++;
        }

        //Se obtiene el promedio
        promedio = suma / contador;

        //Introducimos el promedio en el nuevo arreglo
        arregloPromedios.push(promedio);
    }

    //Mostramos cómo quedó el arreglo de promedios
    document.write("Arreglo de promedios: " + "[" + arregloPromedios + "]" + "<br>");
}

//Llamamos a la función
console.log(promedios(arregloDeArreglos));

//==============
//Ejercicio 5
//==============

document.write("<br> Ejercicio 5: <br><br>");

//Creamos una variable con un número de prueba
let numeroPrueba = 123456789;

//Mostramos el número de prueba
document.write("Número de prueba: " + numeroPrueba + "<br>");

//Definimos la función
function inverso(inputNumero){

    //Invertimos el número
    let numeroInverso = Number(numeroPrueba.toString().split('').reverse().join(''));

    //Imprimimos el número
    document.write("Este es el número inverso: " + numeroInverso + "<br>");
}

//Llamamos a la función
console.log(inverso(numeroPrueba));

//==============
//Ejercicio 6
//==============

document.write("<br> Ejercicio 6: <br><br>");

//Definición de la clase Triángulo
class Triangulo {

    //Constructor
    constructor(base, altura) {

        //Atributos
        this.base = base;
        this.altura = altura;

        //Métodos
        this.medirPerimetro = function() {
            let perimetro = base * 3;
            document.write("El perímetro de este triángulo es: " + perimetro + "<br>");
        }

        this.medirArea = function() {
            let area = (base * altura) / 2;
            document.write("El área de este triángulo es: " + area + "<br>");
        }
    }
}

//Creamos un objeto de tipo triángulo
let objetoTriangulo = new Triangulo(5, 3);

objetoTriangulo.medirPerimetro();
objetoTriangulo.medirArea();