/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PartSchema = new Schema({
  owner: {
    type: Schema.type.ObjectId,
    ref: "User",
  },
  nftId: {
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

const PartModel = mongoose.model('part', PartSchema);

export default PartModel;