import express from 'express';

import { addtoposts,getposts1,deletepost } from '../controllers/posts.js';

export default (router) => {
  router.post('/addtopost', addtoposts);
  router.get('/getpost', getposts1);
  router.delete('/deletepost/:id', deletepost);
};