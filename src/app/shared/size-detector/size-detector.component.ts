import { Directive, HostListener } from '@angular/core';
import { SizeDetectorService } from './size-detector.service';

@Directive({
  selector: 'size-detector'
})
export class SizeDetectorComponent {
  constructor(
    private sizeDetectorService: SizeDetectorService) { }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }
  private detectScreenSize() {
    this.sizeDetectorService.onResize(window.innerWidth < 576);
  }

}