import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { SecondComponent } from './second.component';

const routes: Routes = [{ path: '', component: SecondComponent },
{ path:"employee",component:EmployeeComponent},
{path:"product",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
