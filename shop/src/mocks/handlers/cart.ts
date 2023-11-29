import { rest } from 'msw';
import { Cart, CartItem } from '../../types/Cart';
import { CartAddRequest } from '../../types/CartAddRequest';
import { environment } from '../../environments/environment.development';
import { products } from '../products-response';

const cartUrl = `${environment.apiUrl}/cart`;

const items: CartItem[] = [];

const addProperties = (data: any[], key: string): number => {
  if (data.length === 0) return 0;

  return data.map((v) => v[key]).reduce((a, b) => a + b);
};

export const getCart = rest.get(cartUrl, (req, res, ctx) => {
  const body: Cart = {
    item_count: addProperties(items, 'quantity'),
    items,
    subtotal: `${(addProperties(items, 'line_price') / 100).toFixed(2)}`,
  };

  return res(ctx.json(body));
});

export const addToCart = rest.post(cartUrl, async (req, res, ctx) => {
  const data = await req.json<CartAddRequest>();

  const productMatch = products.find((p) => p.id === parseInt(data.product_id));

  if (!productMatch) {
    return res(ctx.status(404));
  }

  const existingItem = items.find(
    (i) =>
      i.variant_id === parseInt(data.variant_id) &&
      i.product_id === parseInt(data.product_id)
  );

  if (existingItem) {
    items[items.indexOf(existingItem)].quantity += parseInt(data.quantity);
    return res(ctx.status(200));
  }

  const matchingVariant = productMatch.variants.find(
    (v) => v.id === parseInt(data.variant_id)
  )!;

  const originalPrice = parseInt(matchingVariant.price) * 100;

  items.push({
    variant_options: [],

    quantity: parseInt(data.quantity),
    id: parseInt(data.variant_id),
    title: productMatch.title,
    product_id: parseInt(data.product_id),
    variant_id: parseInt(data.variant_id),
    vendor: productMatch.vendor,
    sku: matchingVariant.sku,
    price: originalPrice,
    line_price: parseInt(data.quantity) * originalPrice,
    variant_title: matchingVariant.title,
    url: `/products/${productMatch.handle}?variant_id=${data.variant_id}`,
    image: productMatch.images[0].src,
  });

  return res(ctx.status(204));
});

export const removeItem = rest.delete(`${cartUrl}/:id`, (req, res, ctx) => {
  const { id } = req.params;
  const match = items.find((i) => i.variant_id === parseInt(<string>id));

  if (!match) {
    return res(ctx.status(405));
  }

  items.splice(items.indexOf(match), 1);

  return res(ctx.status(200));
});
