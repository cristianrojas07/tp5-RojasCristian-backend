import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Tickets } from '../../models/tickets';
import { CommonModule } from '@angular/common';
import { Espectador } from '../../models/espectador';
import { tick } from '@angular/core/testing';
import { TipoCategoria } from '../../models/tipo-categoria';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Tickets[] = [];

  constructor(private ticketsService: TicketsService) { 
    this.verTickets();
  }

  verTickets(){
    this.ticketsService.getTickets().subscribe({
      next: (data : Tickets[]) => {
        this.tickets = data.map(ticket =>{
          var espectador = new Espectador(
            ticket.espectador.apellido,
            ticket.espectador.nombre,
            ticket.espectador.dni,
            ticket.espectador.email
          );

          var tipoCategoria = new TipoCategoria(
            ticket.tipoCategoria.nombre,
            ticket.tipoCategoria.descripcion
          )

          return new Tickets(
            ticket.precioTicket,
            ticket.categoriaEspectador,
            ticket.fechaCompra,
            espectador,
            tipoCategoria
          )
        });

        console.log(this.tickets);
      }, error: (err) => {
        console.error(err);
      }
    })
  }
}
