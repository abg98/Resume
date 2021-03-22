import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDCardComponent } from './crud-card.component';

describe('CRUDCardComponent', () => {
  let component: CRUDCardComponent;
  let fixture: ComponentFixture<CRUDCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
