import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
import { Observable, Subscription, NEVER, defer } from 'rxjs';
import { finalize, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef = undefined;

  constructor(private overlay: Overlay) {}
   
    public show(): void {
    Promise.resolve(null).then(() => {
        this.overlayRef = this.overlay.create();
        this.overlayRef.attach(new ComponentPortal(SpinnerOverlayComponent));
        });
    }

    public readonly spinner$ = defer(() => {
        this.show();
            return NEVER.pipe(
                finalize(() => {
                    this.hide();
                })
            );
    }).pipe(share());

    public hide(): void {
        setTimeout(() => {
            this.overlayRef.detach();
            this.overlayRef = undefined;
        }, 400);
    }
}