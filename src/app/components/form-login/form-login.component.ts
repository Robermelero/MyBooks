import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public email: string;
  public password: string;
  public user: User;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {
    this.user = new User();
  }

  ngOnInit(): void {}

  onSubmit(form:NgForm){
    this.userService.login(this.user)
    .subscribe((res: Respuesta) =>
    {
      if(res.mensaje === "Los datos son correctos" ){
        this.userService.logueado = true;
        this.userService.user = res.data_login[0];
        console.log(this.userService.user)
        this.router.navigateByUrl('/books')
      }else{
        console.log("Error al inciar sesión");
        this.userService.logueado = false;
      }
    })
  }}
