import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { 
    this.verProductos();
  }

  verProductos(){
    this.productosService.getProductos().subscribe({
      next: (data : Producto[]) => {
        this.productos = data.map(producto =>
          new Producto(
            producto.nombre,
            producto.descripcion,
            producto.imagen,
            producto.precio,
            producto.stock,
            producto.destacado
          )
        );
      }, error: (err) => {
        console.error(err);
      }
    })
  }
}
