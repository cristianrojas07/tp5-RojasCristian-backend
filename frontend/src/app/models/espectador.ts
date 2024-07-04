export class Espectador {
    apellido!: String;
    nombre!: String;
    dni!: String;
    email!: String;

    constructor(apellido: String, nombre: String, dni: String, email: String){
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
    }
}
