import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Book} from "../../book";
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book!:Book
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private router:Router,
              private bookService:BookService) { }

  ngOnInit(): void {
  }
  create() {
     this.book = this.bookForm.value;
    console.log(this.book)
    this.bookService.create(this.book).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate(["books"])
    })
  }
}
