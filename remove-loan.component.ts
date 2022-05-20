import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-remove-loan',
  templateUrl: './remove-loan.component.html',
  styleUrls: ['./remove-loan.component.css']
})
export class RemoveLoanComponent implements OnInit {

  constructor(private ls:LoanService) { }

  ngOnInit() {
  }
  delete(loanId)
  {
   this.ls.deleteLoan(loanId);
  }

}
