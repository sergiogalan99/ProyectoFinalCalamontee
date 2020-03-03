import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  email = '';
  password = '';
  status = '';
  res: string;

  constructor(private autenticacion: AutenticacionService, private routesv: Router, private menu: MenuController) { }


  logout() {
    this.autenticacion.logout().then(data => {
      this.routesv.navigateByUrl('/home');
    }).catch(data => {
      this.res = 'Error al cerrar sesión';
    });


  }





}
