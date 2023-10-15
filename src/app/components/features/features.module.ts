import { NgModule } from '@angular/core';
import {CartUpdateFormComponent} from "./cart-update-form/cart-update-form.component";
import {CartListComponent} from "./cart-list/cart-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {CartListItemComponent} from "../cart-list-item/cart-list-item.component";
import {UiModule} from "../ui/ui.module";
import {HeaderComponent} from "../header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";



@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    CartUpdateFormComponent,
    CartListComponent,
    ProductFormComponent,
    CartListItemComponent,
  ],
  exports: [
    CartUpdateFormComponent,
    CartListComponent,
    ProductFormComponent
  ]
})
export class FeaturesModule { }
