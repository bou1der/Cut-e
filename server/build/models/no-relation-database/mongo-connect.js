"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = async () => {
    await mongoose_1.default.connect(process.env.MONGO_DB_CONNECT);
    mongoose_1.default.Promise = global.Promise;
    const db = mongoose_1.default.connection;
    db.on('error', (err) => {
        console.log(err);
    });
    db.once('open', () => {
        console.log("[MongoDB]:has been connected...");
    });
};
exports.default = connect;
//# sourceMappingURL=mongo-connect.js.map