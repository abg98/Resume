import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppConfigService, APP_CONFIG, APP_WINDOW, AppConfig } from './app.config';
import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerOverlayService } from './shared/spinner-overlay/spinner-overlay.service';
import { SpinnerInterceptor } from './shared/spinner-overlay/spinner-interceptor';
import {OverlayModule} from "@angular/cdk/overlay";
import { FormsModule } from '@angular/forms';
import { SizeDetectorService } from './shared/size-detector/size-detector.service';
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    SpinnerOverlayService,
    SizeDetectorService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: SpinnerInterceptor, 
      multi: true 
      },
    {
      provide: APP_WINDOW,
      useFactory: () => window
    },
    {
      provide: APP_BASE_HREF,
      useFactory: (config: AppConfig) => {
        return config.baseHref || '/';
      },
      deps: [APP_CONFIG],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
