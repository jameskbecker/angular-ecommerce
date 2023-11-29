import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

type ValueChangeCallback = (value?: string) => void;

@Component({
  selector: 'ui-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
})
export class RadioButtonGroupComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() options: { label: string; value: string }[] = [];

  @Output() onChange = new EventEmitter<string>();
  @Output() onTouched = new EventEmitter<string>();

  value = '';

  registerOnChange(fn: any): void {
    this.onChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched.subscribe(fn);
  }

  writeValue(val: string): void {
    this.value = val;
    this.onChange.emit(this.value);
  }
}
