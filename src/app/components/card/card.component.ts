import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { literalMap } from '@angular/compiler';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit
 {

@Input() libroPadre:Book;
@Input() esImpar: boolean;
@Output() quitar = new EventEmitter<Book>();
constructor(){}
quitarCaja(){
this.quitar.emit(this.libroPadre);
}
ngOnInit(): void {  
}
}

