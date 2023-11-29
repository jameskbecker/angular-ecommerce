import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-cart-order-overview',
  templateUrl: './cart-order-overview.component.html',
  styleUrls: ['./cart-order-overview.component.scss'],
})
export class CartOrderOverviewComponent {
  @Input() subtotal: string = '';
}
