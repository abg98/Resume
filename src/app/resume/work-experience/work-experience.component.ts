import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() data: any;
  @Input() site: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
