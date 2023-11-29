import { rest } from 'msw';
import { environment } from '../../environments/environment.development';
import { products } from '../products-response';

const productUrl = `${environment.apiUrl}/products`;

export const getProductsByCategory = rest.get<any[]>(
  `${productUrl}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }
);

export const getProductById = rest.get(
  `${productUrl}/:handle`,
  async (req, res, ctx) => {
    const { handle } = req.params;
    const match = products.find((p) => p.handle === handle);

    if (!match) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(match));
  }
);
