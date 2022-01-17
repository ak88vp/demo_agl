import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id: 1,
      name: 'OXVA',
      price: 850
    }, {
      id: 2,
      name: 'iphone',
      price: 5000
    }, {
      id: 3,
      name: 'airpods',
      price: 2500
    }
  ]
  product = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }
  create(){

    // @ts-ignore
    this.listProduct.push(this.product.value)
  }

}
