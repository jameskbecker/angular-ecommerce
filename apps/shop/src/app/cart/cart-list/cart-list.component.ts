import { Component, OnInit } from '@angular/core';
import { Cart, DEFAULT_CART } from '../../../types/Cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'feature-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cart: Cart = DEFAULT_CART;

  constructor(private cartService: CartService) {
    this.cartService.data$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {
    this.cartService.getCartData();
  }

  public formatPrice(intPrice: number) {
    return `${intPrice / 100}`;
  }
}
