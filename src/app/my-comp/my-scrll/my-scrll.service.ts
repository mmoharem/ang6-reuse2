import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Debounce Decorator function:
export function debounce(delay: number = 5): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let timeout = null

    const original = descriptor.value;

    descriptor.value = function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class MyScrllService {

  emitEl = new Subject();

  constructor() { }

  onScroll(el, stateEmit){
    // const el = this.elRef.nativeElement;
    var obj = {};
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const bottomPosition = window.scrollY + window.innerHeight;

    const elCenter = bottomPosition - (el.offsetHeight * 0.7);
    const elBottom = el.offsetTop + el.offsetHeight
    
    const isHalfShown = elCenter > el.offsetTop;
    const notScrollPased = window.scrollY < elBottom;



    // 
    
    // if(isHalfShown && notScrollPased){
    //     stateEmit.emit(false);
    //     console.log('show');

    // } else {
    //   stateEmit.emit(true);
    //   console.log('hide');
    // }
    // console.log(el.offsetTop);
    // console.log(el.offsetHeight);
    
    // this.emitEl.next(obj={
    //   elOffsetTop: el.offsetTop,
    //   elHeight: el.height,
    //   elBottom: elBottom,
    // });
    // console.log('window.innerHeight: ' + window.innerHeight);
    // console.log('window.scrollY: ' + window.scrollY);
    // console.log('window.pageYOffset: ' + window.pageYOffset);  
    // console.log('bottomPosition: ' + bottomPosition);  
    // console.log('scrollHeight: ' + scrollHeight);  
    // console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);  
    // console.log('elCenter: ' + elCenter);  
    // console.log('elBottom: ' + elBottom); 
  }

}

