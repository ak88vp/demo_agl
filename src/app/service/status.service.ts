import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Status} from "../model/status";
const api_url='http://localhost:8080/api/blogs/status';
@Injectable({
  providedIn: 'root'
})

export class StatusService {

  constructor( private  httpClient : HttpClient) { }

  getAll() :Observable<Status[]>{
    return this.httpClient.get<Status[]>(api_url)
  }
  // @ts-ignore
  findById(id) : Observable<Status>{
    return this.httpClient.get<Status>(api_url+'/'+id)
  }
  // @ts-ignore
  editStatus(id,status:Status) :Observable<Status>{

    // @ts-ignore
    return this.httpClient.put<Status>(api_url+'/'+id,status)
  }
  create(status:Status) : Observable<Status>{
    // @ts-ignore
    return this.httpClient.post<Status>(api_url,status)
  }
  // @ts-ignore
  delete(id):Observable<Status>{
    return this.httpClient.delete<Status>(api_url+'/'+id)
  }
}
