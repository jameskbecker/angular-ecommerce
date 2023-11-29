import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesModule } from '../features/features.module';
import { ProductComponent } from './product/product.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { IconsModule } from '../icons/icons.module';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent, ProductComponent, CategoryComponent],
  imports: [
    CommonModule,
    UiModule,
    BrowserModule,
    NgOptimizedImage,
    HttpClientModule,
    FeaturesModule,
    TranslocoDirective,
    IconsModule,
    RouterLink,
  ],
})
export class PagesModule {}
