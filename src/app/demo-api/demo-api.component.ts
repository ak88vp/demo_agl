import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/blog";

@Component({
  selector: 'app-demo-api',
  templateUrl: './demo-api.component.html',
  styleUrls: ['./demo-api.component.css']
})
export class DemoApiComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAll().subscribe(rs => {
      console.log(rs)
    },error => {
      console.log(error)
    })
  }

  getAll(): Observable<Blog> {
    return this.http.get<Blog>('http://localhost:8080/demo')
  }
}
