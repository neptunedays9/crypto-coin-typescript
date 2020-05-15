"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __importDefault(require("crypto-js"));
var CryptoBlock = /** @class */ (function () {
    function CryptoBlock(index, payload, previousHash) {
        if (previousHash === void 0) { previousHash = ""; }
        this.index = index;
        this.hash = this.ComputeHash();
        this.payload = payload;
        this.previousHash = previousHash;
    }
    CryptoBlock.prototype.ComputeHash = function () {
        return crypto_js_1.default.SHA256(this.index + this.previousHash + Date.now() + this.payload, '', []).toString();
    };
    return CryptoBlock;
}());
exports.CryptoBlock = CryptoBlock;
//# sourceMappingURL=CryptoBlock.js.map