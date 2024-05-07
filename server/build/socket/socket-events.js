"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connections = void 0;
const chats_model_1 = __importDefault(require("../models/chats-model"));
const messages_model_1 = __importDefault(require("../models/messages-model"));
const sequelize_1 = require("sequelize");
const Connections = (io, clients) => {
    io.on('connection', (socket) => {
        io.use((socket, next) => {
            const uid = socket.handshake.auth.uid;
            if (clients.has(uid)) {
                const prev = clients.get(uid);
                if (prev) {
                    prev.disconnect(true);
                }
                clients.set(uid, socket);
                console.log(clients.size);
                next();
            }
            clients.set(uid, socket);
        });
        socket.on('chats:rooms/join', async (id) => {
            const chats = await chats_model_1.default.findAll({
                where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(users, '${socket.handshake.auth.uid}')`),
            });
            chats.map(chat => {
                socket.join(`${chat.dataValues.id}`);
            });
        });
        socket.on('chats:new/room/join', async (chat) => {
            const newChat = await chats_model_1.default.findOne({ where: { id: chat.id } });
            if (!newChat) {
                //     emit err
                return;
            }
            JSON.parse(newChat.users).map((member) => {
                const sock = clients.get(member);
                sock === null || sock === void 0 ? void 0 : sock.join(`${newChat.id}`);
            });
        });
        socket.on('chats:send/message', async (sendmessage) => {
            try {
                const result = await messages_model_1.default.create({ chatId: sendmessage.chat.id, text: sendmessage.message.text, from: sendmessage.message.from });
                io.to(`${sendmessage.chat.id}`).emit('chats:get/message', { chat: sendmessage.chat, message: result.dataValues });
            }
            catch (e) {
                // socket.emit('message',{chatid:message.chatid,text:message.text,from:message.from,error:true})
                // socket.emit('error', e)
            }
        });
        socket.on('connection:close', () => {
            socket.disconnect();
        });
        socket.on('disconnect', () => {
            console.log("---------------Клиент отключился---------------");
            clients.delete(socket.handshake.auth.uid);
            console.log(clients.size);
        });
    });
};
exports.Connections = Connections;
//# sourceMappingURL=socket-events.js.map