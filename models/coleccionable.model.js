const db = require('../util/database');

module.exports = class Coleccionable {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_coleccionable) {
        this.nombre = nuevo_coleccionable.nombre || "Funko pop Anónimo";
        this.imagen = nuevo_coleccionable.imagen || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
        this.valor = nuevo_coleccionable.valor || 150;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO coleccionables(nombre, imagen, valor) VALUES (?, ?, ?)', 
            [this.nombre, this.imagen, this.valor]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM coleccionables');
    }

}