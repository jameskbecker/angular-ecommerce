import {
  Component,
  Input,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

type HTMLInputTypeAttribute =
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type ValueChangeCallback = (value?: string) => void;

@Component({
  selector: 'ui-input',
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
  @Input() id?: string;
  @Input({ required: true }) name: string = '';
  @Input() type?: HTMLInputTypeAttribute = 'text';

  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  // @Input() minLength?: number;
  // @Input() maxLength?: number;
  @Input() pattern: string = '';
  @Input() min: string = '';
  @Input() max: string = '';
  @Input() step: string = '';
  @Input() autocomplete: string = '';
  @Input() autofocus: boolean = false;

  onTouch: () => void = () => {};
  onChange: ValueChangeCallback = () => {};

  value: string = '';

  constructor() {
    this.disabled = false;
  }

  registerOnChange(handler: ValueChangeCallback): void {
    this.onChange = handler;
  }

  registerOnTouched(handler: () => void): void {
    this.onTouch = handler;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: string): void {
    this.value = val;
  }
}
