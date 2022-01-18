import {Component, OnInit} from '@angular/core';
import {Status} from "../../model/status";
import {StatusService} from "../../service/status.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {
  status !: Status;

  constructor(private statusService: StatusService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }
  statusForm :FormGroup =this.fb.group({
    id:new FormControl(),
    name:new FormControl()
  })

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.statusService.findById(id).subscribe(result => {
        this.status = result
        console.log(result)
      })
    })
    this.status={
      id:'',
      name:''
    }
  }
  update(){
    const status=this.statusForm.value;
    console.log(status)
    this.statusService.editStatus(this.status.id,status).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/status"])

    })
  }

}
