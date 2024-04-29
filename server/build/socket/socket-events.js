"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
const chats_model_1 = __importDefault(require("../models/chats-model"));
const sequelize_1 = require("sequelize");
const Connections = (io, clients) => {
    io.on('connection', (socket) => {
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id);
        clients.push(socket.id);
        socket.on('chats:rooms/join', async (id) => {
            const chats = await chats_model_1.default.findAll({
                where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${id}')`)
            });
            console.log(chats);
            if (!chats.length) {
                socket.emit('error', "Undefined chats");
                return;
            }
            chats.map(chat => {
                socket.join(`${chat.dataValues.id}`);
            });
        });
        socket.on('connection:close', () => {
            clients = clients.filter((el) => {
                return el !== socket.id;
            });
            console.log(clients);
            socket.disconnect();
        });
        socket.on('disconnect', () => {
            console.log("---------------Клиент отключился---------------");
            console.log(socket.id);
            clients = clients.filter(el => {
                return el !== socket.id;
            });
            console.log(clients);
        });
    });
};
exports.Connections = Connections;
//# sourceMappingURL=socket-events.js.map