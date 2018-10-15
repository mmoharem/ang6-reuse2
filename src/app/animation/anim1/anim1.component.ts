import { Component, OnInit } from '@angular/core';
import { trigger, transition } from '@angular/animations';

// this method is run each time the `myAnimationTrigger` trigger value changes.
function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
  string]: any}): boolean {
   // notice that `element` and `params` are also available here
   return toState == 'yes-please-animate';
 }

@Component({
  selector: 'app-anim1',
  templateUrl: './anim1.component.html',
  styleUrls: ['./anim1.component.scss'],
  animations: [
    trigger('myAnimationTrigger', [
      transition(myInlineMatcherFn, [
        // the animation sequence code
      ]),
    ])
  ]
})
export class Anim1Component implements OnInit {

  myStatusExp = "yes-please-animate";

  constructor() { }

  ngOnInit() {
  }

}
