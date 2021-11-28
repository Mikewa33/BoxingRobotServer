import express from 'express';

import TrainingModel from '../models/TrainingModel.js';
import TournamentModel from '../models/TournamentModel.js';

import TournamentManager from '../game_manager/TournamentManager.js';

import NFTWallet from '../game_manager/NFTWallet.js';

const router = express.Router();

router.get('/battle-logs', async (request, response) => {
    const { email } = request.user;
    // Pull the battle logs for the user
});

router.post('/training', async (request, response) => {
    const { _id } = request.user;
    const { botId } = request.body;

    let newTraining = new TrainingModel();
    console.log(newTraining)
    let nftWallet = new NFTWallet();
    await nftWallet.initContract();
    console.log("WALLET CONNECTION");
    console.log(request)
    newTraining.userId = _id;
    newTraining.robotId = botId;
    newTraining.trainingEnd = new Date().getTime();
    console.log("UGH")
    console.log(newTraining)
    newTraining.save(function (err) {
        if (err) {
            console.log(err)
            response.status(500).json({ message: err, status: 500 });
        } 
        else {
            nftWallet.updateRobotStrength(nftWallet.instance, nftWallet.account, botId, 5);
            nftWallet.updateRobotAgility(nftWallet.instance, nftWallet.account, botId, 5);
            nftWallet.updateRobotAi(nftWallet.instance, nftWallet.account, botId, 5);
            nftWallet.updateRobotDefense(nftWallet.instance, nftWallet.account, botId, 5);
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
        { "id": 12322, "health": 300, "ai": 20, "agility": 10, "strength": 10, "defense": 10},
        { "id": 12321, "health": 300, "ai": 10, "agility": 20, "strength": 10, "defense": 10}, 
        { "id": 12323, "health": 300, "ai": 10, "agility": 10, "strength": 20, "defense": 10}
    ]
    let newTournament = new TournamentModel();
    newTournament.robotId = bot.id;

    let tournament = new TournamentManager(bots, bot);
    await tournament.setUpMatches();
    newTournament.matches = tournament.matches;
    newTournament.save(function (err) {
        if (err) {
            response.status(500).json({ message: err, status: 500 });
        } 
        else {
            console.log("RETURNING")
            response.status(200).json({ message: 'ok', status: 200, matches: newTournament.matches });
        };
    })
});


export default router;
