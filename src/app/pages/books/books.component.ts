import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: Book[];
  public book :  Book

  constructor(private toastr: ToastrService, private booksService: BooksService, private userService: UserService) {
    this.books=[]
    }
  ngOnInit(): void {
    this.booksService.getLibros().subscribe((resp:Respuesta) => {
      this.books= resp.data
      console.log(resp)
    })
    }
  

  searchBookById(id:string){
    let number : number = Number(id)
    console.log(number)
    this.booksService.getByUserAndBook(number)
    .subscribe((resp: Respuesta)=>
    {
      if (id == "" || id == null || id == undefined || resp.mensaje == "No hay libros"){
        this.booksService.getLibros()
        .subscribe((resp:Respuesta) => {
          this.books= resp.data
          console.log(resp)
        })    
        this.toastr.warning("El libro no existe")
      }else{
        this.books = resp.data;
        console.log(this.books)
        this.toastr.success("Libro encontrado")
      }
    },
    )
  }


  deleteBook(bookId: number): void {
    this.booksService.deleteBook(bookId).subscribe(() => {
        let filtrado = this.books.filter(book => book.id_book !== bookId);
        this.books = filtrado;
        console.log(bookId)
        this.toastr.warning('El libro seleccionado ha sido borrado');
      }
    )}
  }

