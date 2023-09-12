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

    //Extraer la fecha de último acceso almacenada en una cookie
    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);

    //Imprime en la consola la marca de tiempo del último acceso
    console.log(ultimo_acceso.getTime());

    //Se calcula el tiempo transcurrido desde el último acceso en segundos.
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;

    //Imprime en la consola el tiempo transcurrido desde el último acceso en segundos.
    console.log(tiempo_transcurrido);

    response.render('coleccionables/list.ejs', {
        coleccionables: Coleccionable.fetchAll(),
        tiempo_transcurrido: tiempo_transcurrido
    });
}

exports.get_pregunta = (request, response, next) => {
    response.render('coleccionables/pregunta'); 
};