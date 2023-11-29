import { Component, EventEmitter, Input, Output } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() id: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'medium';

  @Output() onClick = new EventEmitter<Event>();

  public handleClick(event: Event) {
    this.onClick.emit(event);
  }

  public get classes(): string[] {
    return [`btn-${this.size}`, `btn-${this.variant}`];
  }
}
