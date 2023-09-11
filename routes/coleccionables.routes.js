const express = require('express');

const router = express.Router();

const path = require('path');

let coleccionables = [
    {
        nombre: "Cubo de Rubik",
        imagen: "https://m.media-amazon.com/images/I/81XkUCfu0mL.jpg",
        valor: 382
    },
    {
        nombre: "Funko Pop",
        imagen: "https://m.media-amazon.com/images/I/81CnvOG8+YL._AC_UF894,1000_QL80_.jpg",
        valor: 447
    },
    {
        nombre: "Hot Wheels",
        imagen: "https://globaldiecastdirect.com/62549-thickbox_default/hot-wheels-aston-martin-one-77-coupe.jpg",
        valor: 99
    }
];

//Ruta GET /   (Raiz)
router.get('/', (request, response, next) => {
    response.render('coleccionables/list.ejs', {
        coleccionables: coleccionables
    });
});

//Ruta GET /new
router.get('/new', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
});

//Ruta POST /new
router.post('/new', (request, response, next) => {
    console.log(request.body);

    coleccionables.push({
        nombre: request.body.nombre,
        imagen: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        valor: request.body.valor,
    });

    response.redirect('/coleccionables')
});

//Ruta GET /pregunta
router.get('/pregunta', (request, response, next) => {

    response.render('coleccionables/pregunta'); 
});

module.exports = router;