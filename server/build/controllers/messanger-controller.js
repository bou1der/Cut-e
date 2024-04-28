"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMessages = exports.fetchChats = void 0;
const chats_model_1 = __importDefault(require("../models/chats-model"));
const sequelize_1 = require("sequelize");
const users_model_1 = __importDefault(require("../models/users-model"));
const messages_model_1 = __importDefault(require("../models/messages-model"));
// ВСЮ ЭТУ ФУНКЦИЮ К ХРЕНАМ СНЕСТИ И ПЕРЕДЕЛАТЬ!!!!!!
const fetchChats = async (req, res) => {
    try {
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
        const arr = [];
        const userChats = await chats_model_1.default.findAll({
            where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.id')), '${req.user.id}')`),
        })
            .then((data) => {
            data.map(el => {
                const members = JSON.parse(el.users).id.slice(1, -1).split(",");
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
//# sourceMappingURL=messanger-controller.js.map