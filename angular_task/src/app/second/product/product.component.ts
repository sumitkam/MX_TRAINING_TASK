import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prod: ProductServiceService, private formBuilder : FormBuilder) { }

  formValue!:FormGroup;
  product:any = [];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      company:[''],
      name:[''],
      model_no:[''],
      price:[''],
      quantity:['']
    })
    this.getProductData();
  }

  getProductData(){
    this.prod.getProduct().subscribe((res:any)=>{
      this.product = res;
      console.warn(this.product);

    })
  }

}
