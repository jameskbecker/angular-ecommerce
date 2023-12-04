import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { BrowserModule } from '@angular/platform-browser';
import productRoutes from './product/product.routes';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';

const appRoutes: Routes = [
  //...productRoutes,
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    HttpClientModule,
    TranslocoRootModule,
    ProductModule,
    SharedModule,
    CartModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
