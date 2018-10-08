import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var skrollr: any;


@Component({
  selector: 'app-skrollr',
  templateUrl: './skrollr.component.html',
  styleUrls: ['./skrollr.component.scss']
})
export class SkrollrComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    skrollr.init();
  }

}
