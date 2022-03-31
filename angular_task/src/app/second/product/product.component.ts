import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { ProductClass } from 'src/app/class/product-class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  item: any;



  constructor(private prod: ProductServiceService, private formBuilder : FormBuilder) { }
  formValue!:FormGroup;
  product:any;
  submitted:boolean = false;
  productObj : ProductClass = new ProductClass;
  _id:any;
  showUpdate!:boolean;
  showSave!:boolean;


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name:['',[Validators.required]],
      brand:['',[Validators.required]],
      model:['',[Validators.required]],
      price:['',[Validators.required]],
      quantity:['',[Validators.required]]
    })
    this.getProductData();
  }

  get f():{[key:string]:AbstractControl}{
    return this.formValue.controls;
  }

  getProductData(){
    this.prod.getProduct().subscribe(res =>{
      this.product = res;
      console.warn(this.product);

    })
  }
  clickOnAdd(){
    this.formValue.reset();
    this.showSave = true;
    this.showUpdate= false;
  }

  postSingleProduct(){
    this.prod.postProduct(this.formValue.value).subscribe(()=>{
      console.warn(this.formValue.value);
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
     // alert("product has been saved");
      this.getProductData();

    })
  }

  onEditProduct(item:any){
    this.showUpdate = true;
    this.showSave = false;
      this.productObj._id = item._id;
      this.formValue.controls['name'].setValue(item.name);
      this.formValue.controls['brand'].setValue(item.brand);
      this.formValue.controls['model'].setValue(item.model);
      this.formValue.controls['price'].setValue(item.price);
      this.formValue.controls['quantity'].setValue(item.quantity);
  }

  updateProduct(){
      this.prod.updateProduct(this.productObj._id,this.formValue.value).subscribe((res)=>{
     //alert("updated successfully");
     let ref = document.getElementById('cancle')
      ref?.click();
    this.formValue.reset();
    this.getProductData();

   })
  }

  deleteProduct(item:any){
    // this.productObj._id = this.item._id;
    this.prod.deleteProduct(item._id).subscribe((res)=>{
     // alert("delleted successfully");
      this.getProductData();
    })
  }


}


