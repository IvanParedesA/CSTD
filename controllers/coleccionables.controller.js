const Coleccionable = require('../models/coleccionable.model');

exports.get_add = (request, response, next) => {
    response.render('coleccionables/add.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
        privilegios: request.session.privilegios || [],
    });
};

exports.post_add = (request, response, next) => {

    console.log(request.body);
    console.log(request.file);

    const coleccionable = new Coleccionable({
        nombre: request.body.nombre,
        imagen: request.file.filename,
        valor: request.body.valor,
    });

    coleccionable.save()
        .then(() => {
            return response.redirect('/coleccionables');
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
};

exports.get_list = (request, response, next) => {

    console.log(request.session.privilegios);

    //Extraer la fecha de último acceso almacenada en una cookie
    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);

    //Imprime en la consola la marca de tiempo del último acceso
    console.log(ultimo_acceso.getTime());

    //Se calcula el tiempo transcurrido desde el último acceso en segundos.
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;

    //Imprime en la consola el tiempo transcurrido desde el último acceso en segundos.
    console.log(tiempo_transcurrido);

    Coleccionable.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);

            return response.render('coleccionables/list.ejs', {
                coleccionables: rows,
                tiempo_transcurrido: tiempo_transcurrido,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || false,
                privilegios: request.session.privilegios || [],
            });
        
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
};

exports.post_delete = (request, response, next) => {
    console.log(request.body);

    Coleccionable.delete(request.body.id).then(()=>{
        Coleccionable.fetchAll().then(([coleccionables, fieldData]) => {
            response.status(200).json({coleccionables: coleccionables});
        }).catch((error) => {
            console.log(error);
            response.status(200).json({message: "No se pudo eliminar"});
        });
    }).catch((error) => {
        console.log(error);
        response.status(200).json({message: "No se pudo eliminar"});
    });
}

exports.get_pregunta = (request, response, next) => {
    response.render('coleccionables/pregunta.ejs'); 
};