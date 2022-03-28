import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

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
    name : ['',[Validators.required,Validators.minLength(3)]],
  city : ['',[Validators.required,Validators.minLength(4)]],
  email : ['',[Validators.required]],
   phone : ['',[Validators.required,Validators.maxLength(10)]],
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
