import { Component } from '@angular/core';
import {CartItem} from "../../components/features/cart-list/cart-list.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: CartItem[] = [];
  cartTotal = '0.00';
}
