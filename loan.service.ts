import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }
  public Loans=[];

  addLoan(Loan)
  {
    this.Loans.push(Loan);
    console.log(this.Loans)
  }
  getAllLoans()
  {
    return this.Loans;
  }

  deleteLoan(id)
  {
    for(let i=0;i<this.Loans.length;i++)
    {
      if(this.Loans[i].loanId==id)
      {
         this.Loans.splice(i,1);
      }
      
    }
   

  }
  
}
