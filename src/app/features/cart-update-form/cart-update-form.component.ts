import { Component, Input, OnInit } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

type CartUpdateForm = {
  qty: string;
};

@Component({
  selector: 'app-cart-update-form',
  templateUrl: './cart-update-form.component.html',
  styleUrls: ['./cart-update-form.component.scss'],
})
export class CartUpdateFormComponent implements OnInit {
  @Input() quantity: number = -1;

  form!: FormGroup<any>;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      qty: new FormControl(this.quantity, [Validators.required]),
    });
  }

  get qty() {
    return this.form.controls['qty'];
  }

  onSubmit() {
    console.log(this.form);
  }
}
