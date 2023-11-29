import { Component } from '@angular/core';

@Component({
  selector: 'ui-card',
  template: '<div class="container"><ng-content></ng-content></div>',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {}
