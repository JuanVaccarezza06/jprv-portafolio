import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent // Si movieras tu HTML a un componente dedicado
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full', // Ruta comodín: si el usuario escribe cualquier cosa rara en la URL, lo devuelve al inicio
  },
];
