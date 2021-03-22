import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import * as AOS from 'aos'

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      AOS.init();
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p => {
      this.printable = JSON.parse(p["printable"] || false);
    });
  }
}
