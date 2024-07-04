import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from '../models/tickets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private httpClient: HttpClient) { }

  public getTickets(): Observable<Tickets[]> {
    const url = 'http://localhost:3000/api/ticket';

    return this.httpClient.get<Tickets[]>(url);
  }
}
