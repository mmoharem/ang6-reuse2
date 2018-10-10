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

  newPos(x, windowHeight, pos, adjuster, inertia) {
    return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
    // console.log(x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px");
  }

  @HostListener('window: scroll', [])
  
    onscroll() {

      var $window = $(window);
      // var firstBG = this.intro.nativeElement;
      var secondBG = this.second.nativeElement;
      var thirdBG = this.third.nativeElement;
      var fourthBG = this.fourth.nativeElement;
      var trainers = this.secondBg.nativeElement;

      var windowHeight = window.innerHeight;
      var pos = window.scrollY;
      // console.log($firstBG.offsetHeight == window.scrollY);
      // console.log(document.documentElement.scrollHeight);
      // console.log(window.scrollY);
      // console.log(pos);
      
      // var arr = [firstBG, secondBG, thirdBG, fourthBG, trainers];
      var top = 0;

      // if(window.scrollY >= 0 && window.scrollY <= firstBG.offsetHeight && firstBG.offsetTop - top === 0){
      //   firstBG.classList.add('inview');
      //   firstBG.style.backgroundPosition = this.newPos(50, windowHeight, pos, 900, 0.3);
      //   secondBG.classList.remove('inview');
      // }else if(window.scrollY >= 0 && window.scrollY == secondBG.offsetHeight && secondBG.offsetTop - 600 === 0){
      //   firstBG.classList.remove('inview');
      //   secondBG.style.backgroundPosition = this.newPos(50, windowHeight, pos, 900, 0.3);
      //   // trainers.style.backgroundPosition = this.newPos(50, windowHeight, pos, 900, 0.3);
      //   // thirdBG.classList.remove('inview');
      //   secondBG.classList.add('inview');
      // }else if(window.scrollY >= 0 && window.scrollY <= thirdBG.offsetHeight && thirdBG.offsetTop - 1900 === 0){
      //   secondBG.classList.remove('inview');
      //   thirdBG.classList.add('inview'); 
      // }
      // if(window.scrollY >= 0 && window.scrollY < 600){
      //   firstBG.style.backgroundPosition = `50% ${-window.scrollY * 0.1}px`;
      //   secondBG.style.backgroundPosition = `50% ${60 - window.scrollY * 0.1}px`;
      //   trainers.style.backgroundPosition = `50% ${240 - window.scrollY * (0.4)}px`;
      // }else if(window.scrollY >= 600 && window.scrollY < 1900){
      //   secondBG.style.backgroundPosition = `50% ${60 - window.scrollY * 0.1}px`;
      //   trainers.style.backgroundPosition = `50% ${240 - window.scrollY * (0.4)}px`;
      // }else if(window.scrollY >= 945 && window.scrollY < 1900) {
      //   secondBG.style.backgroundPosition = `50% ${60 - window.scrollY * 0.1}px`;
      //   trainers.style.backgroundPosition = `50% ${240 - window.scrollY * (0.4)}px`;
      //   thirdBG.style.backgroundPosition = `50% ${270 - window.scrollY * (0.45)}px`;
      // }else if(window.scrollY >= 1900 && window.scrollY < 1900){

      // }

      secondBG.style.backgroundPosition = `50% ${600-window.scrollY * 0.1}px`;
  
      // if(window.scrollY >= 0 && window.scrollY < 600){
      //   firstBG.style.backgroundPosition = `50% ${-window.scrollY * 0.1}px`;
      // }
      
      
      // trainers.style.backgroundPosition = this.newPos(50, windowHeight, pos, 900, 0.3);
      const el = secondBG;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const bottomPosition = window.scrollY + window.innerHeight;

      const elCenter = bottomPosition - (el.offsetHeight);
      const elBottom = el.offsetTop + el.offsetHeight
      
      const isHalfShown = elCenter > el.offsetTop;
      const notScrollPased = window.scrollY < elBottom;
     
        console.log('window.innerHeight: ' + window.innerHeight);
      console.log('window.scrollY: ' + window.scrollY);
      // console.log('window.pageYOffset: ' + window.pageYOffset);  
      // console.log('bottomPosition: ' + bottomPosition);  
      // console.log('scrollHeight: ' + scrollHeight);  
      // console.log('document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight);  
      // console.log('elCenter: ' + elCenter);  
      // console.log('elBottom: ' + elBottom); 

      // arr.forEach(item => {
      //   if(window.scrollY >= 0 && window.scrollY <= item.offsetHeight && (item.offsetTop - top) === 0) {
      //     item.classList.add('inview'); 
      //     console.log(item); 
      //   }else {
      //     top = item.offsetHeight;
      //     item.classList.remove('inview');
      //   }
      // });
      
    }
}
