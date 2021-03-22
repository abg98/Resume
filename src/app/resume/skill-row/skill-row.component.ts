import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss']
})
export class SkillRowComponent implements OnInit {
  @Input() skills: any[];
  @Input() level: number;
  goodArray: any[];
  badArray: any[];
  constructor() { }

  ngOnInit(): void {
    this.goodArray = Array(this.level).fill('black');
    this.badArray = Array(5-this.level).fill('grey');
  }

  get skillsString() {    
    const arr = this.skills || [];
    return `${arr.join(', ')}`;
  }

  get hasLevel() {
    return this.level && this.level > 0
  }
}
