"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config_json_1 = __importDefault(require("../config.json"));
dotenv_1.default.config();
const server_socket_1 = __importDefault(require("./server-socket"));
const server_1 = __importDefault(require("./server"));
const http_1 = __importDefault(require("http"));
const mongo_connect_1 = __importDefault(require("./models/no-relation-database/mongo-connect"));
const server = http_1.default.createServer(server_1.default);
const port = config_json_1.default.server.port || 8000;
(0, mongo_connect_1.default)();
server_socket_1.default.InitSocketServer(server);
server.listen(port, () => {
    console.log(`[server]:${port} has been deployment... || ʕ ᵔᴥᵔ ʔ`);
});
//# sourceMappingURL=index.js.map