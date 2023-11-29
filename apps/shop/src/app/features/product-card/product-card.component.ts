import { Component, Input } from '@angular/core';
import { ProductImage } from '../../../types/Product';

@Component({
  selector: 'feature-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() name: string = 'ABC';
  @Input() price: string = '0.00';
  @Input() image!: ProductImage;
  @Input() href: string = '';
}
