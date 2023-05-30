
import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public login : Login

  constructor()
  {
    this.login = new Login("","");
  }

  onSubmit(form:NgForm){

     return this.login

  }

  ngOnInit(): void {
    
  }
}
