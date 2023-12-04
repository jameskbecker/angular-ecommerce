import { Component, Input } from '@angular/core';
import { Variant } from '../../../types/Product';
import { CartService } from '../../cart/cart.service';
import products from '../../../mocks/products';

@Component({
  selector: 'feature-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  @Input() title = '';
  @Input() variants: Variant[] = [];

  public formData = {
    variant: '',
    quantity: '1',
  };

  constructor(private cartService: CartService) {}

  public getSize(code: string) {
    switch (code) {
      case 'Size Small':
        return 'S';
      case 'Size Medium':
        return 'M';
      case 'Size Large':
        return 'L';
      case 'Size X-Large':
        return 'XL';

      default:
        return code;
    }
  }

  public getVariantFields = () => {
    return this.variants.map((v) => ({
      label: this.getSize(v.title),
      value: v.id.toString(),
    }));
  };

  public getProductId(variantId: number) {
    return this.variants.find((v) => v.id === variantId)?.product_id;
  }

  public updateVariant = (value: string) => {
    this.formData.variant = value;
  };

  onSubmit = () => {
    const parsedVariant = parseInt(this.formData.variant);
    const productId = this.getProductId(parsedVariant) + '';

    this.cartService
      .addToCart(productId, this.formData.variant, this.formData.quantity)
      .subscribe({
        complete: () => {
          this.cartService.getCartData();
        },
        error: (err) => {},
      });
  };
}
