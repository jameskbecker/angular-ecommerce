import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { InputComponent } from './components/ui/input/input.component';
import {FormsModule} from "@angular/forms";
import { LabelComponent } from './components/ui/label/label.component';
import { ProductFormComponent } from './components/features/product-form/product-form.component';
import { ProductComponent } from './pages/product/product.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { CartListComponent } from './components/features/cart-list/cart-list.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartComponent } from './pages/cart/cart.component';
import { SeparatorComponent } from './components/ui/separator/separator.component';
import { CartUpdateFormComponent } from './components/features/cart-update-form/cart-update-form.component';
import {HttpClientModule} from "@angular/common/http";
import {UiModule} from "./components/ui/ui.module";
import {FeaturesModule} from "./components/features/features.module";
import {ProductService} from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // CartListItemComponent,
    CartComponent,
    ProductComponent,

    // ButtonComponent,
    // InputComponent,
    // LabelComponent,
    // SeparatorComponent,

    // CartUpdateFormComponent,
    // CartListComponent,
    // ProductFormComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      NgOptimizedImage,
      HttpClientModule,
      UiModule,
      FeaturesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
