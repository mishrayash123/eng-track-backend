import express from 'express';

import { createPosts ,getPosts,deletePostsById} from '../db/posts.js';
export const addtoposts = async (req, res) => {
    try {
      const {content, userid,image,link,date,profileimage,profilename,profilesub} = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }

      const user  = await createPosts({
        content,
        userid,
        image,
        link,
        date,
        profileimage,
        profilename,
        profilesub
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getposts1 = async (req, res) => {
    try {
      const users  = await getPosts();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletepost = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deletePostsById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
