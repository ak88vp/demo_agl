import {Component, OnInit} from '@angular/core';
import {Img} from "../../model/img";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  img: Img = {
    name: ''
  }
  r=1
  b=1
  g=1

  girl() {
    this.img.name = 'https://img-amp.tinmoi.vn/thumbamp/upload/honghanh/2020/05/14/chan-dai-thi-phi-si-thanh-khoe-lung-tran-goi-cam1589425289.jpg'
// @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:59464/"> Back</a></button>
<img src="${this.img.name}" width="100%">
`
  }

  dog() {
    this.img.name = 'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dong-dep-8.gif'
    // @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:59464/"> Back</a></button>
<img src="${this.img.name}" width="100%">
`
  }

  boa() {
    this.img.name = 'https://s199.imacdn.com/ta/2016/07/05/f9a4629d51dc156e_fd8ab54e69d35c6e_12129814677353576143215.jpg'
    // @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:59464/"> Back</a></button>
<img src="${this.img.name}"  width="100%">
`
  }

  sanji() {
    this.img.name = 'http://kenhkhampha.info/wp-content/uploads/2021/03/Sanji-1-game4v-scaled.jpg'
    // @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:59464/" > Back</a></button>
<img src="${this.img.name}" width="100%">
`
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
