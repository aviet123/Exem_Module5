import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllbooks(): Observable<Book>{
    return this.http.get<Book>(this.apiUrl + '/books')
  }

  getBookById(id): Observable<Book>{
    return this.http.get<Book>(this.apiUrl + '/books/' + id)
  }

  addBook(book): Observable<Book>{
    return this.http.post<Book>(this.apiUrl + '/books',JSON.stringify(book), this.httpOption)
  }

  updateBook(id: any, book: Book): Observable<Book>{
    return this.http.put<Book>(this.apiUrl + '/books/'+ id,JSON.stringify(book),this.httpOption)
  }

  deleteBook(id){
    return this.http.delete<Book>(this.apiUrl + '/books/'+ id, this.httpOption)
  }


}
