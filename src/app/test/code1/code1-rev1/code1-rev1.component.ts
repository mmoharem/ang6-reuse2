import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'code1-rev1',
  templateUrl: './code1-rev1.component.html',
  styleUrls: ['./code1-rev1.component.scss']
})
export class Code1Rev1Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var revapi6;
    var tpj = $;
    (function() {
      if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();

      function onLoad() {
      // if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
      // if(tpj("#rev_slider_6_1").revolution == undefined){
      //   revslider_showDoubleJqueryError("#rev_slider_6_1");
      // }else{
        revapi6 = tpj("#rev_slider_6_1").show().revolution({
          sliderType:"hero",
          jsFileLocation:"//sms2/revslider/public/assets/js/",
          sliderLayout:"fullscreen",
          dottedOverlay:"none",
          delay:9000,
          navigation: {
          },
          responsiveLevels:[1240,1024,778,480],
          visibilityLevels:[1240,1024,778,480],
          gridwidth:[1240,1024,778,480],
          gridheight:[868,768,960,720],
          lazyType:"none",
          parallax: {
            type:"scroll",
            origo:"slidercenter",
            speed:400,
                        speedbg:0,
                        speedls:0,
            levels:[10,15,20,25,30,35,40,-10,-15,-20,-25,-30,-35,-40,-45,55],
          },
          shadow:0,
          spinner:"off",
          autoHeight:"off",
          fullScreenAutoWidth:"off",
          fullScreenAlignForce:"off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "60px",
          disableProgressBar:"on",
          hideThumbsOnMobile:"off",
          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          debugMode:false,
          fallbacks: {
            simplifyAll:"off",
            disableFocusListener:false,
          }
        });
      // }; /* END OF revapi call */
      }; /* END OF ON LOAD FUNCTION */
    }()); /* END OF WRAPPING FUNCTION */
  }

}
