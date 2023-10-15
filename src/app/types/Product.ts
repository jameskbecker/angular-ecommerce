export type Product = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: Variant[];
  images: ProductImage[];
  options: Option[];
}

export type Variant = {
  id: number;
  title: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  fulfillment_service?: string;
  inventory_management?: string;
  barcode?: string;
  weight?: number;
  weight_unit?: string;
  tax_code?: string;
  quantity_rule?: any;
  quantity_price_breaks?: any[];
  image_id?: number | null;
  featured_image?: string | null;
  available?: boolean;
  price: string;
  grams: number;
  compare_at_price: string | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export type ProductImage = {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids: number[];
  src: string;
  width: number;
  height: number;
}

export type Option = {
  name: string;
  position: number;
  values: string[];
}
