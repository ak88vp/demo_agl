import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../service/blog.service";
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = []

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.showAll().subscribe(rs => {
      this.blogs = rs
      console.log(rs)
    })
  }

// @ts-ignore
  deleteBlog(id) {
    if (confirm("Bạn có chắc chắc muốn xóa không ?")) {
      this.blogService.delete(id).subscribe(() => {
        alert('Xóa thành công')
        this.ngOnInit()
      })
    }
  }
}
