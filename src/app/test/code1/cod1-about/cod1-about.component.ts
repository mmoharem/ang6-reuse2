import { transition } from '@angular/animations';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
// import { pens } from './cod1-about-animation';
import { trigger, style } from '@angular/animations';
declare var skrollr: any;

@Component({
  selector: 'cod1-about',
  templateUrl: './cod1-about.component.html',
  styleUrls: ['./cod1-about.component.scss'],
  animations: [
    trigger('pens', [
      transition(':enter',[
        style({
          opacity: 0
        })
      ])
    ])
  ]
})
export class Cod1AboutComponent implements OnInit {

  isHidden = 'hide';

  show = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init();
  }

  onClick() {
    // this.isHidden = !this.isHidden;
  }
}
