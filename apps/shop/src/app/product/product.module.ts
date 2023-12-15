import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CategoryComponent } from './category-page/category.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { UiModule } from '../ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoDirective } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

const moduleComponents = [
  CategoryComponent,
  ProductCardComponent,
  ProductFormComponent,
  ProductPageComponent,
];

@NgModule({
  declarations: moduleComponents,
  imports: [
    CommonModule,
    BrowserModule,
    UiModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslocoDirective,
    RouterLink,
  ],
  exports: moduleComponents,
})
export class ProductModule {}
