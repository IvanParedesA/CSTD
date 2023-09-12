const Coleccionable = require('../models/coleccionable.model');
const Modelo = require('../models/coleccionable.model');

exports.get_add = (request, response, next) => {
    response.render('coleccionables/add.ejs');
};

exports.post_add = (request, response, next) => {

    console.log(request.body);

    const coleccionable = new Coleccionable({
        nombre: request.body.nombre,
        imagen: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        valor: request.body.valor,
    });

    coleccionable.save();

    response.redirect('/coleccionables');
};

exports.get_list = (request, response, next) => {

    response.render('coleccionables/list.ejs', {
        coleccionables: Coleccionable.fetchAll()
    });
}

exports.get_pregunta = (request, response, next) => {
    response.render('coleccionables/pregunta'); 
};