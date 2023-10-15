import { NgModule } from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {InputComponent} from "./input/input.component";
import {LabelComponent} from "./label/label.component";
import {SeparatorComponent} from "./separator/separator.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    SeparatorComponent
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    SeparatorComponent
  ]
})
export class UiModule { }
