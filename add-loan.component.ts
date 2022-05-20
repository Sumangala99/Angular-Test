import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private ls:LoanService) { }
  public loanForm=new FormGroup({
    loanId:new FormControl(),
     loanCustomerName:new FormControl(),
    loanAmount:new FormControl(),
    dateOfLoan:new FormControl(),
    tenure:new FormControl(),
    rateOfInterest:new FormControl()

  })
  public loan=new Loan(0,"",0.0,null,0,0);

  ngOnInit() {
  }
  add()
  {
    console.log(this.loanForm.value);
    this.ls.addLoan(this.loanForm.value);

  }

  printEMI()
  {
    
    console.log(this.loan.computeEMI());
  }
 printInterest()
  {
    console.log(this.loan.computeInterestAmount());
    
  }


}
