import express from 'express';

import TrainingModel from '../models/TrainingModel.js';
import TournamentModel from '../models/TournamentModel.js';

import TournamentManager from '../game_manager/TournamentManager.js';

const router = express.Router();

router.get('/battle-logs', async (request, response) => {
    const { email } = request.user;
    // Pull the battle logs for the user
});

router.post('/training', async (request, response) => {
    const { id } = request.user;
    const { botId } = request.body;

    let newTraining = new TrainingModel();
    newTraining.userId = request.user.id;
    newTraining.robotId = botId;
    newTraining.trainingEnd = new Date().getTime() + 86400000;
    newTraining.save(function (err) {
        if (err) {
            response.status(500).json({ message: err, status: 500 });
        } 
        else {
            response.status(200).json({ message: 'ok', status: 200 });
        };
    });
    // Check if user has a training bot. If so send the info to front end
});

router.post('/training-check', async (request, response) => {

});

router.post('/set-battle', async (request, response) => {
    const { email } = request.user;
    const { bot } = request.body;

    // Generate fake bots
    let bots = [
        bot, 
        { "id": 12322, "health": 1000, "ai": 20, "agility": 10, "strength": 10, "defense": 10},
        { "id": 12321, "health": 1000, "ai": 10, "agility": 20, "strength": 10, "defense": 10}, 
        { "id": 12323, "health": 1000, "ai": 10, "agility": 10, "strength": 20, "defense": 10}
    ]
    let newTournament = new TournamentModel();
    newTournament.robotId = bot.id;

    let tournament = new TournamentManager(bots);
    tournament.setUpMatches();
    tournament.runMatches();
    newTournament.matches = tournament.matches;
    newTournament.save(function (err) {
        if (err) {
            response.status(500).json({ message: err, status: 500 });
        } 
        else {
            response.status(200).json({ message: 'ok', status: 200, matches: newTournament.matches });
        };
    })
});


export default router;
