import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage  {

  protected itemSeleccionado;
  constructor(public router: Router) {
    this.itemSeleccionado = this.router.getCurrentNavigation().extras.state.itemSeleccionado;
   }

  



}
