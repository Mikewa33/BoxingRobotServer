/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const RobotSchema = new Schema({
  owner: {
    type: Schema.type.ObjectId,
    ref: "User",
  },
  nft_id: {
    type: String,
    required: true,
    unqiue: true,
  },
  image: {
    type: String,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  agility: {
    type: Number,
    required: true,
  },
  ai: {
    type: Number,
    required: true,
  },
  defense: {
    type: Number,
    required: true,
  }
});

const RobotModel = mongoose.model('robot', RobotSchema);

export default RobotModel;