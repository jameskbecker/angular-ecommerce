import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'feature-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
})
export class CartListItemComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() size: string = '';
  @Input() sku: string = '';
  @Input() quantity: number = 0;
  @Input() href: string = '';
  @Input() src: string = '';
  private _linePrice: string = '0.00';

  @Input() set linePrice(updatedPrice: string) {
    this._linePrice = parseInt(updatedPrice).toFixed(2);
  }

  get linePrice() {
    return this._linePrice;
  }

  constructor(private cartService: CartService) {}

  public handleDelete() {
    this.cartService.removeItem(this.id);
    this.cartService.getCartData();
  }
}
