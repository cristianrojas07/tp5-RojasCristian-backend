import { Espectador } from "./espectador"
import { TipoCategoria } from "./tipo-categoria"


export class Tickets {
    precioTicket!: Number;
    categoriaEspectador!: String;
    fechaCompra!: String;
    espectador!: Espectador;
    tipoCategoria!: TipoCategoria;

    constructor(precioTicket: Number, categoria: String, fecha: String, espectador: Espectador, tipoCategoria: TipoCategoria)
    {
        this.precioTicket = precioTicket;
        this.categoriaEspectador = categoria;
        this.fechaCompra = fecha;
        this.espectador = espectador;
        this.tipoCategoria = tipoCategoria;
    }
}