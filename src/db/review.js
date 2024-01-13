import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  content: { type: String },
  date: { type: String, required: true },
  profileimage: { type: String, required: true },
  userid: { type: String, required: true },
  profilename: { type: String, required: true },
  profilesub: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});



 export const UserModel = mongoose.model('Reviews', UserSchema);

// User Actions
 export const getReview = () => UserModel.find();
 export const getReviewById = (id) => UserModel.findById(id);
 export const createReview = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deleteReviewById = (id) => UserModel.findOneAndDelete({ _id: id });
