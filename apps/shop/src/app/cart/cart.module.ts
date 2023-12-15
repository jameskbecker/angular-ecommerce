import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartListItemComponent } from './cart-list-item/cart-list-item.component';
import { CartOrderOverviewComponent } from './cart-order-overview/cart-order-overview.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UiModule } from '../ui/ui.module';
import { TranslocoModule } from '@ngneat/transloco';
import { IconsModule } from '../icons/icons.module';
import { RouterLink } from '@angular/router';
import { CartUpdateFormComponent } from './cart-update-form/cart-update-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const moduleComponents = [
  CartListComponent,
  CartListItemComponent,
  CartUpdateFormComponent,
  CartOrderOverviewComponent,
  CartPageComponent,
];

@NgModule({
  declarations: moduleComponents,
  providers: [CartService],
  imports: [
    UiModule,
    CommonModule,
    HttpClientModule,
    TranslocoModule,
    // TranslocoDirective,
    IconsModule,
    NgOptimizedImage,
    RouterLink,
    ReactiveFormsModule,
  ],
  exports: moduleComponents,
})
export class CartModule {}
