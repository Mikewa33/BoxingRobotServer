import Web3 from "web3";
import ContractKit from "@celo/contractkit"

import RobotContract from './../contracts/Robot.json';

export default class NFTWallet {
    constructor() {
        this.web3 = new Web3('https://alfajores-forno.celo-testnet.org')
        this.kit = ContractKit.newKitFromWeb3(this.web3);
        this.account = null;
        this.instance = null;
    }

    async initContract(){
        console.log("Starting connect")
        // Check the Celo network ID
        const networkId = await this.web3.eth.net.getId();
        const deployedNetwork = RobotContract.networks[networkId];
        // Create a new contract instance with the RobotContract contract info
        this.instance = new this.web3.eth.Contract(
          RobotContract.abi,
          deployedNetwork && deployedNetwork.address
        );
      
        this.account = await this.web3.eth.accounts.privateKeyToAccount(process.env.WALLET_ADDRESS);
    }

    async updateWinnerRecord(instance, account, robotID) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotWinRecord(robotID)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt()
        console.log(receipt);
    }
      
    async updateLoserRecord(instance, account, robotID) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotLossRecord(robotID)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt();
        console.log(receipt);
      }
      
    async updateRobotStrength(instance, account, robotID, value) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotStrength(robotID, value)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt()
        console.log(receipt)
      }
      
    async updateRobotAgility(instance, account, robotID, value) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotAgility(robotID, value)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt()
        console.log(receipt)
      }
      
    async updateRobotAi(instance, account, robotID, value) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotAi(robotID, value)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt()
        console.log(receipt)
      }
      
    async updateRobotDefense(instance, account, robotID, value) {
        this.kit.connection.addAccount(account.privateKey)
        let txObject = await instance.methods.updateRobotDefense(robotID, value)
        let tx = await this.kit.sendTransactionObject(txObject, { from: account.address })
        let receipt = await tx.waitReceipt()
        console.log(receipt)
      }
}