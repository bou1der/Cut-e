"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import config from '../config.json'
const server_1 = __importDefault(require("./server"));
const config_json_1 = __importDefault(require("../config.json"));
const http_1 = __importDefault(require("http"));
// import dotenv from "dotenv"
// dotenv.config()
const server = http_1.default.createServer(server_1.default);
const port = config_json_1.default.server.port || 8000;
server.listen(port, () => {
    console.log(`[server]:${port} has been deployment... || ʕ ᵔᴥᵔ ʔ`);
});
//# sourceMappingURL=index.js.map