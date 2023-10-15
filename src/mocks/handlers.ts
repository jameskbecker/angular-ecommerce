import {rest} from "msw";
import products from "./products";

export const handlers = [
  rest.get('/api/v1/products/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(products[0])
    )
  })
]
