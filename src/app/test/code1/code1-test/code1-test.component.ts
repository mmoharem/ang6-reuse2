import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, state, query } from '@angular/animations';
import { pens, paper, plant } from './cod1-test.animation';
declare var skrollr: any;

@Component({
  selector: 'code1-test',
  templateUrl: './code1-test.component.html',
  styleUrls: ['./code1-test.component.scss'],
  animations: [
    pens,
    paper,
    plant
  ]
})
export class Code1TestComponent implements OnInit, AfterViewInit {

  isHidden: boolean = true;

  show = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init();
  }

  onClick() {
    this.isHidden = !this.isHidden;
    console.log('clicked');
    
  }
}
