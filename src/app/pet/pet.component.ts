import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'nude mn nhe',
    image: 'https://nude.vn/wp-content/uploads/2021/01/Thapani-Meemungtham-nude-day-09-360x542.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
