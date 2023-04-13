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

  constructor() {
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

  /* getDecimal(){
    if(!this.textToShow.includes('.')){
        this.textToShow += '.'; 
    }
  } */

  operation(op:any){
    this.firstValue=parseFloat(this.textToShow);
    this.op=op;
    this.textToShow=' ';
    
  }

  calculate(){
    const first=this.firstValue!;
    const second=parseFloat(this.textToShow);

    // quando possibile evita di usare il tipo 'any' qui credo sarebbe andato bene un 'number'
    let result:any;

    // Qui dovresti usare uno switch (https://www.tutorialsteacher.com/typescript/typescript-switch)
    /* if(this.op=='+'){
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
      // la percentuale non si calcola cosi :-)
      result=(first/100)*second;
    } */

    switch(this.op){
      case '+':
        result=first+second;
        break;
      case '-':
        result=first-second;
        break;
      case '*':
        result=first*second;
        break;
      case '/':
        result=first+second;
        break;
      case '%':
        result=(first/100)*second;
        break;
    }

    this.firstValue!=result;
    this.textToShow=result.toString();
  }

  delete() {
    if (this.textToShow != "") {
      this.textToShow = this.textToShow.substr(0, this.textToShow.length - 1)
    }
  }

  clear(){
    this.textToShow='';
    this.firstValue=null;
    this.op=null;
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
