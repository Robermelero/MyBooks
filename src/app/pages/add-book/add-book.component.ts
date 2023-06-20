
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
}) 
export class AddBookComponent {
@Output() bookAdded = new EventEmitter<Book>();

  constructor(public bookservice:BooksService, public router: Router, private toastr: ToastrService, public apiService: BooksService){}

register(nuevoTitulo: string, 
        nuevoTipo: string, 
        nuevoAuthor: string, 
        nuevoPrecio: number, 
        nuevaFoto: string, 
        nuevoCodigo: number=0, 
        nuevoUser: number=0){
  let nuevo: Book = new Book(0,0,nuevoTitulo, nuevoTipo, nuevoAuthor, nuevoPrecio, nuevaFoto,)
  this.apiService.addBook(nuevo).subscribe((book: Book) =>
  {
 if(book) 
 {this.toastr.success('El libro ha sido añadido correctamente')
 this.router.navigateByUrl('/books');
}
else this.toastr.error('El libro no ha podido añadirse correctamente')
})
}
}