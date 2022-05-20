export class Loan {
    constructor(
        public loanId:number,
        public loanCustomerName:string,
        public loanAmount:number,
        public dateOfLoan:Date,
        public tenure:number,
        public rateOfInterest:number
    ){}


    public computeInterestAmount()
    {
       return (this.loanAmount*this.rateOfInterest*this.tenure)/100;
    }
    public computeEMI()
    {
        
        return (this.loanAmount*this.rateOfInterest)/this.tenure*12;
    }
}
