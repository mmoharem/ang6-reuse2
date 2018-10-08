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

  getViewportHeight() {
    var height = window.innerHeight; // Safari, Opera
    var mode = document.compatMode;

    if ( (mode || !$.support.boxModel) ) { // IE, Gecko
        height = (mode == 'CSS1Compat') ?
        document.documentElement.clientHeight : // Standards
        document.body.clientHeight; // Quirks
    }

    return height;
  }

  @HostListener('window: scroll', ['$event'])
  onScroll() {
  
    var $window = $(window);
    var $firstBG = $('#intro');
    var $secondBG = $('#second');
    var $thirdBG = $('#third');
    var $fourthBG = $('#fourth');
    var trainers = $("#second .bg");

    // console.log(this.getViewportHeight());
    

    var vpH = this.getViewportHeight(),
              scrolltop = (document.documentElement.scrollTop ?
              document.documentElement.scrollTop :
              document.body.scrollTop),
        elems = ['#intro'];
    
    // naughty, but this is how it knows which elements to check for
    $.each($.cache, function () {
        if (this.events && this.events.inview) {
            elems.push(this.handle.elem);
        }
    });

    if (elems.length) {
        $(elems).each(function () {
            var $el = $(this),
                top = $el.offset().top,
                height = $el.height(),
                inview = $el.data('inview') || false;

            if (scrolltop > (top + height) || scrolltop + vpH < top) {
                if (inview) {
                    $el.data('inview', false);
                    $el.trigger('inview', [ false ]);                        
                }
            } else if (scrolltop < (top + height)) {
                if (!inview) {
                    $el.data('inview', true);
                    $el.trigger('inview', [ true ]);
                }
            }
        });
    }
    // $(function () {
    //   $(window).scroll();
    // });
    console.log(document.documentElement.scrollTop);
    
}
}
