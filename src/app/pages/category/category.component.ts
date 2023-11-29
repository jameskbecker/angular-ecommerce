import { Component } from '@angular/core';
import { Product } from '../../../types/Product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  products: Product[] | null = null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.handle = <string>this.activatedRoute.snapshot.paramMap.get('handle');

    this.productService
      .getProductsByCategory('all')
      .subscribe((products: Product[]): void => {
        this.products = products;
      });
  }
}
