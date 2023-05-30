import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit
{
public registro : FormGroup;
public user : User

constructor(private formBuilder: FormBuilder){

  this.buildForm();
}

public register(){

  const user = this.registro.value;
  console.log(user);

}
private buildForm(){
const minPassLength = 8;
const maxPassLength = 16;

this.registro = this.formBuilder.group({
  nombre: [, Validators.required],
  apellido: [, Validators.required],
  correo: [, [Validators.required, Validators.email]],
  contraseña: [,[Validators.required, Validators.minLength(minPassLength), Validators.maxLength(maxPassLength)]],
  contraseña2: [,[Validators.required, this.checkPasswords]]
});
}

private checkPasswords(control: AbstractControl){

  let resultado = {matchPassword: true};

  if(control.parent?.value.contraseña == control.value)
  resultado = null;
  return resultado
}
ngOnInit(): void {
  
}
}
