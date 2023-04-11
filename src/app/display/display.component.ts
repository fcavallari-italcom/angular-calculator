import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {
  @Input() text?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
