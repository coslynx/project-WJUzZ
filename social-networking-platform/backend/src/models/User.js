import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  personalInfo: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  interests: [
    {
      type: String,
    },
  ],
  hobbies: [
    {
      type: String,
    },
  ],
  photos: [
    {
      type: String,
    },
  ],
  videos: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;