/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const MatchSchema = new Schema({
  robot1: {
    type: Schema.type.ObjectId,
    ref: "Robot",
  },
  robot2: {
    type: Schema.type.ObjectId,
    ref: "Robot",
  },
  turns: [{
    turnNumber: String,
    turnActionRobot1: String,
    turnActionRobot2: String,
    turnActionText: String,
    _id: false
  }]
});

const MatchModel = mongoose.model('match', MatchSchema);

export default MatchModel;