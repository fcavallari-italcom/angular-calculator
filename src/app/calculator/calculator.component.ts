import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

  textToShow:string='';
  firstValue:number|null=null;
  op:string|null=null;

  /* firstValue=null;
  operator=null;
  waitSecondNumber=false; */

  sum:number;
  sos:number;
  mol:number;
  div:number;
  constructor() {
    this.sum=0;
    this.sos=0;
    this.mol=0;
    this.div=0;
   }

  ngOnInit(): void {
  }

  getNum(num:any){
    if(this.textToShow=='0'){
      this.textToShow=num.toString();
    }
    else{
      this.textToShow=`${this.textToShow}${num}`;
    }
  }

  operation(op:any){
    this.firstValue=parseFloat(this.textToShow);
    this.op=op;
    this.textToShow=' ';
    
  }

  calculate(){
    const first=this.firstValue!;
    const second=parseFloat(this.textToShow);

    let result:any;
    if(this.op=='+'){
      result=first+second;
    }
    else if(this.op=='-'){
      result=first-second;
    }
    else if(this.op=='*'){
      result=first*second;
    }
    else if(this.op=='/'){
      result=first/second;
    }
    else if(this.op=='%'){
      result=first%second;
    }

    this.firstValue!=result;
    this.textToShow=result.toString();
  }

  clear(){
    this.textToShow='';
  }

  /* getNum(n:string){
    this.textToShow=n;
  }

  clear(){
    this.textToShow='';
  } */

  /* getNum(n:string){
    if(this.waitSecondNumber){
      this.textToShow=n;
      this.waitSecondNumber=false;
    }
    else{
      this.textToShow=='0'? this.textToShow=n: this.textToShow+=n;
    }
  }
  
  private calculation(op,op2){
    switch(op){
      case '+': return this.firstValue +=op2;
      case '-': return this.firstValue -=op2;
      case '*': return this.firstValue *=op2;
      case '/': return this.firstValue /=op2;
      case '=': return op2;
    }
  }

  operation(op:string){
    if(this.firstValue==null){
      this.firstValue=Number(this.textToShow);
    }
    else if(this.operator){
      const result=this.calculation(this.operator,Number(this.textToShow));
      this.textToShow=String(result);
      this.firstValue=result;
    }
    this.operator=op;
    this.waitSecondNumber=true;
  }

  clear(){
    this.textToShow='';
    this.firstValue = null;
    this.operator = null;
    this.waitSecondNumber = false;
  } */

}
