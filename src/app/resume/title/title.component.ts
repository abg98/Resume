import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() icon: string = ""
  @Input() title: string = ""
  constructor() { }

  ngOnInit(): void {
    this.title = this.title.toUpperCase();
  }

}
