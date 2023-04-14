import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

  textToShow:string='';
  result?:number;
  firstValue?:number;
  secondValue?:number;
  op:string|null=null;

  constructor() {
   }

  ngOnInit(): void {
  }

  setNum(num:any){
    if(this.textToShow=='0' || this.result){
      this.result=undefined;
      this.textToShow=num.toString();
    }
    else{
      this.textToShow=`${this.textToShow}${num}`;
    }
  }

  operation(op:string){
    this.firstValue=parseFloat(this.textToShow);
    this.op=op;
    this.textToShow=' ';
  }

  calculate(){
    if(this.result && !this.firstValue) {
      this.firstValue = this.result;
    }
    else if(this.firstValue) {
      this.result=0;
      this.secondValue=parseFloat(this.textToShow);
    }
    else {
      return;
    }

    if(this.firstValue && this.secondValue) {
      switch(this.op){
        case '+':
          this.result= this.firstValue + this.secondValue;
          break;
        case '-':
          this.result=this.firstValue -this.secondValue;
          break;
        case '*':
          this.result=this.firstValue *this.secondValue;
          break;
        case '/':
          this.result=this.firstValue /this.secondValue;
          break;
        case '%':
          this.result=(this.firstValue /100)*this.secondValue;
          break;
      }
    } 

    this.firstValue = undefined;
    this.textToShow=this.result?.toString() || '';
  }

  delete() {
    if (this.textToShow != "") {
      this.textToShow = this.textToShow.substring(0, this.textToShow.length - 1)
    }
  }

  clear(){
    this.result = undefined;
    this.textToShow='';
    this.firstValue = undefined;
    this.secondValue = undefined;
    this.op=null;
  }
  
}
