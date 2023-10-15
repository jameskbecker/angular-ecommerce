import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

type HTMLInputTypeAttribute =
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type?: HTMLInputTypeAttribute = 'text';
  @Input() id?: string;
  @Input() name?: string;
  @Input() value?: string = '';
  @Input() placeholder?: string;
  @Input() disabled?: boolean;
  @Input() readonly?: boolean;
  @Input() required?: boolean;
  // @Input() minLength?: number;
  // @Input() maxLength?: number;
  @Input() pattern?: string;
  @Input() min?: string;
  @Input() max?: string;
  @Input() step?: string;
  @Input() autocomplete?: string;
  @Input() autofocus?: boolean;

  private onTouch: any;
  private onChange: any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: string): void {
    this.value = val;
  }
}
