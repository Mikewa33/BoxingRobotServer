import jwt from 'jsonwebtoken';

export default class GameManager {
  constructor(io) {
    this.io = io;
    this.players = {};
  }

  setup() {
    this.setupEventListeners();
  }


  setupEventListeners() {
    this.io.on('connection', (socket) => {
      // player disconnected
      socket.on('disconnect', () => {
        // delete user data from server
        delete this.players[socket.id];

        // emit a message to all players to remove this player
        this.io.emit('disconnect', socket.id);
      });

      socket.on('newPlayer', (token) => {
        try {
          // validate token, if valid send game information, else reject login
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
          console.log(error.message);
          socket.emit('invalidToken');
        }
      });
    });
  }
}
