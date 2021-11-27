/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TrainingSchema = new Schema({
  robotId: {
    type: Number,
    required: true,
  },
  userId: {
      type: String,
      required: true
  },
  trainingEnd: Date
});

const TrainingModel = mongoose.model('training', TrainingSchema);

export default TrainingModel;