import { Component, OnInit } from '@angular/core';
import {MyserviceService} from "../../service/myservice.service";

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {
  newcomponent = "component service";
  // @ts-ignore
  todayDate: Date;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todayDate = this.myservice.showTodayDate();
  }

}
