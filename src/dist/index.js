"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoBlockChain_1 = require("./CryptoBlockChain");
var CryptoBlock_1 = require("./CryptoBlock");
function main() {
    console.log("main");
    var coins = new CryptoBlockChain_1.CryptoBlockChain();
    var block = new CryptoBlock_1.CryptoBlock('0', '', '');
    coins.addNewBlock(block);
    coins.addNewBlock(new CryptoBlock_1.CryptoBlock('1', '', block.hash));
    console.log(JSON.stringify(coins));
    return '"hello';
}
exports.main = main;
main();
//# sourceMappingURL=index.js.map