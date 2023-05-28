import { literalMap } from '@angular/compiler';
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
constructor(public bookservice:BooksService, public router: Router){

}

busqueda(codigo:number): void {
  
  this.libroBuscado = this.bookservice.getOne(codigo)
  if(this.libroBuscado){
    this.libroModificado = {...this.libroBuscado}
    alert ("El libro se ha encontrado")
  }
  else{
    this.books = this.bookservice.getAll()
    alert ("No ha sido posible encontrar el libro introducido")
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
    alert("El libro se ha modificado correctamente");
    this.router.navigateByUrl('/books');
  }
  else {alert("No se ha modificado el libro")}
};

ngOnInit(): void {
  
};
}
