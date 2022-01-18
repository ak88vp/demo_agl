import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  idt : any
  constructor(private productService: ProductService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) =>
    {
      this.idt = paraMap.get('id')
      // @ts-ignore
    })
  }
  // @ts-ignore
  deleteProduct(id){
    this.productService.deleteProduct(id);
  }
}
