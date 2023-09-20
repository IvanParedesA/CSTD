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
        body: JSON.stringify(data)
    }).then(result => {
        console.log(result);
        return result.json(); //Regresa otra promesa
    }).then(data => {
        
        console.log(data);
        //Modificamos el DOM de nuestra página de acuerdo a los datos de la segunda promesa
        //...
    }).catch(err => {
        console.log(err);
    });
};

//document.getElementById('mi_boton').click = accion_asincrona;

