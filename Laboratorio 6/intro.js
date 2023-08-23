//Declarar los precios de los productos:

const precioCuboRubik = 382;
const precioFunkoPop = 447;
const precioHotWheels = 99;

//Función para generar la cuenta
function generarCuenta () {
    let cuentaFinal = 0;

    const cantCubo = document.getElementById("cantidadCuboRubik");
    const cantFunko = document.getElementById("cantidadFunkoPop");
    const cantHotWheels = document.getElementById("cantidadHotWheels");

    cuentaFinal += (cantCubo * precioCuboRubik);
    cuentaFinal += (cantFunko * precioFunkoPop);
    cuentaFinal += (cantHotWheels * precioHotWheels);

    document.write(cuentaFinal);
};