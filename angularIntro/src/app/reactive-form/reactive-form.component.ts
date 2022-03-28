import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


formValue!:FormGroup;
submitted:boolean=false;
simplenamePattern="/^[a-z]+$/";
emailPattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]){2,4}+$/";
numberPattern="/^[0-9]{1,10}$/";


  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name : ['',[Validators.required,Validators.minLength(4),Validators.pattern(this.simplenamePattern)]],
      city : ['',[Validators.required,Validators.minLength(20),Validators.pattern(this.simplenamePattern)]],
      email : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
      phone : ['',[Validators.required,Validators.maxLength(10),Validators.pattern(this.numberPattern)]],
    })
  }

  get f():{[key:string]:AbstractControl}{
      return this.formValue.controls;
  }

  afterSubmit(){
    this.submitted = true;
    if(this.formValue.invalid){
      return;
    }
    alert(JSON.stringify(this.formValue.value));
  }

}
