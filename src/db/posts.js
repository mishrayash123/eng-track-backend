import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  content: { type: String },
  image: { type: String},
  link: { type: String},
  date: { type: String, required: true },
  profileimage: { type: String, required: true },
  userid: { type: String, required: true },
  profilename: { type: String, required: true },
  profilesub: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});



 export const UserModel = mongoose.model('Posts', UserSchema);

// User Actions
 export const getPosts = () => UserModel.find();
 export const getPostsById = (id) => UserModel.findById(id);
 export const createPosts = (values) => new UserModel(values).save().then((user) => user.toObject());
 export const deletePostsById = (id) => UserModel.findOneAndDelete({ _id: id });
