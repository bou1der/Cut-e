"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
const sequelize_1 = require("sequelize");
class Chats extends sequelize_1.Model {
}
Chats.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        get() {
            const test = this.getDataValue('name');
            console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
        },
        set(val) {
            console.log(val);
        }
    },
    users: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true
    },
    isGroup: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "chats",
    modelName: "chats"
});
exports.default = Chats;
//# sourceMappingURL=chats-model.js.map