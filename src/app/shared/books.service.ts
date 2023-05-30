import { Injectable } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books : Book[]

  constructor() { 
    this.books  = [new Book ( "EL SEÑOR DE LOS ANILLOS / LA COMUNIDAD DEL ANILLO","tapa dura", "J.R.R. Tolkien", 21.80 , "https://imagessl8.casadellibro.com/a/l/t7/98/9788445009598.jpg", 1, 10,),
    new Book ( "EL SEÑOR DE LOS ANILLOS / LAS DOS TORRES", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl4.casadellibro.com/a/l/t7/04/9788445009604.jpg", 2, 20,),
    new Book ( "EL SEÑOR DE LOS ANILLOS / EL RETORNO DEL REY", "tapa dura", "J.R.R. Tolkien", 21.80, "https://imagessl1.casadellibro.com/a/l/t7/11/9788445009611.jpg", 3, 30,),
    new Book ( "ERAGON", "tapa dura", "Christopher Paolini", 13.25, "https://image.cdn1.buscalibre.com/60d16d138463b5601a8c4359.__RS360x360__.jpg", 5, 50,),
    new Book ( "ELDEST", "tapa dura", "Christopher Paolini", 13.25, "https://m.media-amazon.com/images/P/B005WTVT4U.01._SCLZZZZZZZ_SX500_.jpg", 6, 60,),
    new Book ( "BRISINGR", "tapa dura", "Christopher Paolini", 13.25, "https://imagessl8.casadellibro.com/a/l/t7/48/9788418850448.jpg", 7, 70,),
    new Book ( "LEGADO", "tapa dura", "Christopher Paolini", 13.25, "https://books.google.es/books/content?id=yiuIRVnVDLkC&hl=es&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0pyWaH0z-N2uwHudkcBCNSK0EDlQ&w=1280", 8, 80,)
                  ]
  }

getAll():Book[]{
  return this.books
}

getOne(id_libro:number): Book{
    return this.books.find(book => book.id_book === id_libro);
}

add(book:Book): void{
  this.books.push(book)
}

edit(book:Book):boolean{
  let i = this.books.findIndex(b => b.id_book === book.id_book);
  if (i !== -1) {
    this.books[i] = book;
    return true;
  }
  return false;
}


delete(id_book:number): boolean{
  this.books = this.books.filter(k => k.id_book !== id_book)
  return true;
}

}



