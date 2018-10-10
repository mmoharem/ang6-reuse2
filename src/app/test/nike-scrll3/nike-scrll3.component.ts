import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'nike-scrll3',
  templateUrl: './nike-scrll3.component.html',
  styleUrls: ['./nike-scrll3.component.scss']
})
export class NikeScrll3Component implements OnInit, AfterViewInit {
  event: Event;
  constructor() { }

  ngOnInit() {
  }
  

  ngAfterViewInit() {
    $(document).ready(function(){
      $('#nav').localScroll(800);
      
      //.parallax(xPosition, speedFactor, outerHeight) options:
      //xPosition - Horizontal position of the element
      //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
      //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
      $('#intro').parallax("50%", 0.1);
      $('#second').parallax("50%", 0.1);
      $('.bg').parallax("50%", 0.4);
      $('#third').parallax("50%", 0.3);
    
    })

    
  }

}
