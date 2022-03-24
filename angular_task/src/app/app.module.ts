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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    BankingAppComponent,
    EligibilityCardComponent,
    EmiCaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
