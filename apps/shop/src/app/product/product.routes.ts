import { Routes } from '@angular/router';
import { CategoryComponent } from './category-page/category.component';
import { ProductPageComponent } from './product-page/product-page.component';

const productRoutes: Routes = [
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'products/:handle', component: ProductPageComponent },
];

export default productRoutes;
