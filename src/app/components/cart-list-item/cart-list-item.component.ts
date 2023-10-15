import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
  readonly src = 'https://cdn.shopify.com/s/files/1/0487/8188/5596/files/STONE_ISLAND_DSM_056246022582_09691copy.jpg?v=1697127065';

  @Input() name: string = '';
  @Input() size: string = '';
  @Input() sku: string = '';
  @Input() quantity: string = '0';
}
