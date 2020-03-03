
import { AutenticacionService } from 'src/app/services/autenticacion.service';

import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],

})
export class InicioPage {


  passwordTypeInput = 'password';
  iconpassword = 'eye-off';
  passwordEye: any;
 

  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }


  constructor() {

  }
}