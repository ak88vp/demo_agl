import { Component, OnInit } from '@angular/core';
import {Status} from "../../model/status";
import {StatusService} from "../../service/status.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BlogService} from "../../service/blog.service";
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blog!:Blog;
  status !: Status[];
  status1!:Status;
  constructor(private statusService: StatusService,
              private activatedRoute: ActivatedRoute,
              private blogService:BlogService,
              private fb: FormBuilder,
              private router: Router) { }

  blogForm :FormGroup =this.fb.group({
    id:new FormControl(),
    title:new FormControl(),
    content: new FormControl(),
    time: new FormControl(),
    status: new FormControl(),
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.blogService.findById(id).subscribe(result => {
        this.blog = result
        console.log(result)
      })
      this.statusService.getAll().subscribe(rs=>{
        this.status=rs
      })

    })
    this.blog={
      id:'',
      title:'',
      content:'',
      time:'',
      status:{},
    }
  }

  update(){
    const blog=this.blogForm.value;
    if(blog.status==null){
      blog.status=this.blog.status?.id
    }
    console.log(blog.status)
    this.status1={
      id : blog.status,
    }
    blog.status=this.status1
    this.blogService.editBlog(this.blog.id,blog).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/blogs"])

    })
  }

}
