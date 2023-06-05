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
  

  constructor (public bookservice: BooksService, private toastr: ToastrService, private apiService: BooksService){
    this.apiService.getAll().subscribe((data: Object)=> {
      this.books = data as Book[];
    });
  }

busqueda(codigo: string): void {
  let number : number = Number(codigo)
  this.apiService.getOne(number).subscribe(
  (book: Book) => {
    if (book) {
      this.books = [book];
      this.toastr.success('El libro se ha encontrado');
    } 
    else {
      this.apiService.getAll().subscribe((data: Object)=> {
        this.books = data as Book[];
      });
      this.toastr.error('El ID introducido no es correcto');
      };
  }
)}
borrar(books:Book){
this.apiService.delete(books.id_book).subscribe(() => {

this.books = this.books.filter((book) => book.id_book !== 
books.id_book);
this.toastr.warning('El libro seleccionado ha sido borrado')
});
}
ngOnInit(): void { 
}
}

