const accion_asincrona = (id) => {

    //El token de protección CSRF
    const csrf = document.getElementById('_csrf').value;

    console.log(id);

    //función que manda la petición asíncrona
    fetch('/coleccionables/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body: JSON.stringify({id: id})
    }).then(result => {
        console.log(result);
        return result.json(); //Regresa otra promesa
    }).then(data => {

        console.log(data);

        let html = "";

        html += `
        <!--Columnas para los productos-->
        <div class="grid grid-cols-3 gap-3 mx-auto flex items-center">`;
            if (data.coleccionables.length > 0) {
                for(let coleccionable of data.coleccionables) {
                    html += `
                    <div>
                        <div class="bg-gray-600 m-6 p-4 rounded-xl text-center">
                            <div class="container bg-gray-300 mx-auto p-4 rounded-xl">
                                <p class="text-2xl font-sans text-black">
                                    <a href="/coleccionables/` + coleccionable.id + `">` + coleccionable.nombre + `</a></p>
                                <br>
                                <img class="mx-auto" src="/uploads/` + coleccionable.imagen + `" alt="` + coleccionable.nombre + `" width="300px">
                                <br>
                                <p class="text-2xl font-sans text-black">Precio: $` + coleccionable.valor + `</p>
                                <br>
                                <p class="text-1xl font-sans text-black"> Cantidad:
                                    <input type="number" id="cantidad` +  coleccionable.nombre + `" name="cantidad` + coleccionable.nombre + `" placeholder="0" min="0" max="100" class="w-16">
                                </p>
                                <button class="bg-red-500 hover:bg-red-600 w-48 h-12 rounded-full" onclick=accion_asincrona("` + coleccionable.id + `")>Quitar</button>
                            </div>
                        </div>
                    </div>`;
                }
            } else {
                html += `
                <p class="text-2xl font-sans text-black">No hay coleccionables registrados</p>`
            }
        html += `
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
        </div>`;

        document.getElementById('coleccionables').innerHTML = html;

    }).catch(err => {
        console.log(err);
    });
};

//document.getElementById('mi_boton').click = accion_asincrona;

