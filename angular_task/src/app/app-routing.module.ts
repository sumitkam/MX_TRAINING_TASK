import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingAppComponent } from './banking-app/banking-app.component';
import { EligibilityCardComponent } from './eligibility-card/eligibility-card.component';
import { EmiCaliComponent } from './emi-cali/emi-cali.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:FormComponent},
  {path:'bank',component:BankingAppComponent},
  {path:'eligible',component:EligibilityCardComponent},
  {path:'emi',component:EmiCaliComponent},
  { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
