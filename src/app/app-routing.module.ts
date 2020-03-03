import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)},
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
   { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)},
 // { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },


  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'nueva-incidencia',
    loadChildren: () => import('./pages/nueva-incidencia/nueva-incidencia.module').then(m => m.NuevaIncidenciaPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then(m => m.EventosPageModule)
  },
  {
    path: 'puesto-trabajo',
    loadChildren: () => import('./pages/puesto-trabajo/puesto-trabajo.module').then(m => m.PuestoTrabajoPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'agregar-incidencia',
    loadChildren: () => import('./pages/agregar-incidencia/agregar-incidencia.module').then( m => m.AgregarIncidenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
