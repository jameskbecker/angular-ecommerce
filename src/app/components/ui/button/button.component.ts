import {Component, EventEmitter, Input, Output} from '@angular/core';

type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input()
  public label: string;

  @Input()
  public variant: Variant;

  @Input()
  public size: Size;

  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {
    this.label = ''
    this.variant = 'primary';
    this.size = 'medium';
  }

  public handleClick(event: Event) {
    this.onClick.emit(event)
  }

  public get classes(): string[] {
    return [
      'btn',
      `btn-${this.size}`,
      `btn-${this.variant}`
    ];
  }
}
