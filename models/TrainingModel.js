/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TrainingSchema = new Schema({
  owner: {
    type: Schema.type.ObjectId,
    ref: "Robot",
  },
  training_type: {
    type: String,
    required: true,
  },
  start_time: {
    type: Dates,
    required: true
  },
  health_increase: {
    type: Number,
    required: true,
  },
  strength_increase: {
    type: Number,
    required: true,
  },
  agility_increase: {
    type: Number,
    required: true,
  },
  ai_increase: {
    type: Number,
    required: true,
  },
  defense_increase: {
    type: Number,
    required: true,
  }
});

const TrainingModel = mongoose.model('training', TrainingSchema);

export default TrainingModel;