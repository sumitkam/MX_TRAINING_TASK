import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { BankingAppComponent } from './banking-app/banking-app.component';
import { EligibilityCardComponent } from './eligibility-card/eligibility-card.component';
import { EmiCaliComponent } from './emi-cali/emi-cali.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FilterEmpPipe } from './pipes/filter-emp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    BankingAppComponent,
    EligibilityCardComponent,
    EmiCaliComponent,
    LoginComponent,
    ReactiveFormComponent,
    HomeComponent,
    CalculatorComponent,
    FilterEmpPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
