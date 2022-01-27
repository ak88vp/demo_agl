import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-find-one',
  templateUrl: './find-one.component.html',
  styleUrls: ['./find-one.component.css']
})
export class FindOneComponent implements OnInit {
book?:Book
  constructor(private bookService:BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.bookService.findById(id).subscribe(result => {
        this.book = result
        console.log(result)
      })
    })
  }

}
