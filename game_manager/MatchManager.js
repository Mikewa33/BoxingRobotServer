export default class MatchManager {
    constructor(leftCorner, rightCorner) {
        if(leftCorner.agility >= rightCorner.agility) {
            this.firstBot = leftCorner;
            this.secondBot = rightCorner;
        }
        else {
            this.firstBot = rightCorner;
            this.secondBot = leftCorner;
        }
        this.turns = [];
        this.winner = null;
    }

    startMatch() {
        let i = 0;
        while(this.firstBot.health > 0 && this.secondBot.health > 0) {
            this.botAttack(i, this.firstBot, this.secondBot);
            if(this.secondBot.health > 0) {
                this.botAttack(i, this.secondBot, this.firstBot);
            }
            i = i+1;
        }
        if(this.firstBot.health == 0){
            this.winner = this.secondBot;
        }
        else {
            this.winner = this.firstBot;
        }
    }

    botAttack(turn, attackingBot, defendingBot) {
        let botAttack = parseInt(attackingBot.strength) + Math.floor(Math.random() * 50);
        let defendingBotDefense = parseInt(defendingBot.defense) + Math.floor(Math.random() * 40);
        let defendingBotDeflect = parseInt(defendingBot.ai) + Math.floor(Math.random() * 40);

        if(botAttack >= defendingBotDeflect && botAttack > defendingBotDefense) {
            let damage = botAttack - defendingBotDefense
            this.turns.push(`Turn ${turn + 1}: ${attackingBot.id} hits ${defendingBot.id} for ${damage}`)
            defendingBot.health = defendingBot.health - damage
        } else if(botAttack < defendingBotDeflect){
            this.turns.push(`Turn ${turn + 1}: ${defendingBot.id} dodges ${attackingBot.id} attack`)
        } else {
            this.turns.push(`Turn ${turn + 1}: ${defendingBot.id} blocks ${attackingBot.id} attack`)
        }
    }

}