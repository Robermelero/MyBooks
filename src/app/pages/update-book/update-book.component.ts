import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit{

  public books : Book[]
  public libroBuscado : Book;
  public libroModificado : Book;
constructor(public apiService: BooksService, public bookservice:BooksService, public router: Router, private toastr: ToastrService){

}

busqueda(codigo:number): void {
  let userId = 0;
 this.apiService.getByUserAndBook(userId).subscribe((libro: Book) => {
  if (libro) { 
    this.libroBuscado = libro;
    this.libroModificado = {...libro}
    this.toastr.success ('El libro se ha encontrado')
  }
  else{
    this.toastr.error ('No ha sido posible encontrar el libro introducido')
  }
});
}

modificar(nuevoTitulo: string, nuevoTipo: string, nuevoAuthor: string, nuevoPrecio: number, nuevaFoto: string, nuevoCodigo: number): void {
  this.libroModificado.title = nuevoTitulo;
  this.libroModificado.type = nuevoTipo;
  this.libroModificado.author = nuevoAuthor;
  this.libroModificado.price = nuevoPrecio;
  this.libroModificado.photo = nuevaFoto;
  this.libroModificado.id_book = nuevoCodigo;

  this.apiService.updateBook(this.libroModificado).subscribe((listo) => {
    if (listo) {
    this.toastr.success('El libro se ha modificado correctamente');
    this.router.navigateByUrl('/books');
  }
  else {this.toastr.error('No se ha modificado el libro')}
  });
}


ngOnInit(): void {
  
};
}
