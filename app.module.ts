import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';
import { GetAllLoanComponent } from './get-all-loan/get-all-loan.component';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLoanComponent,
    RemoveLoanComponent,
    GetAllLoanComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
