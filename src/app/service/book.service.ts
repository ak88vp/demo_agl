import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../book";
import {Observable} from "rxjs";
const url='http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  showAll() :Observable<Book[]>{
    return this.http.get<Book[]>(url)
  }
  // @ts-ignore
  delete(id):Observable<Book>{
    return this.http.delete<Book>(url+'/'+id)
  }
  create(book:Book):Observable<Book>{
    return this.http.post<Book>(url,book)
  }
  // @ts-ignore
  edit(id,book:Book):Observable<Book>{
    return this.http.put<Book>(url+'/'+id,book)
  }
  // @ts-ignore
  findById(id):Observable<Book>{
    return this.http.get<Book>(url+'/'+id)
  }
}
