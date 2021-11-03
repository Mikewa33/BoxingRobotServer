/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const MatchSchema = new Schema({
  robot_1: {
    type: Schema.type.ObjectId,
    ref: "Robot",
  },
  robot_2: {
    type: Schema.type.ObjectId,
    ref: "Robot",
  },
  turns: [{
    turn_number: String,
    turn_action_robot_1: String,
    turn_action_robot_2: String,
    turn_action_text: String,
    _id: false
  }]
});

const MatchModel = mongoose.model('match', MatchSchema);

export default MatchModel;