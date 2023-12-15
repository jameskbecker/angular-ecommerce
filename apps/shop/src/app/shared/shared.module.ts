import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';

const moduleComponents = [LanguageSelectorComponent, NavigationMenuComponent];

@NgModule({
  declarations: moduleComponents,
  imports: [CommonModule, UiModule, RouterModule],
  exports: moduleComponents,
})
export class SharedModule {}
