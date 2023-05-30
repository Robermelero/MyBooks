import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit
{
  public books : Book[]
  

  constructor (public bookservice: BooksService, public toastr: ToastrService ){
    this.books=this.bookservice.getAll()

}
busqueda(codigo:number): void {
  let id = this.bookservice.getOne(codigo)
  if(id){
    this.books = [id]
    this.toastr.success("El libro se ha encontrado", 'Éxito')
  }
  else{
    this.books = this.bookservice.getAll()
    this.toastr.error (" el ID introducido no es correcto", 'Error')
  }
  
}
borrar(libroPadre:Book){
let borrado = this.bookservice.delete(libroPadre.id_book);
if(borrado){
this.books = this.bookservice.getAll()}
this.toastr.success ("El libro seleccionado ha sido borrado", 'Éxito')
}
ngOnInit(): void {
  
}

}

 









