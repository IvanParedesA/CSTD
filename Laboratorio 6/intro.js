//Declarar los precios de los productos:

let precioCuboRubik = 382;
let precioFunkoPop = 447;
let precioHotWheels = 99;

document.log(precioCuboRubik);

//Función para calcular la cuenta
function calcularCuenta() {
    let cuentaFinal = 0;

    let cantCubo = document.getElementById("cantidadCuboRubik");
    let cantFunko = document.getElementById("cantidadFunkoPop");
    let cantHotWheels = document.getElementById("cantidadHotWheels");

    cuentaFinal += (cantCubo * precioCuboRubik);
    cuentaFinal += (cantFunko * precioFunkoPop);
    cuentaFinal += (cantHotWheels * precioHotWheels);

    document.log(cuentaFinal);
};

document.getElementById("botonCuenta").onclick = calcularCuenta;