import { CryptoBlockChain } from "./CryptoBlockChain"
import { CryptoBlock } from "./CryptoBlock";

export function main() : string {

    console.log("main")
    let coins = new CryptoBlockChain();

    let block = new CryptoBlock('0', '', '');
    coins.addNewBlock(block);
    coins.addNewBlock(new CryptoBlock('1', '', block.hash));

    console.log(JSON.stringify(coins))

    return'"hello';
}

main();