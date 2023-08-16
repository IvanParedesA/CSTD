//==============
//Ejercicio 1
//==============

document.write("Ejercicio 1: <br><br>")

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

document.write("<br> Ejercicio 2: <br><br>")

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
