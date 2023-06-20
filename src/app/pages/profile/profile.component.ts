import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from '../../models/respuesta';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public usuario : User;

  constructor(public userService: UserService, private toastr: ToastrService){
    this.usuario = this.userService.user;
    console.log(this.usuario)
  }
  info(newName:HTMLInputElement,newLastname:HTMLInputElement,newEmail:HTMLInputElement,newPhoto:HTMLInputElement){
    this.usuario.name = newName.value;
    this.usuario.last_name = newLastname.value;
    this.usuario.email = newEmail.value;
    this.usuario.photo = newPhoto.value;  
    this.usuario.id_user = this.userService.user.id_user; 
    console.log(this.usuario)
    this.userService.edit(this.usuario)
    .subscribe((resp: Respuesta) => 
    {
     
      if (!resp.error)
      {
        this.toastr.success("Perfil editado correctamente", "",
                            {timeOut:2000, positionClass:'toast-top-center'});
         
      }else
      this.toastr.error("fallo")
    })
  }
}