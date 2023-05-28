
import { literalMap } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
}) 
export class AddBookComponent {
@Output() bookAdded = new EventEmitter<Book>();

  constructor(public bookservice:BooksService, public router: Router){}

register(nuevoTitulo: string, 
        nuevoTipo: string, 
        nuevoAuthor: string, 
        nuevoPrecio: number, 
        nuevaFoto: string, 
        nuevoCodigo: number=0, 
        nuevoUser: number=0){
  let nuevo: Book = new Book(nuevoTitulo, nuevoTipo, nuevoAuthor, nuevoPrecio, nuevaFoto, nuevoCodigo,nuevoUser)
  this.bookservice.add(nuevo);
  this.bookAdded.emit(nuevo);

 if(nuevo) {alert("El libro ha sido añadido correctamente")
 this.router.navigateByUrl('/books');
}
else{ alert("El libro no ha podido añadirse correctamente")}
}
}