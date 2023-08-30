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

document.getElementById("botonCuenta").onclick = calcularCuenta;