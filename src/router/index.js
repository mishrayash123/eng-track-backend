import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import posts  from './posts.js';
import orders from './orders.js'
import sellers from './Seller.js'
import products from './products.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  posts(router);
  sellers(router);
  orders(router);
  products(router)
  return router;
};