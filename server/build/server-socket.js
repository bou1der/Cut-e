"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const socket_io_1 = __importDefault(require("socket.io"));
const config_json_1 = __importDefault(require("../config.json"));
const socket_events_1 = require("./socket/socket-events");
const socket = async (http) => {
    const io = new socket_io_1.default.Server(http, {
        cors: {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
            origin: config_json_1.default.server.cors.origin
        }
    });
    console.log(`[WebSocket]:${config_json_1.default.server.port}:Server has been started...`);
    const clients = [];
    (0, socket_events_1.Connections)(io, clients);
};
exports.socket = socket;
//# sourceMappingURL=server-socket.js.map