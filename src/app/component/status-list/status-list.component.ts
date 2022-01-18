import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../service/status.service";
import {Status} from "../../model/status";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
status: Status[]=[]
  constructor(private statusService:StatusService) { }

  ngOnInit(): void {
  this.statusService.getAll().subscribe(result =>{
    this.status=result;
    console.log(result)
  })
  }
  // @ts-ignore
  deleteStatus(id){
  if(confirm("Bạn có chắc chắc muốn xóa không ?")){
    this.statusService.delete(id).subscribe(()=>{
      alert('xóa thành công')
      this.ngOnInit()
    })
  }
  }


}
