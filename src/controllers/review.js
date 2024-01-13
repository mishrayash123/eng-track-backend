import express from 'express';

import {createReview ,getReviewById,getReview,deleteReviewById} from '../db/review.js';

export const addtoReview = async (req, res) => {
  try {
    const {content, userid,date,profileimage,profilename,profilesub} = req.body;
    if (!userid) {
      return res.sendStatus(400);
    }

    const user  = await createReview({
      content,
      userid,
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

export  const getReview1 = async (req, res) => {
  try {
    const users  = await getReview();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export  const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteReviewById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

