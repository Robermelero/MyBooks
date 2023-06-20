import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit
{
public registro : FormGroup;
public user : User

constructor(private formBuilder: FormBuilder,  private userService: UserService){

  this.buildForm();
}

public register(nuevoNombre:HTMLInputElement, nuevoApellido:HTMLInputElement, nuevoEmail: HTMLInputElement, nuevaPhoto: HTMLInputElement, nuevaContraseña:HTMLInputElement) {

  let user = new User(0, nuevoNombre.value, nuevoApellido.value, nuevoEmail.value,nuevaPhoto.value,nuevaContraseña.value);
  this.userService.register(user).subscribe((data:String) => {
  if (data != "-1")
  {user.id_user = Number(data)
  };
})
}
private buildForm(){
const minPassLength = 8;
const maxPassLength = 16;

this.registro = this.formBuilder.group({
  nombre: [, Validators.required],
  apellido: [, Validators.required],
  photo: [, Validators.required],
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
