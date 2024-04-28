"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class Messages extends sequelize_1.Model {
}
Messages.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    chatId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    timeStamp: {
        type: sequelize_1.DataTypes.TIME,
        defaultValue: sequelize_2.default.NOW,
        allowNull: false
    },
    from: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "messages",
    modelName: "messages"
});
exports.default = Messages;
//# sourceMappingURL=messages-model.js.map