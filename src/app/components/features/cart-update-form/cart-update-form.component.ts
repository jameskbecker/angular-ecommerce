import {Component, Input} from '@angular/core';
import {UiModule} from "../../ui/ui.module";

@Component({
  selector: 'app-cart-update-form',
  templateUrl: './cart-update-form.component.html',
  styleUrls: ['./cart-update-form.component.scss'],
})
export class CartUpdateFormComponent {
  @Input() quantity = '-1';
}
