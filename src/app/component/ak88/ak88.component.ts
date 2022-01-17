import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ak88',
  templateUrl: './ak88.component.html',
  styleUrls: ['./ak88.component.css']
})
export class Ak88Component implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });
  constructor() {
  }

  ngOnInit(): void {
  }
  callingFunction() {
    console.log(this.bioSection.value);
  }
}
