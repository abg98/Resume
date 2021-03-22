import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  constructor(
    private router: Router
  ) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        this.toggleActive(route?.url);
      }
    })
  }

  @Input() routes: any[];
  ngOnInit(): void {
    this.toggleActive(window.location.pathname)
  }

  routeTo(page: string) {
    this.toggleActive(page)
    this.router.navigate([page])
  }

  toggleActive(page: string) {
    this.routes.forEach(x => {
      if (x.route === page) {
        x.isActive = true;
      } else {
        x.isActive = false;
      }
    })
  }
}
