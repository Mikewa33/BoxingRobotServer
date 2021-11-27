# Boxing Robots
This is the serverside to the NFT Robot Boxing Game where user's can mint unique robots and accessories to battle other robots in a match of strenght, agility, speed and smarts. The client side (https://github.com/Mikewa33/BoxingRobotClient) is built with Phaser 3 a js library for games. The server side is node. The games are played through a set of smart contracts (https://github.com/seandevs/robot_contract) on the CELO network where transactions occur through CELO (https://celo.org/).

## Running Locally
In the root of the directoy, create a `.env` file with the following information substituted with the wallet private key that deployed the smart contracts.
```
EMAIL=test@gmail.com
PASSWORD=test
EMAIL_PROVIDER=gmail
JWT_SECRET=123445
JWT_REFRESH_SECRET=12345566
MONGO_CONNECTION_URL=mongodb://localhost:27017/boxingrobot
MONGO_USER_NAME=root
MONGO_PASSWORD=example
PORT=8080
CORS_ORIGIN=*
WALLET_ADDRESS={wallet private key}
```

```
$ docker-compose up
$ npm run nodemon
# localhost:8080
```

