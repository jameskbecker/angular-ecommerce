import {Component, Input, OnInit} from '@angular/core';
import {Product, Variant} from "../../types/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  readonly src = 'https://cdn.shopify.com/s/files/1/0487/8188/5596/files/STONE_ISLAND_DSM_056246022582_09691copy.jpg?v=1697127065';
  @Input() id: number = -1;

  product: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductById(this.id)
      .subscribe((product: Product): void => {
      this.product = product;
      console.log(this.product)
    })
  }
}
