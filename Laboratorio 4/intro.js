//Ejercicio 1
document.write("Ejercicio 1: <br>")

//Prompt para que el usuario ingrese un número
const numero = Number(prompt("Inserte un número: "));

//Se crea una tabla en una variable para alojar el texto de html
let tabla = `<table">`;

//Ciclo para introducir filas y celdas a la tabla
for( let i = 1; i < numero + 1; i++){
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

