/* eslint-disable func-names */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TournamentSchema = new Schema({
    robotId: {
        type: Number,
        required: true,
      },
    matches: [{
      robotOne: {
        id: Number,
        health: Number,
        ai: Number,
        agility: Number,
        strength: Number,
        defense: Number
      },
      robotTwo: {
        id: Number,
        health: Number,
        ai: Number,
        agility: Number,
        strength: Number,
        defense: Number
      },
      winner: {
        id: Number,
        health: Number,
        ai: Number,
        agility: Number,
        strength: Number,
        defense: Number
      },
      turns: [String]
    }]
});

const TournamentModel = mongoose.model('tournament', TournamentSchema);

export default TournamentModel;