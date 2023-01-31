import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm: FormGroup;
  buttonDisabled: boolean = false;
  regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';

  controls: any = {
    email: new FormControl('', [Validators.required, Validators.pattern(this.regexCorreo)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    remember: new FormControl(true)
  }
  
  
  constructor(){
    this.loginForm = new FormGroup(this.controls);
  }
  
  login(){
    console.log("logueado");
  }
}
