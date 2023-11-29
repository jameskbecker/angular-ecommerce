import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartPageComponent } from './cart-page.component';
import { FeaturesModule } from '../../features/features.module';
import { UiModule } from '../../ui/ui.module';
import { CartService } from '../../services/cart.service';
import { PagesModule } from '../pages.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoDirective } from '@ngneat/transloco';
import { IconsModule } from '../../icons/icons.module';
import { RouterLink } from '@angular/router';

const meta: Meta<CartPageComponent> = {
  component: CartPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FeaturesModule,
        UiModule,
        CommonModule,
        UiModule,
        BrowserModule,
        NgOptimizedImage,
        HttpClientModule,
        FeaturesModule,
        TranslocoDirective,
        IconsModule,
      ],
      providers: [],
    }),
  ],
  render: (args: CartPageComponent) => ({
    props: {
      ...args,
    },
  }),
  tags: ['autodocs'],

  title: 'Pages/Cart',
};

export default meta;
type Story = StoryObj<CartPageComponent>;

export const Default: Story = {
  args: {},
};
