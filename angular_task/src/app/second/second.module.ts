import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    SecondComponent,
    EmployeeComponent,
    ProductComponent,
    HeaderComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecondModule { }
