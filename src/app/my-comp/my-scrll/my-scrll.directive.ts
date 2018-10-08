
import { Directive, OnInit, ElementRef, Renderer2, HostListener, EventEmitter, Output, Input } from "@angular/core";
// import { Subject } from "rxjs/Subject";
import { MyScrllService, debounce } from "./my-scrll.service";
// import { debounce } from "./decorators";

// Debounce function:
// export function debounce(delay: number = .2): MethodDecorator {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       let timeout = null
  
//       const original = descriptor.value;
  
//       descriptor.value = function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => original.apply(this, args), delay);
//       };
  
//       return descriptor;
//     };
//   }

@Directive({
    selector: '[MyScrll]',
    // providers: [Scroll3Service ]
})



export class MyScrllDirective implements OnInit {
    // stateEmit = new EventEmitter<string>();
    @Output() stateEmit: EventEmitter<any> = new EventEmitter();
    @Input('ratio') ratio;

    constructor(private elRef: ElementRef,
                private renderer: Renderer2,
                private myScrllService: MyScrllService
                ) {}
    
    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    }

    // @HostListener('window: scroll', ['$event'])  
    // @debounce()
    // onscroll(e: Event) {
        
    //     // onScroll  
    //     this.myScrllService.onScroll(this.elRef.nativeElement, this.stateEmit);      
    //     // console.log('sssssssssss');
    //     console.log(this.elRef.nativeElement.offsetTop);

    //     this.elRef.nativeElement.style.top = '400px';
    //     // this.elRef.nativeElement.style.backgroundColor = 'red' ;
        
        
    // }

    @HostListener('window: scroll', []) 
    // @debounce()
     oclick() {

        this.myScrllService.onScroll(this.elRef.nativeElement, this.stateEmit);

        // console.log('w'+ window.scrollY);
        // console.log('p' + window.pageYOffset);
        console.log(this.elRef);
        let x = window.scrollY;
        this.elRef.nativeElement.style.top = x * this.ratio + 'px';
    }

}
