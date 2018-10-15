import { scrollRevealL, scrollRevealR, tttt } from './../code1-serv/cod1-serv-animation';
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var skrollr: any;

@Component({
  selector: 'code1-serv',
  templateUrl: './code1-serv.component.html',
  styleUrls: ['./code1-serv.component.scss'],
  animations: [
    scrollRevealL, 
    scrollRevealR
  ]
})
export class Code1ServComponent implements OnInit, AfterViewInit {

  isHidden: boolean = true;

  show = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init();
  }

  onClick() {
    // console.log('clicked');
    
    // this.isHidden = !this.isHidden;
  }

}
