import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  users: User[] = []
  // @ts-ignore
  user = new FormGroup({
    name: new FormControl('', [Validators.maxLength(4)]),
    age: new FormControl('', [Validators.required,Validators.min(18)]),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
  })

  constructor() {
  }

  ngOnInit(): void {

  }

  create() {
    console.log(this.user.get('age')?.errors)
    console.log(this.user.value)
    this.users.push(this.user.value)
    console.log(this.users)

  }
}
