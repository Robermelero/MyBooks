
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:4000";

  constructor(private http: HttpClient, private userService: UserService) {}

  getLibros(): Observable<any> {
    let userId = this.userService.user.id_user;
    return this.http.get(`${this.url}/books/${userId}`);
  }

  getByUserAndBook(bookId: number): Observable<any> {
    let userId = this.userService.user.id_user;
    return this.http.get(`${this.url}/books/${userId}/${bookId}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.url}/books`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.url}/books/${book.id_book}`, book);
  }
  

  deleteBook(bookId: number): Observable<any> {
    console.log(bookId)
    return this.http.delete(`${this.url}/books/${bookId}`);
  }
}




