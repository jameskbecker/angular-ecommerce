import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  subtotal: string = '0.00';
  itemCount: number = 0;

  constructor(private cartService: CartService) {}

  public ngOnInit() {
    this.cartService.data$.subscribe((cart) => {
      this.subtotal = cart.subtotal;
      this.itemCount = cart.items.length;
    });
  }

  public formatPrice(intPrice: number) {
    return `${intPrice / 100}`;
  }
}
