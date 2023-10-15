import {Component, Input} from '@angular/core';

export type CartItem = string;

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() items: CartItem[] = [];
}
