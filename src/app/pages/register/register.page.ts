import { Component, OnInit, ViewChild } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {


  email = '';
  password = '';
  passwordConf = '';
  status = '';
  res: string;
  public showPass = false;
  public type = 'password';


  constructor(private autenticacion: AutenticacionService, private routesv: Router) { }


  register() {
    if (this.password == this.passwordConf) {
      this.autenticacion.register(this.email, this.password).then(data => {
        this.routesv.navigateByUrl('/menu');
      }).catch(data => {
        this.res = 'Usuario no valido';
      });
    } else {
      this.res = 'Las contraseñas no coinciden';
    }

  }



  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';

    } else {
      this.type = 'password';
    }
  }
}



