import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var skrollr: any;

@Component({
  selector: 'app-skroller2',
  templateUrl: './skroller2.component.html',
  styleUrls: ['./skroller2.component.scss']
})
export class Skroller2Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    ( function( $ ) {
      // Init Skrollr
      var s = skrollr.init({
          render: function(data) {
              //Debugging - Log the current scroll position.
              //console.log(data.curTop);
          }
      });
    } )( jQuery );
  }

}
