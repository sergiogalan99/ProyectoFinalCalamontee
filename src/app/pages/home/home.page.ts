import { AutenticacionService } from '../../services/autenticacion.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = '';
  password = '';
  status = '';
  res: string;

  constructor(private autenticacion: AutenticacionService, private routesv: Router) { }

  login() {
    this.autenticacion.login(this.email, this.password).then(data => {
      this.routesv.navigateByUrl('/menu');
    }).catch(data => {
      this.res = 'Campos erroneos';
    });
  }


}

