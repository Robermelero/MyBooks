import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) {}

getAll(): Observable<Object> {
  return this.http.get<Book[]>(this.url)
}

getOne(id_book:number):Observable<Object> {
    return this.http.get<Book>(`${this.url}/${id_book}`);
}

add(newBook:Book):Observable<Object>{
  return this.http.post(this.url, newBook)
}

edit(book:Book):Observable<Object>{
  return this.http.put(this.url, book)
}

delete(id_book:number):Observable<Object>{
  return this.http.delete(`${this.url}/${id_book}`)
}
}



