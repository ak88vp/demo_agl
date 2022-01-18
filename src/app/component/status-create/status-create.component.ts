import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StatusService} from "../../service/status.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {
  statusForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  constructor(private statusService: StatusService,
              private router:Router) {
  }

  ngOnInit(): void {
  }

  create() {
    const status = this.statusForm.value;
    this.statusService.create(status).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate(["status"])
    })
  }
}
