import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{

  public books : Book[]
  public libroBuscado : Book;
  public libroModificado : Book;
constructor(public bookservice:BooksService, public router: Router, public toastr: ToastrService){

}

busqueda(codigo:number): void {
  
  this.libroBuscado = this.bookservice.getOne(codigo)
  if(this.libroBuscado){
    this.libroModificado = {...this.libroBuscado}
    this.toastr.success ("El libro se ha encontrado", 'Éxito')
  }
  else{
    this.books = this.bookservice.getAll()
    this.toastr.error ("No ha sido posible encontrar el libro introducido", 'Error')
  }
  
};

modificar(nuevoTitulo: string, nuevoTipo: string, nuevoAuthor: string, nuevoPrecio: number, nuevaFoto: string, nuevoCodigo: number): void {
  this.libroModificado.title = nuevoTitulo;
  this.libroModificado.type = nuevoTipo;
  this.libroModificado.author = nuevoAuthor;
  this.libroModificado.price = nuevoPrecio;
  this.libroModificado.photo = nuevaFoto;
  this.libroModificado.id_book = nuevoCodigo;

  if(this.bookservice.edit(this.libroModificado)){
    this.books = this.bookservice.getAll();
    this.toastr.success("El libro se ha modificado correctamente", 'Éxito');
    this.router.navigateByUrl('/books');
  }
  else {this.toastr.error("No se ha modificado el libro", 'Error')}
};

ngOnInit(): void {
  
};
}
