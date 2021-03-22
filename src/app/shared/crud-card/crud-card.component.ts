import { Component, OnInit, Input, Output, ElementRef, Inject, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-crud-card',
  templateUrl: './crud-card.component.html',
  styleUrls: ['./crud-card.component.scss']
})
export class CRUDCardComponent implements OnInit {

  constructor() { }

  isOpen = false;
  @Input() id: string;
  @Input() header: string;
  @Input() data: any;
  @Output() emitter = new EventEmitter<object>();
  @ViewChild('collapse', {read: ElementRef}) collapse: ElementRef;

  ngOnInit(): void {
  }

  CRUD(op: string) {
    this.emitter.emit({ data: this.data, op: op })
  }

  // pisses me off that this isn't very Angulary
  toggleFooter() {
    const footer = document.getElementById(this.id);
    if (footer.style.maxHeight) {
      footer.style.maxHeight = null;
    } else {
      footer.style.maxHeight = (footer.scrollHeight + 10) + "px";
    }
  }
}
