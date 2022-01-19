import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/blog";
const api_url='http://localhost:8080/api/blogs'
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private  httpClient : HttpClient) { }

  showAll():Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(api_url)
  }
  // @ts-ignore
  delete(id):Observable<Blog>{
    return this.httpClient.delete<Blog>(api_url+'/'+id)
  }
  create(blog:Blog) : Observable<Blog>{
    // @ts-ignore
    return this.httpClient.post<Blog>(api_url,blog)
  }
}
