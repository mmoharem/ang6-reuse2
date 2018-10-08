import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-code1',
  templateUrl: './code1.component.html',
  styleUrls: ['./code1.component.scss']
})
export class Code1Component implements OnInit {
  @ViewChild('el1') el1: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window: scroll', ['$event'])
  onscroll() {
    

    

        // console.log('w'+ window.scrollY);
        // console.log('p' + window.pageYOffset);
       
        let x = window.scrollY;
        this.el1.nativeElement.style.top = x * 0.5 + 'px';
  }
}
