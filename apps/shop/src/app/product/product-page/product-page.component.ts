import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  handle: string = '';
  product: Product | null = null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.handle = <string>this.activatedRoute.snapshot.paramMap.get('handle');

    this.productService
      .getProductByHandle(this.handle)
      .subscribe((product: Product): void => {
        this.product = product;
      });
  }
}
