import { RestHandler } from 'msw';
import { getProductById, getProductsByCategory } from './product';
import { addToCart, getCart, removeItem } from './cart';

const handlers: RestHandler[] = [
  getProductsByCategory,
  getProductById,

  getCart,
  addToCart,
  removeItem,
];

export default handlers;
