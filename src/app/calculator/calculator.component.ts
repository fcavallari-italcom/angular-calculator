import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

  textToShow:string='';
  sum:number;
  sos:number;
  mol:number;
  div:number;
  uno:number;
  due:number;
  tre:number;
  quattro:number;
  cinque:number;
  sei:number;
  sette:number;
  otto:number;
  nove:number;
  zero:number;
  constructor() {
    this.sum=0;
    this.sos=0;
    this.mol=0;
    this.div=0;

    this.uno=1;
    this.due=2;
    this.tre=3;
    this.quattro=4;
    this.cinque=5;
    this.sei=6;
    this.sette=7;
    this.otto=8;
    this.nove=9;
    this.zero=0;
   }

  ngOnInit(): void {
  }

}
