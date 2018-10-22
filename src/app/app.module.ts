import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './shared/material/test1/test1.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatComponentsModule } from "./shared/material/mat-components.module";

import { Rev1Component } from './shared/rev-slider/rev1/rev1.component';
import { ScrollCollapseComponent } from './my-comp/scroll-collapse/scroll-collapse.component';
import { SkrollrComponent } from './scroll/skrollr/skrollr.component';
//my scrll
import { MyScrllComponent } from './my-comp/my-scrll/my-scrll.component';
import { MyScrllDirective } from './my-comp/my-scrll/my-scrll.directive';
import { MyScrllService } from "./my-comp/my-scrll/my-scrll.service";
import { TestComponent } from './test/test.component';
import { Myscrll1Component } from './test/myscrll1/myscrll1.component';

//Code 1:
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Code1Component } from './test/code1/code1.component';
import { Code1ServComponent } from './test/code1/code1-serv/code1-serv.component';
import { Code1HeaderComponent } from './test/code1/code1-header/code1-header.component';
import { Code1NavComponent } from './test/code1/code1-nav/code1-nav.component';
import { Code1Rev1Component } from './test/code1/code1-rev1/code1-rev1.component';
import { Code1FooterComponent } from './test/code1/code1-footer/code1-footer.component';

import { Test2Component } from './test/test2/test2.component';
import { CodepenScrl1Component } from './test/codepen-scrl1/codepen-scrl1.component';
import { NikeScrll2Component } from './test/nike-scrll2/nike-scrll2.component';
import { NikeScrll3Component } from './test/nike-scrll3/nike-scrll3.component';
import { NikeScrll3Directive } from './test/nike-scrll3/nike-scrll3.directive';
import { ScrollComponent } from './scroll/scroll.component';
import { TiltJs1Component } from './scroll/tilt-js1/tilt-js1.component';
import { ScmagicComponent } from './scroll/scmagic/scmagic.component';
import { Magic1Component } from './scroll/scmagic/magic1/magic1.component';
import { Code1TestComponent } from './test/code1/code1-test/code1-test.component';
import { Scroll1Directive } from './test/code1/shared/directives/scroll1.directive';
import { BetterScroll1Directive } from './test/code1/shared/directives/better-scroll1.directive';
import { AnimationComponent } from './animation/animation.component';
import { Anim1Component } from './animation/anim1/anim1.component';
import { Anim1Directive } from './animation/anim1/anim1.directive';
import { Anim2Directive } from './animation/anim1/anim2.directive';
import { Animate1Directive } from './test/code1/shared/directives/animate1.directive';
import { Skroller1Component } from './scroll/skrollr/skroller1/skroller1.component';
import { Skroller2Component } from './scroll/skrollr/skroller2/skroller2.component';
import { Cod1AboutComponent } from './test/code1/cod1-about/cod1-about.component';
import { UsatodayComponent } from './usatoday/usatoday.component';
import { Shap1Component } from './usatoday/shap1/shap1.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Rev1Component,
    ScrollCollapseComponent,
    SkrollrComponent,
    MyScrllComponent,
    MyScrllDirective,
    TestComponent,
    Myscrll1Component,
    Code1Component,
    Test2Component,
    CodepenScrl1Component,
    NikeScrll2Component,
    NikeScrll3Component,
    NikeScrll3Directive,
    Code1ServComponent,
    Code1HeaderComponent,
    Code1NavComponent,
    Code1Rev1Component,
    Code1FooterComponent,
    ScrollComponent,
    TiltJs1Component,
    ScmagicComponent,
    Magic1Component,
    Code1TestComponent,
    Scroll1Directive,
    BetterScroll1Directive,
    AnimationComponent,
    Anim1Component,
    Anim1Directive,
    Anim2Directive,
    Animate1Directive,
    Skroller1Component,
    Skroller2Component,
    Cod1AboutComponent,
    UsatodayComponent,
    Shap1Component,

  ],
  imports: [
    BrowserModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyScrllService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
