import crypto from 'crypto-js'

export class CryptoBlock {
    index : string;
    hash : string;
    previousHash : string;
    payload : string;

    constructor(index : string, payload : string, previousHash : string ="") {
        this.index = index;
        this.hash = this.ComputeHash();
        this.payload = payload;
        this.previousHash = previousHash;
    }

    ComputeHash() : string {
        return crypto.SHA256(this.index + this.previousHash + Date.now() + this.payload, 
        '', []).toString();
    }
    
}