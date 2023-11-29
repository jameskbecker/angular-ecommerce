import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { SeparatorComponent } from './separator/separator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/header/card-header.component';
import { CardContentComponent } from './card/content/card-content.component';
import { CardFooterComponent } from './card/footer/card-footer.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    InputComponent,
    ButtonComponent,
    LabelComponent,
    SeparatorComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    RadioButtonGroupComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LabelComponent,
    SeparatorComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    RadioButtonGroupComponent,
  ],
})
export class UiModule {}
