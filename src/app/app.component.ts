import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import * as AOS from 'aos'
import { APP_CONFIG, AppConfig } from 'src/app/app.config';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Resume';
  imageToShow: any;
  imageIsLoading: any;
  printable: boolean;
  version: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    ) {
      AOS.init();
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p => {
      this.printable = JSON.parse(p["printable"] || false);
    });
    this.version = this.appConfig.version;
  }
}
