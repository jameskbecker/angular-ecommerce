import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { UiModule } from '../../ui/ui.module';
import { FeaturesModule } from '../../features/features.module';
import { CommonModule } from '@angular/common';

const meta: Meta<ProductComponent> = {
  title: 'Pages/Product',
  component: ProductComponent,
  tags: ['autodocs'],
  decorators: [
    // moduleMetadata({
    //   declarations: [HeaderComponent],
    //   imports: [HttpClientModule, FeaturesModule, UiModule, CommonModule],
    //   providers: [ProductService],
    // }),
  ],

  render: (args: ProductComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ProductComponent>;

export const Default: Story = {
  args: {
    handle: 'stone-island-mens-giaccone-black-aw23-791571649',
  },
};
