import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[NikeScrll3]'
})
export class NikeScrll3Directive {

  @HostBinding('style.backgroundPosition') backgrPosition: any;

  constructor(private elRef: ElementRef) { }

  @HostListener('window: scroll', [])
  onscroll() {
    // this.backgrPosition = '0 400 no-repeat fixed';
    // this.elRef.nativeElement.style.color = 'red'
    this.elRef.nativeElement.style.backgroundPosition = `50% ${-window.scrollY * 0.3}px`;
    console.log('scrolled');
    
  }

}
