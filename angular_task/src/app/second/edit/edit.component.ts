import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductClass } from 'src/app/class/product-class';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private activateRouter : ActivatedRoute,private product:ProductServiceService,private router :Router) { }
  id:any;
  productData = [];
  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.paramMap.get('id');



  }




}
