import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Interest = mongoose.model('Interest', interestSchema);

export default Interest;