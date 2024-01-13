import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import posts  from './posts.js';
import review from './review.js'
import sellers from './Seller.js'
import products from './products.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  posts(router);
  sellers(router);
  review(router);
  products(router)
  return router;
};