const db = require('../util/database');

module.exports = class Usuario {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || "Iván";
        this.username = nuevo_usuario.username || "Ivan28";
        this.password = nuevo_usuario.password || "Hola123";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO usuarios(username, password, nombre) VALUES (?, ?, ?)', 
            [this.username, this.password, this.nombre]);
    }
}