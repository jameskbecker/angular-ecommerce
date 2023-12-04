import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from '../icons/icons.module';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    IconsModule,
    //FeaturesModule,
    RouterLink,
    UiModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
