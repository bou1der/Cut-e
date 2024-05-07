"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const config_json_1 = __importDefault(require("../config.json"));
const chats_model_1 = __importDefault(require("./models/chats-model"));
const sequelize_1 = require("sequelize");
const messages_model_1 = __importDefault(require("./models/messages-model"));
class SocketIO {
    constructor() {
        this._clients = new Map();
    }
    InitSocketServer(http) {
        this._io = new socket_io_1.default.Server(http, {
            cors: {
                allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
                origin: config_json_1.default.server.cors.origin
            }
        });
        console.log(`[WebSocket]:${config_json_1.default.server.port}:Server has been started...`);
        this._onConnections();
    }
    _onConnections() {
        this._io.on('connection', async (socket) => {
            // Использование middleware должно быть вне обработчика 'connection'
            this._io.use((socket, next) => {
                const uid = socket.handshake.auth.uid;
                if (uid) {
                    next();
                }
                else {
                    next(new Error("Authentication error"));
                }
            });
            const uid = socket.handshake.auth.uid;
            if (this._clients.has(uid)) {
                const prev = this._clients.get(uid);
                if (prev) {
                    prev.disconnect(true);
                }
            }
            this._clients.set(uid, socket);
            console.log(`Current number of connected clients: ${this._clients.size}`);
            this._SocketConnectAllRooms(uid);
            socket.on('chat:send/message', async (message) => {
                const write = await messages_model_1.default.create({ chatId: message.chat.id, text: message.message.text, from: message.message.from });
                this._io.to(`${message.chat.id}`).emit('chat:get/message', { chat: message.chat, message: write.dataValues });
            });
        });
    }
    async _SocketConnectAllRooms(UID) {
        const socket = this._clients.get(UID);
        if (socket) {
            const chats = await chats_model_1.default.findAll({
                where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(users, '${UID}')`)
            });
            chats.forEach(chat => {
                socket.join(`${chat.id}`);
            });
        }
    }
    emitNewChat(UID, chat) {
        chat.users.map((user) => {
            const socket = this._clients.get(user);
            socket === null || socket === void 0 ? void 0 : socket.join(`${chat.id}`);
            socket === null || socket === void 0 ? void 0 : socket.emit(`chat:new/room/join`, chat);
        });
    }
}
exports.default = new SocketIO();
//# sourceMappingURL=server-socket.js.map