import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StatusService} from "../../service/status.service";
import {Router} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {Blog} from "../../model/blog";
import {Status} from "../../model/status";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  blog!:Blog;
  status1 !: Status
  status: Status[]=[]
  blogForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    content: new FormControl(),
    time: new FormControl(),
    status: new FormControl(),
  });
  constructor( private blogService: BlogService,
               private router:Router,private statusService:StatusService) { }

  ngOnInit(): void {
    this.statusService.getAll().subscribe(rs =>{
      this.status=rs
      console.log(rs)
    })
  }
  create() {
    const blog = this.blogForm.value;
    console.log(blog.status)
    this.status1={
      id : blog.status,
    }
    blog.status=this.status1
    console.log(blog)
    this.blogService.create(blog).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate(["blogs"])
    })
  }
}
