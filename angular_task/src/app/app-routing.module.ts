import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankingAppComponent } from './banking-app/banking-app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EligibilityCardComponent } from './eligibility-card/eligibility-card.component';
import { EmiCaliComponent } from './emi-cali/emi-cali.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'form',component:FormComponent},
  {path:'ractive',component:ReactiveFormComponent},
  {path:'bank',component:BankingAppComponent},
  {path:'calci',component:CalculatorComponent},
  {path:'eligible',component:EligibilityCardComponent},
  {path:'emi',component:EmiCaliComponent},
  {path:"login",component:LoginComponent},
  { path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule)},
  { path: 'firstModule', loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule),canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
