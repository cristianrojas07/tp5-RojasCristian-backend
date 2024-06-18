import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    const url = 'http://localhost:3000/api/producto';

    return this.httpClient.get<Producto[]>(url);
  }
}
