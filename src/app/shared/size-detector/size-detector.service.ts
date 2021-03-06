import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SizeDetectorService {
  
  get onResize$(): Observable<boolean> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged())
  }

  private resizeSubject: Subject<boolean>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(isMobile: boolean) {
    this.resizeSubject.next(isMobile);
  }
}