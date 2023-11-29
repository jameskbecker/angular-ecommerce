import { Component } from '@angular/core';

@Component({
  selector: 'ui-card-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent {}
