/* eslint-disable func-names */
import mongoose from 'mongoose';
import RobotSchema from './RobotModel.js'
import MatcheSchema from './MatcheSchema.js'

const { Schema } = mongoose;

const TournamentSchema = new Schema({
  robots: {
    type: [RobotSchema],
  },
  matches: {
    type: [MatcheSchema],
    required: true,
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

const TournamentModel = mongoose.model('tournament', TournamentSchema);

export default TournamentModel;