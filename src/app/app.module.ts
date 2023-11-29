import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { CategoryComponent } from './pages/category/category.component';

const appRoutes: Routes = [
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'products/:handle', component: ProductComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    PagesModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
