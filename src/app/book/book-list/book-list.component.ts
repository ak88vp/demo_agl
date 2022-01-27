import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book:Book[]=[]
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.showAll().subscribe(rs=>{
      this.book=rs;
      console.log(this.book)
    })
  }
  // @ts-ignore
  deleteBook(id){
    if (confirm("Bạn có chắc chắc muốn xóa không ?")) {
    this.bookService.delete(id).subscribe(()=>{
      alert("xóa thành công")
      this.ngOnInit()
    })
  }}

}
