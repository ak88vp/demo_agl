import { Component } from '@angular/core';
import {MyserviceService} from "./service/myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Abc : string ="ẤM"
  title = 'Angular 12 Project!';
  todayDate!: Date;
  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();
  }

}
