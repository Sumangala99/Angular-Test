import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { GetAllLoanComponent } from './get-all-loan/get-all-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';

const routes: Routes = [
  {path:'add',component:AddLoanComponent},
  {path:'delete',component:RemoveLoanComponent},
  {path:'find',component:GetAllLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
