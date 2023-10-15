import {Component, Input} from '@angular/core';
import { Variant } from "../../../types/Product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() title = '';
  @Input() variants: Variant[] = [];

  public getSize(code: string) {
    switch (code) {
      case 'Size Small': return 'S';
      case 'Size Medium': return 'M';
      case 'Size Large': return 'L';
      case 'Size X-Large': return 'XL';

      default: return 'N/A'
    }
  }
}
