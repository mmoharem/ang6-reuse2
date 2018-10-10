import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'tilt-js1',
  templateUrl: './tilt-js1.component.html',
  styleUrls: ['./tilt-js1.component.scss']
})
export class TiltJs1Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    // const tilt = $('.js-tilt').tilt();
    // tilt.on('change', callback);  // parameters: event, transforms
    // tilt.on('tilt.mouseLeave', callback); // parameters: event
    // tilt.on('tilt.mouseEnter', callback); // parameters: event
  }
  onClick(event: Event) {
    const tilt = $('.js-tilt').tilt();
    tilt.on('change', event);  // parameters: event, transforms
    // tilt.on('tilt.mouseLeave', callback); // parameters: event
    // tilt.on('tilt.mouseEnter', callback); // parameters: event
  }

}
