"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchChats = void 0;
const chats_model_1 = __importDefault(require("../models/chats-model"));
const sequelize_1 = require("sequelize");
const fetchChats = async (req, res) => {
    console.log(req.body);
    const userChats = await chats_model_1.default.findAll({
        where: sequelize_1.Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${req.user.id}')`),
        raw: true,
    });
    console.log(req.user.id);
    console.log(userChats);
    res.status(200).json({ test: "aaaa" });
};
exports.fetchChats = fetchChats;
//# sourceMappingURL=messanger-controller.js.map