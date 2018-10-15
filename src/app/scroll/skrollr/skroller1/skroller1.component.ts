import { Component, OnInit } from '@angular/core';
declare var skrollr: any;

@Component({
  selector: 'app-skroller1',
  templateUrl: './skroller1.component.html',
  styleUrls: ['./skroller1.component.scss']
})
export class Skroller1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init();
  }

}
