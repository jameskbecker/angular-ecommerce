import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CartPageComponent } from './cart-page.component';
import { FeaturesModule } from '../../features/features.module';
import { UiModule } from '../../ui/ui.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoDirective } from '@ngneat/transloco';
import { IconsModule } from '../../icons/icons.module';

const meta: Meta<CartPageComponent> = {
  component: CartPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FeaturesModule,
        UiModule,
        CommonModule,
        UiModule,
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
