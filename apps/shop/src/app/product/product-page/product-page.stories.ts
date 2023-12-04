import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProductPageComponent } from './product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { UiModule } from '../../ui/ui.module';
import { CommonModule } from '@angular/common';

const meta: Meta<ProductPageComponent> = {
  title: 'Pages/Product',
  component: ProductPageComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   declarations: [HeaderComponent],
    //   imports: [HttpClientModule, FeaturesModule, UiModule, CommonModule],
    //   providers: [ProductService],
    // }),
  ],

  render: (args: ProductPageComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ProductPageComponent>;

export const Default: Story = {
  args: {
    handle: 'stone-island-mens-giaccone-black-aw23-791571649',
  },
};
