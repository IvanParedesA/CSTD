//Declarar los precios de los productos:

let precioCuboRubik = 382;
let precioFunkoPop = 447;
let precioHotWheels = 99;

console.log(precioCuboRubik);

//Función para calcular la cuenta
function calcularCuenta() {
    let cuentaFinal = 0;

    let cantCubo = document.getElementById("cantidadCuboRubik").value;
    let cantFunko = document.getElementById("cantidadFunkoPop").value;
    let cantHotWheels = document.getElementById("cantidadHotWheels").value;

    cuentaFinal += (cantCubo * precioCuboRubik);
    cuentaFinal += (cantFunko * precioFunkoPop);
    cuentaFinal += (cantHotWheels * precioHotWheels);

    console.log(cuentaFinal);
};

document.getElementById("botonCuenta").onclick = calcularCuenta;