import NFTWallet from './NFTWallet.js';

import MatchManager from './MatchManager.js';

export default class TournamentManager {
    constructor(robots, userRobot) {
        this.robots = robots;
        this.matches = [];
        this.instance = null;
        this.account = null;
        this.userRobot = userRobot;
        this.nftWallet = null;
    }

    async setUpMatches() {
        this.nftWallet = new NFTWallet();
        await this.nftWallet.initContract();
        this.robots.forEach(robotOne => {
            this.robots.forEach(robotTwo => {
                if(robotOne.id != robotTwo.id) {
                    if((this.matches.filter(match => match.name == `${robotTwo.id} vs ${robotOne.id}`).length == 0)) {
                        this.matches.push({"name": `${robotOne.id} vs ${robotTwo.id}`, "robotOne": robotOne, "robotTwo": robotTwo, "winner": null, "turns": []})
                    }
                }
            })
        });
        await this.runMatches();
    }

    async runMatches() {
        let matchData = []
        this.matches.forEach(match => {
            match.robotOne.health = 300;
            match.robotTwo.health = 300;
            let newMatch = new MatchManager(match.robotOne, match.robotTwo);
            newMatch.startMatch();
            match.turns = newMatch.turns;
            match.winner = newMatch.winner;
            matchData.push(match);
            if (match.robotOne.id == this.userRobot.id || match.robotTwo.id == this.userRobot.id) {
                if (match.winner.id == this.userRobot.id) {
                    this.nftWallet.updateWinnerRecord(this.nftWallet.instance, this.nftWallet.account, this.userRobot.id);
                } else {
                    this.nftWallet.updateLoserRecord(this.nftWallet.instance, this.nftWallet.account, this.userRobot.id);
                }
            }
        });
        this.matches = matchData;
    };

}