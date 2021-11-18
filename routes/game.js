import express from 'express';

import * as gameData from '../game_data/robot.json';

const router = express.Router();

router.get('/inventory', async (request, response) => {
    const { email } = request.user;
    // process if wallet is connected here
    // load in NFTs if it is connected
    // check if NFTs are in databse and assigned to the user
    // update Database sent gameData to front end
    response.status(200).json({ inventory: gameData, status: 200 });
});

router.get('/shop', async (request, response) => {
    // Connect to wallet holding NFTs
    // Draw inventory in
});

router.get('/battle-logs', async (request, response) => {
    const { email } = request.user;
    // Pull the battle logs for the user
});

router.get('/training', async (request, response) => {
    const { email } = request.user;
    // Check if user has a training bot. If so send the info to front end
});

router.post('/buy', async (request, response) => {
    // connect to wallet
    // read the NFT purchase request
    // refresh inventory and send it down
});

router.post('/set-battle', async (request, response) => {
    // connect to wallet
    // lock in the bot for battle with parts
});


export default router;
