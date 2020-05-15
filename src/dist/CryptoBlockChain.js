"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoBlockChain = /** @class */ (function () {
    function CryptoBlockChain() {
        this.blockchain = [];
    }
    CryptoBlockChain.prototype.addNewBlock = function (block) {
        this.blockchain.push(block);
    };
    CryptoBlockChain.prototype.checkChainValidity = function () {
        if (this.blockchain.length && this.blockchain[0].hash != this.blockchain[0].ComputeHash())
            return false;
        for (var i = 1; i < this.blockchain.length; i++) {
            if (this.blockchain[i].hash != this.blockchain[i - 1].hash)
                return false;
        }
    };
    return CryptoBlockChain;
}());
exports.CryptoBlockChain = CryptoBlockChain;
//# sourceMappingURL=CryptoBlockChain.js.map