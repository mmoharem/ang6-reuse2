import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
declare var jQuery: any;



@Component({
  selector: 'nike-scrll2',
  templateUrl: './nike-scrll2.component.html',
  styleUrls: ['./nike-scrll2.component.scss']
})
export class NikeScrll2Component implements OnInit, AfterViewInit {

  @ViewChild('intro') intro: ElementRef;
  @ViewChild('second') second: ElementRef;
  @ViewChild('third') third: ElementRef;
  @ViewChild('fourth') fourth: ElementRef;
  @ViewChild('secondBg') secondBg: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getViewportHeight() {
    var height = window.innerHeight; // Safari, Opera
    var mode = document.compatMode;

    if ( (mode || !$.support.boxModel) ) { // IE, Gecko
        height = (mode == 'CSS1Compat') ?
        document.documentElement.clientHeight : // Standards
        document.body.clientHeight; // Quirks
    }

    return height;
  }

  // @HostListener('window: scroll', ['$event'])
  // onScroll() {
  
    
  // }
}
