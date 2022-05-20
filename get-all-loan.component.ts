import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-get-all-loan',
  templateUrl: './get-all-loan.component.html',
  styleUrls: ['./get-all-loan.component.css']
})
export class GetAllLoanComponent implements OnInit {

  constructor(private ls:LoanService) { }
  public loans=[];

  ngOnInit() {
    this.loans=this.ls.getAllLoans();
  }

}
