import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent 
{
  public books : Book[]

  constructor (){

    this.books  = [new Book ( "EL SEÑOR DE LOS ANILLOS / LA COMUNIDAD DEL ANILLO","tapa dura", "J.R.R. Tolkien", 21.80 , "https://imagessl8.casadellibro.com/a/l/t7/98/9788445009598.jpg", 1, 10,),
    new Book ( "EL SEÑOR DE LOS ANILLOS / LAS DOS TORRES", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl4.casadellibro.com/a/l/t7/04/9788445009604.jpg", 2, 20,),
    new Book ( "EL SEÑOR DE LOS ANILLOS / EL RETORNO DEL REY", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl1.casadellibro.com/a/l/t7/11/9788445009611.jpg", 3, 30,),
    new Book ( "ERAGON", "tapa dura", "Christopher Paolini", 13.25, "https://image.cdn1.buscalibre.com/60d16d138463b5601a8c4359.__RS360x360__.jpg", 5, 50,),
    new Book ( "ELDEST", "tapa dura", "Christopher Paolini", 13.25, "https://m.media-amazon.com/images/P/B005WTVT4U.01._SCLZZZZZZZ_SX500_.jpg", 6, 60,),
    new Book ( "BRISINGR", "tapa dura", "Christopher Paolini", 13.25, "https://imagessl8.casadellibro.com/a/l/t7/48/9788418850448.jpg", 7, 70,),
    new Book ( "LEGADO", "tapa dura", "Christopher Paolini", 13.25, "https://books.google.es/books/content?id=yiuIRVnVDLkC&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0pyWaH0z-N2uwHudkcBCNSK0EDlQ&w=1280", 8, 80,)
                  ]
}

 
register(nuevoTitulo: string, nuevoTipo: string, nuevoAuthor: string, nuevoPrecio: number, nuevaFoto: string, nuevoCodigo: number=0, nuevoUser: number=0){
  let nuevo: Book = new Book(nuevoTitulo, nuevoTipo, nuevoAuthor, nuevoPrecio, nuevaFoto, nuevoCodigo,nuevoUser)
    this.books.push(nuevo)
}

 
}





