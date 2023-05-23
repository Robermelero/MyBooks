import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent 
{
  public user : User

  constructor (){

    this.user = new User("23435", "Roberto", "Melero","roberto@gmail.com","https://travesiapirenaica.com/wp-content/uploads/2018/12/C%c3%b3mo-esquiar-en-nieve-virgen_by-mauro-paillex_800x600.jpg","486484984")
  }

 
enviar2(nuevoNombre: string, nuevoApellido: string, nuevoMail: string, nuevaPhoto: string){
  console.log(this.user.name);
  this.user.name = nuevoNombre
  console.log(this.user.name)
  console.log(this.user.last_name);
  this.user.last_name = nuevoApellido
  console.log(this.user.last_name)
  console.log(this.user.email);
  this.user.email = nuevoMail
  console.log(this.user.email)
  console.log(this.user.photo);
  this.user.photo = nuevaPhoto
  console.log(this.user.photo)
}
}
