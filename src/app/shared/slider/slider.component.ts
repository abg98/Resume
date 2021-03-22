import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';

@Component({
  selector: 'app-slider',
  styleUrls: [ './slider.component.scss' ],
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class SliderComponent {
  @Input() activePane: PaneType = 'left';
}