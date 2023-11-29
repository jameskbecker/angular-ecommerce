import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { CartListItemComponent } from './cart-list/cart-list-item/cart-list-item.component';
import { UiModule } from '../ui/ui.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartUpdateFormComponent } from './cart-update-form/cart-update-form.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartOrderOverviewComponent } from './cart-order-overview/cart-order-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { TranslocoDirective } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
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
  providers: [ProductService, CartService],
  declarations: [
    CartListItemComponent,
    CartUpdateFormComponent,
    ProductFormComponent,
    CartListComponent,
    CartOrderOverviewComponent,
    NavigationMenuComponent,
    LanguageSelectorComponent,
    ProductCardComponent,
  ],
  exports: [
    CartListItemComponent,
    CartUpdateFormComponent,
    ProductFormComponent,
    CartListComponent,
    CartOrderOverviewComponent,
    NavigationMenuComponent,
    LanguageSelectorComponent,
    ProductCardComponent,
  ],
})
export class FeaturesModule {}
