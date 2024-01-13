import express from 'express';

import {addtoReview,deleteReview,getReview1 } from '../controllers/review.js';

export default (router) => {
  router.post('/addtoreviews', addtoReview);
  router.get('/getreviews', getReview1);
  router.delete('/deletereviews/:id', deleteReview);
};