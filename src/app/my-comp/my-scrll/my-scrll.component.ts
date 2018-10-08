import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { MyScrllDirective } from './my-scrll.directive';


@Component({
  selector: 'my-scrll',
  templateUrl: './my-scrll.component.html',
  styleUrls: ['./my-scrll.component.scss'],
  providers: [MyScrllDirective],
  animations: [
    trigger('showHide', [
      state('hide', style({
        overflow: 'hidden',
        opacity: 0
      })),
      transition('hide => show', [
        animate('700ms ease-out', style({
          overflow: 'auto',
          opacity: 1
        })),
        transition('show => hide', [
          animate('3100ms ease-in', style({
            overflow: 'hidden',
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class MyScrllComponent implements OnInit {

  isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  onScroll (e) {
    // console.log('xxxxx');
    this.isHidden = e; 
  }

}
