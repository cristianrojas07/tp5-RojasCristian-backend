import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TicketsComponent } from './components/tickets/tickets.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];