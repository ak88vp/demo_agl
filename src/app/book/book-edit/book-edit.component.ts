import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {Book} from "../../book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book?:Book
  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private bookService:BookService) { }
  bookForm :FormGroup =this.fb.group({
    id:new FormControl(),
    title:new FormControl(),
    author:new FormControl() ,
    description:new FormControl()
  })
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
    this.book={
      id:'',
      title:'',
      author:'',
      description:'',
    }
  }
  update(){
    const blog=this.bookForm.value;
    this.bookService.edit(this.book?.id,blog).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/books"])

    })
  }
}
