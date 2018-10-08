import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './shared/material/test1/test1.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatComponentsModule } from "./shared/material/mat-components.module";

import { Rev1Component } from './shared/rev-slider/rev1/rev1.component';
import { ScrollCollapseComponent } from './my-comp/scroll-collapse/scroll-collapse.component';
import { SkrollrComponent } from './my-comp/skrollr/skrollr.component';
//my scrll
import { MyScrllComponent } from './my-comp/my-scrll/my-scrll.component';
import { MyScrllDirective } from './my-comp/my-scrll/my-scrll.directive';
import { MyScrllService } from "./my-comp/my-scrll/my-scrll.service";
import { TestComponent } from './test/test.component';
import { Myscrll1Component } from './test/myscrll1/myscrll1.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Code1Component } from './test/code1/code1.component';
import { Test2Component } from './test/test2/test2.component';
import { CodepenScrl1Component } from './test/codepen-scrl1/codepen-scrl1.component';
import { NikeScrll2Component } from './test/nike-scrll2/nike-scrll2.component'


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
