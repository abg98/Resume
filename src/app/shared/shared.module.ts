import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerOverlayService } from './spinner-overlay/spinner-overlay.service';
import { SpinnerInterceptor } from './spinner-overlay/spinner-interceptor';
import {OverlayModule} from "@angular/cdk/overlay";

import { SizeDetectorService } from './size-detector/size-detector.service';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { CRUDCardComponent } from './crud-card/crud-card.component';
import { SliderComponent } from './slider';
import { StepperComponent } from './stepper/stepper.component'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SizeDetectorComponent,
    CRUDCardComponent,
    SliderComponent,
    StepperComponent
  ],
  imports: [
    OverlayModule,
    CommonModule
  ],
  exports: [
      SizeDetectorComponent,
      CRUDCardComponent, 
      SliderComponent,
      StepperComponent
  ]
})
export class SharedModule { }
