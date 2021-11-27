import MatchManager from './MatchManager.js';

export default class TournamentManager {
    constructor(robots) {
        this.robots = robots;
        this.matches = [];
    }

    setUpMatches() {
        this.robots.forEach(robotOne => {
            this.robots.forEach(robotTwo => {
                if(robotOne.id != robotTwo.id) {
                    if((this.matches.filter(match => match.name == `${robotTwo.id} vs ${robotOne.id}`).length == 0)) {
                        this.matches.push({"name": `${robotOne.id} vs ${robotTwo.id}`, "robotOne": robotOne, "robotTwo": robotTwo, "winner": null, "turns": []})
                    }
                }
            })
        })
    }

    runMatches() {
        this.matches.forEach(match => {
            match.robotOne.health = 1000;
            match.robotTwo.health = 1000;
            let newMatch = new MatchManager(match.robotOne, match.robotTwo);
            newMatch.startMatch();
            match.turns = newMatch.turns;
            match.winner = newMatch.winner;
        });
       
    };

}