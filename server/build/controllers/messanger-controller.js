"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChat = exports.fetchMessages = exports.fetchChats = void 0;
const chats_model_1 = __importDefault(require("../models/chats-model"));
const sequelize_1 = require("sequelize");
const users_model_1 = __importDefault(require("../models/users-model"));
const messages_model_1 = __importDefault(require("../models/messages-model"));
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const users_model_2 = __importDefault(require("../models/users-model"));
const server_socket_1 = __importDefault(require("../server-socket"));
// let members: string[] = []
// const userChats = await Chats.findAll({
//         where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.id')), '${req.user.id}')`),
// })
//     .then((data)=>{
//         data.map((chat)=>{
//                 const test:string[] = JSON.parse(chat.users).id.slice(1,-1).split(',')
//                 members = members.concat(test)
//         })
//         members = [...new Set(members)]
//         return data;
// })
// console.log(userChats)
// console.log(members)
// const AllChatMembers = await  User.findAll({where:{id:members}})
// ВСЮ ЭТУ ФУНКЦИЮ К ХРЕНАМ СНЕСТИ И ПЕРЕДЕЛАТЬ!!!!!!
const fetchChats = async (req, res) => {
    try {
        const arr = [];
        const userChats = await chats_model_1.default.findAll({
            where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(users, '${req.user.id}')`),
        })
            .then((data) => {
            data.map(el => {
                const members = JSON.parse(el.users);
                arr.push({ id: el.dataValues.id, name: el.dataValues.name, members, isGroup: el.dataValues.isGroup });
            });
        });
        // Переделать findAll
        let i = 0;
        for (i; i < arr.length; i++) {
            if (!arr[i].isGroup) {
                const otherId = arr[i].members.filter(el => el != req.user.id);
                await users_model_1.default.findOne({ where: { id: otherId } }).then(user => { arr[i].name = user === null || user === void 0 ? void 0 : user.dataValues.nickname; });
            }
        }
        res.status(200).json({ chats: arr, id: req.user.id });
    }
    catch (e) {
        console.log(e);
    }
};
exports.fetchChats = fetchChats;
const fetchMessages = async (req, res) => {
    try {
        const { id } = req.body;
        const messages = await messages_model_1.default.findAll({ where: { chatId: id } });
        res.status(200).json({ messages });
    }
    catch (err) {
        console.log(err);
    }
};
exports.fetchMessages = fetchMessages;
const createChat = async (req, res) => {
    try {
        const UID = req.user.id;
        const { id } = req.body;
        if (!id) {
            return Error_handler_1.default.handle(res, 404, "Пустой id пользователя", req.body, "Пользователь ненайден");
        }
        const user = await users_model_2.default.findOne({ where: { id } });
        if (!user) {
            return Error_handler_1.default.handle(res, 404, "Пользователь ненайден в бд", req.body, "Пользователь ненайден");
        }
        const existingChat = await chats_model_1.default.findOne({
            where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(users, '[${UID},${id}]') AND isGroup = false`),
        });
        if (existingChat) {
            return res.status(200).json({ id: existingChat.id, name: user.nickname });
        }
        const newChat = await chats_model_1.default.create({ users: [UID, id], isGroup: false });
        server_socket_1.default.emitNewChat(UID, { id: newChat.id, users: newChat.users, isGroup: newChat.isGroup, name: user.nickname });
        res.status(200).json({ id: newChat.id, name: user.nickname, members: newChat.members, isGroup: newChat.isGroup });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.createChat = createChat;
//# sourceMappingURL=messanger-controller.js.map