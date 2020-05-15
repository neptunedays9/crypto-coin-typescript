
import {CryptoBlock} from './CryptoBlock'

export class CryptoBlockChain {
    blockchain : CryptoBlock[];

    constructor() {
        this.blockchain = []
    }

    addNewBlock(block : CryptoBlock) {
        this.blockchain.push(block); 

    }

    checkChainValidity() {
        if(this.blockchain.length && this.blockchain[0].hash != this.blockchain[0].ComputeHash())
            return false;

        for(var i = 1; i < this.blockchain.length; i++) {
            if(this.blockchain[i].hash != this.blockchain[i-1].hash)
                return false;
        }
    }
}