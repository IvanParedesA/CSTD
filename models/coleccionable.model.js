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

module.exports = class Coleccionable {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_coleccionable) {
        this.nombre = nuevo_coleccionable.nombre || "Funko pop Anónimo";
        this.imagen = nuevo_coleccionable.imagen || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
        this.valor = nuevo_coleccionable.valor || 150;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        coleccionables.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return coleccionables;
    }

}