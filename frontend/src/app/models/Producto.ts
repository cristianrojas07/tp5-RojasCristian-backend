export class Producto {
    nombre: String;
    descripcion: String;
    imagen: String;
    precio: Number;
    stock: Number;
    destacado: Boolean;

    constructor(nombre: String, descripcion: String, imagen: String, precio: Number, stock: Number, destacado: Boolean) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
        this.destacado = destacado;
    }
}
